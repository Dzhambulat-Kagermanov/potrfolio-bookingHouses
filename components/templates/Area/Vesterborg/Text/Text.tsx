import { IDefaultProps } from '@/types/defaultProps'
import { Box, Typography } from '@mui/material'
import { FC } from 'react'

const Text: FC<IDefaultProps> = ({ children, styles }) => {
  return (
    <Box sx={{ margin: '50px 0 0 0', ...styles }}>
      <Typography sx={{ fontSize: '24px', fontFamily: 'OpenSansI' }}>
        {children}
      </Typography>
    </Box>
  )
}

export default Text
