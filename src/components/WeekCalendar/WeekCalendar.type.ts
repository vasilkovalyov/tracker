export type WeekCalendarType = {
  events?: CalenarEventType[]
  onHandleSelectDay?: () => void
  onHandleNextWeek?: () => void
  onHandlePrevWeek?: () => void
}

export type CalenarEventType = {
  id: string
  date: string
  events: number[]
}

export type DateCalendarType = {
  date: string
  day: number | string
  weekDay?: string
}
