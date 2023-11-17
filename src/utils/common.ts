import { TypeCard } from '../types/common'

export const getPercentOnNumber = (spend: number, total: number, round: number = 2): number => {
  const percent = (spend / total) * 100
  return parseFloat(percent.toFixed(round))
}

export const getSplitCardNumber = (cardNumber: string): string => {
  const regex = /(\d{4})/g
  return cardNumber.match(regex)?.join(' ') || ' '
}

export function getCardType(number: string): TypeCard {
  let re = new RegExp('^4')
  if (number.match(re) != null) return 'visa'
  re = new RegExp('^5[1-5]')
  if (number.match(re) != null) return 'mastercard'
  return 'mastercard'
}

export const formatToCurrency = (number: number) => {
  let formattedNumber = number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  formattedNumber = formattedNumber.replace(/(\d+)(\d{2})(\d{1})$/, '$1.$2.$3')
  return formattedNumber
}

export const formatToBalanceCard = (number: number) => {
  let formattedNumber = number.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ',')
  formattedNumber = formattedNumber.replace(/(\d+),(\d{2})$/, '$1.$2')
  return formattedNumber
}

export const getPercentage = (value: number, total: number) => (value / total) * 100

export function generateYears(startYear: number, endYear: number = new Date().getFullYear()) {
  const years = []
  for (let year = startYear; year <= endYear; year++) {
    years.push(year)
  }
  return years
}
