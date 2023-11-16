export type ChartAnalyticsType = {
  data: ChartAnalyticsBar[]
  activeBar?: number
  currency?: string
}

export type ChartAnalyticsBar = {
  id: string
  value: number
  legend: string
}
