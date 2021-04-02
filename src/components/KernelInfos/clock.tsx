import React, { useState, useContext, useEffect } from 'react'
import { Stat, StatLabel, StatNumber } from '@chakra-ui/react'

import KernelContext from '../KernelContext'

const Clock = () => {
  const [clock, setClock] = useState(0)

  const { registerCallback } = useContext(KernelContext)

  useEffect(() => {
    registerCallback((kernel) => setClock(kernel.clk))
  }, [])

  return (
    <Stat>
      <StatLabel>Clock</StatLabel>
      <StatNumber>{clock}</StatNumber>
    </Stat>
  )
}

export default Clock
