import React, { useState, useEffect, useRef } from 'react'
import { ReactTerminalStateless, ReactThemes } from 'react-terminal-component'
import {
  EmulatorState,
  CommandMapping,
  defaultCommandMapping,
} from 'javascript-terminal'

export type commandFunction = (
  state: any,
  opts: string[],
  wd: string,
  setWd: React.Dispatch<React.SetStateAction<string>>,
) => any

interface command {
  name: string
  func: commandFunction
}

interface FSTerminalProps {
  commands: command[]
}

const FSTerminal = ({ commands }: FSTerminalProps) => {
  const wd = useRef('/')

  const [emulatorState, setEmulatorState] = useState(undefined)
  const [inputStr, setInputStr] = useState('')

  function setWd(value: string) {
    wd.current = value
  }

  useEffect(() => {
    const commandMapping: {
      [key: string]: {
        function: commandFunction
        optDef: {}
      }
    } = {
      clear: {
        function: defaultCommandMapping.clear.function,
        optDef: defaultCommandMapping.clear.optDef,
      },
    }
    commands.forEach(
      (command) =>
        (commandMapping[command.name] = {
          function: (state: any, opts: string[]) =>
            command.func(state, opts, wd.current, setWd),
          optDef: {},
        }),
    )

    setEmulatorState(
      EmulatorState.create({
        commandMapping: CommandMapping.create(commandMapping),
      }),
    )
  }, [])

  return (
    <ReactTerminalStateless
      theme={{
        ...ReactThemes.dye,
        height: '100%',
      }}
      emulatorState={emulatorState}
      onStateChange={(emulatorState) => {
        setEmulatorState(emulatorState)
        setInputStr('')
      }}
      inputStr={inputStr}
      onInputChange={(inputStr) => setInputStr(inputStr)}
      promptSymbol={wd.current + '$'}
    />
  )
}

export default FSTerminal
