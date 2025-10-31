import Link from 'next/link';

import { Card } from './Card';
import { CardImg } from './CardImg';
import { DeleteButton } from './DeleteButton';
import { Description } from './Description';
import { LikeButton } from './LikeButton/LikeButton';

interface ProductCardProps {
  product: any;
}

export function ProductCard(props: ProductCardProps) {
  const { product } = props;

  return (
    <Link href={`/products/${product.id}`} className='block h-full'>
      <Card>
        <CardImg src={product.image} title={product.title}>
          <LikeButton isActive={product.liked} />
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
}
