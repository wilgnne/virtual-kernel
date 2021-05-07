import { dirname, basename, resolve } from 'path'

import create_node, { get_inode_size, nodeType } from './iNode'
import { read_file, write_file } from './file'
import { findFreeBlock, freeBlock, read_iNode, write_iNode } from './disk'
import { copy_buffer, printArrayBuffer } from './utils'
import { fsNode, get_node, iNodeSizeFromFsNode } from './fsTree'

export type FSCallback = (fileSystemkernel: FileSystem) => void

class FileSystem {
  block_size: number
  blocks: number

  fileTree: fsNode

  hdd: ArrayBuffer

  callbaks: FSCallback[]

  constructor(block_size: number, blocks: number, callbaks: FSCallback[]) {
    this.callbaks = callbaks
    this.block_size = block_size
    this.blocks = blocks

    this.hdd = new ArrayBuffer(this.block_size * this.blocks)

    this.fileTree = {
      iNode: create_node('/', nodeType.folder),
      childrens: [],
    }

    this.writeFS()
  }

  show() {
    console.log('FileSystem:')
    printArrayBuffer(this.hdd, this.block_size)
    return 0
  }

  private writeFsNode(node: fsNode, offset = 0) {
    const initial_offset = offset
    if (node) {
      offset += iNodeSizeFromFsNode(node)

      if (node.iNode.nodeType === nodeType.folder) {
        const newiNodeChildrens = new Uint16Array(node.childrens.length)

        node.childrens.forEach((children, i) => {
          newiNodeChildrens[i] = offset
          offset = this.writeFsNode(children, offset)
        })

        node.iNode.childrensLength = newiNodeChildrens.length
        node.iNode.childrens = newiNodeChildrens
      }

      write_iNode(this.hdd, initial_offset, node.iNode)
    }

    return offset
  }

  writeFS() {
    this.writeFsNode(this.fileTree)
    this.readFS()
    this.callbaks.forEach((callbak) => callbak(this))
  }

  private readFsNode(offset = 0): fsNode {
    const root = read_iNode(this.hdd, offset)

    const rootFS: fsNode = {
      iNode: root,
      childrens: [],
    }

    if (root.nodeType === nodeType.folder) {
      for (let i = 0, len = root.childrensLength; i < len; i++) {
        const element = this.readFsNode(root.childrens[i])
        rootFS.childrens.push(element)
      }
    }

    return rootFS
  }

  private readFS() {
    this.fileTree = this.readFsNode()
  }

  mkdir(path: string, wd: string): [boolean, string] {
    const wd_node = get_node(wd, this.fileTree)
    const parentNode = get_node(dirname(path), wd_node)

    if (parentNode === undefined)
      return [false, `mkdir: ${dirname(path)}: No such file or directory`]

    const name = basename(path)
    const new_dir: fsNode = {
      iNode: create_node(name, nodeType.folder),
      childrens: [],
    }

    parentNode.childrens.push(new_dir)
    this.writeFS()
    return [true, '']
  }

  ls(path: string, wd: string): [boolean, string] {
    const filesPerLine = 4

    const fullPath = resolve(wd, path)
    const node = get_node(fullPath, this.fileTree)

    if (node === undefined) return [false, `ls: ${fullPath}: No such directory`]

    let paths = ''
    node.childrens.forEach((children, index) => {
      paths += `${children.iNode.name}${
        children.iNode.nodeType === nodeType.folder ? '/' : ''
      }`
      paths += `${index % filesPerLine === filesPerLine - 1 ? '\n' : '\t'}`
    })

    return [true, paths]
  }

  touch(path: string, wd: string): [boolean, string] {
    const fullPath = resolve(wd, path)
    const parentNode = get_node(dirname(fullPath), this.fileTree)

    if (parentNode === undefined)
      return [false, `touch: ${dirname(fullPath)}: No such directory`]

    const block = findFreeBlock(this.hdd, this.block_size)
    if (block === undefined) return [false, `touch: ${fullPath}: No block free`]
    new DataView(this.hdd, block * this.block_size, 1).setUint8(0, 1)

    const name = basename(path)
    const new_file: fsNode = {
      iNode: create_node(name, nodeType.file, new Uint16Array([block])),
      childrens: [undefined],
    }

    parentNode.childrens.push(new_file)

    this.writeFS()
    return [true, '']
  }

  echo(path: string, wd: string, content: string): [boolean, string] {
    const fullPath = resolve(wd, path)
    const node = get_node(fullPath, this.fileTree)

    if (node === undefined)
      return [false, `echo: ${fullPath}: No such file or directory`]

    const blocks_required = Math.ceil(content.length / this.block_size)
    const newChildrens = new Uint16Array(blocks_required)
    copy_buffer(node.iNode.childrens.buffer, newChildrens.buffer)

    while (blocks_required > node.iNode.childrensLength) {
      const block = findFreeBlock(this.hdd, this.block_size)
      if (block === undefined) return [false, `echo: ${path}: No block free`]
      new DataView(this.hdd, block * this.block_size, 1).setUint8(0, 1)

      newChildrens[node.iNode.childrensLength] = block
      node.iNode.childrensLength += 1
    }

    node.iNode.childrens = newChildrens
    write_file(this.hdd, node.iNode, content, this.block_size)
    this.writeFS()

    return [true, '']
  }

