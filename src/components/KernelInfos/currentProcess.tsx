import React, { useState, useContext, useEffect } from 'react'
import { Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react'

import KernelContext from '../KernelContext'

const CurrentProcess = () => {
  const [name, setName] = useState<string>(undefined)
  const [time, setTime] = useState<number>(undefined)

  const { registerCallback } = useContext(KernelContext)

  useEffect(() => {
    registerCallback((kernel) => setName(kernel.scheduler.currentProcess.name))
    registerCallback((kernel) => setTime(kernel.scheduler.currentProcess.time))
  }, [])

  return (
    <Stat>
      <StatLabel>Current Process</StatLabel>
      <StatNumber>{name || "Free"}</StatNumber>
      <StatHelpText>Exec Time: {time || ""}</StatHelpText>
    </Stat>
  )
}

export default CurrentProcess
