import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import { PageEnum } from 'src/constants/page-routes'

import Box from '@mui/material/Box'
import { IconHome, IconCard, IconCalendar, IconPlus, IconSetting } from '../Icons'
import Stack from '@mui/material/Stack'

type RouteType = {
  page: PageEnum
  value: number
  icon: JSX.Element
  className?: string
  disabled?: boolean
}

const routes: RouteType[] = [
  {
    page: PageEnum.Home,
    icon: <IconHome color='#A3A3A3' />,
    value: 0,
  },
  {
    page: PageEnum.Expenses,
    icon: <IconCard color='#A3A3A3' />,
    value: 1,
  },
  {
    page: PageEnum.Add,
    icon: <IconPlus color='#A3A3A3' />,
    value: 2,
    className: 'add',
    disabled: true,
  },
  {
    page: PageEnum.Calendar,
    icon: <IconCalendar color='#A3A3A3' />,
    value: 3,
    disabled: true,
  },
  {
    page: PageEnum.Settings,
    icon: <IconSetting color='#A3A3A3' />,
    value: 4,
    disabled: true,
  },
]

export default function NavigationBar() {
  return (
    <Box
      className='bottom-navigation'
      sx={{
        paddingY: '16px',
        height: '90px',
        backgroundColor: 'white',
      }}
    >
      <Stack direction='row'>
        {routes.map((route) => (
          <Box key={route.page} className={cn('bottom-navigation__item')}>
            <NavLink
              to={route.page}
              className={cn('bottom-navigation__link', route.className)}
              {...(route.disabled && { disabled: true })}
            >
              {route.icon}
            </NavLink>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
