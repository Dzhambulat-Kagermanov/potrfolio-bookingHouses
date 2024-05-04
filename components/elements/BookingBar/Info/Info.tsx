import useLang from '@/hooks/useLang'
import { anyKeysObjType } from '@/types/anyKeysObjType'
import { Box, Typography } from '@mui/material'
import { FC } from 'react'

const Info: FC<{ price: string; styles?: anyKeysObjType }> = ({
  price,
  styles,
}) => {
  const lang = useLang()
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'wrap column',
        backgroundColor: 'var(--primaryLightGrey)',
        padding: '25px',
        ...styles,
      }}
    >
      <Typography sx={{ fontSize: '14px', fontFamily: 'DinL' }}>
        {lang.homePage.head.actionBar.info.textBefore}
      </Typography>
      <Typography
        sx={{ fontSize: '20px', fontFamily: 'OpenSansSB', lineHeight: '14px' }}
      >
        {price}
      </Typography>
      <Typography
        sx={{ fontSize: '14px', fontFamily: 'DinL', textAlign: 'end' }}
      >
        {lang.homePage.head.actionBar.info.textAfter}
      </Typography>
    </Box>
  )
}

export default Info
