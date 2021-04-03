import React, { useState, useContext } from 'react'
import { Box, Textarea } from '@chakra-ui/react'

import KernelContext from './KernelContext'

import { IProcess, SchedulerConfig } from '../services/kernel'

interface TerminalProps {
  decoder: (command: string) => void
}

const Terminal = ({ decoder }: TerminalProps) => {
  const [command, setCommand] = useState<string>("")

  const { updateKernel } = useContext(KernelContext)

  function keyHandle(key: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (key.shiftKey === false && key.key === "Enter") {
      console.log('Send');
      decoder(command)
      setCommand("")
    }
  }

  return (
    <Box
      position="fixed"
      bottom="24px"
      left="20%"
      width="60%"
    >
      <Textarea
        background="#FFF"
        boxShadow="10px 9px 17px -2px rgba(0,0,0,0.61)"
        placeholder="$> "
        onChange={e => setCommand(e.target.value === "\n" ? "" : e.target.value)}
        onKeyPress={keyHandle}
        value={command}
      />
    </Box>
  )
}

export default Terminal
