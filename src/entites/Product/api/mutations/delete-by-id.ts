import { baseApi } from '../base';

export const deleteProductById = (id: number): Promise<{ id: number }> => {
  return baseApi.delete(`/products/${id}`);
};
