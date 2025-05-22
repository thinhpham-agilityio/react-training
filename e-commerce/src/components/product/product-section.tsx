import { Product, ProductResponse } from '@/types/products';
import { Separator } from '../ui/separator';
import ProductCard from './product-card';
import apiService from '@/utils/api-service';
import { Pagination } from '@/types/pagination';
import { Suspense } from 'react';
import TotalProductSkeleton from '../skeleton/total-product-skeleton';
import ProductCardSkeleton from '../skeleton/product-card-skeleton';

const getProductList = async () => {
  const res = await apiService.get<ProductResponse>('api/products', {
    next: { revalidate: 3600 }
  });

  const products = res.data?.data.products as Product[];
  const pagination = res.data?.pagination as Pagination;

  return { products, pagination };
};

const ProductHeader = async () => {
  const { pagination } = await getProductList();

  const { total = 0, offset = 0, limit = 0 } = pagination || {};
  const displayStart = offset + 1;
  const displayEnd = Math.min(offset + limit, total);

  return (
    <header className="col-span-2 flex size-full items-center justify-between sm:col-span-3">
      <h1 className="text-[2rem] font-bold">Shop</h1>

      <div className="flex items-center justify-center gap-3 lg:gap-6">
        <p className="text-primary">
          Showing {displayStart}-{displayEnd} of {total} products
        </p>
      </div>
    </header>
  );
};

const ProductCardList = async () => {
  const { products } = await getProductList();

  return (
    <>
      {!products || products.length === 0 ? (
        <div className="col-span-2 flex h-full w-full items-center justify-center sm:col-span-3">
          <p className="text-xl font-bold text-primary">No products found</p>
        </div>
      ) : (
        products.map((product) => <ProductCard key={product.id} {...product} />)
      )}

      <div className="col-span-full w-full mt-1">
        <Separator className="bg-border-foreground" />
      </div>
      <div className="col-span-2 mb-12 mt-4 sm:col-span-3 md:mb-20">
        {' '}
        This is product pagination
      </div>
    </>
  );
};

const ProductSection = async () => {
  return (
    <div className="grid h-fit w-full grid-cols-2 place-items-center gap-5 sm:grid-cols-3 lg:col-span-3 lg:col-start-2 lg:grid-cols-subgrid">
      <Suspense fallback={<TotalProductSkeleton />}>
        <ProductHeader />
      </Suspense>
      <Suspense
        fallback={[1, 2, 3, 4].map((value) => (
          <ProductCardSkeleton key={value} />
        ))}
      >
        <ProductCardList />
      </Suspense>
    </div>
  );
};

export default ProductSection;
