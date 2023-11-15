import Box from '@mui/material/Box'
import { CarouselCreditCards, CreditCardType } from '@/src/components'

export default function BlockCreditCards() {
  const cards: CreditCardType[] = [
    {
      id: '1',
      cardNumber: '2544754537851023',
      balance: '76,22.00',
      themeColor: 'secondary.dark',
    },
    {
      id: '2',
      cardNumber: '2544754537851024',
      balance: '70,00.00',
      themeColor: 'secondary.main',
    },
  ]

  return (
    <Box className='block-credit-cards' mb={4}>
      <CarouselCreditCards cards={cards} />
    </Box>
  )
}
