export const formatPercent = (value: number): string => {
  return `${(value * 100).toFixed(1)}%`
}

export const formatInteger = (value: number): string => {
  return value.toLocaleString('en-US')
}
