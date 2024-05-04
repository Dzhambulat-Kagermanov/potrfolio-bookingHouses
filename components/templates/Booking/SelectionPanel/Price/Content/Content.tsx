/* eslint-disable max-len */
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import useLang from '@/hooks/useLang'
import { setTotalPrice } from '@/store/booking/bookingCheckSlice'
import { Box } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import Item from './Item/Item'

const Content: FC = () => {
  const lang = useLang()
  const dispatch = useAppDispatch()
  const [fullPrice, setFullPrice] = useState<number>(0)
  const bookingState = useAppSelector((state) => {
    return state.booking.booking
  })
  const nightsFullPrice: number =
    +bookingState.nights * +bookingState.nightPrice
  const nationalValute: string =
    lang.booking.selectionPanel.price.nationalValute

  const disocuntedPrice = Math.round((fullPrice / 100) * bookingState.discount)
  useEffect(() => {
    bookingState.additional &&
      setFullPrice(
        bookingState.additional.reduce((acc, { price }: { price: string }) => {
          return +price.replace(/[\D]+/g, '') + acc
        }, 0) + nightsFullPrice
      )
    dispatch({
      type: setTotalPrice.type,
      payload: { info: fullPrice - disocuntedPrice },
    })
    console.log('renders')
  }, [bookingState.additional, fullPrice, disocuntedPrice])
  return (
    <Box
      component='ul'
      sx={{
        display: 'flex',
        flexFlow: 'wrap column',
        rowGap: '10px',
        borderBottom: '1px solid black',
        padding: '0 0 25px 0',
      }}
    >
      <Item price={`${nightsFullPrice}${nationalValute}`}>
        {`${bookingState.nightPrice}${nationalValute} * ${bookingState.nights} ${lang.booking.selectionPanel.price.content.nights}`}
      </Item>
      {bookingState.additional.map(({ id, title, price }) => {
        return (
          <Item key={id} price={price}>
            {title}
          </Item>
        )
      })}
      <Item
        price={`-${disocuntedPrice}${nationalValute}`}
        styles={{ color: 'var(--textLightGreen)' }}
      >
        {`${bookingState.discount}% ${lang.booking.selectionPanel.price.discount}`}
      </Item>
    </Box>
  )
}

export default Content
