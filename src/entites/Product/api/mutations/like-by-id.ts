import type { Product } from '../../model/product.types';
import { baseApi } from '../base';

export const likeProduct = async (
  id: number,
  product: Product,
): Promise<Product> => {
  return await baseApi.put<Product>(`/products/${id}`, {
    ...product,
    liked: !product.liked,
  });
};
