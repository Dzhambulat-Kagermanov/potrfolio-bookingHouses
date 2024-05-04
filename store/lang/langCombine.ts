import { combineReducers } from '@reduxjs/toolkit'
import langSlice from './langSlice'

export const langCombine = combineReducers({
  langCombine: langSlice,
})
