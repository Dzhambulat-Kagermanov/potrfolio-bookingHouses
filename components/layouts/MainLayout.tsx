'use client'

import { ScriptProps } from 'next/script'
import { FC } from 'react'
import BurgerMenu from '../modules/BurgerMenu/BurgerMenu'
import Footer from '../modules/Footer/Footer'
import Header from '../modules/Header/Header'

const MainLayout: FC<ScriptProps> = ({ children }) => {
  return (
    <>
      <Header />
      <BurgerMenu />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
