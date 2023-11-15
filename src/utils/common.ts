import { TypeCard } from '../types/common'

export const getPercentOnNumber = (spend: number, total: number, round: number = 2): number => {
  const percent = (spend / total) * 100
  return parseFloat(percent.toFixed(round))
}

export const getSplitCardNumber = (cardNumber: string): string => {
  const regex = /(\d{4})/g
  let parts = cardNumber.match(regex)
  return parts?.join(' ') || ''
}

export function getCardType(number: string): TypeCard {
  let re = new RegExp('^4')
  if (number.match(re) != null) return 'visa'
  re = new RegExp('^5[1-5]')
  if (number.match(re) != null) return 'mastercard'
  return 'mastercard'
}
