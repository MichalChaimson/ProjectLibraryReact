import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RequestType}   from '../../types/request.types';

const requestSlice = createSlice({
  name: 'request',
  initialState: {requests: [] as RequestType[] },
  reducers: {
    setRequestSlice: (state, action: PayloadAction<RequestType[]>) => {
      state.requests = action.payload;
    },
    addRequestSlice: (state, action: PayloadAction<RequestType>) => {
      state.requests.push(action.payload);
    },
    updateRequestSlice: (state, action: PayloadAction<RequestType>) => {
      const index = state.requests.findIndex(request => action.payload.id);
      state.requests[index] = action.payload;
    },
    deleteRequestSlice: (state, action: PayloadAction<number>) => {
      state.requests.splice(action.payload,1);
    }
  }
})

export const {setRequestSlice, addRequestSlice, updateRequestSlice, deleteRequestSlice} = requestSlice.actions;
export default requestSlice.reducer
