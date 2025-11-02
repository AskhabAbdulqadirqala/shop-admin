import { useRouter } from 'next/navigation';
import type { FC } from 'react';

import { BaseModal } from '@/shared/ui/BaseModal';

interface ProductModalProps {
  productId: string;
}

export const ProductModal: FC<ProductModalProps> = (props) => {
  const { productId } = props;
  const router = useRouter();

  const handleModalClose = () => {
    router.push('/products/', { scroll: false });
  };

  return (
    <BaseModal
      onOpenChange={handleModalClose}
      altTitle={`Продукт #${productId}`}
    >
      123
    </BaseModal>
  );
};
