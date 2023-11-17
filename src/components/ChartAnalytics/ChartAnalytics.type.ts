export type ChartAnalyticsType = {
  data: ChartAnalyticsBar[]
  currency?: string
}

export type ChartAnalyticsBar = {
  id: string
  value: number
  legend: string
}
