import dayjs from 'dayjs'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import { IconChevronLeft, IconChevronRight } from '../Icons'

const ButtonToggleWeekStyle = styled(Button)(() => ({
  minWidth: 'auto',
  padding: '0',
}))

type WeekCalendarHeadType = {
  currentMonth: number
  currentYear: number
  onHandlePrevWeek?: () => void
  onHandleNextWeek?: () => void
}

export default function WeekCalendarHead({
  currentMonth,
  currentYear,
  onHandleNextWeek,
  onHandlePrevWeek,
}: WeekCalendarHeadType) {
  const currentMonthNumber = dayjs().month(currentMonth).format('MMMM')
  return (
    <Grid container justifyContent='space-between' paddingX='14px'>
      <Grid item>
        <ButtonToggleWeekStyle
          variant='text'
          onClick={() => onHandlePrevWeek && onHandlePrevWeek()}
        >
          <IconChevronLeft />
        </ButtonToggleWeekStyle>
      </Grid>
      <Grid item>
        <Typography variant='h5' color='black'>
          {currentMonthNumber} {currentYear}
        </Typography>
      </Grid>
      <Grid item>
        <ButtonToggleWeekStyle
          variant='text'
          onClick={() => onHandleNextWeek && onHandleNextWeek()}
        >
          <IconChevronRight />
        </ButtonToggleWeekStyle>
      </Grid>
    </Grid>
  )
}
