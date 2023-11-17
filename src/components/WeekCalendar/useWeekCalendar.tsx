import { useMemo, useState, useEffect } from 'react'

import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear'
import isLeapYear from 'dayjs/plugin/isLeapYear'

import { CalenarEventType, DateCalendarType } from './WeekCalendar.type'
import { fullDateFormat } from '@/src/constants/date'

dayjs.extend(weekOfYear)
dayjs.extend(isoWeeksInYear)
dayjs.extend(isLeapYear)
dayjs.extend(dayOfYear)

export function useWeekCalendar() {
  const [month, setMonth] = useState<number>(new Date().getMonth())
  const [year, setYear] = useState<number>(new Date().getFullYear())
  const [weekNumber, setWeekNumber] = useState<number>(dayjs().week())
  const [weekDates, setWeekDates] = useState<DateCalendarType[]>([])

  const currentDate = useMemo(() => dayjs().format(fullDateFormat), [])

  function getWeeksCountInYear(year: number): number {
    return dayjs(`${year}-12-31`).isoWeeksInYear()
  }

  function onHandleNextWeek() {
    const updateWeekNumber = weekNumber + 1
    const datesOfNextWeek = getGeneratedWeekDaysByWeekNumber(year, updateWeekNumber)

    const lastDate = datesOfNextWeek[datesOfNextWeek.length - 1].date
    updateYearAndMonth(lastDate, updateWeekNumber)
    setWeekDates(datesOfNextWeek)
  }

  function onHandlePrevWeek() {
    const updateWeekNumber = weekNumber - 1
    const datesOfPrevWeek = getGeneratedWeekDaysByWeekNumber(year, updateWeekNumber)

    const lastDate = datesOfPrevWeek[datesOfPrevWeek.length - 1].date
    updateYearAndMonth(lastDate, updateWeekNumber)

    setWeekDates(datesOfPrevWeek)
  }

  function updateYearAndMonth(date: string, weekNumber: number) {
    const updatedYear = +date.slice(0, 4)
    const updatedMonth = +date.slice(5, 7) - 1

    if (updatedYear > year) {
      setWeekNumber(1)
    } else if (updatedYear < year) {
      setWeekNumber(getWeeksCountInYear(updatedYear))
    } else {
      setWeekNumber(weekNumber)
    }

    setYear(updatedYear)
    setMonth(updatedMonth)
  }

  function getGeneratedWeekDaysByWeekNumber(year: number, weekNumber: number): DateCalendarType[] {
    const firstDayOfYear = dayjs().year(year).startOf('year')
    const firstDayOfGivenWeek = firstDayOfYear.dayOfYear((weekNumber - 1) * 7 + 1)
    const weekDays: DateCalendarType[] = []

    for (let i = 1; i <= 7; i++) {
      const date = firstDayOfGivenWeek.add(i, 'day').format(fullDateFormat)
      const weekday = dayjs().startOf('week').add(i, 'day').format('dd').slice(0, 1)
      weekDays.push({
        date: date,
        day: parseInt(date.split('-')[2]),
        weekDay: weekday,
      })
    }

    return weekDays
  }

  function isExistEventForDate(events: CalenarEventType[], date: string): boolean {
    let isExist = false

    for (const item of events) {
      if (item.date === date) {
        isExist = true
        break
      }
    }

    return isExist
  }

  useEffect(() => {
    const weekDates = getGeneratedWeekDaysByWeekNumber(new Date().getFullYear(), weekNumber)
    setWeekDates(weekDates)
  }, [])

  return {
    currentDate,
    month,
    year,
    weekNumber,
    weekDates,
    onHandleNextWeek,
    onHandlePrevWeek,
    setWeekNumber,
    isExistEventForDate,
  }
}
