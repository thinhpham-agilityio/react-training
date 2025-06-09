import ProductCardListSkeleton from '@/components/common/skeleton/product-card-list-skeleton';
import ProductSection from '@/components/features/shopping/product/product-section';
import { PAGE_LIMIT } from '@/constants/page';
import { Suspense } from 'react';

interface ProductListPageProps {
  searchParams: Promise<{
    page: string | undefined;
    min: string | undefined;
    max: string | undefined;
    category: string | undefined;
    sortBy: string | undefined;
    orderBy: string | undefined;
  }>;
}

export default async function ProductListPage({
  searchParams
}: ProductListPageProps) {
  const params = await searchParams;

  return (
    <div className="grid h-fit w-full grid-cols-2 place-items-center gap-5 sm:grid-cols-3 lg:col-span-3 lg:col-start-2 lg:grid-cols-subgrid">
      <Suspense
        key={`product-list-${JSON.stringify(params)}`}
        fallback={<ProductCardListSkeleton numberOfProducts={PAGE_LIMIT} />}
      >
        <ProductSection urlParams={params} />
      </Suspense>
    </div>
  );
}
