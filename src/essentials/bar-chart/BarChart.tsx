import Chart from 'chart.js'
import { options, colorPalette } from '../common'

type Data = any
type Settings = any
type Callback = (data: Data) => void
type OnDataUpdate = (callback: Callback) => void
type SetSettings = (settings: Settings) => void

export function BarChart(
  data: Data,
  onDataUpdate: OnDataUpdate = () => {},
  settings: Settings,
  setSettings: SetSettings = () => {}
) {
  const type = 'bar'
  const canvas = document.createElement('canvas')
  const ctx: any = canvas.getContext('2d')

  const chart = new Chart(ctx, {
    type,
    data: addStyles(data),
    options: {
      ...options,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  })

  onDataUpdate((updatedData: Data) => {
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
      borderColor: '#f8f8f8',
      borderWidth: 1,
    }
  })
  return { ...data, datasets }
}
