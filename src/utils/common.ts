export const getPercentOnNumber = (spend: number, total: number, round: number = 2): number => {
  const percent = (spend / total) * 100
  return parseFloat(percent.toFixed(round))
}
