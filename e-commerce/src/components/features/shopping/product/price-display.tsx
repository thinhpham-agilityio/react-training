import { cn } from '@/lib/utils';
import { formatCurrency } from '@/utils/currency';

interface PriceDisplayProps {
  price: number;
  discountPercentage: number;
  className?: string;
  mobile?: boolean;
}

const PriceDisplay = ({
  price,
  discountPercentage,
  className,
  mobile = false
}: PriceDisplayProps) => {
  const discountedPrice = price - (price * discountPercentage) / 100;

  return (
    <div
      className={cn(
        'flex items-center justify-start gap-2.5 text-[2rem] font-bold',
        className
      )}
    >
      <p>{formatCurrency(discountedPrice)}</p>
      <p className="text-gray line-through">{formatCurrency(price)}</p>
      <p
        className={cn(
          'w-fit rounded-full bg-destructive/10 text-destructive font-medium px-2 py-1 text-[0.625rem] sm:px-3.5 sm:py-1.5 sm:text-xs',
          {
            'right-2 top-2 max-xl:absolute': mobile
          }
        )}
      >
        -{discountPercentage}%
      </p>
    </div>
  );
};

export default PriceDisplay;
