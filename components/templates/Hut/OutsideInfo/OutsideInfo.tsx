import Info from '@/components/modules/Info/Info'
import { infoCarouselSlidersOutsideData } from '@/constants/hutData'
import useLang from '@/hooks/useLang'
import { FC } from 'react'

const OutsideInfo: FC = () => {
  const lang = useLang()
  return (
    <Info
      title={lang.hut.info.outside.title}
      text={lang.homePage.info.content.text}
      breakpoints={lang.hut.info.outside.breakpoints}
      sliderImages={infoCarouselSlidersOutsideData}
      sliderId='Outside'
    />
  )
}

export default OutsideInfo
