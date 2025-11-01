import { useQuery } from '@tanstack/react-query';

import { getAllProducts } from '../../../api/';
import { type Product } from '../../product.types';

interface UseProductsOptions {
  page: number;
  limit: number;
}

export const useProducts = (options: UseProductsOptions) => {
  const { page, limit } = options;

  return useQuery({
    queryKey: ['products', page, limit],
    queryFn: getAllProducts,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    select: (data: Product[]) => {
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;

      return {
        products: data.slice(startIndex, endIndex),
        total: data.length,
        page,
        limit,
        hasNext: endIndex < data.length,
        hasPrev: page > 1,
      };
    },
  });
};
