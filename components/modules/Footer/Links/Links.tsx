import { Box } from '@mui/material'
import { FC } from 'react'
import Nav from './Nav/Nav'
import Partners from './Partners/Partners'

const Links: FC = () => {
  return (
    <Box
      sx={{
        maxWidth: { laptop: 'none', md: '350px', xs: 'none' },
      }}
    >
      <Nav />
      <Partners />
    </Box>
  )
}

export default Links
