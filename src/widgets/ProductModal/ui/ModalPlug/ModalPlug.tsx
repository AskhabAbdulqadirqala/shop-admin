import { Plug } from '@/shared/ui/Plug';

export const ModalPlug = () => {
  return (
    <>
      {/* Картинка */}
      <Plug className='w-full md:w-1/2 h-[350px] animate-pulse' />
      <div className='flex flex-col gap-4 w-full md:w-1/2 animate-pulse'>
        {/* Категория */}
        <Plug className='h-6 w-26' />
        {/* Название */}
        <Plug className='h-6 w-3/4' />
        {/* Цена */}
        <Plug className='h-6 w-10' />
        {/* Заголовок описания */}
        <Plug className='h-6 w-26' />
        {/* Текст описания*/}
        <div className='flex flex-col gap-2 w-3/4'>
          <Plug className='h-4' />
          <Plug className='h-4' />
          <Plug className='h-4' />
        </div>
        {/* Статистика */}
        <div className='grid grid-cols-2 gap-x-4 gap-y-2 mt-3 w-1/2'>
          <Plug className='h-4' />
          <Plug className='h-4' />
          <Plug className='h-4' />
          <Plug className='h-4' />
          <Plug className='h-4' />
          <Plug className='h-4' />
        </div>
        {/* Кнопка */}
        <Plug className='h-6 w-full md:w-3/4 mt-10' />
      </div>
    </>
  );
};
