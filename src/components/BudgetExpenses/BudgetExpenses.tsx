import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { BudgetExpensesType } from './BudgetExpenses.type'
import { formatToNumber, getPercentOnNumber } from '@/src/utils/common'
import { styled } from '@mui/material/styles'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 14,
  borderRadius: 13,
  [`&.${linearProgressClasses.root}`]: {
    backgroundColor: 'transparent',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 13,
  },
}))

export default function BudgetExpenses({ spend, budget }: BudgetExpensesType) {
  const percent = getPercentOnNumber(spend, budget)

  return (
    <Box className='budget-expenses'>
      <Grid container alignItems='flex-end' spacing={3} marginBottom={1}>
        <Grid item>
          <Typography variant='body1'>Total Spend</Typography>
          <Typography variant='h4' color='success.main' marginBottom={0}>
            ${formatToNumber(spend)}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1'>Total Budget</Typography>
          <Typography variant='h4' marginBottom={0}>
            ${formatToNumber(budget)}
          </Typography>
        </Grid>
        <Grid item marginLeft='auto'>
          <Typography variant='h4' color='success.main' marginBottom={0}>
            {percent}%
          </Typography>
        </Grid>
      </Grid>
      <BorderLinearProgress variant='determinate' color='secondary' value={percent} />
    </Box>
  )
}
