import React, { memo } from 'react'
import { Stat, StatLabel, StatNumber } from '@chakra-ui/react'

import Kernel from '@miniso/kernel'

type ClockProps = {
  kernel?: Kernel
}

const Clock: React.FC<ClockProps> = ({ kernel }) => {
  return (
    <Stat>
      <StatLabel>Clock</StatLabel>
      <StatNumber>{kernel?.clk}</StatNumber>
    </Stat>
  )
}

export default memo(Clock)
