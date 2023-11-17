import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { BlockHeading, UserTransaction, UserTransactionType } from '@/src/components'

import { useAppSelector } from '@/src/redux/hooks'

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

export default function BlockTransactions() {
  const { currency } = useAppSelector((store) => store.settingsSlice.settings)

  return (
    <Box className='block-transactions'>
      <BlockHeading heading='Transactions' linkPath='/' />
      {transactions.length ? (
        <Box>
          {transactions.map((transaction) => (
            <UserTransaction
              key={transaction.id}
              {...transaction}
              currency={currency}
              isStandalone={true}
            />
          ))}
        </Box>
      ) : (
        <Typography variant='h4' textAlign='center'>
          No Transactions
        </Typography>
      )}
    </Box>
  )
}
