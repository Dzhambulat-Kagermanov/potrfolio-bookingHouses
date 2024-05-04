import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IBurgerMenuPayloads {
  menuState: boolean
}

const burgerMenuSlice = createSlice({
  name: 'burgerMenuSlice',
  initialState: {
    menuState: false,
  },
  reducers: {
    setBurgerMenuState(state, action: PayloadAction<IBurgerMenuPayloads>) {
      state.menuState = !!action.payload.menuState
    },
  },
})

export const { setBurgerMenuState } = burgerMenuSlice.actions
export default burgerMenuSlice.reducer
