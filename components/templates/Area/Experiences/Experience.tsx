import Info from '@/components/modules/Info/Info'
import { infoCarouselSlidersExperienceData } from '@/constants/areaData'
import useLang from '@/hooks/useLang'
import { FC } from 'react'

const Experience: FC = () => {
  const lang = useLang()
  return (
    <Info
      direction='reverse'
      title={lang.area.info.experience.title}
      text={lang.homePage.info.content.text}
      sliderImages={infoCarouselSlidersExperienceData}
      sliderId='Experience'
      breakpoints={lang.area.info.experience.breakpoints}
    />
  )
}

export default Experience
