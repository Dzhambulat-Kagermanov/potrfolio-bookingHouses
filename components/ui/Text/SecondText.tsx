import { IDefaultProps } from '@/types/defaultProps'
import { Typography } from '@mui/material'
import { FC } from 'react'

const SecondText: FC<IDefaultProps> = ({ children, styles }) => {
  return (
    <Typography sx={{ fontSize: '18px', fontFamily: 'OpenSansSB', ...styles }}>
      {children}
    </Typography>
  )
}

export default SecondText
