import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import { Product } from '@/types/products';

import ProductDetailSection from '@/components/features/shopping/product-detail/product-detail-section';
import ProductInfoSkeleton from '@/components/common/skeleton/product-info-skeleton';

import apiService from '@/utils/api-service';

interface ProductDetailParams {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductDetailParams) {
  const { slug } = await params;

  const res = await apiService.get<Product>(`api/products/${slug}`, {
    next: {
      revalidate: 3600 // Revalidate every 1 hour
    }
  });
  if (!res.data) {
    notFound();
  }

  const product = res.data as Product;

  return {
    title: product.title,
    description: product.description
  };
}

export default async function ProductDetailPage({
  params
}: ProductDetailParams) {
  const { slug } = await params;

  return (
    <Suspense fallback={<ProductInfoSkeleton />}>
      <ProductDetailSection slug={slug} />
    </Suspense>
  );
}
