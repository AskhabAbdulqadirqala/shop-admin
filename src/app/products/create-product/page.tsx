'use client';
import { useRouter } from 'next/navigation';

import { BaseModal } from '@/shared/ui/BaseModal';
import { Button } from '@/shared/ui/Button';

export default function CreateProductPage() {
  const router = useRouter();

  const handleModalClose = () => {
    router.push('/products/', { scroll: false });
  };

  return (
    <div>
      <BaseModal
        open={true}
        onOpenChange={handleModalClose}
        altTitle='Создание нового продукта'
      >
        <Button onClick={handleModalClose}>Создать продукт</Button>
      </BaseModal>
    </div>
  );
}
