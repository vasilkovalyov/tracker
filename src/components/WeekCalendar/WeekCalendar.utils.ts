// import dayjs from 'dayjs'
// import { DateCalendarType } from './WeekCalendar.type'
// import { fullDateFormat } from '@/src/constants/date'

// export function getWeekDays() {
//   const weekdays: DateCalendarType[] = []
//   for (let i = 1; i <= 7; i++) {
//     const date = dayjs().startOf('week').add(i, 'day').format(fullDateFormat)
//     const weekday = dayjs().startOf('week').add(i, 'day').format('dd').slice(0, 1)
//     weekdays.push({
//       date: date,
//       day: weekday,
//     })
//   }

//   return weekdays
// }
