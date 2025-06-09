import { createMetadata } from '@/utils/metadata';

export const metadata = createMetadata({
  title: 'Shopping',
  description: 'Browse and shop the latest products on Shop.co',
  keywords: ['shopping', 'products', 'Shop.co', 'deals'],
  url: 'https://react-training-beta-dun.vercel.app/shop',
  imageAlt: 'Shop.co Shopping',
});

export default function ShoppingLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="py-7">
      <div className="container m-auto px-3">{children}</div>
    </section>
  );
}
