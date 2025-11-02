'use client';
import _ from 'lodash';
import { notFound, useParams } from 'next/navigation';

import { useProductsStore } from '@/pages-ui/ProductsPage/store';
import { ProductModal } from '@/widgets/ProductModal';

export default function ProductPage() {
  const params = useParams();
  const id = params.id;
  const liked = useProductsStore((s) => s.liked);
  const toggleLike = useProductsStore((s) => s.toggleLike);

  if (_.isString(id)) {
    return (
      <ProductModal
        productId={id}
        isProductLiked={liked.includes(Number(id))}
        toggleLike={toggleLike}
      />
    );
  }

  return notFound();
}
