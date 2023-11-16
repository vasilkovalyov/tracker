import cn from 'classnames'

import { IconType } from '../icon.type'

export default function IconPlus({ className }: IconType) {
  return (
    <svg
      width='19'
      height='18'
      viewBox='0 0 19 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('icon icon-plus', className)}
    >
      <path d='M9.39136 0V18' stroke='white' stroke-width='2' />
      <path d='M0.391357 9L18.3914 9' stroke='white' stroke-width='2' />
    </svg>
  )
}
