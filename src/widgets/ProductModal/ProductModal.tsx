import { useRouter } from 'next/navigation';
import type { FC } from 'react';

import { useProduct } from '@/entites/Product/model/hooks/useProduct';
import { BaseModal } from '@/shared/ui/BaseModal';

import { ModalPlug } from './ModalPlug';

interface ProductModalProps {
  productId: string;
}

export const ProductModal: FC<ProductModalProps> = (props) => {
  const { productId } = props;
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
      className='flex justify-between gap-4 w-[80%] max-w-4xl'
    >
      {isLoading && <ModalPlug />}
    </BaseModal>
  );
};
