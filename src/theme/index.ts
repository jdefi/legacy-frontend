import { black, green, brown, paleVioletRed, darkOrange, white } from './colors'

const theme = {
  borderRadius: 12,
  breakpoints: {
    mobile: 400,
  },
  color: {
    black,
    brown,
    paleVioletRed,
    darkOrange,
    primary: {
      light: paleVioletRed[300],
      main: paleVioletRed[800],
    },
    secondary: {
      main: green[500],
    },
    white,
  },
  siteWidth: 1200,
  spacing: {
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
    6: 48,
    7: 64,
  },
  topBarSize: 72
}

export default theme