import { CartItem } from '@@/store/slices/cart.slice/types';

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
