import type { FC, MouseEvent } from 'react';

import { Button } from '@/shared/ui/Button';

import Heart from './assets/heart.svg';

interface LikeButtonProps {
  isActive: boolean;
  onClick: () => void;
}

export const LikeButton: FC<LikeButtonProps> = (props) => {
  const { isActive, onClick } = props;

  const handleLikeClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  return (
    <Button
      variant='ghost'
      size='icon'
      className={`absolute top-2 right-2 bg-transparent p-1 hover:bg-accent hover:text-accent-foreground ${
        isActive ? 'text-red-500' : 'text-white'
      }`}
      onClick={handleLikeClick}
    >
      <Heart className={isActive ? 'fill-current' : ''} size={20} />
    </Button>
  );
};
