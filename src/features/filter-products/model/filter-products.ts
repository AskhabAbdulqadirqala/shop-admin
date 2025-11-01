import type { Product } from '@/entites/Product';
import { includesText } from '@/shared/lib/text';

interface ProductFilters {
  activeCategory: string;
  searchQuery: string;
}

export const filterProducts = (
  products: Product[],
  filters: ProductFilters,
): Product[] => {
  const { activeCategory, searchQuery } = filters;

  return products.filter((product) => {
    const isAllCategories = activeCategory === 'Все категории';
    const isProperCategory =
      isAllCategories ||
      (!isAllCategories && product.category === activeCategory);

    const isProperSearch = includesText(
      [product.title, product.description, product.category],
      searchQuery,
    );

    return isProperCategory && isProperSearch;
  });
};
