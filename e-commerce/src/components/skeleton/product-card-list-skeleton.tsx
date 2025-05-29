import ProductCardSkeleton from './product-card-skeleton';

interface ProductCardListSkeletonProps {
  numberOfProducts?: number;
}

const ProductCardListSkeleton = ({
  numberOfProducts = 0
}: ProductCardListSkeletonProps) => {
  if (numberOfProducts < 0) {
    return null;
  }

  return Array.from({ length: numberOfProducts || 4 }).map((value) => (
    <ProductCardSkeleton key={`product-${value}`} />
  ));
};

export default ProductCardListSkeleton;
