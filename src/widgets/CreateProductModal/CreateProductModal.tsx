'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { BaseModal } from '@/shared/ui/BaseModal';

import type { CreateProductFormData } from './CreateProductModal.types';
import { CreateBtn } from './ui/CreateBtn';
import { FormFields } from './ui/FormFields/FormFields';
import { SuccessNotification } from './ui/SuccessNotification';

export const CreateProductModal = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<CreateProductFormData>({
    defaultValues: {
      imageUrl: 'https://example.com/image.jpg',
    },
  });

  const handleModalClose = () => {
    router.push('/products/', { scroll: false });
  };

  const onSubmit = async (data: CreateProductFormData) => {
    try {
      console.log('Данные формы:', data);

      await new Promise((resolve) => setTimeout(resolve, 3000));

      setTimeout(handleModalClose, 200);
    } catch (error) {
      console.error('Ошибка при создании продукта:', error);
    }
  };

  return (
    <BaseModal
      open={true}
      onOpenChange={handleModalClose}
      altTitle='Создание нового продукта'
    >
      {isSubmitSuccessful ? (
        <SuccessNotification />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <FormFields register={register} errors={errors} />

          <CreateBtn isSubmitting={isSubmitting} />
        </form>
      )}
    </BaseModal>
  );
};
