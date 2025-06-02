import HeroSection from '@/components/home/hero-section';
import ProductPromotionSection from '@/components/home/product-promotion-section';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductPromotionSection title="NEW ARRIVALS" id="new-arrivals" />
      <div className="container mx-auto px-3">
        <Separator className="bg-border-foreground" />
      </div>
      <ProductPromotionSection title="ON SALE" id="on-sale" />
    </>
  );
}
