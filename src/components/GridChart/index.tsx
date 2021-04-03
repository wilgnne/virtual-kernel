import React from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react'

import SingleTestCaseChart from './SingleTestCaseChart'
import { TestCase } from '../../pages/memory'

export interface BarChartProps {
  thisCase: TestCase
}

interface GridChartProps {
  cases: TestCase[]
}

const GridChart = ({ cases }: GridChartProps) => {
  return (
    <SimpleGrid minChildWidth='300px' spacing={10}>
      {cases.map((thisCase, index) => <SingleTestCaseChart key={index} thisCase={thisCase} />)}
    </SimpleGrid>
  )
}

export default GridChart
