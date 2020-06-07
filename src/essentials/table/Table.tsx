type Data = any
type Settings = any
type Callback = (data: Data) => void
type OnDataUpdate = (callback: Callback) => void
type SetSettings = (settings: Settings) => void

export function Table(
  data: Data,
  onDataUpdate: OnDataUpdate = () => {},
  settings: Settings,
  setSettings: SetSettings = () => {}
) {
  var table = document.createElement('table')
  table.style.margin = '0 auto'

  function fillTable(ref: any, inputData: Data) {
    ref.innerHTML = ''
    if (inputData && inputData.labels && inputData.datasets) {
      var tr = ref.insertRow()
      inputData.labels.forEach(
        (label: string) =>
          (tr.insertCell().outerHTML = '<th>' + label + '</th>')
      )

      inputData.datasets.forEach((dataset: any) => {
        var tr = ref.insertRow()
        if (dataset.data) {
          dataset.data.forEach((item: any) => {
            tr.insertCell().innerText = item
          })
        }
      })
    }
  }

  fillTable(table, data)

  onDataUpdate((updatedData: Data) => {
    fillTable(table, updatedData)
  })

  return table
}
