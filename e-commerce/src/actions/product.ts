'use server';

import { Pagination } from "@/types/pagination";
import { Product, ProductResponse } from "@/types/products";
import apiService from "@/utils/api-service";

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

export { getProductList };
