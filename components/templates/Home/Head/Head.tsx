import { Box } from '@mui/material'
import { FC } from 'react'
import Slider from './Slider/Slider'
import SliderBar from './Slider/SliderBar/SliderBar'

const Head: FC = () => {
  return (
    <Box
      className='--parentBlock'
      sx={{
        position: 'relative',
        height: {
          laptop: '700px',
          md: '600px',
          bigMobile: '550px',
          xs: '400px',
        },
      }}
    >
      <Slider />
      <SliderBar
        styles={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translate(-50%, 50%)',
          zIndex: 2,
        }}
      />
    </Box>
  )
}

export default Head
