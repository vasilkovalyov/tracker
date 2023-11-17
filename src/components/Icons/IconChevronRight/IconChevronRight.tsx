import cn from 'classnames'

import { IconType } from '../icon.type'

export default function IconChevronRight({ color = '#0F172A', className }: IconType) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='8'
      height='14'
      viewBox='0 0 8 14'
      fill='none'
      className={cn('icon', className)}
    >
      <path
        d='M1 13L7 7L1 1'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
