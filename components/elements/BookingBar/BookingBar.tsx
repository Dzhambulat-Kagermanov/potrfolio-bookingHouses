import SecondButton from '@/components/ui/Buttons/SecondButton'
import useLang from '@/hooks/useLang'
import { Box } from '@mui/material'
import { CSSProperties, FC } from 'react'
import Info from './Info/Info'

interface IBookingBarProps {
  styles?: CSSProperties
  btnStyles?: CSSProperties
}

const BookingBar: FC<IBookingBarProps> = ({ styles, btnStyles }) => {
  const lang = useLang()
  return (
    <Box
      sx={{
        display: 'flex',
        height: { bigMobile: '106px', xs: '90px' },
        ...styles,
      }}
    >
      <SecondButton
        className='booking-bar-book__btn'
        styles={{
          height: '100%',
          padding: { sm: '0 80px', xs: '0 40px' },
          width: { bigMobile: 'auto', mediumMobile: '100%' },
          fontSize: '18px',
          ...btnStyles,
        }}
      >
        {lang.header.bookingBtn}
      </SecondButton>
      <Info
        price='&#8364;1400'
        styles={{ padding: { bigMobile: '25px', xs: '17px 25px' } }}
      />
    </Box>
  )
}

export default BookingBar
