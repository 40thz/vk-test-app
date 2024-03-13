import { HTTPTransport } from '@@/utils/HTTPTransport';
import { CartDTO } from './types';

class CartService extends HTTPTransport {
  constructor() {
    super('/products');
  }

  async find(limit: number) {
    const { data } = await this.http.get<CartDTO>(`/?limit=${limit}`);

    return data;
  }
}

export const cartService = new CartService();
