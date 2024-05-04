import BookingBar from '@/components/elements/BookingBar/BookingBar'
import { Box } from '@mui/material'
import Image from 'next/image'
import { CSSProperties, FC } from 'react'
import './Bar.scss'

interface IHomeContactsBarProps {
  styles?: CSSProperties
}

const Bar: FC<IHomeContactsBarProps> = ({ styles }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'wrap column',
        ...styles,
      }}
    >
      <Image
        src='/images/Home/Contacts/item-1.png'
        width={0}
        height={0}
        style={{ width: '100%', flexGrow: 1, height: 'auto' }}
        alt='book image'
      />
      <BookingBar styles={{}} btnStyles={{ width: '100%' }} />
    </Box>
  )
}

export default Bar
