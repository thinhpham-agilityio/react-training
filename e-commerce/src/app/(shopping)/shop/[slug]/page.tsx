import ProductDetailSection from '@/components/product-detail/product-detail-section';
import ProductInfoSkeleton from '@/components/skeleton/product-info-skeleton';
import { Product } from '@/types/products';
import apiService from '@/utils/api-service';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

interface ProductDetailParams {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params } : ProductDetailParams) {
  const { slug } = await params;

  const res = await apiService.get<Product>(`api/products/${slug}`);
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
