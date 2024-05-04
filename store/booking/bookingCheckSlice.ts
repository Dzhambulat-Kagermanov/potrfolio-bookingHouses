import { bookingDisountPromos } from '@/constants/bookingData'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const bookingCheckSlice = createSlice({
  name: 'bookingCheckSlice',
  initialState: {
    nightPrice: '3200',
    checkIn: '27/04/2024',
    checkOut: '28/04/2024',
    guests: 1,
    nights: '1',
    additional: [],
    discount: 10,
    totalPrice: 0,
    promos: [...bookingDisountPromos],
  },
  reducers: {
    setCheckIn(state, action: PayloadAction<{ info: string }>) {
      state.checkIn = action.payload.info
    },
    setCheckOut(state, action: PayloadAction<{ info: string }>) {
      state.checkOut = action.payload.info
    },
    setGuests(state, action: PayloadAction<{ info: number }>) {
      state.guests = action.payload.info
    },
    setNights(state, action: PayloadAction<{ info: string }>) {
      state.nights = action.payload.info
    },
    addAdditional(
      state,
      action: PayloadAction<{
        title: string
        price: string
        content: string[]
        id: string
      }>
    ) {
      state.additional.push({
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        content: action.payload.content,
      })
    },
    removeAdditional(
      state,
      action: PayloadAction<{
        id: string
      }>
    ) {
      state.additional = state.additional.filter((el) => {
        el.id !== action.payload.id
      })
    },
    setDiscount(state, action: PayloadAction<{ info: number }>) {
      state.discount = action.payload.info
    },
    setTotalPrice(state, action: PayloadAction<{ info: number }>) {
      state.totalPrice = action.payload.info
    },
    checkPromoValue(state, action: PayloadAction<{ info: string }>) {
      state.promos.forEach((el) => {
        el.promo === action.payload.info ? (state.discount = el.discount) : ''
      })
    },
  },
})

export const {
  setCheckIn,
  setCheckOut,
  setGuests,
  setNights,
  addAdditional,
  removeAdditional,
  setDiscount,
  setTotalPrice,
  checkPromoValue,
} = bookingCheckSlice.actions
export default bookingCheckSlice.reducer
