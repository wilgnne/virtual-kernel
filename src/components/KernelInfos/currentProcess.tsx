import React, { memo } from 'react'
import { Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react'

import { Process } from '@miniso/kernel';

type CurrentProcessProps = {
  process?: Process
}

const CurrentProcess: React.FC<CurrentProcessProps> = ({ process }) => {
  return (
    <Stat>
      <StatLabel>Current Process</StatLabel>
      <StatNumber>{process?.name || "Free"}</StatNumber>
      <StatHelpText>Exec Time: {process?.time || ""}</StatHelpText>
    </Stat>
  )
}

export default memo(CurrentProcess)
