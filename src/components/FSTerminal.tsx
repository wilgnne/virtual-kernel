import React, { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { ReactTerminalStateless, ReactThemes } from 'react-terminal-component'
import { EmulatorState, CommandMapping, defaultCommandMapping, OutputFactory } from 'javascript-terminal'

type commandFunction = (state: any, opts: string[]) => any

interface command {
  name: string,
  func: commandFunction
}

interface FSTerminalProps {
  commands: command[],
  promptSymbol?: string
}

const FSTerminal = ({ commands, promptSymbol = '' }: FSTerminalProps) => {
  const [emulatorState, setEmulatorState] = useState(undefined)
  const [inputStr, setInputStr] = useState('')

  useEffect(() => {
    const commandMapping: {
      [key: string]: {
        'function': commandFunction,
        'optDef': {}
      };
    } = {
      'clear': {
        'function': defaultCommandMapping.clear.function,
        'optDef': defaultCommandMapping.clear.optDef
      }
    }
    commands.forEach(command => commandMapping[command.name] = {
      'function': command.func,
      'optDef': {}
    })

    setEmulatorState(EmulatorState.create({
      'commandMapping': CommandMapping.create(commandMapping)
    }))

    /*
    const customCommandMapping = CommandMapping.create({
      'ls': {
        'function': (state, opts) => {
          console.log(fileSystem);

          const [status, stdout] = fileSystem.current.ls('.', wd)
          console.log(status, stdout);

          return {
            output: OutputFactory.makeTextOutput(stdout)
          };
        },
        'optDef': {}
      },
      'cd': {
        'function': (state, opts) => {
          const input = opts[0]

          const [code, newWd] = fileSystem.current.cd(input, wd)
          if (code) setWd(newWd)

          return {
            output: OutputFactory.makeTextOutput(newWd)
          }
        },
        'optDef': {}
      },
      'echo': {
        'function': (state, opts: string[]) => {
          const input = opts.join(' ')

          const [content, to] = input.split('>>').map(value => value.trim().replaceAll('"', '').replaceAll("'", ''))

          const [statusCode, out] = fileSystem.current.echo(to, wd, content)

          //callbacks.current.forEach(callback => callback(fileSystem))
          return {
            output: OutputFactory.makeTextOutput(out)
          }
        },
        'optDef': {}
      },
      'touch': {
        'function': (state, opts: string[]) => {
          const file = opts[0]

          const [statusCode, out] = fileSystem.current.touch(file, wd)
          console.log(statusCode, out);


          return {
            output: OutputFactory.makeTextOutput('')
          }
        },
        'optDef': {}
      }
    });
    */
  }, [])

  return (
    <Box
      position="fixed"
      bottom="24px"
      left="20%"
      width="60%"
      border='2px'
      borderColor='gray.700'
      borderRadius='10px'
    >
      <ReactTerminalStateless
        theme={{
          ...ReactThemes.light,
          height: '87px'
        }}
        emulatorState={emulatorState}
        onStateChange={(emulatorState) => {
          setEmulatorState(emulatorState)
          setInputStr('')
        }}
        inputStr={inputStr}
        onInputChange={(inputStr) => setInputStr(inputStr)}
        promptSymbol={promptSymbol + '$'}
      />
    </Box>
  )
}

export default FSTerminal;
