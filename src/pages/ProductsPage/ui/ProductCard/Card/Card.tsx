import type { FC, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export const Card: FC<CardProps> = (props) => {
  const { children } = props;

  return (
    <div className='h-full flex flex-col hover:shadow-lg transition-shadow duration-200'>
      {children}
    </div>
  );
};
