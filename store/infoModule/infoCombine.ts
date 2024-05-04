import { combineReducers } from '@reduxjs/toolkit'
import infoSlice from './infoSlice'

export const infoCombine = combineReducers({ infoCombine: infoSlice })
