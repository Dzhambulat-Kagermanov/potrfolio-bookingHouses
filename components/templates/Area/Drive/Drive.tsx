import Info from '@/components/modules/Info/Info'
import { infoCarouselSlidersDriveData } from '@/constants/areaData'
import useLang from '@/hooks/useLang'
import { FC } from 'react'

const Drive: FC = () => {
  const lang = useLang()
  return (
    <Info
      title={lang.area.info.drive.title}
      text={lang.homePage.info.content.text}
      sliderImages={infoCarouselSlidersDriveData}
      sliderId='Drive'
      breakpoints={lang.area.info.drive.breakpoints}
    />
  )
}

export default Drive
