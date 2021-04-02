import React from 'react'
import {
  Box,
  Flex,
  Heading
} from '@chakra-ui/react'

import Algorithm from './algorithm'
import CurrentProcess from './currentProcess'
import Clock from './clock'

const KernelInfos = () => {
  return (
    <Box>
      <Heading size="md">Kernel Infos</Heading>
      <Flex margin="10px">
        <Clock />
        <Algorithm  />
        <CurrentProcess />
      </Flex>
    </Box>
  )
}

export default KernelInfos
