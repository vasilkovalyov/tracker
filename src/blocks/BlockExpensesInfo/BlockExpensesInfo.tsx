import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import { CompactCardBalance } from '@/src/components'
import { CompactCardBalanceType } from '@/src/components/CompactCardBalance'
import { Typography } from '@mui/material'

export default function BlockExpensesInfo() {
  const balances: CompactCardBalanceType[] = [
    {
      id: '1',
      balance: '$76,22.00',
      cardtLastNumbers: '1965',
    },
    {
      id: '2',
      balance: '$70,22.00',
      cardtLastNumbers: '1966',
    },
  ]
  return (
    <Box className='block-expenses-info' marginBottom={2}>
      {balances.length ? (
        <Grid container columnSpacing={2.5}>
          {balances.map((balance, index) => (
            <Grid key={balance.id} item xs={12} sm={6} marginBottom={2}>
              <CompactCardBalance {...balance} theme={index % 2 !== 0 ? 'primary' : 'secondary'} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>No Balances</Typography>
      )}
    </Box>
  )
}
