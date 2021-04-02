import React, { memo } from 'react'
import { Tr, Td } from '@chakra-ui/react'

import { Process } from '@miniso/kernel'

type ProcessItemProps = {
  process: Process
}

const ProcessItem: React.FC<ProcessItemProps> = ({ process }) => {
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

export default memo(ProcessItem)
