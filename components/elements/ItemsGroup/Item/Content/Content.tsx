import { anyKeysObjType } from '@/types/anyKeysObjType'
import { Box, Typography } from '@mui/material'
import { FC } from 'react'

const Content: FC<{
  children: string
  styles?: anyKeysObjType
}> = ({ children, styles }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        padding: { laptop: '30px 80px', xs: '30px' },
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'var(--primaryLightGrey)',
        zIndex: -1,
        opacity: 0,
        transition: '0.4s ease',
        ...styles,
      }}
    >
      <Typography
        sx={{
          maxHeight: '100%',
          padding: '0 10px 0 0',
          overflow: 'auto',
          width: '100%',
          fontSize: { md: '20px', xs: '16px' },
          fontFamily: 'OpenSansI',
          textAlign: 'center',
          '&::-webkit-scrollbar': {
            width: '4px',
            backgroundColor: 'transparent',
            borderRadius: '5px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'var(--textDarkGrey)',
            borderRadius: '5px',
          },
        }}
      >
        {children}
      </Typography>
    </Box>
  )
}

export default Content
