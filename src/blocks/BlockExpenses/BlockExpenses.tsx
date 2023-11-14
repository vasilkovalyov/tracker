import Box from '@mui/material/Box'
import { BlockHeading, UserTransaction, BudgetExpenses } from '@/src/components'
import { styled } from '@mui/material/styles'

const BlockExpensesBody = styled(Box)(({ theme }) => ({
  padding: '20px 14px',
  borderRadius: 10,
  backgroundColor: theme.palette.info['light'],
}))

export default function BlockExpenses() {
  return (
    <Box className='block-expences'>
      <BlockHeading heading='Expences' linkPath='/' />
      <BlockExpensesBody>
        <Box marginBottom={3}>
          <UserTransaction
            id='1'
            heading='Nike Super Store'
            subheading='Bank Account'
            date='April 2022'
          />
        </Box>
        <BudgetExpenses spend='$2,486' budget='$3,000' />
      </BlockExpensesBody>
    </Box>
  )
}
