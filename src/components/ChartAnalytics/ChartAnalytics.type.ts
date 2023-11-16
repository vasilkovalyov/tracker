export type ChartAnalyticsType = {
  data: ChartAnalyticsBar[]
  activeBar?: number
}

export type ChartAnalyticsBar = {
  id: string
  value: number
  legend: string
}
