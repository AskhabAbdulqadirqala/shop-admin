import { useRouter } from 'next/navigation';
import type { FC } from 'react';

import { useProduct } from '@/entites/Product/model/hooks/useProduct';
import { BaseModal } from '@/shared/ui/BaseModal';
import { ErrorBox } from '@/shared/ui/ErrorBox';
import { ImageWithFallback } from '@/shared/ui/ImageWithFallback';
import { LikeButton } from '@/shared/ui/LikeButton';

import { ModalPlug } from './ui/ModalPlug';

interface ProductModalProps {
  productId: string;
  isProductLiked: boolean;
  toggleLike: (id: number) => void;
}

export const ProductModal: FC<ProductModalProps> = (props) => {
  const { productId, isProductLiked, toggleLike } = props;
  const router = useRouter();
  const { data, isLoading, isError, error, refetch } = useProduct({
    id: productId,
  });

  const handleModalClose = () => {
    router.push('/products/', { scroll: false });
  };

  return (
    <BaseModal
      onOpenChange={handleModalClose}
      altTitle={`Продукт #${productId}`}
      className='flex flex-col md:flex-row justify-between gap-4 w-[80%] max-w-4xl pt-13 md:pt-10'
    >
      {isLoading && <ModalPlug />}

      {!isLoading && isError && (
        <ErrorBox
          className='w-full'
          title='Продукт не найден'
          message={error?.message}
          onReload={refetch}
        />
      )}

      {!isLoading && !isError && data && (
        <>
          <div className='relative md:w-1/2 aspect-square'>
            <ImageWithFallback
              src={data.image}
              alt={data.title}
              className='rounded-lg w-full object-cover md:object-contain'
            />

            <LikeButton
              isActive={isProductLiked}
              onClick={() => toggleLike(data.id)}
            />
          </div>

          <div className='flex flex-col gap-4 w-full md:w-1/2'>
            <p className='w-fit px-3 py-1 bg-gray-100 rounded mb-4'>
              {data.category}
            </p>

            <h1>{data.title}</h1>

            <span className='text-blue-600'>{data.price} $</span>

            <h2 className='_title-m'>Описание</h2>

            <p className='text-gray-600'>{data.description}</p>

            <div className='grid grid-cols-2 gap-x-4 gap-y-2 mt-3 w-full'>
              <p className='_text-l w-36'>ID продукта</p>
              <p className='_text-l'>{data.id}</p>
              <p className='_text-l w-36'>Дата добавления</p>
              <p className='_text-l'>
                {/* API не возвращает дату, поэтому поставим заглушку */}
                {new Date().toLocaleDateString()}
              </p>
              <p className='_text-l w-36'>Статус</p>
              <p className='_text-l'>
                {isProductLiked ? 'В избранном' : 'Не в избранном'}
              </p>
            </div>
          </div>
        </>
      )}
    </BaseModal>
  );
};
