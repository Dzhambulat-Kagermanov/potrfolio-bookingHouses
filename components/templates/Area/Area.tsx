'use client'
import MapElem from '@/components/modules/Map/Map'
import { FC } from 'react'
import Charm from './Charm/Charm'
import Drive from './Drive/Drive'
import Experience from './Experiences/Experience'
import HeadElem from './Head/Head'
import Restaurants from './Restauransts/Restaurants'
import TextBlock from './TextBlock/TextBlock'
import Vesterborg from './Vesterborg/Vesterborg'

const AreaPage: FC = () => {
  return (
    <>
      <HeadElem />
      <Vesterborg />
      <TextBlock />
      <Restaurants />
      <Experience />
      <Drive />
      <Charm />
      <MapElem
        coordinates={[56.668212, 10.029416]}
        styles={{ height: '600px' }}
      />
    </>
  )
}

export default AreaPage
