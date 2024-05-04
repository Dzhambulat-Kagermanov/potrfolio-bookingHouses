import SecondText from '@/components/ui/Text/SecondText'
import SubtitleText from '@/components/ui/Text/SubtitleText'
import { useAppSelector } from '@/hooks/reduxHooks'
import useLang from '@/hooks/useLang'
import { Box } from '@mui/material'
import { CSSProperties, FC } from 'react'

interface IBookingPriceNightPriceProps {
  styles?: CSSProperties
}

const NightPrice: FC<IBookingPriceNightPriceProps> = ({ styles }) => {
  const nightPrice = useAppSelector((state) => {
    return state.booking.booking.nightPrice
  })
  const lang = useLang()
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        columnGap: '5px',
        ...styles,
      }}
    >
      <SubtitleText styles={{ fontFamily: 'OpenSansSB' }}>
        {`${nightPrice}${lang.booking.selectionPanel.price.nationalValute}`}
      </SubtitleText>
      <SecondText styles={{ color: 'var(--primaryDarkGrey)' }}>
        / {lang.booking.selectionPanel.price.nightPrice}
      </SecondText>
    </Box>
  )
}

export default NightPrice
