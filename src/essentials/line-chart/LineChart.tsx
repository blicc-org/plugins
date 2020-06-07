import Chart from 'chart.js'
import { options, colorPalette } from '../common'

type Data = any
type Settings = any
type Callback = (data: Data) => void
type OnDataUpdate = (callback: Callback) => void
type SetSettings = (settings: Settings) => void

export function LineChart(
  data: Data,
  onDataUpdate: OnDataUpdate = () => {},
  settings: Settings,
  setSettings: SetSettings = () => {}
) {
  const type = 'line'
  const canvas = document.createElement('canvas')
  const ctx: any = canvas.getContext('2d')

  let scales: any = {
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

  const chart: any = new Chart(ctx, {
    type,
    data: addStyles(data),
    options: {
      ...options,
      scales,
      title: {
        display: false,
      },
    },
  })

  onDataUpdate((updatedData: Data) => {
    chart.options.title.text = updatedData.title || ''
    chart.data = addStyles(updatedData)
    chart.update()
  })

  return canvas
}

function addStyles(data: Data) {
  if (!data.datasets) return data
  const datasets = data.datasets.map((dataset: any, index: number) => {
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
