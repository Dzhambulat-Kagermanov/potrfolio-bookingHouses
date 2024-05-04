'use client'

import Head from '@/components/modules/Head/Head'
import useLang from '@/hooks/useLang'
import { FC } from 'react'
import InsideInfo from './InsideInfo/InsideInfo'
import OutsideInfo from './OutsideInfo/OutsideInfo'
import Practicalities from './Practicalities/Practicalities'

const HutPage: FC = () => {
  const lang = useLang()
  return (
    <>
      <Head
        title={lang.hut.head.title}
        background={'/images/Hut/Head/backgroundImg.png'}
      />
      <OutsideInfo />
      <InsideInfo />
      <Practicalities />
    </>
  )
}

export default HutPage
