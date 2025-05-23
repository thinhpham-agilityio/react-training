import ProductSection from '@/components/product/product-section';

interface ProductListPageProps {
  searchParams: Promise<{ page: string | undefined }>;
}

export default async function ProductListPage({
  searchParams
}: ProductListPageProps) {
  const params = await searchParams;
  const { page } = params;

  return <ProductSection page={page} />;
}
