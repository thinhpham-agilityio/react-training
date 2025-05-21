import { Separator } from '../ui/separator';
import ProductCard from './product-card';

interface ProductSectionProps {
  products?: {
    id: number;
    thumbnail: string;
    title: string;
    rating: number;
    price: number;
    discountPercentage: number;
  }[];
  pagination?: {
    total: number;
    offset: number;
    limit: number;
  };
}

const ProductSection = ({ products, pagination }: ProductSectionProps) => {
  const { total = 0, offset = 0, limit = 0 } = pagination || {};
  const displayStart = offset + 1;
  const displayEnd = Math.min(offset + limit, total);

  return (
    <div className="grid h-fit w-full grid-cols-2 place-items-center gap-5 sm:grid-cols-3 lg:col-span-3 lg:col-start-2 lg:grid-cols-subgrid">
      <header className="col-span-2 flex size-full items-center justify-between sm:col-span-3">
        <h1 className="text-[2rem] font-bold">Shop</h1>

        <div className="flex items-center justify-center gap-3 lg:gap-6">
          <p className="text-black/60">
            Showing {displayStart}-{displayEnd} of {total} products
          </p>
        </div>
      </header>

      {!products || products.length === 0 ? (
        <div className="col-span-2 flex h-full w-full items-center justify-center sm:col-span-3">
          <p className="text-xl font-bold text-primary">No products found</p>
        </div>
      ) : (
        products.map((product) => <ProductCard key={product.id} {...product} />)
      )}

      <div className='col-span-full w-full mt-1'>
        <Separator className="bg-border-foreground" />
      </div>
      <div className="col-span-2 mb-12 mt-4 sm:col-span-3 md:mb-20">
        {' '}
        This is product pagination
      </div>
    </div>
  );
};

export default ProductSection;
