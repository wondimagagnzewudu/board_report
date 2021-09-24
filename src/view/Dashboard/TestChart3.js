import React from 'react'
import Chart from './Chart2'
var data = [
  {
    label: 'somethingA',
    values: [
      { x: 'SomethingA', y: 10 },
      { x: 'SomethingB', y: 4 },
      { x: 'SomethingC', y: 3 },
    ],
  },
]

const TestDataset = {
  series: [
    {
      label: 'somethingA',
      data: [1, 2, 3],
    },
    {
      label: 'SecondSeries',
      data: [3.5, 4, 5],
    },
  ],
  xAxis: {
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  chart: {
    type: 'Scatter Plot',
    grouped: true,
  },
}

export default () => <Chart key="123" dataset={TestDataset} />
