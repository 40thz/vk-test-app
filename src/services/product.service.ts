import { HTTPTransport } from '@@/utils/HTTPTransport';

class ProductService extends HTTPTransport {
  constructor() {
    super('/products');
  }

  async find() {
    const { data } = await this.http.get(`/`);

    return data;
  }
}

export const productService = new ProductService();
