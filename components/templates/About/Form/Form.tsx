import InfoContent from '@/components/elements/InfoContent/InfoContent'
import useLang from '@/hooks/useLang'
import { Box, Container } from '@mui/material'
import { FC } from 'react'
import Content from './Content/Content'

const Form: FC = () => {
  const lang = useLang()
  return (
    <Box className='--parentBlock'>
      <Container
        fixed
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexFlow: { tablet: 'nowrap row', xs: 'wrap column' },
          gap: '50px',
        }}
      >
        <InfoContent
          styles={{ maxWidth: { tablet: '385px', xs: '100%' } }}
          location={lang.homePage.contacts.subtitle}
          phone={lang.homePage.contacts.info.phone}
          mail={lang.homePage.contacts.info.mail}
          title={lang.homePage.contacts.title}
        />
        <Content styles={{ maxWidth: { tablet: '50%', xs: '100%' } }} />
      </Container>
    </Box>
  )
}

export default Form
