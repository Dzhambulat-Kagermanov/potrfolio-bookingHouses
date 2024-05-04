import Info from '@/components/modules/Info/Info'
import { infoCarouselSlidersInsideData } from '@/constants/hutData'
import useLang from '@/hooks/useLang'
import { FC } from 'react'

const InsideInfo: FC = () => {
  const lang = useLang()
  return (
    <Info
      direction='reverse'
      title={lang.hut.info.inside.title}
      text={lang.homePage.info.content.text}
      breakpoints={lang.hut.info.inside.breakpoints}
      sliderImages={infoCarouselSlidersInsideData}
      sliderId='Inside'
    />
  )
}

export default InsideInfo
