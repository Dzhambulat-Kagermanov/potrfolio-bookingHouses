import SecondButton from '@/components/ui/Buttons/SecondButton'
import MainInput from '@/components/ui/Inputs/MainInput'
import { useAppDispatch } from '@/hooks/reduxHooks'
import useLang from '@/hooks/useLang'
import { checkPromoValue } from '@/store/booking/bookingCheckSlice'
import { Box, Typography } from '@mui/material'
import { FC, useState } from 'react'

const Promo: FC = () => {
  const dispatch = useAppDispatch()

  const lang = useLang()
  const [promoInp, setPromoInp] = useState<string>('')
  return (
    <Box>
      <Box sx={{ display: 'flex', height: '50px' }}>
        <MainInput
          inpState={promoInp}
          setInpState={setPromoInp}
          placeholder={lang.booking.selectionPanel.price.promo.input}
          borderRadius={false}
          inputPropsStyles={{ height: '100%' }}
          styles={{
            flexGrow: 1,
            fontSize: '16px',
            fontFamily: 'OpenSansR',
          }}
        />
        <SecondButton
          onClick={() => {
            dispatch({
              type: checkPromoValue.type,
              payload: { info: promoInp },
            })
            setPromoInp('')
          }}
          styles={{
            width: '120px',
            height: '100%',
            fontSize: '16px',
            textTransform: 'uppercase',
            fontFamily: 'DinL',
          }}
        >
          {lang.booking.selectionPanel.price.promo.button}
        </SecondButton>
      </Box>
      <Typography
        sx={{
          fontSize: '16px',
          fontFamily: 'OpenSansR',
          margin: '10px 0 0 0',
          color: 'grey',
        }}
      >
        Test promo for a 15% discount: p1r12om9o965lo8e8p21
      </Typography>
    </Box>
  )
}

export default Promo
