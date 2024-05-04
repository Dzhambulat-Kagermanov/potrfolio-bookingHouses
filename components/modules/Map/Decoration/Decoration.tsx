import useLang from '@/hooks/useLang'
import { Box, Typography } from '@mui/material'
import { FC } from 'react'

const Decoration: FC = () => {
  const lang = useLang()
  return (
    <Box>
      <Box>
        <Box>
          <Typography>{lang.homePage.map.label}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Decoration
