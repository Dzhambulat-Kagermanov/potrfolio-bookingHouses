import MainTitle from '@/components/ui/Title/MainTitle'
import { Box, Container, Typography } from '@mui/material'
import { FC } from 'react'

interface SLiderContentProps {
  title: string
  subtitle: string
}

const Content: FC<SLiderContentProps> = ({ title, subtitle }) => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'absolute',
        top: { bigMobile: '95px', xs: '60px' },
        right: 0,
        zIndex: 2,
      }}
    >
      <Container fixed>
        <Box
          sx={{
            padding: '0 0 0 20px',
            display: 'flex',
            rowGap: '20px',
            flexFlow: 'wrap column',
            alignItems: 'flex-end',
          }}
        >
          <MainTitle styles={{ color: 'white' }}>{title}</MainTitle>
          <Typography
            sx={{
              maxWidth: '335px',
              textAlign: 'center',
              color: 'white',
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Content
