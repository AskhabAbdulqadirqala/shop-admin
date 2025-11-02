import type { Product } from '../../model/product.types';
import { baseApi } from '../base';

export const getProductById = (id: string): Promise<Product> => {
  return baseApi.get<Product>(`/products/${id}`);
};
