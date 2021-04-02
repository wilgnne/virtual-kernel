import React from 'react'
import { Tr, Td } from '@chakra-ui/react'

import { Process } from '../../services/kernel'

type ProcessItemProps = {
  process: Process
}

const ProcessItem = ({ process }: ProcessItemProps) => {
  return (
    <Tr>
      <Td>{process.name}</Td>
      <Td isNumeric>{process.pid}</Td>
      <Td isNumeric>{process.time}</Td>
      <Td isNumeric>{process.priority}</Td>
      <Td isNumeric>{process.uid}</Td>
      <Td isNumeric>{process.mem}</Td>
      <Td isNumeric>{process.state}</Td>
      <Td isNumeric>{process.timeLeft}</Td>
    </Tr>
  )
}

export default ProcessItem
