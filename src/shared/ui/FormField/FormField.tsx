import type { FC, ReactNode } from 'react';

import { Label } from '@/shared/ui/Label';

const requiredSign = (
  <span title='Поле обязательно для заполнения' className='text-red-500'>
    *
  </span>
);

interface FormFieldProps {
  isRequired: boolean;
  title: string;
  children: ReactNode;
  labelFor: string;
  errorMessage?: string;
}

export const FormField: FC<FormFieldProps> = (props) => {
  const { isRequired, children, errorMessage, labelFor, title } = props;

  return (
    <div className='space-y-2'>
      <Label htmlFor={labelFor}>
        {title} {isRequired && requiredSign}
      </Label>
      {children}
      {errorMessage && <p className='text-sm text-red-500'>{errorMessage}</p>}
    </div>
  );
};
