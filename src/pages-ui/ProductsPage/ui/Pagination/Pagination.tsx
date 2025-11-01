'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/Button';

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
      {/* Previous */}
      {!isFirstPage && (
        <Button
          variant='ghost'
          size='sm'
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className='gap-1 pl-2 pr-3'
        >
          <ChevronLeft className='h-4 w-4' />
          <span className='hidden sm:inline'>Предыдущие</span>
        </Button>
      )}

      {/* Page Numbers */}
      <div className='flex items-center gap-1'>
        {pages.map((page, i) => {
          if (page === GAP) {
            return (
              <span
                key={`ellipsis-${i}`}
                className='px-3 py-2 text-sm text-muted-foreground'
              >
                {GAP}
              </span>
            );
          }

          return (
            <Button
              key={page}
              variant={currentPage === page ? 'secondary' : 'ghost'}
              size='sm'
              onClick={() => onPageChange(page)}
              className={cn(
                'w-9 h-9 p-0',
                currentPage === page &&
                  'bg-[var(--btn-primary-bg)] text-white hover:bg-[var(--btn-primary-bg-hover)] shadow-sm',
              )}
            >
              {page}
            </Button>
          );
        })}
      </div>

      {/* Next */}
      {!isLastPage && (
        <Button
          variant='ghost'
          size='sm'
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className='gap-1 pl-3 pr-2'
        >
          <span className='hidden sm:inline'>Следующие</span>
          <ChevronRight className='h-4 w-4' />
        </Button>
      )}
    </nav>
  );
};
