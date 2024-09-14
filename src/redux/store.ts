import { configureStore } from '@reduxjs/toolkit'
import langSlice from './slices/langSlice'
import userSlice from './slices/userSlice'
import hotelSlice from './slices/hotelSlice'
import restaurantSlice from './slices/restaurantSlice'
import driverSlice from './slices/driverSliser'
import commonLocationSlice from './slices/commonLocationSlicer'
import historySlice from './slices/historySlice'
import consultingSlice from './slices/consultingSlice'
import i18nSlice from './slices/i18nSlice'
import tripSlice from './slices/tripSlice'
import commonLanguageSlice from './slices/commonLanguage'
import planSlice from './slices/planSliser'
import homeSlice from './slices/homeSlice'
import accountSlice from './slices/accountSlice'

const store = configureStore({
  reducer: {
    language: langSlice,
    user: userSlice,
    hotel: hotelSlice,
    restaurant: restaurantSlice,
    driver: driverSlice,
    commonLocation: commonLocationSlice,
    history: historySlice,
    consulting: consultingSlice,
    i18n: i18nSlice,
    trip: tripSlice,
    commonlanguage: commonLanguageSlice,
    home: homeSlice,
    plan: planSlice,
    account: accountSlice
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

