import React from 'react'
import {
  Box,
  Flex,
  Heading
} from '@chakra-ui/react'

import Kernel from '@miniso/kernel'

import Algorithm from './algorithm'
import CurrentProcess from './currentProcess'
import Clock from './clock'

type KernelInfosProps = {
  kernel?: Kernel
}

const KernelInfos: React.FC<KernelInfosProps> = ({ kernel }) => {
  return (
    <Box>
      <Heading size="md">Kernel Infos</Heading>
      <Flex margin="10px">
        <Clock kernel={kernel} />
        <Algorithm scheduler={kernel?.scheduler} />
        <CurrentProcess process={kernel?.scheduler.currentProcess} />
      </Flex>
    </Box>
  )
}

export default KernelInfos
