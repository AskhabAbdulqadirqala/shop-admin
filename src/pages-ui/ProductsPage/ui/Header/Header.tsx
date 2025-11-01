'use client';
import { type FC } from 'react';

import * as Tabs from '@/shared/ui/Tabs';

import { AddProductBtn } from './AddProductBtn';
import { SearchBox } from './SearchBox';
import { SelectBox } from './SelectBox';
import { Filter } from '../../config/filters';
import { useProductsStore } from '../../store/useProductsStore';

interface HeaderProps {
  className?: string;
  productsTotal?: number;
}

export const Header: FC<HeaderProps> = (props) => {
  const { className, productsTotal } = props;
  const filter = useProductsStore((s) => s.filter);
  const setFilter = useProductsStore((s) => s.setFilter);
  const setCurrentPage = useProductsStore((s) => s.setCurrentPage);

  return (
    <header className={className}>
      <div className='flex items-center justify-between mb-6'>
        <h1>Каталог продуктов</h1>
        <AddProductBtn />
      </div>

      <div className='bg-white p-4 rounded-lg shadow-sm space-y-4'>
        <div className='flex flex-col md:flex-row gap-4'>
          <SearchBox />

          <SelectBox />

          <Tabs.Root
            value={filter}
            onValueChange={(value) => {
              setFilter(value as Filter);
              setCurrentPage(1);
            }}
          >
            <Tabs.List className='grid w-full max-w-md grid-cols-2'>
              <Tabs.Trigger value={Filter.ALL}>
                Все продукты {productsTotal && `(${productsTotal})`}
              </Tabs.Trigger>
              <Tabs.Trigger value={Filter.LIKED}>Избранное ({1})</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </div>
      </div>
    </header>
  );
};
