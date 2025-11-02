import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/shared/ui/Button';

export const AddProductBtn = () => {
  const router = useRouter();

  const handleCreateClick = () => {
    router.push('/products/create', { scroll: false });
  };

  return (
    <Button onClick={handleCreateClick} className='gap-2 group'>
      <Plus className='w-4 h-4' />
      <span className='_title-s font-semibold'>Добавить продукт</span>
    </Button>
  );
};
