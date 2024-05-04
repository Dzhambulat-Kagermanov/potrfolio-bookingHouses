import SecondButton from '@/components/ui/Buttons/SecondButton'
import useLang from '@/hooks/useLang'
import { Box } from '@mui/material'
import { FC } from 'react'
import ActionBar from './ActionBar/ActionBar'
import Content from './Content/Content'
import NightPrice from './NightPrice/NightPrice'
import Promo from './Promo/Promo'
import TotalPrice from './TotalPrice/TotalPrice'

const Price: FC = () => {
  const lang = useLang()
  return (
    <Box
      sx={{
        width: { md: '435px', sm: '80%', xs: '100%' },
        border: '1px solid black',
        padding: { smallMobile: '25px', xs: '15px' },
        display: 'flex',
        flexFlow: 'wrap column',
        rowGap: '25px',
        margin: { md: 0, xs: '0 auto' },
      }}
    >
      <NightPrice />
      <ActionBar />
      <SecondButton
        styles={{ width: '100%', padding: '20px 0', fontSize: '18px' }}
      >
        {lang.header.bookingBtn}
      </SecondButton>
      <Content />
      <TotalPrice />
      <Promo />
    </Box>
  )
}

export default Price
