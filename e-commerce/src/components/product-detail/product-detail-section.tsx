import apiService from '@/utils/api-service';
import { Product } from '@/types/products';
import ProductDetailDescription from './product-detail-description';
import ProductImages from './product-images';
import { Suspense } from 'react';
import BreadCrumbList from '../breadcrumb/breadcrumb-list';
import ProductTabSection from './product-tab';
import RelatedProduct from './related-product';
import ProductCardListSkeleton from '../skeleton/product-card-list-skeleton';

interface ProductDetailSectionProps {
  slug: string;
}

const ProductDetailSection = async ({ slug }: ProductDetailSectionProps) => {
  const res = await apiService.get<Product>(`api/products/${slug}`);

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
      <div className="grid grid-row-1 md:grid-cols-2 gap-10">
        <Suspense fallback={<div>Loading images...</div>}>
          <ProductImages images={product.images} />
        </Suspense>
        <Suspense fallback={<div>Loading product details...</div>}>
          <ProductDetailDescription product={product} />
        </Suspense>
      </div>
      <div className="mt-20">
        <ProductTabSection product={product} />
      </div>

      <div className="grid h-fit w-full place-items-center grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-10 mb-10">
        <Suspense fallback={<ProductCardListSkeleton numberOfProducts={4} />}>
          <RelatedProduct category={product.category} productId={product.id} />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductDetailSection;
