import BreadCrumbList from "@/components/breadcrumb/breadcrumb-list";
import CartOrderSummary from "@/components/cart/cart-order-summary";
import CartSection from "@/components/cart/cart-section";

export default function CartPage() {
  return (
    <section>
      <BreadCrumbList
        routes={[{ text: 'Home', href: '/' }, { text: 'Cart' }]}
      />
      <div className="grid gap-5 space-y-5 pb-20 sm:space-y-6 lg:grid-cols-[1fr_40%]">
        <h2 className="font-integral text-[2rem] md:text-4xl lg:col-span-2 lg:text-[3rem]">
          Your Cart
        </h2>
        <CartSection />
        <CartOrderSummary />
      </div>
    </section>
  );
}
