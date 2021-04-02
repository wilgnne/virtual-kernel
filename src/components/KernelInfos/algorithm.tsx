import React, { memo } from 'react'
import { Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react'

import Scheduler from '@miniso/kernel/dist/scheduler'

type AlgorithmProps = {
  scheduler?: Scheduler
}

const Algorithm: React.FC<AlgorithmProps> = ({ scheduler }) => {
  return (
    <Stat>
      <StatLabel>Scheduler Algorithm</StatLabel>
      <StatNumber>{scheduler?.algorithmName}</StatNumber>
      <StatHelpText>Quantum: {scheduler?.quantum}</StatHelpText>
    </Stat>
  )
}

export default memo(Algorithm)
