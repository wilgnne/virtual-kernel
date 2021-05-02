import { dirname, basename, resolve } from 'path'
//import { writeFileSync } from 'fs'

import create_node, { nodeType } from "./iNode";
import { read_file, write_file } from "./file";
import { findFreeBlock, read_iNode, write_iNode } from "./disk";
import { copy_buffer, printArrayBuffer } from "./utils";
import { fsNode, get_node, iNodeSizeFromFsNode } from "./fsTree";

const block_size = 400
const blocks = 32 * 128

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
      childrens: []
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

  private writeFS() {
    this.writeFsNode(this.fileTree);
    this.readFS();
    this.callbaks.forEach(callbak => callbak(this));
  }

  private readFsNode(offset = 0): fsNode {
    const root = read_iNode(this.hdd, offset)

    const rootFS: fsNode = {
      iNode: root,
      childrens: []
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

    if (parentNode === undefined) return [false, `mkdir: ${dirname(path)}: No such file or directory`]

    const name = basename(path)
    const new_dir: fsNode = {
      iNode: create_node(name, nodeType.folder),
      childrens: []
    }

    parentNode.childrens.push(new_dir)
    this.writeFS()
    return [true, '']
  }

  ls(path: string, wd: string): [boolean, string] {
    const filesPerLine = 4
    const wd_node = get_node(wd, this.fileTree)
    const parentNode = get_node(basename(path), wd_node)

    if (parentNode === undefined) return [false, `ls: ${basename(path)}: No such file or directory`]

    let paths = ''
    parentNode.childrens.forEach((children, index) => {
      paths += `${children.iNode.name}${children.iNode.nodeType === nodeType.folder ? '/' : ''}`
      paths += `${index % filesPerLine === filesPerLine - 1 ? '\n' : '\t'}`
    })

    return [true, paths]
  }

  touch(path: string, wd: string): [boolean, string] {
    const wd_node = get_node(wd, this.fileTree)
    const parentNode = get_node(dirname(path), wd_node)

    if (parentNode === undefined) return [false, `touch: ${dirname(path)}: No such file or directory`]

    const block = findFreeBlock(this.hdd, this.block_size)
    if (block === undefined) return [false, `touch: ${path}: No block free`]
    new DataView(this.hdd, block * this.block_size, 1).setUint8(0, 1)


    const name = basename(path)
    const new_file: fsNode = {
      iNode: create_node(name, nodeType.file, new Uint16Array([block])),
      childrens: [undefined]
    }

    parentNode.childrens.push(new_file)

    this.writeFS()
    return [true, '']
  }

  echo(path: string, wd: string, content: string): [boolean, string] {
    const wd_node = get_node(wd, this.fileTree)
    const node = get_node(basename(path), wd_node)

    if (node === undefined) return [false, `echo: ${path}: No such file or directory`]

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
    const wd_node = get_node(wd, this.fileTree)
    const node = get_node(basename(path), wd_node)

    if (node === undefined) return [false, `cat: ${path}: No such file or directory`]

    return [true, read_file(this.hdd, node.iNode, this.block_size)]
  }

  cd(path: string, wd: string): [boolean, string] {
    const newWd = resolve(wd, path)
    const node = get_node(newWd, this.fileTree)

    if (node === undefined) return [false, `cd: ${newWd}: No such file or directory`]

    return [true, newWd]
  }

  private blocksInUse(blocks: number[], node: fsNode): number[] {
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

    return node.childrens.reduce((prev, curr) => this.blocksInUse(prev, curr), blocks)
  }

  diskUsed(): number[] {
    return this.blocksInUse(new Array(this.blocks).fill(0), this.fileTree)
  }

  //dump(path: string) {
  //  writeFileSync(path, Buffer.from(this.hdd))
  //}
}

//const fs = new FileSystem(block_size, blocks)

//fs.mkdir('root', '/')
//fs.mkdir('images', '/root')

//fs.touch('boot.txt', '/')
//fs.touch('init.bin', '/')

//fs.echo('boot.txt', '/', ``)
//fs.echo('init.bin', '/', 'wilgnne')



//fs.ls('.', '/')
//console.log(fs.cat('boot.txt', '/'));
//console.log(fs.cat('init.bin', '/'));

//console.log(fs.cd('../download', '/root/imagess'))

//console.log(fs.diskUsed());


//fs.show()
//fs.dump('fs.bin')

//export { fs }
export default FileSystem
