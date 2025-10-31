'use client';
import { useState, type FC } from 'react';

import * as Select from '@/shared/ui/Select';

import { AddProductBtn } from './AddProductBtn';
import { SearchBox } from './SearchBox';

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
  const { className } = props;
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['all', '1222', '12', '4'];

  return (
    <header className={className}>
      <div className='flex items-center justify-between mb-6'>
        <h1>Каталог продуктов</h1>
        <AddProductBtn />
      </div>

      <div className='bg-white p-4 rounded-lg shadow-sm space-y-4'>
        <div className='flex flex-col md:flex-row gap-4'>
          <SearchBox setCurrentPage={setCurrentPage} />

          <Select.Root
            value={categoryFilter}
            onValueChange={(value) => {
              setCategoryFilter(value);
              setCurrentPage(1);
            }}
          >
            <Select.Trigger className='w-full md:w-[200px]'>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              {categories.map((cat) => (
                <Select.Item key={cat} value={cat}>
                  {cat === 'all' ? 'Все категории' : cat}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </div>
      </div>
    </header>
  );
};
