import type { FC } from 'react';

interface ErrorBoxProps {
  message?: string;
  children?: React.ReactNode;
}

export const ErrorBox: FC<ErrorBoxProps> = (props) => {
  const { message, children } = props;

  return (
    <div className='text-center py-12 bg-white rounded-lg shadow-sm'>
      <div className='flex flex-col gap-2 mb-4'>
        <p className='text-red-500 text-lg font-semibold'>
          Не удалось загрузить продукты
        </p>

        <p className='text-gray-600 whitespace-pre-line'>
          {message && `Ошибка: ${message}\n`}
          Пожалуйста, попробуйте включить снова со включенным VPN
        </p>
      </div>

      {children}
    </div>
  );
};
