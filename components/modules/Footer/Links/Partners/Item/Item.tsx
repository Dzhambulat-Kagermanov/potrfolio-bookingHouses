import { Box } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

const Item: FC<{ img: string }> = ({ img }) => {
  return (
    <Box component='li'>
      <Image
        src={img}
        width={0}
        height={0}
        style={{
          width: 'auto',
          height: 'auto',
          maxWidth: '50px',
          maxHeight: '50px',
        }}
        alt='partnersLogo'
      />
    </Box>
  )
}

export default Item
