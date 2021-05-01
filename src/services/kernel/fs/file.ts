import { iNode, nodeType } from "./iNode";
import { arrayBuffer2uint16Array, copy_buffer, str2ab } from "./utils";

export function read_file(buffer: ArrayBuffer, fileNode: iNode, blockSize = 100): string {
  if (fileNode.nodeType !== nodeType.file) return undefined

  const contentBuffer = new ArrayBuffer(fileNode.contentSize)

  for (let i = 0, len = fileNode.childrensLength; i < len; i++) {
    const offsetContent = (i * blockSize) - i
    const offset = (fileNode.childrens[i] * blockSize) + 1

    const offsetContentBuffer = contentBuffer.slice(offsetContent)
    const offsetBuffer = buffer.slice(offset, offset + blockSize -1)
    copy_buffer(offsetBuffer, new DataView(contentBuffer, offsetContent))
    //copy_buffer(offsetBuffer, offsetContentBuffer)
  }
  //const offset = (fileNode.childrens[0] * blockSize) + 1

  //const contentBuffer = buffer.slice(offset, offset + fileNode.contentSize)

  const content = String.fromCharCode.apply(null, arrayBuffer2uint16Array(contentBuffer))

  return content
}

export function write_file(buffer: ArrayBuffer, fileNode: iNode, content: string, blockSize = 100) {
  if (fileNode.nodeType !== nodeType.file) return

  const blocks_required = Math.ceil(content.length / blockSize)
  const contentBuffer = str2ab(content)

  for (let i = 0, len = blocks_required; i < len; i++) {
    const offsetContent = (i * blockSize) - i

    const blockContent = contentBuffer.slice(offsetContent, offsetContent + blockSize - 1)

    const offsetBuffer = (fileNode.childrens[i] * blockSize) + 1
    const blockBuffer = buffer.slice(offsetBuffer, offsetBuffer + blockSize -1)
    copy_buffer(blockContent, new DataView(buffer, offsetBuffer, blockSize - 1))
    //copy_buffer(blockContent, blockBuffer)
  }

  fileNode.contentSize = content.length
  /*
  if (fileNode.contentSize < content.length && fileNode.childrensLength > 0) {
    const offset = (fileNode.childrens[0] * blockSize) + 1

    copy_buffer(str2ab(content), new DataView(buffer, offset, content.length))
    fileNode.contentSize = content.length
  }*/
}
