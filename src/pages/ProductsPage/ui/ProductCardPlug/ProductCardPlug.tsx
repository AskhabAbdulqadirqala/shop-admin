import { Plug } from '@/shared/ui/Plug';

/**
 * Заглушка карточки товара.
 */
export const ProductCardPlug = () => {
  return (
    <div className='h-full flex flex-col p-4 bg-white rounded-lg shadow-md animate-pulse'>
      {/* Картинка */}
      <Plug className='w-full aspect-square mb-4' />

      {/* Заголовок / цена */}
      <div className='h-4 mb-2 flex justify-between'>
        <Plug className='inline h-full w-3/4' />
        <Plug className='h-full w-1/5' />
      </div>

      {/* Описание и категория */}
      <Plug className='h-3 mb-1' />
      <Plug className='h-3 mb-1' />
      <Plug className='h-3 w-1/4 mb-4' />

      {/* Кнопка удаления */}
      <div className='flex justify-between items-center'>
        <Plug className='h-6 w-full w-16' />
      </div>
    </div>
  );
};
