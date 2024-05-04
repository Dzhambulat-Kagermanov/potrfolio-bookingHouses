import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInfoSliceActionPayload {
  type: string
  func: () => void
}

const infoSlice = createSlice({
  name: 'infoSlice',
  initialState: {
    actionFuncs: {},
  },
  reducers: {
    setActionFuncState(state, action: PayloadAction<IInfoSliceActionPayload>) {
      const payloadValue = action.payload
      state.actionFuncs[payloadValue.type.toLowerCase()] = payloadValue.func
    },
  },
})

export const { setActionFuncState } = infoSlice.actions
export default infoSlice.reducer
