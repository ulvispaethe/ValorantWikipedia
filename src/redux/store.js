import { configureStore } from '@reduxjs/toolkit'
import agentSlice from './agentSlice'
import mapSlice from './mapSlice'


export const store = configureStore({
  reducer: {
    agents: agentSlice,
    maps: mapSlice
  },
})