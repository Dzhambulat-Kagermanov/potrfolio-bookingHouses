'use client'

import store from '@/store/store'
import { ScriptProps } from 'next/script'
import { FC } from 'react'
import { Provider } from 'react-redux'
import MUIThemeProvider from './MUIThemeProvider'

const Providers: FC<ScriptProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <MUIThemeProvider>{children}</MUIThemeProvider>
    </Provider>
  )
}

export default Providers
