import { Box } from '@mui/material'
import { FC } from 'react'
import { IInfoSliderImg } from '../Info'
import Bar from './Bar/Bar'
import Content from './Content/Content'

const Slider: FC<IInfoSliderImg> = ({ sliderImages, sliderId }) => {
  return (
    <Box sx={{ width: { tablet: '50%', xs: '100%' } }}>
      <Content sliderImages={sliderImages} sliderId={sliderId} />
      <Bar sliderId={sliderId} itemsQnt={sliderImages.length} />
    </Box>
  )
}

export default Slider
