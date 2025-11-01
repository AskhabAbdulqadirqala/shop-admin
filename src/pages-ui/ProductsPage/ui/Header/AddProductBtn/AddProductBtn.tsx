import { Plus } from 'lucide-react';

import { Button } from '@/shared/ui/Button';

export const AddProductBtn = () => {
  return (
    <Button href='/' className='gap-2 group'>
      <Plus className='w-4 h-4' />
      <span className='_title-s font-semibold'>Добавить продукт</span>
    </Button>
  );
};
