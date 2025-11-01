'use client';
import { ProductCard } from '@/widgets/ProductCard/ProductCard';

import { Header } from './ui/Header';

export const ProductsPage = () => {
  const paginatedProducts = [];

  return (
    <div className='min-h-screen'>
      <div className='container mx-auto px-4 py-8'>
        <Header className='mb-8' />

        {paginatedProducts.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className='text-center py-12 bg-white rounded-lg'>
            <p className='text-gray-500'>Продукты не найдены</p>
          </div>
        )}
      </div>
    </div>
  );
};
