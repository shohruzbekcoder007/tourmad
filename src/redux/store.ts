import { configureStore } from '@reduxjs/toolkit'
import langSlice from './slices/langSlice'

const store = configureStore({
  reducer: {
    language: langSlice
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

