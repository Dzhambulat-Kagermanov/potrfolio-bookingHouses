import { useAppDispatch } from '@/hooks/reduxHooks'
import { setActionFuncState } from '@/store/infoModule/infoSlice'
import { Box } from '@mui/material'
import Image from 'next/image'
import { FC, useEffect, useRef } from 'react'
import 'swiper/css'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IInfoSliderImg } from '../../Info'

const Content: FC<IInfoSliderImg> = ({ sliderImages, sliderId }) => {
  const swiperRef = useRef()
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (swiperRef.current) {
      dispatch({
        type: setActionFuncState.type,
        payload: { type: sliderId, func: swiperRef.current },
      })
      dispatch({
        type: setActionFuncState.type,
        payload: { type: sliderId, func: swiperRef.current },
      })
    }
  }, [swiperRef, sliderId, dispatch])

  return (
    <Swiper
      loop
      slidesPerView={1}
      style={{ width: '100%' }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper
      }}
      pagination={{
        el: `#hut-info-slider__progressBar--${sliderId}`,
        type: 'progressbar',
      }}
      modules={[Pagination]}
    >
      {sliderImages.map(({ img, id, type }) => {
        return (
          <SwiperSlide key={id}>
            <Box sx={{ height: { sm: '480px', xs: '360px' } }}>
              <Image
                src={img}
                width={0}
                height={0}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                alt={type}
              />
            </Box>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Content
