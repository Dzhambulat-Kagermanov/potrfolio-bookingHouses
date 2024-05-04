import SecondTitle from '@/components/ui/Title/SecondTitle'
import useLang from '@/hooks/useLang'
import { Box, Container } from '@mui/material'
import { FC } from 'react'
import Content from './Content/Content'

export interface IFacilitiesInnerProps {
  img: string
  title: string
  id?: number
}
const Facilities: FC = () => {
  const lang = useLang()
  const facilitiesData = [
    {
      id: 1,
      img: '/images/Home/Facilities/fridge.svg',
      title: lang.homePage.facilities.content.fridge,
    },
    {
      id: 2,
      img: '/images/Home/Facilities/kitchen.svg',
      title: lang.homePage.facilities.content.kitchen,
    },
    {
      id: 3,
      img: '/images/Home/Facilities/coffee.svg',
      title: lang.homePage.facilities.content.coffee,
    },
    {
      id: 4,
      img: '/images/Home/Facilities/kettle.svg',
      title: lang.homePage.facilities.content.kettle,
    },
    {
      id: 5,
      img: '/images/Home/Facilities/parking.svg',
      title: lang.homePage.facilities.content.parking,
    },
    {
      id: 6,
      img: '/images/Home/Facilities/views.svg',
      title: lang.homePage.facilities.content.views,
    },
    {
      id: 7,
      img: '/images/Home/Facilities/floorHeating.svg',
      title: lang.homePage.facilities.content.floorHeating,
    },
    {
      id: 8,
      img: '/images/Home/Facilities/v230.svg',
      title: lang.homePage.facilities.content.v230,
    },
    {
      id: 9,
      img: '/images/Home/Facilities/network.svg',
      title: lang.homePage.facilities.content.network,
    },
    {
      id: 10,
      img: '/images/Home/Facilities/shower.svg',
      title: lang.homePage.facilities.content.shower,
    },
    {
      id: 11,
      img: '/images/Home/Facilities/toilet.svg',
      title: lang.homePage.facilities.content.toilet,
    },
    {
      id: 12,
      img: '/images/Home/Facilities/towels.svg',
      title: lang.homePage.facilities.content.towels,
    },
  ]

  return (
    <Box
      sx={{ backgroundColor: 'var(--primaryDarkGrey)' }}
      className='--parentBlock'
    >
      <Container
        fixed
        sx={{
          padding: '100px 0',
          display: 'flex',
          alignItems: 'center',
          flexFlow: 'wrap column',
          rowGap: '70px',
        }}
      >
        <SecondTitle styles={{ color: 'white' }}>
          {lang.homePage.facilities.title}
        </SecondTitle>
        <Content itemsData={facilitiesData} />
      </Container>
    </Box>
  )
}

export default Facilities
