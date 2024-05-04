import Info from '@/components/modules/Info/Info'
import { infoCarouselSlidersPracticalitiesData } from '@/constants/hutData'
import useLang from '@/hooks/useLang'
import { FC } from 'react'

const Practicalities: FC = () => {
  const lang = useLang()
  return (
    <Info
      title={lang.hut.info.practicalities.title}
      text={lang.homePage.info.content.text}
      breakpoints={lang.hut.info.practicalities.breakpoints}
      sliderImages={infoCarouselSlidersPracticalitiesData}
      sliderId='Practicalities'
    />
  )
}

export default Practicalities
