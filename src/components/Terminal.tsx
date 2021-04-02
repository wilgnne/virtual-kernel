import React, { useState } from 'react'
import { Box, Textarea } from '@chakra-ui/react'
import { Socket } from 'socket.io-client'

import { IProcess, SchedulerConfig } from '@miniso/kernel'

type TerminalProps = {
  socket?: typeof Socket
}

const Terminal: React.FC<TerminalProps> = ({ socket }) => {
  const [command, setCommand] = useState<string>("")

  function decoder() {
    const commands = command.split("\n")

    commands.forEach(command => {
      const args = command.split("|")

      switch (args.length) {
        case 2:
          const schedulerConfig: SchedulerConfig = {
            algorithm: args[0],
            quantum: parseInt(args[1]),
            interval: 100
          }
          socket?.emit("new", schedulerConfig)
          break;

        case 6:
          const process: IProcess = {
            name: args[0],
            pid: parseInt(args[1]),
            time: parseInt(args[2]),
            priority: parseInt(args[3]),
            uid: parseInt(args[4]),
            mem: parseInt(args[5])
          }
          socket?.emit("newProcess", process)
          break;

        default:
          break;
      }
    })
  }

  function keyHandle(key: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (key.shiftKey === false && key.key === "Enter") {
      console.log('Send');
      decoder()
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
