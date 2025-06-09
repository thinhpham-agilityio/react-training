import ProductDetailSection from '@/components/features/shopping/product-detail/product-detail-section';

import { createMetadata } from '@/utils/metadata';
import { getProductDetail } from '@/actions/product-detail';

interface ProductDetailParams {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductDetailParams) {
  const { slug } = await params;

  const product = await getProductDetail(slug);

  return createMetadata({
    title: product.title,
    description: product.description,
    url: `https://react-training-beta-dun.vercel.app/shop/${slug}`,
    imageAlt: product.title,
    keywords: [product.title, 'Shop.co', 'product']
  });
}

export default async function ProductDetailPage({
  params
}: ProductDetailParams) {
  const { slug } = await params;

  const product = await getProductDetail(slug);

  return <ProductDetailSection product={product} />;
}
