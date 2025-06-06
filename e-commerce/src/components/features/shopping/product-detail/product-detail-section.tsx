import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import { PROMOTION_PRODUCTS_LIMIT } from '@/constants/skeleton';
import { Product } from '@/types/products';

import ProductCardListSkeleton from '@/components/common/skeleton/product-card-list-skeleton';
import ProductDetailDescription from './product-detail-description';
import ProductImages from './product-images';
import ProductTabSection from './product-tab';
import RelatedProduct from './related-product';

import apiService from '@/utils/api-service';
import BreadCrumbList from '@/components/layout/breadcrumb/breadcrumb-list';

interface ProductDetailSectionProps {
  slug: string;
}

const ProductDetailSection = async ({ slug }: ProductDetailSectionProps) => {
  const res = await apiService.get<Product>(`api/products/${slug}`, {
    next: {
      revalidate: 3600 // Revalidate every 1 hour
    }
  });

  if (res.error && res.status !== 404) {
    throw new Error('Failed to fetch product details');
  }

  if (!res.data) {
    notFound();
  }

  const product = res.data as Product;

  return (
    <div>
      <BreadCrumbList
        routes={[
          { text: 'Home', href: '/' },
          { text: 'Shop', href: '/shop' },
          { text: product.title }
        ]}
      />
      <div className="grid-row-1 grid gap-10 md:grid-cols-2">
        <ProductImages images={product.images} />
        <ProductDetailDescription product={product} />
      </div>
      <div className="mt-20">
        <ProductTabSection product={product} />
      </div>

      <div className="mt-10 mb-10 grid h-fit w-full grid-cols-2 place-items-center gap-6 md:grid-cols-3 lg:grid-cols-4">
        <Suspense
          fallback={
            <ProductCardListSkeleton
              numberOfProducts={PROMOTION_PRODUCTS_LIMIT}
            />
          }
        >
          <RelatedProduct category={product.category} productId={product.id} />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductDetailSection;
