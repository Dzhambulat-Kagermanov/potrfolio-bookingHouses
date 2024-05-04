import { IDefaultProps } from '@/types/defaultProps'
import { Typography } from '@mui/material'
import { FC } from 'react'

const SecondTitle: FC<IDefaultProps> = ({ children, styles }) => {
  return (
    <Typography sx={{ fontSize: '40px', fontFamily: 'OpenSansR', ...styles }}>
      {children}
    </Typography>
  )
}

export default SecondTitle
