import type { FC } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { FormField } from '@/shared/ui/FormField';
import { Input } from '@/shared/ui/Input';

import type { CreateProductFormData } from '../../CreateProductModal.types';

interface FormFieldsProps {
  register: UseFormRegister<CreateProductFormData>;
  errors: FieldErrors<CreateProductFormData>;
}

export const FormFields: FC<FormFieldsProps> = (props) => {
  const { register, errors } = props;

  return (
    <>
      <FormField
        isRequired
        title='Название продукта'
        labelFor='name'
        errorMessage={errors.name?.message}
      >
        <Input
          id='name'
          placeholder='Введите название продукта'
          {...register('name', {
            required: 'Название продукта обязательно',
            minLength: {
              value: 2,
              message: 'Название должно содержать минимум 2 символа',
            },
          })}
        />
      </FormField>

      <FormField
        isRequired
        title='Описание'
        labelFor='description'
        errorMessage={errors.description?.message}
      >
        <textarea
          id='description'
          placeholder='Введите описание продукта'
          rows={3}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1'
          {...register('description', {
            required: 'Описание обязательно',
            minLength: {
              value: 10,
              message: 'Описание должно содержать минимум 10 символов',
            },
          })}
        />
      </FormField>

      <FormField
        isRequired
        title='Цена ($)'
        labelFor='price'
        errorMessage={errors.price?.message}
      >
        <Input
          id='price'
          type='number'
          step='0.01'
          placeholder='Введите цену'
          {...register('price', {
            required: 'Цена обязательна',
            min: {
              value: 0,
              message: 'Цена не может быть отрицательной',
            },
          })}
        />
      </FormField>

      <FormField
        isRequired
        title='Категория'
        labelFor='category'
        errorMessage={errors.category?.message}
      >
        <Input
          id='category'
          placeholder='Введите категорию'
          {...register('category', {
            required: 'Категория обязательна',
          })}
        />
      </FormField>

      <FormField
        isRequired
        title='URL изображения'
        labelFor='imageUrl'
        errorMessage={errors.imageUrl?.message}
      >
        <Input
          id='imageUrl'
          type='url'
          placeholder='https://example.com/image.jpg'
          {...register('imageUrl', {
            required: 'URL изображения обязателен',
            pattern: {
              value: /^https?:\/\/.+\..+/,
              message: 'Введите корректный URL',
            },
          })}
        />
      </FormField>
    </>
  );
};
