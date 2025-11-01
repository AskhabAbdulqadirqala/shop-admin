import type { FC } from 'react';

interface CardsGridProps {
  children: React.ReactNode;
}

export const CardsGrid: FC<CardsGridProps> = (props) => {
  const { children } = props;

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
      {children}
    </div>
  );
};
