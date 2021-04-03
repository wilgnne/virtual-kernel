import React, { useState } from 'react'
import { Box, Button, Center, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import fileDownload from 'js-file-download'


import NavBar from '../components/Navbar'
import Terminal from '../components/Terminal'
import GridChart from '../components/GridChart'

import { pagesSwitch } from '../services/kernel/memory'
import FIFO from '../services/kernel/memory/algorithms/fifo'
import MRU from '../services/kernel/memory/algorithms/mru'
import NUF from '../services/kernel/memory/algorithms/nuf'
import CompareAlgoriths from '../components/CompareAlgoriths'
import Excellent from '../services/kernel/memory/algorithms/excellent'

export interface TestCase {
  name: string,
  framesAmount: number,
  processPages: number,
  accesses: number[],
  fifo: number,
  mru: number,
  nuf: number,
  excellent: number
}

const Memory = () => {
  const [cases, setCases] = useState<TestCase[]>([])

  function decoder(command: string) {
    const commands = command.split("\n")
    const newCases: TestCase[] = []

    commands.forEach((command, index) => {
      const args = command.split("|")

      switch (args.length) {
        case 3:
          const framesAmount = parseInt(args[0])
          const processPages = parseInt(args[1])
          const accesses = args[2].split(' ').map(elem => parseInt(elem))

          const fifo = pagesSwitch(framesAmount, processPages, accesses, FIFO)
          const mru = pagesSwitch(framesAmount, processPages, accesses, MRU)
          const nuf = pagesSwitch(framesAmount, processPages, accesses, NUF)
          const excellent = pagesSwitch(framesAmount, processPages, accesses, Excellent)

          const thisCase: TestCase = {
            name: index.toString(),
            framesAmount,
            processPages,
            accesses,
            fifo,
            mru,
            nuf,
            excellent
          }

          newCases.push(thisCase)
          break;

        default:
          break;
      }
    })

    setCases([...cases, ...newCases])
  }

  function compare(thisCase: TestCase) {
    const { fifo, mru, nuf } = thisCase

    const sorted = [fifo, mru, nuf].sort((a, b) => a - b)
    const min = sorted[0]
    if (sorted[0] === sorted[1]) return 'empate'
    if (fifo === min) return 'FIFO'
    if (mru === min) return 'MRU'
    if (nuf === min) return 'NUF'
  }

  function Download() {
    const fileName = 'result.txt'
    const file = cases.map(thisCase => `${thisCase.fifo}|${thisCase.mru}|${thisCase.nuf}|${thisCase.excellent}|${compare(thisCase)}`).join('\n')
    fileDownload(file, fileName)
  }

  return (
    <Box margin="0 40px">
      <NavBar />

      <Flex flexDir="column" maxWidth='420px' justifyContent="space-evenly" h="100%">
        <Heading size="md">Memory Status: {cases.length > 0 ? "Created" : "OFF"}</Heading>
        <Button
          colorScheme={cases.length > 0 ? "green" : "red"}
          disabled={cases.length === 0}
          onClick={Download}
        >
          Download Simulation
        </Button>
      </Flex>

      <CompareAlgoriths cases={cases} />

      <Divider />

      <Box marginBottom='150px'>
        <Center marginTop='10px'>
          <Text fontSize='lg' fontWeight='bold'>Test Cases</Text>
        </Center>
        <Center marginTop='10px'>
          <Text fontSize='md'>Memory Frames|Process Pages|Accesses length</Text>
        </Center>
        <GridChart cases={cases} />
      </Box>

      <Terminal decoder={decoder} />
    </Box>
  )
}

export default Memory
