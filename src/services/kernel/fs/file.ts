import { iNode, nodeType } from "./iNode";
import { arrayBuffer2uint16Array, copy_buffer, str2ab } from "./utils";

export function read_file(buffer: ArrayBuffer, fileNode: iNode, blockSize = 100): string {
  if (fileNode.nodeType !== nodeType.file) return undefined

  const offset = (fileNode.childrens[0] * blockSize) + 1

  const contentBuffer = buffer.slice(offset, offset + fileNode.contentSize)

  const content = String.fromCharCode.apply(null, arrayBuffer2uint16Array(contentBuffer))

  return content
}

export function write_file(buffer: ArrayBuffer, fileNode: iNode, content: string, blockSize = 100) {
  if (fileNode.nodeType !== nodeType.file) return

  if (fileNode.contentSize < content.length && fileNode.childrensLength > 0) {
    const offset = (fileNode.childrens[0] * blockSize) + 1

    copy_buffer(str2ab(content), new DataView(buffer, offset, content.length))
    fileNode.contentSize = content.length
  }
}
