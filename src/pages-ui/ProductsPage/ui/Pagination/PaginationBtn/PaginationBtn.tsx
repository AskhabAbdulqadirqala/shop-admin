import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { FC, ReactNode } from 'react';

import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/Button';

interface PaginationBtnProps {
  isActive?: boolean;
  onClick: () => void;
  direction?: 'next' | 'prev';
  className?: string;
  children?: ReactNode;
}

export const PaginationBtn: FC<PaginationBtnProps> = (props) => {
  const { isActive, onClick, direction, className, children } = props;

  const isPrev = direction === 'prev';
  const DirectionIcon = isPrev ? ChevronLeft : ChevronRight;
  const title = isPrev ? 'Предыдущий' : 'Следующий';

  return (
    <Button
      variant={isActive ? 'secondary' : 'ghost'}
      size='sm'
      onClick={onClick}
      className={cn('gap-1 pl-2 pr-3', className)}
    >
      {children ? (
        children
      ) : (
        <>
          <DirectionIcon className='h-4 w-4' />
          <span className='hidden sm:inline'>{title}</span>
        </>
      )}
    </Button>
  );
};
