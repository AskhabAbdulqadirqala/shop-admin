import type { Product } from '../../model/product.types';
import { baseApi } from '../base';

type EditProductData = Partial<Omit<Product, 'id'>>;

export const editProduct = (
  id: number,
  data: EditProductData,
): Promise<Product> => {
  return baseApi.put(`/products/${id}`, data);
};
