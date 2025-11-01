import type { Product } from '../../model/product.types';
import { baseApi } from '../base';

export const getAllProducts = (): Promise<Product[]> => {
  return baseApi.get<Product[]>('/products');
};
