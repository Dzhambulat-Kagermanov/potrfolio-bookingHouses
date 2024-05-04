'use client'

import { FC } from 'react'
import AboutInfo from './AboutInfo/AboutInfo'
import Form from './Form/Form'
import Gallery from './Gallery/Gallery'
import HeadElem from './Head/Head'

const AboutPage: FC = () => {
  return (
    <>
      <HeadElem />
      <AboutInfo />
      <Gallery />
      <Form />
    </>
  )
}

export default AboutPage
