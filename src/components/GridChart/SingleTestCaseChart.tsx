import React from 'react'
import { Bar } from '@reactchartjs/react-chart.js'

import { BarChartProps } from '.'

const SingleTestCaseChart = ({ thisCase }: BarChartProps) => {
  const data: Chart.ChartData = {
    labels: ['FIFO', 'MRU', 'NUF', 'Excellent'],
    datasets: [
      {
        label: 'Number of swaps',
        data: [thisCase.fifo, thisCase.mru, thisCase.nuf, thisCase.excellent],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const options: Chart.ChartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    responsive: false,
    title: {
      display: true,
      text: `Case ${thisCase.name} ${thisCase.framesAmount}|${thisCase.processPages}|${thisCase.accesses.length} `
    }
  }

  return (
    <Bar data={data} options={options} height={300} type='bar'/>
  )
}

export default SingleTestCaseChart