  cat(path: string, wd: string): [boolean, string] {
    const fullPath = resolve(wd, path)
    const node = get_node(fullPath, this.fileTree)

    if (node === undefined)
      return [false, `cat: ${fullPath}: No such file or directory`]

    return [true, read_file(this.hdd, node.iNode, this.block_size)]
  }

  cd(path: string, wd: string): [boolean, string] {
    const newWd = resolve(wd, path)
    const node = get_node(newWd, this.fileTree)

    if (node === undefined) return [false, `cd: ${newWd}: No such directory`]

    return [true, newWd]
  }

  rm(path: string, wd: string): [boolean, string] {
    const fullPath = resolve(wd, path)
    const node = get_node(fullPath, this.fileTree)
    const parentNode = get_node(resolve(wd, path, '..'), this.fileTree)

    if (
      node === undefined ||
      parentNode === undefined ||
      node.iNode.nodeType === nodeType.folder
    )
      return [false, `rm: ${path}: No such file or directory`]

    const index = parentNode.childrens.indexOf(node)
    parentNode.childrens.splice(index, 1)

    node.iNode.childrens.forEach((children) =>
      freeBlock(this.hdd, children, this.block_size),
    )

    this.writeFS()
    return [true, '']
  }

  rmdir(path: string, wd: string): [boolean, string] {
    const node = get_node(resolve(wd, path), this.fileTree)
    const parentNode = get_node(resolve(wd, path, '..'), this.fileTree)

    if (
      node === undefined ||
      parentNode === undefined ||
      node.iNode.nodeType === nodeType.file
    )
      return [false, `rmdir: ${path}: No such file or directory`]

    if (node.childrens.length > 0)
      return [false, `rmdir: ${path}: Directory not empty`]

    const index = parentNode.childrens.indexOf(node)
    parentNode.childrens.splice(index, 1)

    this.writeFS()
    return [true, '']
  }

  cp(from: string, to: string, wd: string): [boolean, string] {
    const nodeFrom = get_node(resolve(wd, from), this.fileTree)

    if (nodeFrom === undefined) return [false, `cp: ${from}: No such file`]

    if (nodeFrom.iNode.nodeType === nodeType.folder)
      return [false, `cp: ${from}: No copy directory`]

    const [catStatusCode, catContent] = this.cat(from, wd)
    if (!catStatusCode) return [catStatusCode, catContent]

    const [touchStatusCode, touchOut] = this.touch(to, wd)
    if (!touchStatusCode) return [touchStatusCode, touchOut]

    const [echoStatusCode, echoOut] = this.echo(to, wd, catContent)
    if (!echoStatusCode) return [echoStatusCode, echoOut]

    this.writeFS()
    return [true, '']
  }

  mv(from: string, to: string, wd: string): [boolean, string] {
    const nodeFrom = get_node(resolve(wd, from), this.fileTree)

    if (nodeFrom === undefined)
      return [false, `mv: ${from}: No such file or directory`]

    const fromDirname = dirname(resolve(wd, from))
    const nodeFromDir = get_node(fromDirname, this.fileTree)
    const indexFrom = nodeFromDir.childrens.indexOf(nodeFrom)

    nodeFromDir.childrens.splice(indexFrom, 1)

    const toDirname = dirname(resolve(wd, to))
    const nodeToDir = get_node(toDirname, this.fileTree)

    nodeToDir.childrens.push(nodeFrom)

    nodeFrom.iNode.name = basename(to)
    nodeFrom.iNode.nameLength = nodeFrom.iNode.name.length

    this.writeFS()
    return [true, '']
  }

  private blocksInUse(blocks: number[], node: fsNode): number[] {
    const nodeSize = get_inode_size(node.iNode) / this.block_size
    blocks[0] += nodeSize
    if (node.iNode.nodeType === nodeType.file) {
      let used = node.iNode.contentSize / this.block_size
      let index = 0
      while (used > 1) {
        blocks[node.iNode.childrens[index]] = 1
        used -= 1
        index += 1
      }
      blocks[node.iNode.childrens[index]] = used

      return blocks
    }

    return node.childrens.reduce(
      (prev, curr) => this.blocksInUse(prev, curr),
      blocks,
    )
  }

  diskUsed(): number[] {
    const disk = new Array(this.blocks).fill(0)
    return this.blocksInUse(disk, this.fileTree)
  }

  blocksUsed(): number {
    let useds = 1
    for (let i = 1; i < this.blocks; i++) {
      const blockView = new DataView(this.hdd, i * this.block_size, 1)
      if (blockView.getUint8(0) === 1) useds += 1
    }

    return useds
  }

  loadHddBuffer(hdd: ArrayBuffer) {
    this.hdd = hdd
    this.readFS()
    this.writeFS()
  }
}

export default FileSystem
