import { Box, Container } from '@mui/material'
import { FC } from 'react'
import Links from './Links/Links'
import Newsletter from './Newsletter/Newsletter'

const Footer: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'var(--primaryDarkGrey)',
        padding: '80px 0',
        color: 'white',
      }}
    >
      <Container
        component='footer'
        fixed
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          columnGap: '80px',
          flexFlow: 'wrap',
          rowGap: '60px',
        }}
      >
        <Newsletter />
        <Links />
      </Container>
    </Box>
  )
}

export default Footer
