import React, { useState, useRef } from 'react'
import { Box, Button, Flex, Grid, GridItem, Heading } from '@chakra-ui/react'

import KernelContext from '../components/KernelContext'

import Kernel, { ClockCallback, IProcess, SchedulerConfig } from '../services/kernel'

import ProcessTable from '../components/ProcessTable'
import KernelInfos from '../components/KernelInfos'
import Terminal from '../components/Terminal'
import NavBar from '../components/Navbar'

const Scheduler = () => {
  //const [socket, setSocket] = useState<typeof Socket>()
  const [kernel, setKernel] = useState<Kernel>(undefined)
  const [isPaused, setIsPaused] = useState(false)

  const callbacks = useRef<ClockCallback[]>([])

  function registerCallback(callback: ClockCallback) {
    callbacks.current.push(callback)
  }

  function updateKernel(config?: SchedulerConfig, procecess?: IProcess[]) {
    let currentKernel = kernel

    if (config) {
      currentKernel?.stop()
      try {
        currentKernel = new Kernel(config, (kernel) => {
          callbacks.current.forEach(callback => callback(kernel))
          setIsPaused(kernel.isPaused)
        })
      } catch (error) {
        alert(error.message)
        return
      }

      setKernel(currentKernel)
    }

    procecess?.forEach(process => currentKernel.scheduler.newProcess(process))
  }

  function decoder(command: string) {
    const commands = command.split("\n")
    let schedulerConfig: SchedulerConfig = undefined
    let processes: IProcess[] = []

    commands.forEach(command => {
      const args = command.split("|")

      switch (args.length) {
        case 2:
          schedulerConfig = {
            algorithm: args[0],
            quantum: parseInt(args[1]),
            interval: 100
          }
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
          processes.push(process)
          break;

        default:
          break;
      }
    })

    updateKernel(schedulerConfig, processes)
  }

  return (
    <KernelContext.Provider value={{ registerCallback, updateKernel }}>
      <Box margin="0 40px">
        <NavBar />

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
                colorScheme={isPaused ? "green" : "red"}
                disabled={kernel === undefined}
                onClick={() => kernel?.stop()}
              >
                {isPaused ? "Play" : "Stop"} Simulation
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
            <KernelInfos />
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
            <ProcessTable />
          </GridItem>
        </Grid>

        <Terminal decoder={decoder} />
      </Box>
    </KernelContext.Provider>
  );
}

export default Scheduler;
