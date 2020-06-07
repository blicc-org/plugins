type Data = any
type Settings = any
type Callback = (data: Data) => void
type OnDataUpdate = (callback: Callback) => void
type SetSettings = (settings: Settings) => void

export function Clock(
  data: Data,
  onDataUpdate: OnDataUpdate = () => {},
  settings: Settings,
  setSettings: SetSettings = () => {}
) {
  const clock = document.createElement('h1')
  clock.style.fontFamily = 'digital-7,Charcoal,sans-serif'
  clock.style.display = 'flex'
  clock.style.justifyContent = 'center'
  clock.style.alignItems = 'center'
  clock.style.fontWeight = 'bold'
  clock.style.height = '100%'
  clock.style.padding = '0'
  clock.style.margin = '0'

  function formatTime(d: any) {
    let hours = d.getHours()
    let minutes = d.getMinutes()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0' + minutes : minutes
    const time = hours + ':' + minutes + ' ' + ampm
    return time
  }

  function drawClock(ref: any, inputData: any) {
    if (inputData && inputData.datasets[0] && inputData.datasets[0].data[0]) {
      ref.innerHTML = formatTime(new Date(inputData.datasets[0].data[0]))
    }
  }

  drawClock(clock, data)

  onDataUpdate((updatedData: Data) => {
    drawClock(clock, updatedData)
  })

  return clock
}
