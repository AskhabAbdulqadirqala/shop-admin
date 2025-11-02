import type { FC } from 'react';

import { ReloadBtn } from '@/shared/ui/ReloadBtn';

import { cn } from '../../lib/cn';

interface ErrorBoxProps {
  title: string;
  className?: string;
  message?: string;
  onReload?: () => void;
}

export const ErrorBox: FC<ErrorBoxProps> = (props) => {
  const { className, message, onReload, title } = props;

  return (
    <div
      className={cn(
        'text-center py-12 bg-white rounded-lg shadow-sm',
        className,
      )}
    >
      <div className='flex flex-col gap-2 mb-4'>
        <p className='text-red-500 text-lg font-semibold'>{title}</p>

        <p className='text-gray-600 whitespace-pre-line'>
          {message && `Ошибка: ${message}\n`}
          Пожалуйста, попробуйте снова со включенным VPN
        </p>
      </div>

      <ReloadBtn onClick={onReload} />
    </div>
  );
};
