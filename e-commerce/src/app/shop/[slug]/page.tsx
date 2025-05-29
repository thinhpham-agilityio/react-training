import ProductDetailSection from '@/components/product-detail/product-detail-section';
import ProductInfoSkeleton from '@/components/skeleton/product-info-skeleton';
import { Suspense } from 'react';

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await the params to get the slug
  const { slug } = await params;

  return (
    <Suspense fallback={<ProductInfoSkeleton />}>
      <ProductDetailSection slug={slug} />;
    </Suspense>
  )
}
