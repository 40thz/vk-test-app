import { CartItem } from '@@/store/slices/cart.slice/types';

type Product = Omit<CartItem, 'count'>;

export type CartDTO = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
