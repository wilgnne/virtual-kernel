import React, { useState, useContext, useEffect } from 'react'
import { Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react'

import KernelContext from '../KernelContext'

const Algorithm = () => {
  const [name, setName] = useState('')
  const [quantum, setQuantum] = useState(0)

  const { registerCallback } = useContext(KernelContext)

  useEffect(() => {
    registerCallback((kernel) => setName(kernel.scheduler?.algorithmName))
    registerCallback((kernel) => setQuantum(kernel.scheduler?.quantum))
  }, [])

  return (
    <Stat>
      <StatLabel>Scheduler Algorithm</StatLabel>
      <StatNumber>{name}</StatNumber>
      <StatHelpText>Quantum: {quantum}</StatHelpText>
    </Stat>
  )
}

export default Algorithm
