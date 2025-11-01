import { create } from 'zustand';

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
  setLiked: (liked: number[]) => void;
}

export const useProductsStore = create<ProductsState>((set) => ({
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
  setLiked: (liked) => set({ liked }),
}));
