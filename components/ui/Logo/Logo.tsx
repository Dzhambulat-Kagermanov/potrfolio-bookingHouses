import { Box } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

const Logo: FC = () => {
  return (
    <Box sx={{ width: { bigMobile: '70px', xs: '50px' }, height: '65px' }}>
      <Image
        src='/images/logo.svg'
        width={0}
        height={0}
        style={{ width: '100%', height: '100%' }}
        alt='logo'
      />
    </Box>
  )
}

export default Logo
