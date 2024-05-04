import { type buttonEventType } from '@/types/buttonEventType'
import { Button } from '@mui/material'
import { ReactElement, type CSSProperties, type FC } from 'react'

interface ISecondButtonProps {
  children: string | ReactElement
  onClick?: buttonEventType
  styles?: CSSProperties
  className?: string
  type?: string
}
const SecondButton: FC<ISecondButtonProps> = ({
  children,
  onClick,
  styles,
  className,
  type,
}) => {
  return (
    <Button
      type={type}
      className={className}
      onClick={onClick}
      variant='contained'
      disableElevation
      sx={{
        padding: '15px 40px',
        background: 'var(--primaryDarkGrey)',
        color: 'white',
        borderRadius: '0px',
        '&:hover': {
          backgroundColor: 'var(--primaryDarkGreyHover)',
        },
        fontSize: '14px',
        fontFamily: 'DinL',
        letterSpacing: '1.6px',
        ...styles,
      }}
    >
      {children}
    </Button>
  )
}

export default SecondButton
