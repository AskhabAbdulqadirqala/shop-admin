import { Trash2 } from 'lucide-react';
import type { MouseEvent } from 'react';

import { Button } from '@/shared/ui/Button';

export const DeleteButton = () => {
  const handleDeleteClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className='p-4 pt-0'>
      <Button
        variant='destructive'
        size='sm'
        className='w-full'
        onClick={handleDeleteClick}
      >
        <Trash2 size={16} className='mr-2' />
        <span>Удалить</span>
      </Button>
    </div>
  );
};
