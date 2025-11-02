import { useQuery } from '@tanstack/react-query';

import { getAllProducts } from '../../../api';
import { type Product } from '../../product.types';

interface UseProductsOptions {
  page: number;
  limit: number;
  filter: (products: Product[]) => Product[];
}

export const useProducts = (options: UseProductsOptions) => {
  const { page, limit, filter } = options;

  return useQuery({
    queryKey: ['products', page, limit],
    queryFn: getAllProducts,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    select: (data: Product[]) => {
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const filteredData = filter(data);
      const paginatedData = filteredData.slice(startIndex, endIndex);

      return {
        products: paginatedData,
        total: data.length,
        totalPages: filteredData.length,
        page,
        limit,
      };
    },
  });
};
