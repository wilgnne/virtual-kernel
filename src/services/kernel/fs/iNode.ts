export enum nodeType {
  file,
  folder,
}

export interface iNode {
  nameLength: number,
  name: string,
  nodeType: nodeType,

  contentSize: number,

  childrensLength: number,
  childrens: Uint16Array
}

function create_node(name: string, nodeType: nodeType, childrens = new Uint16Array([])): iNode {
  return {
    nameLength: name.length,
    name,
    nodeType,
    contentSize: 0,
    childrensLength: childrens.byteLength / childrens.BYTES_PER_ELEMENT,
    childrens
  }
}

export function get_inode_size(inode: iNode): number {
  return 4 + inode.nameLength + (inode.childrensLength * 2)
}

export default create_node
