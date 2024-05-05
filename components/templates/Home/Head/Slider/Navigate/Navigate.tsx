'use client'

import ActionBtn from '@/components/ui/Buttons/ActionBtn'
import { Box } from '@mui/material'
import { FC } from 'react'
import { useSwiper } from 'swiper/react'

const Navigate: FC = () => {
  const swiper = useSwiper()

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '75px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        display: 'flex',
        columnGap: '10px',
      }}
    >
      <ActionBtn
        direction='right'
        onClick={() => {
          swiper.slidePrev()
        }}
      />
      <ActionBtn
        direction='left'
        onClick={() => {
          swiper.slideNext()
        }}
      />
    </Box>
  )
}

export default Navigate
