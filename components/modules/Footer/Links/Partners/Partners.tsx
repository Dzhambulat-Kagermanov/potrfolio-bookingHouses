import { Box } from '@mui/material'
import { FC } from 'react'
import Item from './Item/Item'

const Partners: FC = () => {
  return (
    <Box
      component='ul'
      sx={{
        display: 'flex',
        justifyContent: { mediumMobile: 'flex-start', xs: 'space-between' },
        columnGap: { mediumMobile: '40px', xs: '20px' },
        margin: '50px 0 0 0',
      }}
    >
      <Item img='/images/Footer/paypal-logo.svg' />
      <Item img='/images/Footer/masterCard-logo.svg' />
      <Item img='/images/Footer/visa-logo.svg' />
      <Item img='/images/Footer/bankTransfer-logo.svg' />
    </Box>
  )
}

export default Partners
