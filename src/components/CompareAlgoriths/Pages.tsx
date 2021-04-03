import React, { useState, useEffect } from 'react'
import { Bar } from '@reactchartjs/react-chart.js'

import { CompareAlgorithsProps } from '.'


const Pages = ({ cases }: CompareAlgorithsProps) => {
  const [data, setData] = useState<Chart.ChartData>()

  useEffect(() => {
    const pagesSizes = cases.map(thisCase => thisCase.processPages).filter((el, i, arr) => arr.indexOf(el) == i).sort((a, b) => a - b)

    const colors = pagesSizes.map(frame => {
      const r = Math.random() *255
      const g = Math.random() *255
      const b = Math.random() *255
      return [`rgba(${r}, ${g}, ${b}, 0.5)`, `rgba(${r}, ${g}, ${b}, 1)`]
    })

    const data: Chart.ChartData = {
      labels: ['FIFO', 'MRU', 'NUF', 'Excellent'],
      datasets: pagesSizes.map<Chart.ChartDataSets>((pages, index) => {
        return {
          label: pages.toString(),
          data: [
            cases.filter(
              thisCase => thisCase.processPages === pages
            ).map(
              thisCase => thisCase.fifo
            ).reduce(
              (prev, curr, _, array) => prev + (curr / array.length), 0
            ),
            cases.filter(
              thisCase => thisCase.processPages === pages
            ).map(
              thisCase => thisCase.mru
            ).reduce(
              (prev, curr, _, array) => prev + (curr / array.length), 0
            ),
            cases.filter(
              thisCase => thisCase.processPages === pages
            ).map(
              thisCase => thisCase.nuf
            ).reduce(
              (prev, curr, _, array) => prev + (curr / array.length), 0
            ),
            cases.filter(
              thisCase => thisCase.processPages === pages
            ).map(
              thisCase => thisCase.excellent
            ).reduce(
              (prev, curr, _, array) => prev + (curr / array.length), 0
            ),
          ],
          backgroundColor: colors[index][0],
          borderColor: colors[index][1],
          borderWidth: 1,
        }
      }),

    }

    setData(data)

  }, [cases])

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
    maintainAspectRatio: false,
    title: {
      display: true,
      text: `Compare Process Pages`
    }
  }

  return (
    <Bar data={data} options={options} height={300} width={500} type='bar' />
  )
}

export default Pages;
