import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { STATUS } from '../utils/status';
import axios from 'axios';

const initialState = {
  agents: [],
  agentsStatus: STATUS.IDLE,
  agentDetail: null,
  agentDetailStatus: STATUS.IDLE,
};

export const getAgents = createAsyncThunk('getagents', async () => {
    try {
      const response = await axios.get('https://valorant-api.com/v1/agents');
      return response.data.data;
    } catch (error) {
      throw error;
    }
  });
  
  export const getAgentDetail = createAsyncThunk('getagentdetail', async (uuid) => {
    try {
      const response = await axios.get(`https://valorant-api.com/v1/agents/${uuid}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  });

const agentSlice = createSlice({
  name: 'agents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAgents.pending, (state, action) => {
        state.agentsStatus = STATUS.LOADING;
      })
      .addCase(getAgents.fulfilled, (state, action) => {
        state.agentsStatus = STATUS.SUCCESS;
        state.agents = action.payload; 
      })
      .addCase(getAgents.rejected, (state, action) => {
        state.agentsStatus = STATUS.FAIL;
      })
      .addCase(getAgentDetail.pending, (state, action) => {
        state.agentDetailStatus = STATUS.LOADING;
      })
      .addCase(getAgentDetail.fulfilled, (state, action) => {
        state.agentDetailStatus = STATUS.SUCCESS;
        state.agentDetail = action.payload; 
      })
      .addCase(getAgentDetail.rejected, (state, action) => {
        state.agentDetailStatus = STATUS.FAIL;
      });
  },
});

export default agentSlice.reducer;
