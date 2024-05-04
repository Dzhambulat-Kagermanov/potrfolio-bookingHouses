import { buttonEventType } from '@/types/buttonEventType'
import { IDefaultProps } from '@/types/defaultProps'
import { Button } from '@mui/material'
import { FC } from 'react'

interface IHeadButtonProps extends IDefaultProps {
  onClick?: buttonEventType
}

const HeadButton: FC<IHeadButtonProps> = ({ children, onClick, styles }) => {
  return (
    <Button
      variant='outlined'
      onClick={onClick}
      sx={{
        padding: '15px 30px',
        border: '1px solid white',
        color: 'white',
        borderRadius: 0,
        transition: '0.1s ease',
        textTransform: 'uppercase',
        letterSpacing: '2.5px',
        '&:hover': {
          border: '1px solid white',
          transform: 'scale(1.05)',
        },
        ...styles,
      }}
    >
      {children}
    </Button>
  )
}

export default HeadButton
