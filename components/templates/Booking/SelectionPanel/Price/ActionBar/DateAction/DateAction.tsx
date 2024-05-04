import MainText from '@/components/ui/Text/MainText'
import { useAppSelector } from '@/hooks/reduxHooks'
import { Box, Typography } from '@mui/material'
import { FC } from 'react'

interface IDateActionProps {
  title: string
  type: 'in' | 'out'
}

const DateAction: FC<IDateActionProps> = ({ title, type }) => {
  const date = useAppSelector((state) => {
    const thisDateVal =
      (type === 'in' && state.booking.booking.checkIn) ||
      (type === 'out' && state.booking.booking.checkOut)
    return thisDateVal
  })
  return (
    <Box
      sx={{
        display: 'flex',
        columnGap: { md: '20px', xs: '65px' },
        borderBottom: { bigMobile: 'none', xs: '1px solid black' },
        padding: { bigMobile: 0, xs: '0 0 20px 0' },
      }}
    >
      <Box>
        <Typography sx={{ fontFamily: 'DinL', fontSize: '16px' }}>
          {title}
        </Typography>
        <Box
          onClick={() => {
            console.log('ok')
          }}
        >
          <MainText styles={{ color: 'var(--textLightGreen)' }}>
            {date}
          </MainText>
        </Box>
      </Box>
    </Box>
  )
}

export default DateAction
