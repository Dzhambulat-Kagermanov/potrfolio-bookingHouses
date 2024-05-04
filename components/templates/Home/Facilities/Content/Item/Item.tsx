import MainText from '@/components/ui/Text/MainText'
import { Box } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'
import { IFacilitiesInnerProps } from '../../Facilities'

const Item: FC<IFacilitiesInnerProps> = ({ img, title }) => {
  return (
    <Box
      component='li'
      sx={{
        display: 'flex',
        flexFlow: 'wrap column',
        rowGap: '20px',
        alignItems: 'center',
      }}
    >
      <Image
        src={img}
        width={0}
        height={0}
        style={{ width: '70px', height: '70px' }}
        alt={title}
      />
      <MainText
        styles={{
          textAlign: 'center',
          color: 'white',
          maxWidth: { smallMobile: '144px', xs: '100px' },
          fontSize: { smallMobile: '20px', xs: '16px' },
        }}
      >
        {title}
      </MainText>
    </Box>
  )
}

export default Item
