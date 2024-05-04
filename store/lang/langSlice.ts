import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type actionPayload = {
  lang: string
}

const langSlice = createSlice({
  name: 'lang',
  initialState: {
    lang: 'RU',
  },
  reducers: {
    switchLang(state, action: PayloadAction<actionPayload>) {
      state.lang = action.payload.lang.toUpperCase()
    },
  },
})

export const { switchLang } = langSlice.actions
export default langSlice.reducer
