import SecondText from '@/components/ui/Text/SecondText'
import { useAppSelector } from '@/hooks/reduxHooks'
import useLang from '@/hooks/useLang'
import { Box } from '@mui/material'
import { FC } from 'react'

const TotalPrice: FC = () => {
  const lang = useLang()
  const totalPrice = useAppSelector((state) => {
    return state.booking.booking.totalPrice
  })
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <SecondText styles={{ fontSize: '20px' }}>
        {lang.booking.selectionPanel.price.total}
      </SecondText>
      <SecondText styles={{ fontSize: '20px' }}>
        {`${totalPrice}${lang.booking.selectionPanel.price.nationalValute}`}
      </SecondText>
    </Box>
  )
}

export default TotalPrice
