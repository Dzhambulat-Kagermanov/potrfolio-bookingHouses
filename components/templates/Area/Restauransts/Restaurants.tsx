import Info from '@/components/modules/Info/Info'
import { infoCarouselSlidersRestaurantsData } from '@/constants/areaData'
import useLang from '@/hooks/useLang'
import { FC } from 'react'

const Restaurants: FC = () => {
  const lang = useLang()
  return (
    <Info
      title={lang.area.info.restaurants.title}
      text={lang.homePage.info.content.text}
      sliderImages={infoCarouselSlidersRestaurantsData}
      sliderId='Restaurants'
      breakpoints={lang.area.info.restaurants.breakpoints}
    />
  )
}

export default Restaurants
