import BreadCrumbList from '@/components/breadcrumb/breadcrumb-list';
import { Metadata } from 'next';

interface ShopLayoutProps {
  productList: React.ReactNode;
  filters: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Shopping',
  description: 'Shopping page'
};

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
