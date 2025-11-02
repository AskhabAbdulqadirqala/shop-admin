import Link from 'next/link';
import type { FC } from 'react';

import type { Product } from '@/entites/Product';
import { LikeButton } from '@/shared/ui/LikeButton';

import { Card } from './Card';
import { CardImg } from './CardImg';
import { DeleteButton } from './DeleteButton';
import { Description } from './Description';

interface ProductCardProps {
  product: Product;
  isLiked: boolean;
  onLike: (id: number) => void;
}

export const ProductCard: FC<ProductCardProps> = (props) => {
  const { product, onLike, isLiked } = props;

  return (
    <Link href={`/products/${product.id}`} className='block h-full'>
      <Card>
        <CardImg src={product.image} title={product.title}>
          <LikeButton isActive={isLiked} onClick={() => onLike(product.id)} />
        </CardImg>

        <Description
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
        />

        <DeleteButton />
      </Card>
    </Link>
  );
};
