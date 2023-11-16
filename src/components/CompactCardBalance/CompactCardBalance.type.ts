import { ThemeType } from '@/src/types/common'

export type CompactCardBalanceType = {
  id: string
  balance: number
  cardtLastNumbers: string
  theme?: ThemeType
  currency?: string
}
