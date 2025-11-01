import _ from 'lodash';

import type { Product } from '@/entites/Product';
import { includesText } from '@/shared/lib/text';

interface ProductFilters {
  activeCategory: string;
  searchQuery: string;
  liked: number[];
  filter: 'all' | 'liked';
}

export const filterProducts = (
  products: Product[],
  filters: ProductFilters,
): Product[] => {
  const { activeCategory, searchQuery, filter, liked } = filters;

  return products.filter((product) => {
    const isAllCategories = activeCategory === 'Все категории';
    const isProperCategory =
      isAllCategories ||
      (!isAllCategories && product.category === activeCategory);

    const isProperSearch = includesText(
      [product.title, product.description, product.category],
      searchQuery,
    );

    const isLiked =
      filter === 'all' || (filter === 'liked' && liked.includes(product.id));

    return isLiked && isProperCategory && isProperSearch;
  });
};
