import ProductDetailSection from '@/components/product-detail/product-detail-section';

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await the params to get the slug
  const { slug } = await params;

  return <ProductDetailSection slug={slug} />;
}
