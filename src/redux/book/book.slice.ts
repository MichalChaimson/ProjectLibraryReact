import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { bookType } from '../../types/book.types';

const bookSlice = createSlice({
  name: 'book',
  initialState: {books: [] as bookType[] },
  reducers: {
    setBookSlice: (state, action: PayloadAction<bookType[]>) => {
      state.books = action.payload;
    },
    addBookSlice: (state, action: PayloadAction<bookType>) => {
      state.books.push(action.payload);
    },
    updateBookSlice: (state, action: PayloadAction<bookType>) => {
      const index = state.books.findIndex(author => action.payload.bookId);
      state.books[index] = action.payload;
    },
    deleteBookSlice: (state, action: PayloadAction<number>) => {
      state.books.splice(action.payload,1);
    }
  }
})
export const {setBookSlice, addBookSlice, updateBookSlice, deleteBookSlice} = bookSlice.actions;
export default bookSlice.reducer
