'use client';
import { PaginationBtn } from './PaginationBtn';
import { GAP, generatePagination } from '../../lib/pagination';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { currentPage, totalPages, onPageChange } = props;
  const pages = generatePagination(currentPage, totalPages);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <nav
      className='flex items-center justify-center gap-1'
      aria-label='Pagination'
    >
      {!isFirstPage && (
        <PaginationBtn
          direction='prev'
          onClick={() => onPageChange(currentPage - 1)}
        />
      )}

      <div className='flex items-center gap-1'>
        {pages.map((page, i) => {
          if (page === GAP) {
            return (
              <span
                key={`ellipsis-${i}`}
                className='px-3 py-2 text-sm pointer-events-none'
              >
                {GAP}
              </span>
            );
          }

          return (
            <PaginationBtn
              key={page}
              isActive={currentPage === page}
              onClick={() => onPageChange(page)}
              className='w-9 h-9 p-0'
            >
              {page}
            </PaginationBtn>
          );
        })}
      </div>

      {!isLastPage && (
        <PaginationBtn
          direction='next'
          onClick={() => onPageChange(currentPage + 1)}
        />
      )}
    </nav>
  );
};
