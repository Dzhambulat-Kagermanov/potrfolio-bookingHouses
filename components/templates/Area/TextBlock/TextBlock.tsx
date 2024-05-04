import SecondTitle from '@/components/ui/Title/SecondTitle'
import { Box, Container } from '@mui/material'
import Image from 'next/image'
import { CSSProperties, FC } from 'react'

const TextBlock: FC<{ styles?: CSSProperties }> = ({ styles }) => {
  return (
    <Box className='--parentBlock'>
      <Container
        fixed
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          columnGap: '60px',
          rowGap: '25px',
          flexFlow: { bigMobile: 'nowrap row', xs: 'wrap column' },
          ...styles,
        }}
      >
        <SecondTitle
          styles={{
            maxWidth: { tablet: '400px', bigMobile: '200px', xs: 'none' },
            textAlign: { bigMobile: 'start', xs: 'center' },
            fontSize: { tablet: '40px', mediumMobile: '35px', xs: '28px' },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing...
        </SecondTitle>
        <Box
          sx={{
            width: { tablet: '430px', bigMobile: '350px', xs: 'auto' },
          }}
        >
          <Image
            src='/images/Area/Info/TextBlock/backgroundImg.png'
            width={0}
            height={0}
            style={{ width: 'inherit', height: 'auto' }}
            alt='Copenhagen'
          />
        </Box>
      </Container>
    </Box>
  )
}

export default TextBlock
