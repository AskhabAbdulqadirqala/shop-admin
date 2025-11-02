'use client';
import _ from 'lodash';
import { notFound, useParams } from 'next/navigation';

import { ProductModal } from '@/widgets/ProductModal';

export default function ProductPage() {
  const params = useParams();
  const id = params.id;

  if (_.isString(id)) {
    return <ProductModal productId={id} />;
  }

  return notFound();
}
