import React, { useContext, useEffect, useState } from 'react'
import {
  Progress,
  StackDivider,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Stack,
} from '@chakra-ui/react'

import FileSystemContext from './FileSystemContext'

interface FSInforsProps {
  blockSize: number
  blocks: number
}

const FSInfors = ({ blockSize, blocks }: FSInforsProps) => {
  const [diskUsed, setdiskUsed] = useState<number[]>([])
  const [freeSpace, setFreeSpace] = useState(0)
  const [usedBlocks, setUsedBlocks] = useState('---')

  const diskSize = blocks * blockSize

  const { registerCallback } = useContext(FileSystemContext)

  useEffect(() => {
    const free =
      diskUsed.reduce((prev, curr) => prev - curr * blockSize, diskSize) /
      1048576
    console.log(free)

    setFreeSpace(free)
  }, [diskUsed])

  useEffect(() => {
    console.log('registerCallback FSInfors')

    registerCallback((fs) => {
      setdiskUsed(fs?.diskUsed() || [])
      setUsedBlocks(fs?.blocksUsed().toString())
    })
  }, [])

  return (
    <Stack
      direction="row"
      w={{ base: '100%', lg: 'auto' }}
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      <Stat>
        <StatLabel>Disk</StatLabel>
        <StatNumber>{diskSize / 1048576} MB</StatNumber>
        <StatHelpText>{freeSpace.toFixed(2)} MB Free</StatHelpText>
        <Progress
          hasStripe
          value={(diskSize - freeSpace) / diskSize}
          size="sm"
        />
      </Stat>
      <Stat>
        <StatLabel>Block Size</StatLabel>
        <StatNumber>{blockSize / 1024} KB</StatNumber>
        <StatHelpText>{usedBlocks} Block(s) Used</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Blocks</StatLabel>
        <StatNumber>{blocks}</StatNumber>
        <StatHelpText></StatHelpText>
      </Stat>
    </Stack>
  )
}

export default FSInfors
