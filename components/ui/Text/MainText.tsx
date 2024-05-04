import { IDefaultProps } from '@/types/defaultProps'
import { Typography } from '@mui/material'
import { FC } from 'react'

const MainText: FC<IDefaultProps> = ({ children, styles }) => {
  return (
    <Typography sx={{ fontSize: '20px', fontFamily: 'OpenSansL', ...styles }}>
      {children}
    </Typography>
  )
}

export default MainText
