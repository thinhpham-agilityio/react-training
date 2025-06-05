import { Suspense } from 'react';
import Link from 'next/link';

import ProductPromotionList from '@/components/features/home/product-promotion-list';
import { Button } from '@/components/common/ui/button';
import ProductCardListSkeleton from '@/components/common/skeleton/product-card-list-skeleton';

interface ProductPromotionSectionProps {
  title: string;
  id: string;
}

const ProductPromotionSection = async ({
  title,
  id
}: ProductPromotionSectionProps) => {
  return (
    <div
      id={id}
      className="container mx-auto px-3 grid h-fit w-full place-items-center grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-10 mb-10"
    >
      <div className="col-span-2 flex items-center justify-center sm:col-span-3 lg:col-span-4">
        <h2 className="text-[2rem] font-bold">{title}</h2>
      </div>
      <Suspense fallback={<ProductCardListSkeleton numberOfProducts={4} />}>
        <ProductPromotionList />
      </Suspense>
      <div className="col-span-full w-full mb-12 mt-4 md:mb-20">
        <div className="flex items-center justify-center">
          <Link
            href="/shop"
            className="w-full flex items-center justify-center"
          >
            <Button
              className="w-full lg:w-auto border border-border-foreground"
              size="lg"
              variant="ghost"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPromotionSection;
