import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { STATUS } from '../utils/status';
import axios from 'axios';

const initialState = {
  maps: [],
  mapsStatus: STATUS.IDLE
};

export const getMaps = createAsyncThunk('getmaps', async () => {
    try {
      const response = await axios.get('https://valorant-api.com/v1/maps');
      return response.data.data;
    } catch (error) {
      throw error;
    }
  });

const mapSlice = createSlice({
  name: 'maps',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMaps.pending, (state, action) => {
        state.mapsStatus = STATUS.LOADING;
      })
      .addCase(getMaps.fulfilled, (state, action) => {
        state.mapsStatus = STATUS.SUCCESS;
        state.maps = action.payload; 
      })
      .addCase(getMaps.rejected, (state, action) => {
        state.mapsStatus = STATUS.FAIL;
      })
  },
});

export default mapSlice.reducer;