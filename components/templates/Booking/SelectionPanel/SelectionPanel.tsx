import { Box, Container } from '@mui/material'
import { FC } from 'react'
import Price from './Price/Price'
import Services from './Services/Services'

const SelectionPanel: FC = () => {
  return (
    <Box className='--parentBlock'>
      <Container
        maxWidth='xl'
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexFlow: { md: 'nowrap row', xs: 'wrap column' },
          gap: '50px',
          justifyContent: 'space-between',
        }}
      >
        <Services />
        <Price />
      </Container>
    </Box>
  )
}

export default SelectionPanel
