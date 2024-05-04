import { theme } from '@/components/layouts/MUIThemeProvider'
import useLang from '@/hooks/useLang'
import { Box, useMediaQuery } from '@mui/material'
import { FC } from 'react'
import DateAction from './DateAction/DateAction'
import GuestAction from './GuestAction/GuestAction'
import VerticalLine from './VerticalLine/VerticalLine'

const ActionBar: FC = () => {
  const isAboveBigMobile = useMediaQuery(theme.breakpoints.up('bigMobile'))
  const lang = useLang()
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        border: '1px solid black',
        gap: '20px',
        flexFlow: { bigMobile: 'nowrap row', xs: 'wrap column' },
      }}
    >
      <DateAction
        title={lang.booking.selectionPanel.price.actionBar.dateCheckIn}
        type='in'
      />
      {isAboveBigMobile && <VerticalLine styles={{ height: 'auto' }} />}
      <DateAction
        title={lang.booking.selectionPanel.price.actionBar.dateCheckOut}
        type='out'
      />
      {isAboveBigMobile && <VerticalLine styles={{ height: 'auto' }} />}
      <GuestAction title={lang.booking.selectionPanel.price.actionBar.guests} />
    </Box>
  )
}

export default ActionBar
