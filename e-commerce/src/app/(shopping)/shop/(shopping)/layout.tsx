import { createMetadata } from '@/utils/metadata';

import BreadCrumbList from '@/components/layout/breadcrumb/breadcrumb-list';

interface ShopLayoutProps {
  productList: React.ReactNode;
  filters: React.ReactNode;
}

export const metadata = createMetadata({
  title: 'Shopping',
  description: 'Browse and shop the latest products on Shop.co',
  keywords: ['shopping', 'products', 'Shop.co', 'deals'],
  url: 'https://react-training-beta-dun.vercel.app/shop',
  imageAlt: 'Shop.co Shopping',
});

export default function ShopLayout({ productList, filters }: ShopLayoutProps) {
  return (
    <section>
      <BreadCrumbList
        routes={[{ text: 'Home', href: '/' }, { text: 'Shop' }]}
      />
      <div className="relative grid gap-5 lg:grid-cols-4">
        {filters}
        {productList}
      </div>
    </section>
  );
}
