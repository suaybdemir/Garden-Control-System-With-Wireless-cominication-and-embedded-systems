import { configureStore } from '@reduxjs/toolkit'
import sensorHistorySlice from './slices/sensorHistorySlice'

export const store = configureStore({
  reducer: {
    sensorHistory : sensorHistorySlice
  },
})