import type { FC } from 'react';

import { cn } from '@/shared/lib/cn';

interface PlugProps {
  className?: string;
}

export const Plug: FC<PlugProps> = (props) => {
  const { className } = props;

  return <div className={cn('bg-gray-200 rounded', className)} />;
};
