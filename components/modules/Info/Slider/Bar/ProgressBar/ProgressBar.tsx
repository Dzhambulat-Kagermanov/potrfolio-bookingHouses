import MainText from '@/components/ui/Text/MainText'
import { Box } from '@mui/material'
import { FC } from 'react'
import './ProgressBar.scss'

interface IHutInfoSliderProgressBarProps {
  itemsQnt: number
  sliderId: string
}

const ProgressBar: FC<IHutInfoSliderProgressBarProps> = ({
  itemsQnt,
  sliderId,
}) => {
  const itemsQntStr: string =
    itemsQnt.toString().length < 2 ? '0'.concat(itemsQnt.toString()) : itemsQnt
  return (
    <Box sx={{ display: 'flex', columnGap: '10px', alignItems: 'center' }}>
      <MainText>01</MainText>
      <Box
        className='hut-info-slider__progressBar'
        id={`hut-info-slider__progressBar--${sliderId}`}
        sx={{
          width: { smallMobile: '130px', xs: '90px' },
          height: '2px',
          borderRadius: '3px',
          backgroundColor: '#DCDCDC',
        }}
      />
      <MainText>{itemsQntStr}</MainText>
    </Box>
  )
}

export default ProgressBar
