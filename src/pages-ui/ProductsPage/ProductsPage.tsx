'use client';
import _ from 'lodash';

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

const ITEMS_PER_PAGE = 3;

export const ProductsPage = () => {
  const currentPage = useProductsStore((s) => s.currentPage);
  const activeCategory = useProductsStore((s) => s.activeCategory);
  const searchQuery = useProductsStore((s) => s.searchQuery);
  const liked = useProductsStore((s) => s.liked);
  const filter = useProductsStore((s) => s.filter);
  const setLiked = useProductsStore((s) => s.setLiked);
  const setCurrentPage = useProductsStore((s) => s.setCurrentPage);

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

  const handleReloadClick = () => {
    refetch();
  };

  const likeProduct = (id: number) => {
    setLiked(_.union(liked, [id]));
  };

  const unlikeProduct = (id: number) => {
    setLiked(_.without(liked, id));
  };

  return (
    <div className='min-h-screen'>
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
                likeProduct={likeProduct}
                unlikeProduct={unlikeProduct}
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
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
