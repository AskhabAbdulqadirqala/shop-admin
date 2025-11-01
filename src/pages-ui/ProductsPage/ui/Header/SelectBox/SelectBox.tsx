import * as Select from '@/shared/ui/Select';

import { CATEGORIES } from '../../../config/categories';
import { useProductsStore } from '../../../store';

export const SelectBox = () => {
  const activeCategory = useProductsStore((s) => s.activeCategory);
  const setActiveCategory = useProductsStore((s) => s.setActiveCategory);
  const setCurrentPage = useProductsStore((s) => s.setCurrentPage);

  return (
    <Select.Root
      value={activeCategory}
      onValueChange={(value) => {
        setActiveCategory(value);
        setCurrentPage(1);
      }}
    >
      <Select.Trigger className='w-full md:w-[200px]'>
        <Select.Value />
      </Select.Trigger>
      <Select.Content>
        {CATEGORIES.map((cat) => (
          <Select.Item key={cat} value={cat}>
            {cat}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};
