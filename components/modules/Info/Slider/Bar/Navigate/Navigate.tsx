import ActionBtn from '@/components/ui/Buttons/ActionBtn'
import { useAppSelector } from '@/hooks/reduxHooks'
import { Box } from '@mui/material'
import { FC } from 'react'

interface IHutSliderBarNavigateProps {
  sliderId: string
}

const Navigate: FC<IHutSliderBarNavigateProps> = ({ sliderId }) => {
  const actionFuncs = useAppSelector((state) => {
    return state.info.infoCombine.actionFuncs[sliderId]
  })
  return (
    <Box sx={{ display: 'flex', columnGap: '20px' }}>
      <ActionBtn
        iconColor='black'
        direction='right'
        onClick={() => {
          actionFuncs.slidePrev()
        }}
      />
      <ActionBtn
        iconColor='black'
        direction='left'
        onClick={() => {
          actionFuncs.slideNext()
        }}
      />
    </Box>
  )
}

export default Navigate
