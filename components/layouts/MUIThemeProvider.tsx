import { ThemeProvider, createTheme } from '@mui/material'
import { ScriptProps } from 'next/script'
import { FC } from 'react'
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true // 0
    miniMobile: true // 320
    smallMobile: true // 360
    mediumMobile: true // 420
    bigMobile: true // 480
    sm: true //600
    tablet: true // 768
    md: true // 900
    laptop: true // 1024
    lg: true // 1280
    smallScreen: true // 1400
    xl: true // 1536
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#5b6460',
      light: '#e9ece0',
      contrastText: '#333333',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '0 10px !important',
          paddingRight: '0 10px !important',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      miniMobile: 321,
      smallMobile: 361,
      mediumMobile: 421,
      bigMobile: 481,
      sm: 601,
      tablet: 769,
      md: 901,
      laptop: 1025,
      lg: 1281,
      smallScreen: 1401,
      xl: 1537,
    },
  },
})

const MUIThemeProvider: FC<ScriptProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MUIThemeProvider
