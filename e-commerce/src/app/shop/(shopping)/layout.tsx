interface ShopLayoutProps {
  productList: React.ReactNode;
  filters: React.ReactNode;
}

export default function ShopLayout({ productList, filters }: ShopLayoutProps) {
  return (
    <section className="relative grid gap-5 lg:grid-cols-4">
      {filters}
      {productList}
    </section>
  );
}
