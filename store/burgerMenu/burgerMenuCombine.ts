import { combineReducers } from '@reduxjs/toolkit'
import burgerMenuSlice from './burgerMenuSlice'

export const burgerMenuCombine = combineReducers({
  burgerMenu: burgerMenuSlice,
})
