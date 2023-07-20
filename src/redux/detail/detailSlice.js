import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { APIKEY } from '../city/citySlice';

export const fetchDetailAPI = createAsyncThunk('detail/fetchDetailAPI', async ({ lat, lon }) => {
  const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`);
  return result.data;
});

const detailSlice = createSlice({
  name: 'detail',
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetailAPI.fulfilled, (state, action) => action.payload)
  },
});

export default detailSlice.reducer;
