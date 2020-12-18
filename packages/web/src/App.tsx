import React, { useState, useEffect } from 'react'
import { Box, Button, Flex, Grid, GridItem, Heading } from '@chakra-ui/react'
import io, { Socket } from 'socket.io-client'

import Kernel from '@miniso/kernel'

import ProcessTable from './components/ProcessTable'
import KernelInfos from './components/KernelInfos'
import Terminal from './components/Terminal'

const App = () => {
  const [socket, setSocket] = useState<typeof Socket>()
  const [kernel, setKernel] = useState<Kernel>()

  useEffect(() => {
    const socket = io(process.env.REACT_APP_API || "http://localhost:3333");
    setSocket(socket)

    socket.on("connect", () => console.log("Connected"))
    socket.on("disconnect", () => setKernel(undefined))

    socket.on("clk", (kernel: Kernel) => {
      setKernel(kernel)
    })

    socket.on("algorithmError", () => {
      alert("The select algorithm is not supported")
    })
  }, [])

  return (
    <Box margin="0 40px">
      <Box
        margin="48px 0 0 0"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading color="blue.800">Virtual Kernel 👨🏻‍💻</Heading>
      </Box>

      <Grid
        marginTop="32px"
        marginBottom="128px"
        templateRows={{
          base: "150px 150px 1fr",
          lg: "160px 2fr"
        }}
        templateColumns={{
          base: "1fr",
          lg: "repeat(5, 1fr)",
        }}
        gap={4}
        h="100vh"
      >
        <GridItem
          colSpan={{
            base: 1,
            lg: 3
          }}
          p='15px'
          rounded="md"
          background="White"
        >
          <Flex flexDir="column" justifyContent="space-evenly" h="100%">
            <Heading size="md">Kernel Status: {kernel ? "Created" : "OFF"}</Heading>
            <Button
              colorScheme="green"
              onClick={() => socket?.emit("stop")}
            >
              Play/Stop Simulation
            </Button>
          </Flex>
        </GridItem>
        <GridItem
          colSpan={{
            base: 1,
            lg: 2
          }}
          p='15px'
          rounded="md"
          bg="White"
        >
          <KernelInfos kernel={kernel} />
        </GridItem>
        <GridItem
          colSpan={{
            base: 1,
            lg: 5
          }}
          p='15px'
          rounded="md"
          background="White"
        >
          <ProcessTable processes={kernel?.scheduler.processList} />
        </GridItem>
      </Grid>

      <Terminal socket={socket} />
    </Box>
  );
}

export default App;
