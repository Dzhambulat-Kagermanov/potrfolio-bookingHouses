import { Box } from '@mui/material'
import Image from 'next/image'
import { CSSProperties, FC } from 'react'

interface IBackgroundProps {
  img: string
  styles?: CSSProperties
}
const Background: FC<IBackgroundProps> = ({ img, styles }) => {
  return (
    <Box sx={{ width: '40%', ...styles }}>
      <Image
        src={img}
        width={0}
        height={0}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        alt='the cabins'
      />
    </Box>
  )
}

export default Background
