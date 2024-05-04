import Info from '@/components/modules/Info/Info'
import { aboutInfoSliderSlides } from '@/constants/aboutData'
import useLang from '@/hooks/useLang'
import { FC } from 'react'

const AboutInfo: FC = () => {
  const lang = useLang()
  return (
    <Info
      sliderId='AboutUs'
      text={lang.about.info.about.text}
      title={lang.about.info.about.title}
      sliderImages={aboutInfoSliderSlides}
      titleStyles={{
        fontSize: {
          lg: '40px',
          md: '30px',
          tablet: '24px',
          bigMobile: '34px',
          xs: '28px',
        },
        textAlign: { tablet: 'start', xs: 'center' },
      }}
    />
  )
}

export default AboutInfo
