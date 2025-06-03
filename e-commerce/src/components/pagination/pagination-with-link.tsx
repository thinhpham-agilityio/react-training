'use client';

import { type ReactNode } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';
import useBuildLink from '@/hooks/useBuildLink';
import PaginationSelect from './pagination-select';

export interface PaginationWithLinksProps {
  page: number;
  pageSearchParam?: string;
  totalPageCount: number;
}

const PaginationWithLinks = ({
  page,
  pageSearchParam = 'page',
  totalPageCount
}: PaginationWithLinksProps) => {
  const { buildLink } = useBuildLink();
  const disableNavigation = totalPageCount === 0 || totalPageCount === 1;
  const disablePrevious = page === 1 || disableNavigation;
  const disableNext = page === totalPageCount || disableNavigation;
  

  const renderPageNumbers = () => {
    const items: ReactNode[] = [];
    const maxVisiblePages = 5;

    if (totalPageCount <= maxVisiblePages) {
      for (let i = 1; i <= totalPageCount; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={buildLink([{ key: pageSearchParam, value: i }])}
              isActive={page === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            href={buildLink([{ key: pageSearchParam, value: 1 }])}
            isActive={page === 1}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (page > 3) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationSelect totalPage={totalPageCount} />
          </PaginationItem>
        );
      }

      const start = Math.max(2, page - 1);
      const end = Math.min(totalPageCount - 1, page + 1);

      for (let i = start; i <= end; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={buildLink([{ key: pageSearchParam, value: i }])}
              isActive={page === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (page < totalPageCount - 2) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationSelect totalPage={totalPageCount} />
          </PaginationItem>
        );
      }

      items.push(
        <PaginationItem key={totalPageCount}>
          <PaginationLink
            href={buildLink([{ key: pageSearchParam, value: totalPageCount }])}
            isActive={page === totalPageCount}
          >
            {totalPageCount}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-3 w-full">
      <Pagination>
        <PaginationContent className="max-sm:gap-0 w-full justify-between">
          <PaginationItem>
            <PaginationPrevious
              href={buildLink([
                { key: pageSearchParam, value: Math.max(page - 1, 1) }
              ])}
              aria-disabled={disablePrevious}
              tabIndex={disablePrevious ? -1 : undefined}
              className={
                disablePrevious ? 'pointer-events-none opacity-50' : undefined
              }
            />
          </PaginationItem>
          <div className="flex flex-row">{renderPageNumbers()}</div>
          <PaginationItem>
            <PaginationNext
              href={buildLink([
                {
                  key: pageSearchParam,
                  value: Math.min(page + 1, totalPageCount)
                }
              ])}
              aria-disabled={disableNext}
              tabIndex={disableNext ? -1 : undefined}
              className={
                disableNext
                  ? 'pointer-events-none opacity-50'
                  : undefined
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default PaginationWithLinks;
