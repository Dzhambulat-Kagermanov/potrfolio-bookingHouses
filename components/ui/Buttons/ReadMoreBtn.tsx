import { IDefaultProps } from '@/types/defaultProps'
import { Box } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'
interface IReadMoreBtnProps extends IDefaultProps {
  href: string
}
const ReadMoreBtn: FC<IReadMoreBtnProps> = ({ children, styles, href }) => {
  return (
    <Link href={href} style={{ display: 'inline-block' }}>
      <Box
        component='button'
        sx={{
          fontSize: '18px',
          fontFamily: 'OpenSansSB',
          color: 'var(--primaryDarkGrey)',
          display: 'flex',
          flexFlow: 'wrap column',
          '&::after': {
            content: '""',
            width: '100%',
            backgroundColor: 'var(--primaryDarkGrey)',
            height: '2px',
          },
          ...styles,
        }}
      >
        {children}
      </Box>
    </Link>
  )
}

export default ReadMoreBtn
