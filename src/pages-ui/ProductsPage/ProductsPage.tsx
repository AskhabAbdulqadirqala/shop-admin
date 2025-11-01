'use client';
import { useState } from 'react';

import type { Product } from '@/entites/Product';
import { useProducts } from '@/entites/Product';
import { ProductCard } from '@/widgets/ProductCard';

import { CardsGrid } from './ui/CardsGrid';
import { ErrorBox } from './ui/ErrorBox';
import { Header } from './ui/Header';
import { Pagination } from './ui/Pagination';
import { ProductCardPlug } from './ui/ProductCardPlug';
import { ReloadBtn } from './ui/ReloadBtn';

const ITEMS_PER_PAGE = 9;

export const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: paginatedData,
    isLoading,
    isError,
    error,
    refetch,
  } = useProducts({
    page: currentPage,
    limit: ITEMS_PER_PAGE,
  });

  const productsIsReady = !isError && !isLoading;
  const totalPages =
    paginatedData?.total && Math.ceil(paginatedData.total / ITEMS_PER_PAGE);

  const handleReloadClick = () => {
    refetch();
  };

  return (
    <div className='min-h-screen'>
      <div className='container mx-auto px-4 py-8'>
        <Header className='mb-8' />
        {isLoading && (
          <CardsGrid>
            {Array.from({ length: ITEMS_PER_PAGE }, (_, index) => (
              <ProductCardPlug key={index} />
            ))}
          </CardsGrid>
        )}

        {productsIsReady && Number(paginatedData?.products.length) > 0 && (
          <CardsGrid>
            {paginatedData?.products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </CardsGrid>
        )}

        {productsIsReady && paginatedData?.products.length === 0 && (
          <div className='flex flex-col w-1/2 justify-center m-auto gap-4 text-center py-12 bg-white rounded-lg'>
            <p className='text-gray-500'>Продукты не найдены</p>
            <ReloadBtn onClick={handleReloadClick} />
          </div>
        )}

        {isError && (
          <ErrorBox message={error.message}>
            <ReloadBtn onClick={handleReloadClick} />
          </ErrorBox>
        )}

        {productsIsReady && totalPages && totalPages > 1 && (
          <div className='mt-8 flex justify-center'>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
