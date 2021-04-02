import React, { memo } from 'react'
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Th,
  Tr
} from "@chakra-ui/react"

import { Process } from '@miniso/kernel'

import ProcessItem from './ProcessItem'

type ProcessTableProps = {
  processes?: Process[]
}

const ProcessTable: React.FC<ProcessTableProps> = ({ processes }) => {
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

export default memo(ProcessTable)
