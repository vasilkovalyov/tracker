import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { WeekCalendarType } from './WeekCalendar.type'
import { useWeekCalendar } from './useWeekCalendar'
import WeekCalendarHead from './WeekCalendarHead'

export default function WeekCalendar({ events }: WeekCalendarType) {
  const {
    currentDate,
    month,
    year,
    weekDates,
    onHandleNextWeek,
    onHandlePrevWeek,
    isExistEventForDate,
  } = useWeekCalendar()

  return (
    <Box bgcolor='info.light' paddingY='20px' borderRadius='21px' height={168}>
      <WeekCalendarHead
        currentMonth={month}
        currentYear={year}
        onHandleNextWeek={onHandleNextWeek}
        onHandlePrevWeek={onHandlePrevWeek}
      />
      <Grid container justifyContent='space-between'>
        {weekDates.map((item, index) => (
          <Grid width='40px' key={index} item>
            <Typography
              variant='body1'
              textAlign='center'
              fontWeight={currentDate === item.date ? 700 : 400}
            >
              {item.weekDay}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent='space-between'>
        {weekDates.map((item) => (
          <Grid
            width='40px'
            key={item.day}
            item
            sx={{
              position: 'relative',
              padding: '12px 10px',
              height: '58px',
              borderRadius: '8px',
              backgroundColor: currentDate === item.date ? 'primary.main' : 'transparent',
            }}
          >
            <Typography
              variant='body1'
              textAlign='center'
              sx={{
                color: currentDate === item.date ? 'white' : 'info.dark',
              }}
            >
              {item.day}
            </Typography>
            {events && events?.length ? (
              <>
                {isExistEventForDate(events, item.date) ? (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      backgroundColor: currentDate === item.date ? 'white' : 'info.dark',
                    }}
                  />
                ) : null}
              </>
            ) : null}
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
