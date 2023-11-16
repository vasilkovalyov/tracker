import Box from '@mui/material/Box'
import {
  BlockHeading,
  UserTransaction,
  BudgetExpenses,
  UserTransactionType,
} from '@/src/components'
import { styled } from '@mui/material/styles'

import { useAppSelector } from '@/src/redux/hooks'

const BlockExpensesBody = styled(Box)(({ theme }) => ({
  padding: '20px 14px',
  borderRadius: 10,
  backgroundColor: theme.palette.info['light'],
}))

const expences: UserTransactionType = {
  id: '1',
  heading: 'Nike Super Store',
  subheading: 'Bank Account',
  date: 'April 2022',
}

export default function BlockExpenses() {
  const { currency } = useAppSelector((store) => store.settingsSlice.settings)

  return (
    <Box className='block-expences'>
      <BlockHeading heading='Expences' linkPath='/' />
      <BlockExpensesBody>
        <Box marginBottom={3}>
          <UserTransaction {...expences} currency={currency} />
        </Box>
        <BudgetExpenses spend={2486} budget={3000} currency={currency} />
      </BlockExpensesBody>
    </Box>
  )
}
