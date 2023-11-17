import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

import { CalenarEventType, CompactCardBalance, WeekCalendar } from '@/src/components'
import { CompactCardBalanceType } from '@/src/components/CompactCardBalance'

import { useAppSelector } from '@/src/redux/hooks'

const balances: CompactCardBalanceType[] = [
  {
    id: '1',
    balance: 762200,
    cardtLastNumbers: '1965',
  },
  {
    id: '2',
    balance: 702200,
    cardtLastNumbers: '1966',
  },
]

const events: CalenarEventType[] = [
  {
    id: '1',
    date: '2023-11-17',
    events: [100, 40, 600],
  },
  {
    id: '2',
    date: '2023-11-14',
    events: [502, 940, 600],
  },
  {
    id: '3',
    date: '2023-11-20',
    events: [10, 630],
  },
  {
    id: '4',
    date: '2023-11-25',
    events: [100, 40, 600],
  },
]

export default function BlockExpensesInfo() {
  const { currency } = useAppSelector((store) => store.settingsSlice.settings)

  return (
    <Box className='block-expenses-info' marginBottom={2}>
      <Box marginBottom={2.5}>
        <WeekCalendar events={events} />
      </Box>
      {balances.length ? (
        <Grid container columnSpacing={2.5}>
          {balances.map((balance, index) => (
            <Grid key={balance.id} item xs={12} sm={6} marginBottom={2}>
              <CompactCardBalance
                {...balance}
                currency={currency}
                theme={index % 2 !== 0 ? 'primary' : 'secondary'}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>No Balances</Typography>
      )}
    </Box>
  )
}
