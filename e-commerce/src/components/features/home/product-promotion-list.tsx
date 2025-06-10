import ProductCard from '@/components/widgets/card/product-card';
import { Product } from '@/types/products';

const ProductPromotionList = async () => {
  // We have to use mock api data here because the route handler is not available in the build time.
  // In a real-world application, you would fetch the data from an API or a database, not from route handlers.
  const productsRes = await fetch('https://dummyjson.com/products?limit=4&skip=4', {
    next: {
      revalidate: 3600, // Revalidate every 1 hour
    },
  });
  
  if (!productsRes.ok) {
    throw new Error('Failed to fetch products');
  }

  const productsData = await productsRes.json();
  const promotionProducts = productsData.products as Product[];

  return (
    <>
      {!promotionProducts || promotionProducts.length === 0 ? (
        <div className="col-span-2 flex h-full w-full items-center justify-center sm:col-span-3">
          <p className="text-primary text-xl font-bold">No products found</p>
        </div>
      ) : (
        promotionProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      )}
    </>
  );
};

export default ProductPromotionList;
