import React, { useState, useContext, useEffect } from 'react'
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Th,
  Tr
} from "@chakra-ui/react"

import KernelContext from '../KernelContext'
import { Process } from '../../services/kernel'

import ProcessItem from './Item'

const ProcessTable = () => {
  const [processes, setProcesses] = useState<Process[]>([])

  const { registerCallback } = useContext(KernelContext)

  useEffect(() => {
    registerCallback((kernel) => setProcesses([...kernel.scheduler?.processList]))
  }, [])

  return (
    <Box h="100%">
      <Heading size="md">Process Table</Heading>
      <Box maxH="720px" overflowY="scroll">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th isNumeric>PID</Th>
              <Th isNumeric>Exec Time</Th>
              <Th isNumeric>Priority</Th>
              <Th isNumeric>UID</Th>
              <Th isNumeric>Mem</Th>
              <Th isNumeric>State</Th>
              <Th isNumeric>Time Left</Th>
            </Tr>
          </Thead>
          <Tbody>
            {processes?.map(process => <ProcessItem key={process.pid} process={process} />)}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}

export default ProcessTable
