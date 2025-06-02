import { convertNumberToString } from '@/utils/text';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  {
    figures: 200,
    text: 'International Brands'
  },
  {
    figures: 2000,
    text: 'High-Quality Products'
  },
  {
    figures: 30000,
    text: 'Happy Customers'
  }
];

const HeroSection = () => {
  return (
    <section className="full-width content-grid bg-background-hero pb-28 pt-12">
      <div className="container m-auto px-3 flex lg:items-center justify-between gap-12 max-lg:flex-col lg:gap-8">
        <div className="max-w-[38rem] space-y-5 lg:space-y-12">
          <div className="space-y-5 lg:space-y-8">
            <h2 className="font-integral font-bold text-4xl leading-[2.125rem] text-secondary max-md:max-w-[22.5rem] md:text-5xl lg:text-[4rem] lg:leading-[4rem]">
              FIND ANY PRODUCT THAT YOU NEED
            </h2>

            <p className="text-sm text-primary max-md:max-w-[22.5rem] md:text-base">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <Link
              href="/shop"
              className="w-full px-14 py-4 md:w-fit bg-secondary text-contained text-sm font-semibold rounded-xl"
            >
              Shop Now
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 space-x-2 md:justify-between">
            {stats.map(({ figures, text }, i) => (
              <div key={i} className="w-[9.7rem] border-r border-border-foreground last:border-r-0 max-lg:nth-[2]:border-r-0">
                <p className="text-2xl font-bold md:text-[2rem] lg:text-[2.5rem]">
                  {convertNumberToString(figures)}+
                </p>
                <p className="text-xs text-primary md:text-sm lg:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <figure className="aspect-square basis-0.2 w-full relative">
          <Image
            src={'/images/hero-image.jpg'}
            alt="Hero Image"
            fill
            objectFit='contain'
          />
        </figure>
      </div>
    </section>
  );
};
export default HeroSection;
