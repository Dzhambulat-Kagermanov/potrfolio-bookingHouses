import { IDefaultProps } from '@/types/defaultProps'
import { Button } from '@mui/material'
import { FC } from 'react'

interface IMainButton extends IDefaultProps {
  className?: string
}

const MainButton: FC<IMainButton> = ({ children, styles, className }) => {
  return (
    <Button
      variant='contained'
      className={className}
      sx={{
        padding: '18px 40px',
        boxSizing: 'content-box',
        backgroundColor: 'var(--primaryDarkGrey)',
        '&:hover': {
          backgroundColor: 'var(--primaryDarkGreyHover)',
        },
        ...styles,
      }}
    >
      {children}
    </Button>
  )
}

export default MainButton
