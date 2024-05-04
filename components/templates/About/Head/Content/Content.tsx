import { IDefaultProps } from '@/types/defaultProps'
import { Box } from '@mui/material'
import { FC } from 'react'

const Content: FC<IDefaultProps> = ({ children, styles }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '25px',
        ...styles,
      }}
    >
      {children}
    </Box>
  )
}

export default Content
