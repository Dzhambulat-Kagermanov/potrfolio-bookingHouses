import InfoContent from '@/components/elements/InfoContent/InfoContent'
import useLang from '@/hooks/useLang'
import { Box, Container } from '@mui/material'
import { FC } from 'react'
import Bar from './Bar/Bar'

const Contacts: FC = () => {
  const lang = useLang()
  return (
    <Box className='--parentBlock'>
      <Container
        fixed
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexFlow: { tablet: 'wrap row', xs: 'wrap column-reverse' },
          rowGap: '60px',
        }}
      >
        <InfoContent
          location={lang.homePage.contacts.subtitle}
          phone={lang.homePage.contacts.info.phone}
          mail={lang.homePage.contacts.info.mail}
          title={lang.homePage.contacts.title}
        />
        <Bar styles={{ width: { tablet: 'auto', xs: '100%' } }} />
      </Container>
    </Box>
  )
}

export default Contacts
