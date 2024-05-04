import { useAppSelector } from '@/hooks/reduxHooks'
import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { IInfoContentBreakpoints, IInfoSliderId } from '../../Info'

interface IInfoContentBreakpointsProps
  extends IInfoContentBreakpoints,
    IInfoSliderId {}

const Breakpoints: FC<IInfoContentBreakpointsProps> = ({
  breakpoints,
  sliderId,
}) => {
  const swiperData = useAppSelector((state) => {
    return state.info.infoCombine.actionFuncs[sliderId]
  })
  return (
    <Box sx={{ display: 'flex', columnGap: '20px', margin: '50px 0 0 0' }}>
      {breakpoints.map(({ link, imgId }) => {
        return (
          <Typography
            sx={{
              fontSize: '20px',
              fontFamily: 'OpenSansI',
              cursor: 'pointer',
            }}
            key={imgId}
            onClick={() => {
              swiperData.slideTo(imgId - 1)
            }}
          >
            {link}
          </Typography>
        )
      })}
    </Box>
  )
}

export default Breakpoints
