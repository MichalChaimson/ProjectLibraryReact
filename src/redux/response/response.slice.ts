import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ResponseeType}   from '../../types/response.types';

const responseSlice = createSlice({
  name: 'response',
  initialState: {responses: [] as ResponseeType[] },
  reducers: {
    setResponseSlice: (state, action: PayloadAction<ResponseeType[]>) => {
      state.responses = action.payload;
    },
    addResponseSlice: (state, action: PayloadAction<ResponseeType>) => {
      state.responses.push(action.payload);
    },
    updateResponseSlice: (state, action: PayloadAction<ResponseeType>) => {
      const index = state.responses.findIndex(response => action.payload.id);
      state.responses[index] = action.payload;
    },
    deleteResponseSlice: (state, action: PayloadAction<number>) => {
      state.responses.splice(action.payload,1);
    }
  }
})

export const {setResponseSlice, addResponseSlice, updateResponseSlice, deleteResponseSlice} = responseSlice.actions;
export default responseSlice.reducer