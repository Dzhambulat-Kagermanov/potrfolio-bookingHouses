import MainText from '@/components/ui/Text/MainText'
import { useAppDispatch } from '@/hooks/reduxHooks'
import { setGuests } from '@/store/booking/bookingCheckSlice'
import { Add, Remove } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { FC, useState } from 'react'

interface IGuestActionProps {
  title: string
}

const GuestAction: FC<IGuestActionProps> = ({ title }) => {
  const dispatch = useAppDispatch()
  const [guest, setGuest] = useState<number>(1)
  const [disabledAdd, setDisabledAdd] = useState<boolean>(false)
  const [disabledRemove, setDisabledRemove] = useState<boolean>(true)
  dispatch({ type: setGuests.type, payload: { info: guest } })

  return (
    <Box>
      <Typography sx={{ fontFamily: 'DinL', fontSize: '16px' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', columnGap: '15px', alignItems: 'center' }}>
        <Remove
          sx={{
            cursor: 'pointer',
            fontSize: '24px',
            color: `${disabledRemove ? '#afafaf' : 'black'}`,
          }}
          onClick={() => {
            setGuest((current) => {
              if (current > 1) {
                setDisabledRemove(false)
                setDisabledAdd(false)
                dispatch({ type: setGuests.type, payload: { info: guest - 1 } })
                if (current - 1 <= 1) {
                  setDisabledRemove(true)
                }
                return current - 1
              }
              return current
            })
          }}
        />
        <MainText styles={{ fontFamily: 'OpenSansSB' }}>{guest}</MainText>
        <Add
          sx={{
            cursor: 'pointer',
            fontSize: '24px',
            color: `${disabledAdd ? '#afafaf' : 'black'}`,
          }}
          onClick={() => {
            setGuest((current) => {
              if (current < 8) {
                setDisabledAdd(false)
                setDisabledRemove(false)
                dispatch({ type: setGuests.type, payload: { info: guest + 1 } })
                if (current + 1 >= 8) {
                  setDisabledAdd(true)
                }
                return current + 1
              }
              return current
            })
          }}
        />
      </Box>
    </Box>
  )
}

export default GuestAction
