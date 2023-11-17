import Box from '@mui/material/Box'
import { CarouselCreditCards, CreditCardType } from '@/src/components'

const cards: CreditCardType[] = [
  {
    id: '1',
    cardNumber: '2544754537851024',
    balance: 700000,
    themeColor: 'secondary.main',
  },
  {
    id: '2',
    cardNumber: '2544754537851023',
    balance: 762200,
    themeColor: 'secondary.dark',
  },
]

export default function BlockCreditCards() {
  return (
    <Box className='block-credit-cards' mb={4}>
      <CarouselCreditCards cards={cards} />
    </Box>
  )
}
