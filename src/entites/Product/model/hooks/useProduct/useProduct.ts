import { useQuery } from '@tanstack/react-query';

import { getProductById } from '../../../api';

interface UseProductOptions {
  id: string;
}

export const useProduct = (options: UseProductOptions) => {
  const { id } = options;

  const queryFn = () => {
    return getProductById(id);
  };

  return useQuery({
    queryKey: ['product', id],
    queryFn,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
