export default function ShoppingLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="py-4">
      <div className="container m-auto px-3">{children}</div>
    </section>
  );
}
