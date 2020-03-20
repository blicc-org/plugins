import Chart from 'chart.js'
import { options, colorPalette } from '../common'

export function LineChart(
  data = [],
  onDataUpdate = () => {},
  settings = {},
  setSettings = () => {}
) {
  const type = 'line'
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  let scales = {
    yAxis: [
      {
        stacked: true,
      },
    ],
  }

  if (settings && settings.unit) {
    const { xAxis, yAxis } = settings.unit
    if (xAxis === 'time') {
      scales = {
        ...scales,
        xAxes: [
          {
            type: 'time',
            distribution: 'linear',
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10,
            },
          },
        ],
      }
    }
    if (yAxis === 'time') {
      scales = {
        ...scales,
        yAxes: [
          {
            type: 'time',
            distribution: 'linear',
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10,
            },
          },
        ],
      }
    }
  }

  const chart = new Chart(ctx, {
    type,
    data: addStyles(data),
    options: {
      ...options,
      scales,
      title: {
        display: true,
<<<<<<< HEAD
      },
=======
      }
>>>>>>> e510fd712906e0be13a3db09e6fcfade1f287cde
    },
  })

  onDataUpdate(updatedData => {
<<<<<<< HEAD
    chart.options.title.text = updatedData.title || ''
=======
    chart.options.title.text = updatedData.title || ""
>>>>>>> e510fd712906e0be13a3db09e6fcfade1f287cde
    chart.data = addStyles(updatedData)
    chart.update()
  })

  return canvas
}

function addStyles(data) {
  if (!data.datasets) return data
  const datasets = data.datasets.map((dataset, index) => {
    return {
      ...dataset,
      backgroundColor: colorPalette[index],
      borderColor: colorPalette[index],
      borderWidth: 2,
      fill: false,
      lineTension: 0,
    }
  })
  return { ...data, datasets }
}
