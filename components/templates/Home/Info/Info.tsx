import TextContent from '@/components/elements/TextContent/TextContent'
import useLang from '@/hooks/useLang'
import { Box, Container } from '@mui/material'
import { FC } from 'react'
import Background from './Background/Background'

const Info: FC = () => {
  const lang = useLang()
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'flex-end' }}
      className='--parentBlock'
    >
      <Container
        fixed
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <TextContent
          styles={{
            maxWidth: { tablet: '40%', xs: 'none' },
            filter: {
              tablet: 'none',
              xs: 'drop-shadow(0px 0px 9px rgba(0,0,0,0.5))',
            },
          }}
          title={lang.homePage.info.content.title}
          text={lang.homePage.info.content.text}
          btnText={lang.homePage.info.content.button}
          btnHref='/cabins/info'
        />
        <Background
          img='/images/Home/Info/item-1.png'
          styles={{
            opacity: { tablet: 1, xs: '0.4' },
            position: { tablet: 'static', xs: 'absolute' },
            top: 0,
            zIndex: -1,
            width: { tablet: '50%', xs: '60%' },
            height: '100%',
            right: { tablet: 'auto', xs: '16px' },
          }}
        />
      </Container>
    </Box>
  )
}

export default Info
