import ItemsGroup from '@/components/elements/ItemsGroup/ItemsGroup'
import SecondTitle from '@/components/ui/Title/SecondTitle'
import { homeImagesGroupData } from '@/constants/homeData'
import useLang from '@/hooks/useLang'
import { Box, Container } from '@mui/material'
import { FC } from 'react'

const Gallery: FC = () => {
  const lang = useLang()
  return (
    <Box>
      <Container fixed>
        <SecondTitle
          styles={{
            maxWidth: '540px',
            margin: '0 auto 50px auto',
            textAlign: 'center',
          }}
        >
          {lang.about.gallery.title}
        </SecondTitle>
        <ItemsGroup items={homeImagesGroupData} />
      </Container>
    </Box>
  )
}

export default Gallery
