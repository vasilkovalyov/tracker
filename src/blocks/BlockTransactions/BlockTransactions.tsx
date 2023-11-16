import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { BlockHeading, UserTransaction, UserTransactionType } from '@/src/components'

export default function BlockTransactions() {
  const transactions: UserTransactionType[] = [
    {
      id: '1',
      imageSrc: '',
      heading: 'Nike Super Store',
      subheading: 'Bank Account',
      cost: 952,
      date: 'Fri, 05 April 2022',
    },
    {
      id: '2',
      imageSrc: '',
      heading: 'Puma Store',
      subheading: 'Bank Account',
      cost: 475,
      date: 'Fri, 05 April 2022',
    },
  ]
  return (
    <Box className='block-transactions'>
      <BlockHeading heading='Transactions' linkPath='/' />
      {!transactions.length ? (
        <Typography variant='h4'>No Transactions</Typography>
      ) : (
        <Box>
          {transactions.map((transaction) => (
            <UserTransaction key={transaction.id} {...transaction} isStandalone={true} />
          ))}
        </Box>
      )}
    </Box>
  )
}
