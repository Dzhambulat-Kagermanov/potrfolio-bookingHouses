import { combineReducers } from '@reduxjs/toolkit'
import bookingCheckSlice from './bookingCheckSlice'

export const bookingCombine = combineReducers({ booking: bookingCheckSlice })
