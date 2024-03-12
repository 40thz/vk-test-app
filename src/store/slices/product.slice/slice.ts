import { createSlice } from '@reduxjs/toolkit';

export const initialState = {};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},

  extraReducers: () => {},
});

// export const {} = productSlice.actions;

export const productReducer = productSlice.reducer;
