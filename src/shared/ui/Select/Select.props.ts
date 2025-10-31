import type * as SelectPrimitive from '@radix-ui/react-select';
import { type ComponentProps } from 'react';

export type SelectProps = ComponentProps<typeof SelectPrimitive.Root>;
export type GroupProps = ComponentProps<typeof SelectPrimitive.Group>;
export type ValueProps = ComponentProps<typeof SelectPrimitive.Value>;
export type TriggerProps = ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: 'sm' | 'default';
};
export type ContentProps = ComponentProps<typeof SelectPrimitive.Content>;
export type ItemProps = ComponentProps<typeof SelectPrimitive.Item>;
export type LabelProps = ComponentProps<typeof SelectPrimitive.Label>;
export type ScrollUpButtonProps = ComponentProps<
  typeof SelectPrimitive.ScrollUpButton
>;
export type ScrollDownButtonProps = ComponentProps<
  typeof SelectPrimitive.ScrollDownButton
>;
export type SeparatorProps = ComponentProps<typeof SelectPrimitive.Separator>;
