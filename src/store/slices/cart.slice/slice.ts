import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '@@/utils/calcTotalPrice';
import { cartFind } from './asyncActions';
import { CartItem, CartState } from './types';

export const initialState: CartState = {
  data: [],
  totalPrice: 0,
  status: {
    isLoading: false,
    error: null,
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.data.find((item) => item.id === action.payload.id);

      if (findItem && findItem.count < 10) {
        findItem.count++;
      }

      state.totalPrice = calcTotalPrice(state.data);
    },

    minusItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.data.find((item) => item.id === action.payload.id);

      if (findItem && findItem.count > 1) {
        findItem.count--;
      }

      state.totalPrice = calcTotalPrice(state.data);
    },

    removeItem(state, action: PayloadAction<CartItem>) {
      state.data = state.data.filter((item) => item.id !== action.payload.id);

      state.totalPrice = calcTotalPrice(state.data);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(cartFind.pending, (state) => {
      state.status.isLoading = true;
    });

    builder.addCase(cartFind.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status.isLoading = false;
      state.status.error = null;

      state.totalPrice = calcTotalPrice(state.data);
    });

    builder.addCase(cartFind.rejected, (state, action) => {
      state.data = [];
      state.status.isLoading = false;
      state.status.error = action.error.message;
    });
  },
});

export const { addItem, minusItem, removeItem } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
