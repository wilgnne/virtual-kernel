import React, { useState, useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'
import ReactTerminal, { ReactTerminalStateless, ReactThemes } from 'react-terminal-component'
import { EmulatorState, CommandMapping, defaultCommandMapping, OutputFactory } from 'javascript-terminal'

import FileSystemContext from '../components/FileSystemContext'

import NavBar from '../components/Navbar'
import FSHeatmap from '../components/FSHeatmap'

import FS, { FSCallback } from '../services/kernel/fs'
import FSTerminal from '../components/FSTerminal'

const blockSize = 400
const blocks = 32 * 64

const FileSystem = () => {
  const wd = useRef('/')

  const callbacks = useRef<FSCallback[]>([])
  //const fileSystem = useRef<FS>(new FS(blockSize, blocks, callbacks.current))
  const [fileSystem, setFileSystem] = useState<FS>(new FS(blockSize, blocks, callbacks.current))

  function registerCallback(callback: FSCallback) {
    callbacks.current.push(callback)
  }

  function ls(state: any, opts: string[]) {
    const [status, out] = fileSystem.ls('.', wd.current)
    console.log(status, out);

    return {
      output: OutputFactory.makeTextOutput(out)
    };
  }

  function cd(state: any, opts: string[]) {
    const input = opts[0]

    const [code, newWd] = fileSystem.cd(input, wd.current)
    if (code) wd.current = newWd

    return {
      output: OutputFactory.makeTextOutput(newWd)
    }
  }

  function echo(state: any, opts: string[]) {
    const input = opts.join(' ')

    const [content, to] = input.split('>>').map(value => value.trim().replaceAll('"', '').replaceAll("'", ''))

    const [statusCode, out] = fileSystem.echo(to, wd.current, content)
    console.log('echo:', statusCode, out);

    return {
      output: OutputFactory.makeTextOutput(out)
    }
  }

  function cat(state: any, opts: string[]) {
    const file = opts[0]

    const [statusCode, out] = fileSystem.cat(file, wd.current)
    console.log(statusCode, out);

    return {
      output: OutputFactory.makeTextOutput(out)
    }
  }

  function touch(state: any, opts: string[]) {
    const file = opts[0]

    const [statusCode, out] = fileSystem.touch(file, wd.current)
    console.log(statusCode, out);

    return {
      output: OutputFactory.makeTextOutput('')
    }
  }

  useEffect(() => {

  fileSystem.mkdir('root', '/')
  //fileSystem.mkdir('images', '/root')

  fileSystem.touch('boot.txt', '/')
  //fileSystem.touch('init.bin', '/')
  //setWd(wd)
  }, [])

  return (
    <FileSystemContext.Provider value={{ registerCallback }}>
      <Box margin="0 40px">
        <NavBar />
        <FSHeatmap />

        <FSTerminal
          promptSymbol={wd.current}
          commands={[
            { name: 'ls', func: ls },
            { name: 'cd', func: cd },
            { name: 'cat', func: cat },
            { name: 'echo', func: echo },
            { name: 'touch', func: touch }
          ]}
        />

      </Box>
    </FileSystemContext.Provider>
  )
}

export default FileSystem
