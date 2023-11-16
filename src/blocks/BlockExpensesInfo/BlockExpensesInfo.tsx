import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

import { CompactCardBalance } from '@/src/components'
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

export default function BlockExpensesInfo() {
  const { currency } = useAppSelector((store) => store.settingsSlice.settings)

  return (
    <Box className='block-expenses-info' marginBottom={2}>
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
