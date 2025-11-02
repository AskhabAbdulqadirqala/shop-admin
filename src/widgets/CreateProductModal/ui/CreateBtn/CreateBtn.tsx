import { Loader2 } from 'lucide-react';
import type { FC } from 'react';

import { Button } from '@/shared/ui/Button';

interface CreateBtnProps {
  isSubmitting: boolean;
}

export const CreateBtn: FC<CreateBtnProps> = (props) => {
  const { isSubmitting } = props;

  return (
    <Button
      type='submit'
      disabled={isSubmitting}
      className='flex gap-2 mt-4 w-full'
    >
      {isSubmitting && <Loader2 className='animate-spin' />}
      {isSubmitting ? 'Создание...' : 'Создать продукт'}
    </Button>
  );
};
