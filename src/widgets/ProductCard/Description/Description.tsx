import type { FC } from 'react';

interface DescriptionProps {
  title: string;
  price: number;
  description: string;
  category: string;
}

export const Description: FC<DescriptionProps> = (props) => {
  const { title, price, description, category } = props;
  return (
    <div className='flex-1 p-4'>
      <div className='flex items-start justify-between gap-2 mb-2'>
        <h3 className='line-clamp-1'>{title}</h3>
        <span className='text-blue-600 shrink-0'>{price} $</span>
      </div>

      <p className='text-sm text-gray-600 line-clamp-2 mb-2'>{description}</p>

      <div className='inline-block px-2 py-1 bg-gray-100 rounded text-sm text-gray-700'>
        {category}
      </div>
    </div>
  );
};
