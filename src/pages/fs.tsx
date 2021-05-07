import React, { useState, useRef } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { OutputFactory } from 'javascript-terminal'

import FileSystemContext from '../components/FileSystemContext'

import NavBar from '../components/Navbar'
import FSHeatmap from '../components/FSHeatmap'

import FS, { FSCallback } from '../services/kernel/fs'
import FSTerminal, { commandFunction } from '../components/FSTerminal'

import dynamic from 'next/dynamic'
import FSInfors from '../components/FSInfos'
import FSHandle from '../components/FSHandle'
const Tree = dynamic(() => import('../components/FileExplorer'), { ssr: false })

const blockSize = 4 * 1024
const blocks = 32 * 1024

const FileSystem = () => {
  const callbacks = useRef<FSCallback[]>([])
  const [fileSystem, setFileSystem] = useState<FS>(
    new FS(blockSize, blocks, callbacks.current),
  )

  function registerCallback(callback: FSCallback) {
    callbacks.current.push(callback)
    fileSystem.writeFS()
  }

  const ls: commandFunction = (state, opts, wd) => {
    const path = opts[0] || '.'
    const [status, out] = fileSystem.ls(path, wd)
    console.log(status, out)

    return {
      output: OutputFactory.makeTextOutput(out),
    }
  }

  const cd: commandFunction = (state, opts, wd, setWd) => {
    const input = opts[0]

    const [code, newWd] = fileSystem.cd(input, wd)
    if (code) setWd(newWd)

    return {
      output: OutputFactory.makeTextOutput(''),
    }
  }

  const echo: commandFunction = (state, opts, wd) => {
    const input = opts.join(' ')

    const [content, to] = input
      .split('>>')
      .map((value) => value.trim().replaceAll('"', '').replaceAll("'", ''))

    const [_, out] = fileSystem.echo(to, wd, content.replace('\n', '\\n'))

    return {
      output: OutputFactory.makeTextOutput(out),
    }
  }

  const cat: commandFunction = (state, opts, wd) => {
    const file = opts[0]
    const a = ''

    const [_, out] = fileSystem.cat(file, wd)
    let multiLine = out.replace('\\n', '\n')

    return {
      output: OutputFactory.makeTextOutput(multiLine),
    }
  }

  const touch: commandFunction = (state, opts, wd) => {
    const file = opts[0]

    const [_, out] = fileSystem.touch(file, wd)

    return {
      output: OutputFactory.makeTextOutput(''),
    }
  }

  const mkdir: commandFunction = (state, opts, wd) => {
    const path = opts[0]

    const [_, out] = fileSystem.mkdir(path, wd)

    return {
      output: OutputFactory.makeTextOutput(out),
    }
  }

  const rm: commandFunction = (state, opts, wd) => {
    const file = opts[0]

    const [_, out] = fileSystem.rm(file, wd)

    return {
      output: OutputFactory.makeTextOutput(out),
    }
  }

  const rmdir: commandFunction = (state, opts, wd) => {
    const dir = opts[0]

    const [_, out] = fileSystem.rmdir(dir, wd)

    return {
      output: OutputFactory.makeTextOutput(out),
    }
  }

  const cp: commandFunction = (state, opts, wd) => {
    const from = opts[0]
    const to = opts[1]

    const [_, out] = fileSystem.cp(from, to, wd)

    return {
      output: OutputFactory.makeTextOutput(out),
    }
  }

  const mv: commandFunction = (state, opts, wd) => {
    const from = opts[0]
    const to = opts[1]

    const [_, out] = fileSystem.mv(from, to, wd)

    return {
      output: OutputFactory.makeTextOutput(out),
    }
  }

  return (
    <FileSystemContext.Provider value={{ registerCallback }}>
      <Grid
        h={{ base: 'auto', lg: '100%' }}
        margin="0 40px"
        templateAreas={{
          base: '"nav" "handle" "terminal" "stats" "graph" "tree"',
          lg: `
            "nav     nav       nav      nav"
            "handle   stats   stats    stats"
            "terminal terminal terminal terminal"
            "graph    graph    graph    tree"`,
        }}
        gap="15px"
        p="0 0 15px 0"
      >
        <GridItem gridArea="nav" h="auto">
          <NavBar marginBottom="0" />
        </GridItem>
        <GridItem gridArea="handle">
          <FSHandle fs={fileSystem} />
        </GridItem>
        <GridItem gridArea="terminal" minH="300px" bg="papayawhip">
          <FSTerminal
            commands={[
              { name: 'ls', func: ls },
              { name: 'cd', func: cd },
              { name: 'cp', func: cp },
              { name: 'rm', func: rm },
              { name: 'mv', func: mv },
              { name: 'cat', func: cat },
              { name: 'echo', func: echo },
              { name: 'touch', func: touch },
              { name: 'mkdir', func: mkdir },
              { name: 'rmdir', func: rmdir },
            ]}
          />
        </GridItem>
        <GridItem gridArea="stats">
          <FSInfors blockSize={blockSize} blocks={blocks} />
        </GridItem>
        <GridItem gridArea="graph">
          <FSHeatmap blocks={blocks} />
        </GridItem>
        <GridItem gridArea="tree" minH="320px" minW="160px">
          <Tree />
        </GridItem>
      </Grid>
    </FileSystemContext.Provider>
  )
}

export default FileSystem
