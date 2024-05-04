import Info from '@/components/modules/Info/Info'
import { infoCarouselSlidersVesterborgData } from '@/constants/areaData'
import useLang from '@/hooks/useLang'
import { FC } from 'react'
import Text from './Text/Text'

const Vesterborg: FC = () => {
  const lang = useLang()
  return (
    <Info
      contentTextBefore={
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing...</Text>
      }
      title='Vesterborg'
      text={lang.homePage.info.content.text}
      sliderImages={infoCarouselSlidersVesterborgData}
      sliderId='Vesterborg'
    />
  )
}

export default Vesterborg
