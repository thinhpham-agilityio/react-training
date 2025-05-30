import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import PriceDisplay from '../product/price-display';

export interface CartCardProps {
  id: number;
  title: string;
  price: number;
  quantity: number;
  category: string;
  thumbnail: string;
  discountPercentage?: number;
  onRemoveFromCart: (itemId: number) => void;
  onUpdateQuantity: (itemId: number, newQuantity: number) => void;
}

const CartCard = ({
  id,
  title,
  price,
  quantity,
  category,
  thumbnail,
  discountPercentage = 0,
  onRemoveFromCart,
  onUpdateQuantity
}: CartCardProps) => {
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      onUpdateQuantity(id, newQuantity);
    }
  };

  return (
    <Card className="flex flex-row w-full items-center justify-start gap-4 rounded-none border-0 py-4 shadow-none md:py-6">
      <figure className="relative aspect-square min-w-[6.1875rem] overflow-hidden rounded-lg bg-secondary/10 lg:min-w-[7.75rem]">
        <Image
          src={thumbnail}
          alt={title}
          className="size-full object-cover"
          fill
        />
      </figure>

      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col h-full w-full items-start justify-between gap-2 *:p-0 sm:gap-7">
          <CardHeader className="w-full space-y-0.5">
            <CardTitle className="text-base capitalize md:text-xl">
              {title}
            </CardTitle>
            <CardDescription className="text-xs text-secondary md:text-sm [&>span]:block">
              <span>
                Category: <span className="text-primary">{category}</span>
              </span>
            </CardDescription>
          </CardHeader>

          <PriceDisplay
            className="text-lg sm:text-xl [&>p:nth-child(3)]:px-2 [&>p:nth-child(3)]:py-1 [&>p:nth-child(3)]:text-[0.625rem] sm:[&>p:nth-child(3)]:px-3.5 sm:[&>p:nth-child(3)]:py-1.5 sm:[&>p:nth-child(3)]:text-xs"
            discountPercentage={discountPercentage}
            price={price}
          />
        </div>

        <div className="flex h-full flex-col items-end justify-between gap-8">
          <button
            type="button"
            onClick={() => onRemoveFromCart(id)}
            className="rounded-full bg-secondary/10 p-2"
          >
            <Trash2 className="size-5 stroke-destructive lg:size-6" />
          </button>

          <div className="flex items-center justify-center gap-4 rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium lg:gap-5 lg:px-6 lg:py-3">
            <button
              type="button"
              onClick={() => handleQuantityChange(quantity - 1)}
              className="active:scale-90"
            >
              <Minus className="size-4 lg:size-5" />
            </button>
            <span>{quantity}</span>

            <button
              type="button"
              onClick={() => handleQuantityChange(quantity + 1)}
              className="active:scale-90"
            >
              <Plus className="size-4 lg:size-5" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default CartCard;
