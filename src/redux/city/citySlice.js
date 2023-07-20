import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: '',
  value: [],
};

export const APIKEY = 'cdcce535212206307ef6e228498f6953';
export const fetchSearchCity = createAsyncThunk('city/fetchSearchCity', async (cityName) => {
  const result = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${APIKEY}`);
  return result.data;
});

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchCity.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSearchCity.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
      console.log(state.value);
    });
    builder.addCase(fetchSearchCity.rejected, (state, action) => {
      state.loading = false;
      state.value = [];
      state.error = action.error.message;
      console.log('error');
    });
  },
});

export default citySlice.reducer;
