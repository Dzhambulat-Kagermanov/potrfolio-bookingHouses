import useLang from '@/hooks/useLang'
import { Box, TextField, Typography } from '@mui/material'
import { FC } from 'react'

const Newsletter: FC = () => {
  const lang = useLang()
  return (
    <Box sx={{ maxWidth: { sm: '400px', xs: 'none' } }}>
      <Typography
        component='h2'
        sx={{
          fontFamily: 'OpenSansSB',
          fontSize: '18px',
        }}
      >
        {lang.footer.newsletter.title}
      </Typography>
      <TextField
        placeholder={lang.footer.newsletter.fieldPlaceholder}
        variant='standard'
        sx={{
          margin: '40px 0 0 0',
          width: '100%',
          'MuiInputBase-root::before': {
            borderColor: 'white',
          },
          input: {
            '&::placeholder': {
              fontFamily: 'OpenSansI',
              fontSize: '18px',
              opacity: 1,
            },
            fontFamily: 'OpenSansL',
            fontSize: '18px',
            color: 'white',
          },
        }}
      />
      <Typography
        component='h4'
        sx={{
          margin: '20px 0 70px 0',
          fontFamily: 'OpenSansL',
          fontSize: { sm: '18px', mediumMobile: '16px', xs: '14px' },
        }}
      >
        {lang.footer.newsletter.subtitle}
      </Typography>
      <Typography
        component='h5'
        sx={{
          fontFamily: 'OpenSansL',
          fontSize: '14px',
        }}
      >
        {lang.footer.newsletter.endingText}
      </Typography>
    </Box>
  )
}

export default Newsletter
