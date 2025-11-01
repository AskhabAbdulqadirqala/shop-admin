import type { FC, ReactNode } from 'react';

import { ImageWithFallback } from '@/shared/ui/ImageWithFallback';

interface CardImgProps {
  children: ReactNode;
  src: string;
  title: string;
}

export const CardImg: FC<CardImgProps> = (props) => {
  const { children, title, src } = props;

  return (
    <div className='relative aspect-square overflow-hidden'>
      <ImageWithFallback
        src={src}
        alt={title}
        className='w-full h-full object-cover'
      />
      {children}
    </div>
  );
};
