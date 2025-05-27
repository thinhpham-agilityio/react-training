import { Product, ProductResponse } from '@/types/products';
import { Separator } from '../ui/separator';
import ProductCard from './product-card';
import apiService from '@/utils/api-service';
import { Pagination } from '@/types/pagination';
import { Suspense } from 'react';
import TotalProductSkeleton from '../skeleton/total-product-skeleton';
import ProductCardSkeleton from '../skeleton/product-card-skeleton';
import PaginationWithLinks from '../pagination/pagination-with-link';
import { PAGE_LIMIT } from '@/constants/page';
import FilterDrawer from '../filter/filter-drawer';
import SortingProduct from './sorting-product';
import { addSpaceAndCapitalizeFirstLetter } from '@/utils/text';

interface ProductSectionProps {
  urlParams: {
    page?: string;
    min?: string;
    max?: string;
    category?: string;
    sortBy?: string;
    orderBy?: string;
  };
}

interface ProductProps {
  offsetParam: number;
  min?: string;
  max?: string;
  category?: string;
  sortBy?: string;
  orderBy?: string;
}

interface GetProductListProps {
  offset?: number;
  minPrice?: string;
  maxPrice?: string;
  category?: string;
  sortBy?: string;
  order?: string;
}

const getProductList = async ({
  offset,
  maxPrice,
  minPrice,
  category,
  sortBy,
  order
}: GetProductListProps) => {
  const res = await apiService.get<ProductResponse>('api/products', {
    queryParams: {
      offset,
      minPrice,
      maxPrice,
      category,
      sortBy,
      order
    },
    cache: 'force-cache'
  });

  const products = res.data?.data.products as Product[];
  const pagination = res.data?.pagination as Pagination;

  return { products, pagination };
};

const TotalProduct = async ({
  offsetParam,
  max,
  min,
  category,
  sortBy,
  orderBy
}: ProductProps) => {
  const { pagination } = await getProductList({
    offset: offsetParam,
    minPrice: min,
    maxPrice: max,
    category,
    sortBy,
    order: orderBy
  });

  const { total = 0, offset = 0, limit = 0 } = pagination || {};
  const displayStart = offset + 1;
  const displayEnd = Math.min(offset + limit, total);

  return (
    <p className="text-primary">
      Showing {displayStart}-{displayEnd} of {total} products
    </p>
  );
};

const ProductHeader = async (params: ProductProps) => {
  const { category } = params;
  const headerText = addSpaceAndCapitalizeFirstLetter(category || 'Shop');

  return (
    <header className="col-span-2 flex size-full items-center justify-between sm:col-span-3">
      <h1 className="text-[2rem] font-bold">{headerText}</h1>

      <div className="flex items-center justify-center gap-3 lg:gap-6">
        <Suspense
          key={`product-header-${JSON.stringify(params)}`}
          fallback={<TotalProductSkeleton />}
        >
          <TotalProduct {...params} />
        </Suspense>
        <SortingProduct />
      </div>

      <div className="flex size-8 items-center justify-center rounded-full bg-shade-200 p-2 lg:hidden">
        <FilterDrawer />
      </div>
    </header>
  );
};

const ProductCardList = async ({
  offsetParam,
  min,
  max,
  category,
  sortBy,
  orderBy
}: ProductProps) => {
  const { products, pagination } = await getProductList({
    offset: offsetParam,
    minPrice: min,
    maxPrice: max,
    category,
    sortBy,
    order: orderBy
  });
  const { total = 0, offset = 0, limit = 0 } = pagination || {};
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPageCount = Math.ceil(total / limit);

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
      <div className="col-span-full w-full mb-12 mt-4 md:mb-20">
        <PaginationWithLinks
          page={currentPage}
          totalPageCount={totalPageCount}
        />
      </div>
    </>
  );
};

const ProductSection = ({ urlParams }: ProductSectionProps) => {
  const { page, min, max, category, orderBy, sortBy } = urlParams;
  const offset = page ? (Number(page) - 1) * PAGE_LIMIT : 0;

  return (
    <div className="grid h-fit w-full grid-cols-2 place-items-center gap-5 sm:grid-cols-3 lg:col-span-3 lg:col-start-2 lg:grid-cols-subgrid">
      <Suspense
        key={`product-header-${JSON.stringify(urlParams)}`}
        fallback={<TotalProductSkeleton />}
      >
        <ProductHeader
          offsetParam={offset}
          max={max}
          min={min}
          category={category}
          sortBy={sortBy}
          orderBy={orderBy}
        />
      </Suspense>
      <Suspense
        key={`product-list-${JSON.stringify(urlParams)}`}
        fallback={[1, 2, 3, 4, 5, 6].map((value) => (
          <ProductCardSkeleton key={`product-${value}`} />
        ))}
      >
        <ProductCardList
          offsetParam={offset}
          max={max}
          min={min}
          category={category}
          sortBy={sortBy}
          orderBy={orderBy}
        />
      </Suspense>
    </div>
  );
};

export default ProductSection;
