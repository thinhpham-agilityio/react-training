import { getProductList } from "@/actions/product";
import ProductCard from "../card/product-card";

const ProductPromotionList = async () => {
  const { products } = await getProductList({});

  // Filter products to get the latest 4 products
  // We just mock this data, so we assume the products are sorted by date
  const promotionProducts = products.slice(0, 4);  

  return (
    <>
      {!promotionProducts || promotionProducts.length === 0 ? (
        <div className="col-span-2 flex h-full w-full items-center justify-center sm:col-span-3">
          <p className="text-xl font-bold text-primary">No products found</p>
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
