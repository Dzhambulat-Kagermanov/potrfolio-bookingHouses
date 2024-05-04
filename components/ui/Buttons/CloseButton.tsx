import { buttonEventType } from '@/types/buttonEventType'
import { Close } from '@mui/icons-material'
import { Box } from '@mui/material'
import { CSSProperties, FC } from 'react'

interface ICloseButtonProps {
  styles?: CSSProperties
  onClick?: buttonEventType
}

const CloseButton: FC<ICloseButtonProps> = ({ styles, onClick }) => {
  return (
    <Box
      sx={{ cursor: 'pointer', width: '60px', height: '60px', ...styles }}
      onClick={onClick}
      component='button'
    >
      <Close sx={{ width: '100%', height: '100%', color: 'white' }} />
    </Box>
  )
}

export default CloseButton
