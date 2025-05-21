import { cn } from "@/lib/utils";
import { formatCurrency } from "@/utils/currency";

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
  mobile = false,
}: PriceDisplayProps) => {
  const discountedPrice = price - (price * discountPercentage) / 100;

  return (
    <div
      className={cn(
        "flex items-center justify-start gap-2.5 text-[2rem] font-bold",
        className,
      )}
    >
      <p>{formatCurrency(discountedPrice)}</p>
      <p className="text-gray line-through">{formatCurrency(price)}</p>
      <p
        className={cn(
          "w-fit rounded-full bg-destructive/10 px-3.5 py-1.5 text-sm font-medium text-destructive",
          mobile && "right-2 top-2 max-lg:absolute",
        )}
      >
        -{discountPercentage}%
      </p>
    </div>
  );
};

export default PriceDisplay;
