import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {BorrowingType}   from '../../types/borrowing.types';

const borrowingSlice = createSlice({
  name: 'borrowing',
  initialState: {borrowings: [] as BorrowingType[] },
  reducers: {
    setBorroingSlice: (state, action: PayloadAction<BorrowingType[]>) => {
      state.borrowings = action.payload;
    },
    addBorroingSlice: (state, action: PayloadAction<BorrowingType>) => {
      state.borrowings.push(action.payload);
    },
    updateBorroingSlice: (state, action: PayloadAction<BorrowingType>) => {
      const index = state.borrowings.findIndex(borrowing => action.payload.id);
      state.borrowings[index] = action.payload;
    },
    deleteBorroingSlice: (state, action: PayloadAction<number>) => {
      state.borrowings.splice(action.payload,1);
    }
  }
})

export const {setBorroingSlice, addBorroingSlice, updateBorroingSlice, deleteBorroingSlice} = borrowingSlice.actions;
export default borrowingSlice.reducer
