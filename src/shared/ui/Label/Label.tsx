import type { FC, LabelHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/cn';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: FC<LabelProps> = (props) => {
  const { className, ...labelProps } = props;

  return (
    <label
      className={cn('block text-sm font-medium text-gray-700', className)}
      {...labelProps}
    />
  );
};
