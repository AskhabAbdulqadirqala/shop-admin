import { Search } from 'lucide-react';
import type { FC } from 'react';
import { useState } from 'react';

import { Input } from '@/shared/ui/Input';

interface SearchBoxProps {
  setCurrentPage: (page: number) => void;
}

export const SearchBox: FC<SearchBoxProps> = (props) => {
  const { setCurrentPage } = props;
  const [searchQuery, setSearchQuery] = useState('');

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
