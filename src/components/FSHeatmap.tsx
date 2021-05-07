import React, { useState, useEffect, useContext } from 'react'
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

import FileSystemContext from './FileSystemContext'
import { Tabs, TabList, Tab, Wrap, WrapItem, Box } from '@chakra-ui/react'

function genSeries(array: number[], rows: number, cols: number, initial = 0) {
  const series = []
  for (let i = rows - 1; i >= 0; i--) {
    const name = `${i * cols + initial}`
    const data: { x: string; y: number }[] = []
    for (let j = 0; j < cols; j++) {
      const offset = i * cols + j
      const x = `${j}`
      const y = array[offset]

      data.push({ x, y })
    }
    series.push({ name, data })
  }
  return series
}

const options: ApexCharts.ApexOptions = {
  chart: {
    type: 'heatmap',
    redrawOnParentResize: true,
    redrawOnWindowResize: true,
    animations: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ['#008FFB'],
  title: {
    text: 'Disk HeatMap',
  },
}

const rows = 32
const columns = 32
const ePerChart = rows * columns

const FSHeatmap = ({ blocks }) => {
  const [diskUsed, setdiskUsed] = useState<number[]>([])
  const [indexes, setIndexes] = useState<any[]>([])
  const [serie, setSerie] = useState<any[]>([])
  const [tabIndex, setTabIndex] = useState(0)

  const { registerCallback } = useContext(FileSystemContext)

  const handleTabsChange = (index) => {
    setTabIndex(index)
  }

  useEffect(() => {
    const initial = tabIndex * ePerChart
    const serieBlocks = diskUsed.slice(initial, ePerChart)

    setSerie(genSeries(serieBlocks, rows, columns, initial))
  }, [diskUsed, tabIndex])

  useEffect(() => {
    console.log('registerCallback')

    setIndexes(new Array(blocks / ePerChart).fill(0).map((_, index) => index))

    registerCallback((fs) => {
      setdiskUsed(fs?.diskUsed() || [])
    })
  }, [])

  return (
    <Box borderRadius="md" borderWidth="2px" p="5px" h="100%">
      <Tabs
        isFitted
        isLazy
        size="sm"
        index={tabIndex}
        onChange={handleTabsChange}
      >
        <TabList>
          <Wrap justify="center">
            {indexes.map((value, index) => {
              return (
                <WrapItem>
                  <Tab key={index}>{`${value}K`}</Tab>
                </WrapItem>
              )
            })}
          </Wrap>
        </TabList>
      </Tabs>
      <Box minH="400px" h="auto">
        <ReactApexChart
          options={options}
          series={serie}
          type="heatmap"
          height="100%"
        />
      </Box>
    </Box>
  )
}

export default FSHeatmap
