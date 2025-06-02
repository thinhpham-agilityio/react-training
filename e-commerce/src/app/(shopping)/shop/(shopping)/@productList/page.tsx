import ProductSection from '@/components/product/product-section';

interface ProductListPageProps {
  searchParams: Promise<{
    page: string | undefined,
    min: string | undefined,
    max: string | undefined,
    category: string | undefined,
    sortBy: string | undefined,
    orderBy: string | undefined,
  }>;
}

export default async function ProductListPage({
  searchParams
}: ProductListPageProps) {
  const params = await searchParams;

  return <ProductSection urlParams={params} />;
}
