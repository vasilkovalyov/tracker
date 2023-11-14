import { createTheme } from '@mui/material/styles'

import colors from './colors-primary'

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Roboto, sans-serif',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: colors.primary,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.white,
    },
    success: {
      main: colors.green,
      contrastText: colors.white,
    },
    info: {
      dark: colors.grey_dark,
      main: colors.grey,
      contrastText: colors.white,
      light: colors.grey_light,
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        select: {
          width: '100%',
          backgroundColor: colors.primary,
          marginTop: 0,
          height: 20,
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 20,
          paddingRight: 20,
          borderRadius: 20,
          overflow: 'hidden',
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: 'transparent',
        },
      },
    },
  },
})

// **** TYPOGRAPHY ****
const fontSizeH1 = {
  color: colors.black,
  fontSize: 24,
  fontWeight: 500,
  marginBottom: 16,
  border: 'none',
  borderBlockColor: 'transparent',
  fontFamily: 'Roboto, sans-serif',
}

theme.typography.h1 = fontSizeH1
theme.typography.h2 = fontSizeH1

theme.typography.h3 = {
  color: colors.black,
  fontSize: 20,
  marginBottom: 16,
  border: 0,
  fontWeight: 500,
  fontFamily: 'Roboto, sans-serif',
}

theme.typography.h4 = {
  color: colors.black,
  fontSize: 18,
  marginBottom: 16,
  border: 0,
  fontWeight: 500,
  fontFamily: 'Roboto, sans-serif',
}

theme.typography.h5 = {
  color: colors.black,
  fontSize: 16,
  marginBottom: 16,
  fontWeight: 500,
  fontFamily: 'Roboto, sans-serif',
}

theme.typography.h6 = {
  color: colors.black,
  fontSize: 14,
  marginBottom: 16,
  border: 0,
  fontWeight: 400,
  fontFamily: 'Roboto, sans-serif',
}

theme.typography.body1 = {
  color: colors.grey_dark,
  fontSize: 16,
  marginBottom: 16,
  border: 0,
  fontFamily: 'Roboto, sans-serif',
}

theme.typography.body2 = {
  color: colors.grey_dark,
  fontSize: 16,
  marginBottom: 16,
  border: 0,
  fontFamily: 'Roboto, sans-serif',
}

theme.typography.subtitle1 = {
  fontSize: 12,
  color: colors.grey,
  fontWeight: 400,
  marginBottom: 16,
  fontFamily: 'Roboto, sans-serif',
}

theme.typography.subtitle2 = {
  fontSize: 12,
  color: colors.grey,
  fontWeight: 300,
  marginBottom: 16,
  fontFamily: 'Roboto, sans-serif',
}

// ************

export default theme
