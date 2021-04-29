import { iNode } from "./iNode"
import { copy_buffer, str2ab, arrayBuffer2uint16Array } from "./utils"

export function write_iNode(buffer: ArrayBuffer, byteOffset: number, node: iNode) {
  let offset = byteOffset

  new DataView(buffer, offset, 1).setUint8(0, node.nameLength)
  offset += 1

  copy_buffer(str2ab(node.name), new DataView(buffer, offset, node.nameLength))
  offset += node.nameLength

  new DataView(buffer, offset, 1).setUint8(0, node.nodeType)
  offset += 1

  new DataView(buffer, offset, 1).setUint8(0, node.contentSize)
  offset += 1

  new DataView(buffer, offset, 2).setUint16(0, node.childrensLength)
  offset += 2

  copy_buffer(node.childrens.buffer, new DataView(buffer, offset, node.childrensLength * 2))
  offset += node.childrensLength * 2

  return buffer
}

export function read_iNode(buffer: ArrayBuffer, byteOffset: number): iNode {
  let offset = byteOffset

  const nameLength = new DataView(buffer, offset, 1).getUint8(0)
  offset += 1

  const nameBuffer = buffer.slice(offset, offset + nameLength)
  const name = String.fromCharCode.apply(null, arrayBuffer2uint16Array(nameBuffer))
  offset += nameLength

  const nodeType = new DataView(buffer, offset, 1).getUint8(0)
  offset += 1

  const contentSize = new DataView(buffer, offset, 1).getUint8(0)
  offset += 1

  const childrensLength = new DataView(buffer, offset, 2).getUint16(0)
  offset += 2

  const childrens = new Uint16Array(buffer.slice(offset, offset + (childrensLength * 2)))

  return {
    nameLength,
    name,
    nodeType,
    contentSize,
    childrensLength,
    childrens: childrens
  }
}

export function findFreeBlock(hdd: ArrayBuffer, blockSize: number) {
  let notFree = true
  let currentBlock = 1

  const maxBlock = hdd.byteLength / blockSize
  while (notFree && currentBlock < maxBlock) {
    const blockView = new DataView(hdd, currentBlock * blockSize, 1)
    if (blockView.getUint8(0) === 0) return currentBlock
    currentBlock += 1
  }
}
