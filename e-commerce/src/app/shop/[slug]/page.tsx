export default function ProductDetailPage({
  params
}: {
  params: { slug: string };
}) {
  return <h1>Product {params.slug} Detail</h1>;
}
