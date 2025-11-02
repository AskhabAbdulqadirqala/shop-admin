import _ from 'lodash';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { CATEGORIES } from '../config/categories';
import { Filter } from '../config/filters';

interface ProductsState {
  activeCategory: string;
  currentPage: number;
  searchQuery: string;
  filter: Filter;
  liked: number[];
  setActiveCategory: (category: string) => void;
  setCurrentPage: (page: number) => void;
  setSearchQuery: (query: string) => void;
  setFilter: (filter: Filter) => void;
  toggleLike: (productId: number) => void;
}

export const useProductsStore = create<ProductsState>()(
  persist(
    (set, get) => ({
      activeCategory: 'Все категории',
      currentPage: 1,
      searchQuery: '',
      filter: Filter.ALL,
      liked: [],

      setActiveCategory: (category) => {
        if (CATEGORIES.includes(category)) {
          set({ activeCategory: category });
        }
      },

      setCurrentPage: (currentPage) => set({ currentPage }),

      setSearchQuery: (searchQuery) => set({ searchQuery }),

      setFilter: (filter) => set({ filter }),

      toggleLike: (productId) => {
        const { liked } = get();
        const isLiked = liked.includes(productId);

        set({
          liked: isLiked
            ? _.without(liked, productId)
            : _.union(liked, [productId]),
        });
      },
    }),
    {
      name: 'products-storage',
    },
  ),
);
