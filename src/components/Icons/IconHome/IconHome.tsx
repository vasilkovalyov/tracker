import cn from 'classnames'
import { IconType } from '../icon.type'

export default function IconHome({ color, className }: IconType) {
  return (
    <svg
      width='21'
      height='26'
      viewBox='0 0 21 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('icon icon-home', className)}
    >
      <path
        d='M1 9.25978L10.1957 1.75L19.3913 9.25978V21.0609C19.3913 21.6299 19.176 22.1757 18.7928 22.5781C18.4096 22.9805 17.8898 23.2065 17.3478 23.2065H3.04348C2.50151 23.2065 1.98175 22.9805 1.59852 22.5781C1.21529 22.1757 1 21.6299 1 21.0609V9.25978Z'
        fill={color}
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.61963 22.6957C7.61963 21.273 8.77298 20.1196 10.1957 20.1196C11.6184 20.1196 12.7718 21.273 12.7718 22.6957V24.2501H7.61963V22.6957Z'
        fill={color}
      />
      <path
        d='M7.61963 22.6957C7.61963 21.273 8.77298 20.1196 10.1957 20.1196C11.6184 20.1196 12.7718 21.273 12.7718 22.6957V24.2501H7.61963V22.6957Z'
        stroke='white'
        strokeWidth='2'
      />
    </svg>
  )
}
