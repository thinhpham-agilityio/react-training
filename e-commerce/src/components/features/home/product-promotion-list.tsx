import ProductCard from '@/components/widgets/card/product-card';

const mockProducts = [
  {
    id: 31,
    title: 'Lemon',
    description:
      'Zesty and tangy lemons, versatile for cooking, baking, or making refreshing beverages.',
    category: 'groceries',
    price: 0.79,
    discountPercentage: 9.7,
    rating: 3.53,
    stock: 31,
    tags: ['fruits'],
    sku: 'GRO-BRD-LEM-031',
    weight: 3,
    dimensions: { width: 23.77, height: 9.22, depth: 12.05 },
    warrantyInformation: 'No warranty',
    shippingInformation: 'Ships in 1 month',
    availabilityStatus: 'In Stock',
    reviews: [[Object], [Object], [Object]],
    returnPolicy: '7 days return policy',
    minimumOrderQuantity: 29,
    meta: {
      createdAt: '2025-04-30T09:41:02.053Z',
      updatedAt: '2025-04-30T09:41:02.053Z',
      barcode: '4871812433378',
      qrCode: 'https://cdn.dummyjson.com/public/qr-code.png'
    },
    images: ['https://cdn.dummyjson.com/product-images/groceries/lemon/1.webp'],
    thumbnail:
      'https://cdn.dummyjson.com/product-images/groceries/lemon/thumbnail.webp'
  },
  {
    id: 26,
    title: 'Green Chili Pepper',
    description:
      'Spicy green chili pepper, ideal for adding heat to your favorite recipes.',
    category: 'groceries',
    price: 0.99,
    discountPercentage: 1,
    rating: 3.66,
    stock: 3,
    tags: ['vegetables'],
    sku: 'GRO-BRD-GRE-026',
    weight: 7,
    dimensions: { width: 15.38, height: 18.12, depth: 19.92 },
    warrantyInformation: '2 year warranty',
    shippingInformation: 'Ships in 1 week',
    availabilityStatus: 'Low Stock',
    reviews: [[Object], [Object], [Object]],
    returnPolicy: '30 days return policy',
    minimumOrderQuantity: 39,
    meta: {
      createdAt: '2025-04-30T09:41:02.053Z',
      updatedAt: '2025-04-30T09:41:02.053Z',
      barcode: '9335000538563',
      qrCode: 'https://cdn.dummyjson.com/public/qr-code.png'
    },
    images: [
      'https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp'
    ],
    thumbnail:
      'https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp'
  },
  {
    id: 42,
    title: 'Water',
    description:
      'Pure and refreshing bottled water, essential for staying hydrated throughout the day.',
    category: 'groceries',
    price: 0.99,
    discountPercentage: 14.92,
    rating: 4.96,
    stock: 53,
    tags: ['beverages'],
    sku: 'GRO-BRD-WAT-042',
    weight: 4,
    dimensions: { width: 18.43, height: 7.4, depth: 17.79 },
    warrantyInformation: '3 months warranty',
    shippingInformation: 'Ships in 1 month',
    availabilityStatus: 'In Stock',
    reviews: [[Object], [Object], [Object]],
    returnPolicy: '7 days return policy',
    minimumOrderQuantity: 28,
    meta: {
      createdAt: '2025-04-30T09:41:02.053Z',
      updatedAt: '2025-04-30T09:41:02.053Z',
      barcode: '2409829645213',
      qrCode: 'https://cdn.dummyjson.com/public/qr-code.png'
    },
    images: ['https://cdn.dummyjson.com/product-images/groceries/water/1.webp'],
    thumbnail:
      'https://cdn.dummyjson.com/product-images/groceries/water/thumbnail.webp'
  },
  {
    id: 25,
    title: 'Green Bell Pepper',
    description:
      'Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.',
    category: 'groceries',
    price: 1.29,
    discountPercentage: 0.16,
    rating: 3.25,
    stock: 33,
    tags: ['vegetables'],
    sku: 'GRO-BRD-GRE-025',
    weight: 2,
    dimensions: { width: 15.33, height: 26.65, depth: 14.44 },
    warrantyInformation: '1 month warranty',
    shippingInformation: 'Ships in 1 week',
    availabilityStatus: 'In Stock',
    reviews: [[Object], [Object], [Object]],
    returnPolicy: '30 days return policy',
    minimumOrderQuantity: 12,
    meta: {
      createdAt: '2025-04-30T09:41:02.053Z',
      updatedAt: '2025-04-30T09:41:02.053Z',
      barcode: '2365227493323',
      qrCode: 'https://cdn.dummyjson.com/public/qr-code.png'
    },
    images: [
      'https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/1.webp'
    ],
    thumbnail:
      'https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp'
  }
];

const ProductPromotionList = async () => {
  // We have to use mock data here because the API is not available in the build time.
  // In a real-world application, you would fetch the data from an API or a database, not from route handlers.
  const promotionProducts = mockProducts;

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
