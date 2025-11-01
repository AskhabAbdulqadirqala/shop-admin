type PaginationPages = (number | '...')[];

export const GAP = '...';

export const generatePagination = (current: number, total: number) => {
  const delta = 1;
  const range = [];
  const rangeWithDots: PaginationPages = [];

  for (let i = 1; i <= total; i++) {
    if (
      i === 1 ||
      i === total ||
      (i >= current - delta && i <= current + delta)
    ) {
      range.push(i);
    }
  }

  let prev = null;

  for (const i of range) {
    if (prev && i - prev > 1) {
      rangeWithDots.push(GAP);
    }

    rangeWithDots.push(i);
    prev = i;
  }

  return rangeWithDots;
};
