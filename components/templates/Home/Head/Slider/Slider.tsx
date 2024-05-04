import { homeHeadSliderSlides } from '@/constants/homeData'
import useLang from '@/hooks/useLang'
import { Box } from '@mui/material'
import { FC } from 'react'
import 'swiper/css'
import { Autoplay, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Item from './Item/Item'
import Navigate from './Navigate/Navigate'
import PaginationLine from './PaginationLine/PaginationLine'
const Slider: FC = () => {
  const lang = useLang()
  const titles = lang.homePage.head.slider.content.title
  const subtitles = lang.homePage.head.slider.content.subtitle

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <Swiper
        loop
        slidesPerView={1}
        autoplay={{
          delay: 3000,
        }}
        scrollbar={{
          el: '#home-head-pagination__line',
        }}
        modules={[Autoplay, Scrollbar]}
        speed={600}
        style={{ position: 'relative', height: '100%' }}
      >
        {homeHeadSliderSlides.map(({ id, img }, index) => {
          return (
            <SwiperSlide
              key={id}
              style={{
                position: 'relative',
                backgroundColor: 'var(--primaryDarkGrey)',
                height: '100%',
              }}
            >
              <Item
                key={id}
                img={img}
                title={titles[index]}
                subtitle={subtitles[index]}
              />
            </SwiperSlide>
          )
        })}
        <Navigate />
        <PaginationLine />
      </Swiper>
    </Box>
  )
}

export default Slider
