import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import {
  BlockHeading,
  UserTransaction,
  BudgetExpenses,
  UserTransactionType,
} from '@/src/components'

import { useAppSelector } from '@/src/redux/hooks'

const BlockExpensesBody = styled(Box)(({ theme }) => ({
  padding: '20px 14px',
  borderRadius: 10,
  backgroundColor: theme.palette.info['light'],
}))

type ExpencesType = UserTransactionType & {
  spend?: number
  budget?: number
}

const expences: ExpencesType = {
  id: '1',
  heading: 'Nike Super Store',
  subheading: 'Bank Account',
  date: 'April 2022',
  spend: 2486,
  budget: 3000,
}

export default function BlockExpenses() {
  const { currency } = useAppSelector((store) => store.settingsSlice.settings)

  return (
    <Box className='block-expences'>
      <BlockHeading heading='Expences' linkPath='/' />
      {expences ? (
        <BlockExpensesBody>
          <Box marginBottom={3}>
            <UserTransaction {...expences} currency={currency} />
          </Box>
          <BudgetExpenses spend={2486} budget={3000} currency={currency} />
        </BlockExpensesBody>
      ) : (
        <Typography variant='h4' textAlign='center'>
          No Expences
        </Typography>
      )}
    </Box>
  )
}
