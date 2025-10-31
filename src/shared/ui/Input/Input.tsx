import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { cn } from '@/shared/lib/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2',
          'bg-input text-sm text-[var(--foreground)] placeholder:text-gray-400',
          'file:border-0 file:bg-transparent file:text-sm file:font-medium',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--btn-primary-ring)] focus-visible:ring-offset-0',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'transition-all duration-200',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
