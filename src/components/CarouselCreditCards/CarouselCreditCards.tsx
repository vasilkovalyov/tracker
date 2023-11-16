import Box from '@mui/material/Box'
import { CreditCard, Carousel } from '@/src/components'
import { CarouselCreditCardsType } from './CarouselCreditCards.type'

import { useAppSelector } from '@/src/redux/hooks'

export default function CarouselCreditCards({ cards }: CarouselCreditCardsType) {
  const { currency } = useAppSelector((store) => store.settingsSlice.settings)

  return (
    <Box className='carousel-credit-cards' height={220} mb={2}>
      <Carousel
        settings={{
          height: 210,
          spaceBetween: 60,
          centeredSlides: true,
          slidesPerView: 'auto',
          effect: 'coverflow',
          direction: 'vertical',
          navigation: false,
          pagination: false,
          loop: false,
          coverflowEffect: {
            rotate: 0,
            stretch: 110,
            depth: 300,
            modifier: 1,
            slideShadows: false,
          },
        }}
        slides={cards.map((card) => (
          <CreditCard key={card.id} {...card} currency={currency} />
        ))}
      />
    </Box>
  )
}
