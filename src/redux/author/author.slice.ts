import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorType } from '../../types/author.types';

const authorSlice = createSlice({
  name: 'author',
  initialState: {authors: [] as AuthorType[] },
  reducers: {
    setAuthorSlice: (state, action: PayloadAction<AuthorType[]>) => {
      state.authors = action.payload;
    },
    addAuthorSlice: (state, action: PayloadAction<AuthorType>) => {
      state.authors.push(action.payload);
    },
    updateAuthorSlice: (state, action: PayloadAction<AuthorType>) => {
      const index = state.authors.findIndex(author => action.payload.id);
      state.authors[index] = action.payload;
    },
    deleteAuthorSlice: (state, action: PayloadAction<number>) => {
      state.authors.splice(action.payload,1);
    }
  }
})

export const {setAuthorSlice, addAuthorSlice, updateAuthorSlice, deleteAuthorSlice} = authorSlice.actions;
export default authorSlice.reducer
