import { IDefaultProps } from '@/types/defaultProps'
import { Typography } from '@mui/material'
import { FC } from 'react'

interface MainTitleProps extends IDefaultProps {
  className?: string
}

const MainTitle: FC<MainTitleProps> = ({ children, styles, className }) => {
  return (
    <Typography
      sx={{
        fontSize: {
          sm: '70px',
          bigMobile: '55px',
          mediumMobile: '48px',
          xs: '39px',
        },
        textAlign: 'end',
        lineHeight: 'calc(100%  / 2 + 40px)',
        fontFamily: 'OpenSansL',
        ...styles,
      }}
      className={className}
    >
      {children}
    </Typography>
  )
}

export default MainTitle
