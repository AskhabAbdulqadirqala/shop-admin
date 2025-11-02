'use client';
import _ from 'lodash';
import { useEffect } from 'react';
import { useUrlSearchParams } from 'use-url-search-params';

import type { Product } from '@/entites/Product';
import { useProducts } from '@/entites/Product';
import { filterProducts } from '@/features/filter-products';
import { ProductCard } from '@/widgets/ProductCard';

import { useProductsStore } from './store';
import { CardsGrid } from './ui/CardsGrid';
import { ErrorBox } from './ui/ErrorBox';
import { Header } from './ui/Header';
import { Pagination } from './ui/Pagination';
import { ProductCardPlug } from './ui/ProductCardPlug';
import { ReloadBtn } from './ui/ReloadBtn';

const ITEMS_PER_PAGE = 9;

interface ProductsPageProps {
  children?: React.ReactNode;
}

export const ProductsPage = (props: ProductsPageProps) => {
  const { children } = props;

  const currentPage = useProductsStore((s) => s.currentPage);
  const activeCategory = useProductsStore((s) => s.activeCategory);
  const searchQuery = useProductsStore((s) => s.searchQuery);
  const liked = useProductsStore((s) => s.liked);
  const filter = useProductsStore((s) => s.filter);
  const toggleLike = useProductsStore((s) => s.toggleLike);
  const setCurrentPage = useProductsStore((s) => s.setCurrentPage);

  const [params, setParams] = useUrlSearchParams();

  const filterFn = (products: Product[]) => {
    return filterProducts(products, {
      activeCategory,
      searchQuery,
      filter,
      liked,
    });
  };

  const {
    data: paginatedData,
    isLoading,
    isError,
    error,
    refetch,
  } = useProducts({
    page: currentPage,
    limit: ITEMS_PER_PAGE,
    filter: filterFn,
  });

  const productsIsReady = !isError && !isLoading;
  const totalPages =
    paginatedData?.totalPages &&
    Math.ceil(paginatedData.totalPages / ITEMS_PER_PAGE);

  useEffect(() => {
    const urlPage = Number(params.page);

    if (
      urlPage > 0 &&
      urlPage !== currentPage &&
      totalPages &&
      urlPage < totalPages
    ) {
      setCurrentPage(urlPage);
    }
  }, [params.page, currentPage, totalPages, setCurrentPage]);

  const handleReloadClick = () => {
    refetch();
  };

  return (
    <div className='min-h-screen'>
      <>{children}</>

      <div className='container mx-auto px-4 py-8'>
        <Header className='mb-8' productsTotal={paginatedData?.total} />
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
              <ProductCard
                key={product.id}
                product={product}
                isLiked={liked.includes(product.id)}
                onLike={toggleLike}
              />
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

        {productsIsReady && Number(totalPages) > 1 && (
          <div className='mt-8 flex justify-center'>
            <Pagination
              currentPage={currentPage}
              totalPages={Number(totalPages)}
              goToPage={(page) => {
                setCurrentPage(page);
                setParams({ page });
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
