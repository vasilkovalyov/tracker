import cn from 'classnames'
import { Box, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import { LayoutType } from './Layout.type'
import { Header } from '../Header'
import { NavigationBar } from '../NavigationBar'

export default function Layout({ children, className, pageName }: LayoutType) {
  return (
    <Box className={cn('wrapper', className)}>
      <Box position='relative'>
        <Header />
        <Typography
          variant='h1'
          marginBottom={0}
          sx={{
            position: 'absolute',
            top: '46px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {pageName}
        </Typography>
      </Box>
      <Box component='main' className='main'>
        <Container>{children}</Container>
      </Box>
      <NavigationBar />
    </Box>
  )
}
