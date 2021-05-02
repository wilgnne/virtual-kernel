import React, { useState, useEffect, useContext } from 'react'
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

import FileSystemContext from './FileSystemContext'

function genSeries(array: number[], rows: number, cols: number) {
  const series = []
  for (let i = rows - 1; i >= 0; i--) {
    const name = `${i * cols}`
    const data: { x: string, y: number }[] = []
    for (let j = 0; j < cols; j++) {
      const offset = (i * cols) + j
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
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#008FFB"],
  title: {
    text: 'Disk HeatMap'
  },
}

const FSHeatmap = () => {
  const [series, setSeries] = useState([])

  const { registerCallback } = useContext(FileSystemContext)

  useEffect(() => {
    console.log('registerCallback');

    registerCallback((fs) => {
      const diskUsed = fs?.diskUsed() || []

      const newSeries = genSeries(diskUsed.map(value => value * 100), 32, 64)
      setSeries(newSeries)
    })
  }, [])

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="heatmap"
        height="500px"
      />
    </div>
  )
}

export default FSHeatmap;
