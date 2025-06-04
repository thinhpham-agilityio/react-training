'use client';

import useBuildLink from '@/hooks/use-build-link';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface CategoryButtonProps {
  name: string;
  slug: string;
}

const CategoryButton = ({ name, slug }: CategoryButtonProps) => {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category') || '';
  const { buildLink } = useBuildLink();

  return (
    <Link
      key={slug}
      href={buildLink([{ key: 'category', value: slug }])}
      className={cn(
        `flex items-center justify-between gap-2 py-1 transition-colors hover:no-underline`,
        selectedCategory === slug
          ? 'font-medium text-secondary'
          : 'text-secondary/60 hover:text-secondary/80'
      )}
    >
      <span className="capitalize">{name}</span>
      <ChevronRight className="size-4" />
    </Link>
  );
};

export default CategoryButton;
