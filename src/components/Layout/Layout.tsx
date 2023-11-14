import cn from 'classnames';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import { LayoutType } from './Layout.type';
import { Header } from '../Header';
import { NavigationBar } from '../NavigationBar';

export default function Layout({ children, className }: LayoutType) {
  return (
    <Box className={cn('wrapper', className)}>
      <Header />
      <Box component="main" className="main">
        <Container>{children}</Container>
      </Box>
      <NavigationBar />
    </Box>
  );
}
