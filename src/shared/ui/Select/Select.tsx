'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

import { cn } from '@/shared/lib/cn';

import type {
  SelectProps,
  GroupProps,
  ValueProps,
  TriggerProps,
  ItemProps,
  ContentProps,
  LabelProps,
  SeparatorProps,
  ScrollUpButtonProps,
  ScrollDownButtonProps,
} from './Select.props';

export const Select = ({ ...props }: SelectProps) => {
  return <SelectPrimitive.Root data-slot='select' {...props} />;
};

export const SelectGroup = ({ ...props }: GroupProps) => {
  return <SelectPrimitive.Group data-slot='select-group' {...props} />;
};

export const SelectValue = ({ ...props }: ValueProps) => {
  return <SelectPrimitive.Value data-slot='select-value' {...props} />;
};

export const SelectTrigger = ({
  className,
  size = 'default',
  children,
  ...props
}: TriggerProps) => {
  return (
    <SelectPrimitive.Trigger
      data-slot='select-trigger'
      data-size={size}
      className={cn(
        'flex w-full items-center justify-between gap-2 rounded-md bg-input px-3 py-2',
        'text-sm whitespace-nowrap outline-none transition-[color,box-shadow]',
        'focus-visible:ring-[1px] disabled:cursor-not-allowed disabled:opacity-50 ',
        'data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1',
        '*:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2',
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className='size-4 opacity-50' />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};

export const SelectContent = ({
  className,
  children,
  position = 'popper',
  ...props
}: ContentProps) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot='select-content'
        className={cn(
          'relative z-50 min-w-[8rem] overflow-hidden rounded-md border',
          'bg-white shadow-lg',
          'text-[var(--foreground)]',
          'border-gray-200',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
          'data-[side=bottom]:data-[state=closed]:slide-out-to-top data-[side=bottom]:data-[state=open]:slide-in-from-top',
          'data-[side=top]:data-[state=closed]:slide-out-to-bottom data-[side=top]:data-[state=open]:slide-in-from-bottom',
          position === 'popper' &&
            [
              'data-[side=bottom]:translate-y-1',
              'data-[side=top]:-translate-y-1',
              'data-[side=left]:-translate-x-1',
              'data-[side=right]:translate-x-1',
            ].join(' '),
          className,
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};

export const SelectLabel = ({ className, ...props }: LabelProps) => {
  return (
    <SelectPrimitive.Label
      data-slot='select-label'
      className={cn('text-muted-foreground px-2 py-1.5 text-xs', className)}
      {...props}
    />
  );
};

export const SelectItem = ({ className, children, ...props }: ItemProps) => {
  return (
    <SelectPrimitive.Item
      className={cn(
        'relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
        'transition-colors duration-150',
        'focus:bg-gray-100 focus:text-[var(--foreground)]',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      {...props}
    >
      <span className='absolute right-2 flex h-3.5 w-3.5 items-center justify-center'>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className='h-4 w-4' />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
};

export const SelectSeparator = ({ className, ...props }: SeparatorProps) => {
  return (
    <SelectPrimitive.Separator
      data-slot='select-separator'
      className={cn('bg-border pointer-events-none -mx-1 my-1 h-px', className)}
      {...props}
    />
  );
};

export const SelectScrollUpButton = ({
  className,
  ...props
}: ScrollUpButtonProps) => {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot='select-scroll-up-button'
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <ChevronUpIcon className='size-4' />
    </SelectPrimitive.ScrollUpButton>
  );
};

export const SelectScrollDownButton = ({
  className,
  ...props
}: ScrollDownButtonProps) => {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot='select-scroll-down-button'
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <ChevronDownIcon className='size-4' />
    </SelectPrimitive.ScrollDownButton>
  );
};
