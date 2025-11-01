import { RotateCw } from 'lucide-react';
import type { FC } from 'react';

import { Button } from '@/shared/ui/Button';

interface ReloadBtnProps {
  onClick?: () => void;
}

const reloadPage = () => {
  window.location.reload();
};

export const ReloadBtn: FC<ReloadBtnProps> = (props) => {
  const { onClick = reloadPage } = props;

  return (
    <Button className='gap-2 m-auto' onClick={onClick}>
      <RotateCw className='w-4 h-4' />
      Попробовать снова
    </Button>
  );
};
