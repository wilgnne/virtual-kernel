import { iNode, nodeType } from "./iNode";

export interface fsNode {
  iNode: iNode,
  childrens: fsNode[]
}

export function iNodeSizeFromFsNode(node: fsNode) {
  return 6 + node.iNode.nameLength + (node.iNode.nodeType === nodeType.file ? node.iNode.childrensLength : node.childrens.length) * 2
}

export function get_node(path: string, root: fsNode): fsNode {
  if (path === '/') return root
  if (path === '.') return root

  const [next, ...halfPath] = path.split('/')

  if (next === '') return get_node(halfPath.join('/'), root)

  const nextNode = root.childrens.find(value => value.iNode.name === next)

  if (halfPath.length === 0) return nextNode

  if (nextNode) {
    return get_node(halfPath.join('/'), nextNode)
  }
  return undefined
}

export function printFsNode(node: fsNode, tab = 0) {
  console.log(`${'  '.repeat(tab)}${node.iNode.name}${node.iNode.nodeType === nodeType.folder ? '/' : ''}`)
  node.childrens.forEach(children => printFsNode(children, tab + 1))
}
