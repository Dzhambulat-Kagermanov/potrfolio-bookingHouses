'use client'

import ItemsGroup from '@/components/elements/ItemsGroup/ItemsGroup'
import { homeImagesGroupData } from '@/constants/homeData'
import { FC } from 'react'
import Contacts from './Contacts/Contacts'
import Facilities from './Facilities/Facilities'
import Head from './Head/Head'
import Info from './Info/Info'
import Map from './Map/Map'

const HomePage: FC = () => {
  return (
    <>
      <Head />
      <Info />
      <ItemsGroup items={homeImagesGroupData} />
      <Map />
      <Facilities />
      <Contacts />
    </>
  )
}

export default HomePage
