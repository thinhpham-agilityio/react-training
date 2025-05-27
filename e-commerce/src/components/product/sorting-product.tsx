'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select';
import { useState } from 'react';
import { SORT_OPTIONS } from '@/constants/filter';
import useBuildLink from '@/hooks/useBuildLink';

const SortingProduct = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sortBy = searchParams.get('sortBy');
  const orderBy = searchParams.get('orderBy');
  const sortParam = sortBy && orderBy ? `${sortBy}-${orderBy}` : undefined;
  const [sort, setSort] = useState(
    SORT_OPTIONS.find((option) => option.value === sortParam)?.value ||
      SORT_OPTIONS[0].value
  );
  const { buildLink } = useBuildLink();

  const handleSortChange = (value: string) => {
    setSort(value);
    const [sortBy, orderBy] = value.split('-');
    const newUrl = buildLink([
      { key: 'sortBy', value: sortBy },
      { key: 'orderBy', value: orderBy }
    ]);

    router.push(newUrl);
  };

  return (
    <div className="flex items-center justify-between gap-4 max-lg:hidden">
      <p className="text-primary">Sort by:</p>
      <Select onValueChange={handleSortChange} value={sort}>
        <SelectTrigger className="w-[180px] border-none shadow-none focus:shadow-none">
          <SelectValue placeholder="Select sorting" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {SORT_OPTIONS.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortingProduct;
