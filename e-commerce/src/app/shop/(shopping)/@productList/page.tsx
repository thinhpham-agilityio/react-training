import ProductSection from "@/components/product/product-section";
import { ProductResponse } from "@/types/products";
import apiService from "@/utils/api-service";

export default async function ProductListPage() {
  const res = await apiService.get<ProductResponse>('/api/products');  

  if (res.error) {
    return <div>Error: {res.error}</div>;
  }

  const products = res.data?.data.products;
  const pagination = res.data?.pagination;

  console.log(products);
  

  return (
    <ProductSection pagination={pagination} products={products} />
  )
}
