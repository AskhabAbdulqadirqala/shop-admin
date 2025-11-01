import type { FC } from 'react';

import * as Select from '@/shared/ui/Select';

interface SelectBoxProps {
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
  setCurrentPage: (value: number) => void;
}

export const SelectBox: FC<SelectBoxProps> = (props) => {
  const { categoryFilter, setCategoryFilter, setCurrentPage } = props;
  const categories = ['all', '1222', '12', '4'];

  return (
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
  );
};
