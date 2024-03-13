import { createAsyncThunk } from '@reduxjs/toolkit';
import { cartService } from '@@/services/cart.service';

export const cartFind = createAsyncThunk('cart/find', async () => {
  try {
    const data = await cartService.find(6);

    const dataWithCount = data.products.map((item) => {
      return {
        ...item,
        count: 1,
      };
    });

    return dataWithCount;
  } catch (error) {
    return Promise.reject(error);
  }
});
