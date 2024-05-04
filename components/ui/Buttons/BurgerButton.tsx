import { buttonEventType } from '@/types/buttonEventType'
import { Box } from '@mui/material'
import { CSSProperties, FC } from 'react'

interface IBurgerMenuBtnProps {
  onClick?: buttonEventType
  styles?: CSSProperties
}

const BurgerButton: FC<IBurgerMenuBtnProps> = ({ onClick, styles }) => {
  return (
    <Box
      component='button'
      onClick={onClick}
      sx={{
        width: '40px',
        display: { md: 'none', xs: 'flex' },
        flexFlow: 'wrap column',
        rowGap: '10px',
        ...styles,
      }}
    >
      <span
        style={{ width: '100%', height: '2px', backgroundColor: 'black' }}
      />
      <span
        style={{ width: '100%', height: '2px', backgroundColor: 'black' }}
      />
      <span
        style={{ width: '100%', height: '2px', backgroundColor: 'black' }}
      />
    </Box>
  )
}

export default BurgerButton
