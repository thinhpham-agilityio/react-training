import { Suspense } from 'react';
import { SlidersHorizontal } from 'lucide-react';

import { Skeleton } from '@/components/common/ui/skeleton';
import FilterContent from '@/components/features/shopping/filter/filter-content';

export default async function FiltersPage() {
  return (
    <div className="border-border-foreground h-fit w-full space-y-6 rounded-[1.25rem] px-6 py-5 max-lg:hidden lg:mb-4 lg:max-w-[18.5rem] lg:border">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Filters</h2>
        <SlidersHorizontal className="bg-background text-gray size-6 rotate-90" />
      </div>
      <Suspense fallback={<Skeleton className="h-10 w-full" />}>
        <FilterContent />
      </Suspense>
    </div>
  );
}
