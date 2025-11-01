import { Search } from 'lucide-react';

import { Input } from '@/shared/ui/Input';

import { useProductsStore } from '../../../store';

export const SearchBox = () => {
  const searchQuery = useProductsStore((s) => s.searchQuery);
  const setSearchQuery = useProductsStore((s) => s.setSearchQuery);
  const setCurrentPage = useProductsStore((s) => s.setCurrentPage);

  return (
    <div className='relative flex-1'>
      <Search
        className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
        size={20}
      />
      <Input
        type='text'
        name='search'
        placeholder='Поиск продуктов...'
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setCurrentPage(1);
        }}
        className='pl-10'
      />
    </div>
  );
};
