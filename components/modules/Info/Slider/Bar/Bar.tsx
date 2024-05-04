import { Box } from '@mui/material'
import { FC } from 'react'
import Navigate from './Navigate/Navigate'
import ProgressBar from './ProgressBar/ProgressBar'

interface IInfoSliderBarProps {
  sliderId: string
  itemsQnt: number
}

const Bar: FC<IInfoSliderBarProps> = ({ sliderId, itemsQnt }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '50px 0 0 0',
      }}
    >
      <Navigate sliderId={sliderId} />
      <ProgressBar itemsQnt={itemsQnt} sliderId={sliderId} />
    </Box>
  )
}

export default Bar
