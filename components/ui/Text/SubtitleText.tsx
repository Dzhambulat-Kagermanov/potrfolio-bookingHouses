import { IDefaultProps } from '@/types/defaultProps'
import { Typography } from '@mui/material'
import { FC } from 'react'

const SubtitleText: FC<IDefaultProps> = ({ children, styles }) => {
  return (
    <Typography sx={{ fontSize: '26px', fontFamily: 'OpenSansR', ...styles }}>
      {children}
    </Typography>
  )
}

export default SubtitleText
