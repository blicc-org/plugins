export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
}

export const colorPalette = [
  '#14148d',
  '#df209f',
  '#22d0ab',
  '#199098',
  '#848482',
  '#3b865a',
  '#d993ab',
  '#29679f',
  '#ec9880',
  '#5d5192',
  '#eaa93b',
  '#a84b6c',
  '#dcd245',
  '#7e3320',
  '#96b437',
  '#624628',
  '#d36034',
  '#2f3c29',
  '#22d0ab',
]

export function hexToRgbaString(hex, alpha) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  const rgb = {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  }
  return `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`
}
