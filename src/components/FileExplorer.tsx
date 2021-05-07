import React, { useState, useEffect, useContext } from 'react'
import SortableTree from 'react-sortable-tree'
import Theme from 'react-sortable-tree-theme-file-explorer'

import { fsNode } from '../services/kernel/fs/fsTree'
import { nodeType } from '../services/kernel/fs/iNode'

import FileSystemContext from './FileSystemContext'

export interface TreeItem {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  expanded?: boolean
  children?: TreeItem[]
  [x: string]: any
}

function fsNode2TreeData(fsNode: fsNode): TreeItem {
  return {
    title: fsNode.iNode.name,
    children: fsNode.childrens.map((children) => fsNode2TreeData(children)),
    expanded: fsNode.iNode.nodeType === nodeType.folder,
    isDirectory: fsNode.iNode.nodeType === nodeType.folder,
  }
}

const Tree = () => {
  const [treeData, setTreeData] = useState<any>([
    { title: '/', children: [{ title: 'index.js' }] },
  ])
  const { registerCallback } = useContext(FileSystemContext)

  useEffect(() => {
    console.log('registerCallback')
    registerCallback((fs) => setTreeData([fsNode2TreeData(fs.fileTree)]))
  }, [])

  return (
    <div style={{ height: '100%' }}>
      <SortableTree
        treeData={treeData}
        onChange={(treeData) => setTreeData(treeData)}
        canDrag={false}
        theme={Theme}
        generateNodeProps={(rowInfo) => ({
          icons: rowInfo.node.isDirectory
            ? [
                <div
                  style={{
                    borderLeft: 'solid 8px gray',
                    borderBottom: 'solid 10px gray',
                    marginRight: 10,
                    boxSizing: 'border-box',
                    width: 16,
                    height: 12,
                    filter: rowInfo.node.expanded
                      ? 'drop-shadow(1px 0 0 gray) drop-shadow(0 1px 0 gray) drop-shadow(0 -1px 0 gray) drop-shadow(-1px 0 0 gray)'
                      : 'none',
                    borderColor: rowInfo.node.expanded ? 'white' : 'gray',
                  }}
                />,
              ]
            : [
                <div
                  style={{
                    border: 'solid 1px black',
                    fontSize: 8,
                    textAlign: 'center',
                    marginRight: 10,
                    width: 12,
                    height: 16,
                  }}
                >
                  F
                </div>,
              ],
        })}
      />
    </div>
  )
}

export default Tree
