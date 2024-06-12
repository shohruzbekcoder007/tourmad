import { configureStore } from '@reduxjs/toolkit'
import langSlice from './slices/langSlice'
import userSlice from './slices/userSlice'
import hotelSlice from './slices/hotelSlice'
import restaurantSlice from './slices/restaurantSlice'
import driverSlice from './slices/driverSliser'
import commonLocationSlice from './slices/commonLocationSlicer'

const store = configureStore({
  reducer: {
    language: langSlice,
    user: userSlice,
    hotel: hotelSlice,
    restaurant: restaurantSlice,
    driver: driverSlice,
    commonLocation: commonLocationSlice
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

