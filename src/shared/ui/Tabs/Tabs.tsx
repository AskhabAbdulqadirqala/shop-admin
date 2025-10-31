'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/shared/lib/cn';

import type {
  TabsContentProps,
  TabsListProps,
  TabsProps,
  TabsTriggerProps,
} from './Tabs.props';

function Tabs({ className, ...props }: TabsProps) {
  return (
    <TabsPrimitive.Root
      data-slot='tabs'
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }: TabsListProps) {
  return (
    <TabsPrimitive.List
      data-slot='tabs-list'
      className={cn(
        'bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-1 gap-1',
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      data-slot='tabs-trigger'
      tabIndex={0}
      className={cn(
        'inline-flex h-full flex-1 items-center justify-center gap-1.5 py-1 px-3',
        'bg-active shadow-sm rounded-lg text-sm font-medium whitespace-nowrap',
        'transition-all duration-300 ease-in-out focus-visible:outline-ring ',
        'data-[state=inactive]:bg-transparent data-[state=inactive]:shadow-none',
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: TabsContentProps) {
  return (
    <TabsPrimitive.Content
      data-slot='tabs-content'
      className={cn('flex-1 outline-none', className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
