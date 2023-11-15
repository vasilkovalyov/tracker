import { SwiperOptions } from 'swiper/types'

export interface CarouselType {
  slides: React.ReactNode[]
  className?: string
  useCustomNavigation?: boolean
  settings?: SwiperOptions
}
