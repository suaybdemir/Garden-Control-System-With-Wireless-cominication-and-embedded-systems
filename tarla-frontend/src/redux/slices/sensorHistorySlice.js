import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
  sensorHistories: [],
}

export const getSensorHistories = createAsyncThunk(
  'sensorHistory/getAll',
  async () => {
    const response = await axios.get("http://localhost:8080/sensor-history")
    return response.data
  }
)

export const sensorHistorySlice = createSlice({
  name: 'sensorHistory',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getSensorHistories.fulfilled,(state,action)=>{
         state.sensorHistories = action.payload
    })
  }
})

export const { } = sensorHistorySlice.actions

export default sensorHistorySlice.reducer