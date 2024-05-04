import BookingBar from '@/components/elements/BookingBar/BookingBar'
import { Container } from '@mui/material'
import { CSSProperties, FC } from 'react'

interface ISliderBarProps {
  styles?: CSSProperties
}

const SliderBar: FC<ISliderBarProps> = ({ styles }) => {
  return (
    <Container
      fixed
      sx={{
        ...styles,
      }}
    >
      <BookingBar />
    </Container>
  )
}

export default SliderBar
