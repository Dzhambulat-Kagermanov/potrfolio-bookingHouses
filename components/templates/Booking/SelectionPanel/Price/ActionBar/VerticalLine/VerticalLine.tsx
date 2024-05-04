import { Box } from '@mui/material'
import { CSSProperties, FC } from 'react'

interface IVerticalLineProps {
  styles?: CSSProperties
}

const VerticalLine: FC<IVerticalLineProps> = ({ styles }) => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '1px',
        backgroundColor: 'black',
        ...styles,
      }}
    />
  )
}

export default VerticalLine
