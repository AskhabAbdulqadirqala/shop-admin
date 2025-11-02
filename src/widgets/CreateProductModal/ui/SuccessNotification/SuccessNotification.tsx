import SuccessIcon from './assets/success-icon.svg';

export const SuccessNotification = () => {
  return (
    <div className='my-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-in slide-in-from-top duration-300'>
      <div className='flex items-center'>
        <div className='flex-shrink-0'>
          <SuccessIcon className='w-5 h-5 text-green-400' />
        </div>
        <div className='ml-3'>
          <h3 className='text-sm font-medium text-green-800'>
            Продукт успешно создан!
          </h3>
          <p className='text-sm text-green-600 mt-1'>
            Новый продукт добавлен в каталог
          </p>
        </div>
      </div>
    </div>
  );
};
