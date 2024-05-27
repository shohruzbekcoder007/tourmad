import { configureStore } from '@reduxjs/toolkit'
import langSlice from './slices/langSlice'
import userSlice from './slices/userSlice'

const store = configureStore({
  reducer: {
    language: langSlice,
    user: userSlice
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

