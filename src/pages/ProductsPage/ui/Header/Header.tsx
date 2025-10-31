'use client';
import { useState, type FC } from 'react';

import * as Tabs from '@/shared/ui/Tabs';

import { AddProductBtn } from './AddProductBtn';
import { SearchBox } from './SearchBox';
import { SelectBox } from './SelectBox';

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
  const { className } = props;
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<'all' | 'liked'>('all');

  return (
    <header className={className}>
      <div className='flex items-center justify-between mb-6'>
        <h1>Каталог продуктов</h1>
        <AddProductBtn />
      </div>

      <div className='bg-white p-4 rounded-lg shadow-sm space-y-4'>
        <div className='flex flex-col md:flex-row gap-4'>
          <SearchBox setCurrentPage={setCurrentPage} />

          <SelectBox
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            setCurrentPage={setCurrentPage}
          />

          <Tabs.Root
            value={filter}
            onValueChange={(value) => {
              setFilter(value as 'all' | 'liked');
              setCurrentPage(1);
            }}
          >
            <Tabs.List className='grid w-full max-w-md grid-cols-2'>
              <Tabs.Trigger value='all'>Все продукты ({12})</Tabs.Trigger>
              <Tabs.Trigger value='liked'>Избранное ({1})</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </div>
      </div>
    </header>
  );
};
