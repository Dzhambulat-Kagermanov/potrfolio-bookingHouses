import { type buttonEventType } from '@/types/buttonEventType'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'
import { Button } from '@mui/material'
import { FC } from 'react'

interface ActionBtnProps {
  direction: 'left' | 'right'
  iconColor: string
  onClick?: buttonEventType
}
const ActionBtn: FC<ActionBtnProps> = ({ direction, onClick, iconColor }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: '45px',
        height: '45px',
        padding: '10px',
        borderRadius: '50%',
        minWidth: 'auto',
        '&:active': {
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
        },
      }}
    >
      <TrendingFlatIcon
        sx={{
          transform: `${direction === 'right' ? 'rotate(180deg)' : 'rotate(0)'}`,
          width: '100%',
          height: '100%',
          color: `${iconColor ? iconColor : 'white'}`,
        }}
      />
    </Button>
  )
}

export default ActionBtn
