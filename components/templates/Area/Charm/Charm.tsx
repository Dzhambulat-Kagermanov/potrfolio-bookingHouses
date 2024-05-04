import Info from '@/components/modules/Info/Info'
import { infoCarouselSlidersCharmData } from '@/constants/areaData'
import useLang from '@/hooks/useLang'
import { FC } from 'react'

const Charm: FC = () => {
  const lang = useLang()
  return (
    <Info
      direction='reverse'
      title={lang.area.info.charm.title}
      text={lang.homePage.info.content.text}
      sliderImages={infoCarouselSlidersCharmData}
      sliderId='Charm'
      breakpoints={lang.area.info.charm.breakpoints}
    />
  )
}

export default Charm
