import { configureStore } from '@reduxjs/toolkit'
import { bookingCombine } from './booking/bookingCombine'
import { burgerMenuCombine } from './burgerMenu/burgerMenuCombine'
import { infoCombine } from './infoModule/infoCombine'
import { langCombine } from './lang/langCombine'

const store = configureStore({
  reducer: {
    lang: langCombine,
    info: infoCombine,
    booking: bookingCombine,
    burgerMenu: burgerMenuCombine,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
