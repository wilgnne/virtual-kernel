import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'

import { TestCase } from '../../pages/memory'
import Frame from './Frame'
import Pages from './Pages'

export interface CompareAlgorithsProps {
  cases: TestCase[]
}
const CompareAlgoriths = ({ cases }: CompareAlgorithsProps) => {
  return (
    <SimpleGrid columns={2} spacing={10}>
      <Frame cases={cases} />
      <Pages cases={cases} />
    </SimpleGrid>
  )
}

export default CompareAlgoriths;
