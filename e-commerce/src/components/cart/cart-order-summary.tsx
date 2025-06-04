'use client';
import { ArrowRight, Tag } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import useCartContext from '@/hooks/use-cart-context';
import { formatCurrency } from '@/utils/currency';
import { Button } from '../ui/button';
import InputField from '../field/inputField';
import { useState } from 'react';
import { toast } from 'sonner';

const OrderSummaryCard = () => {
  const [promoCode, setPromoCode] = useState('');
  const { cart, clearCart, updateDiscount } = useCartContext();

  const { subTotalPrice, discount, fee, totalPrice, items } = cart;

  const handleApplyPromo = () => {
    // Here you would typically validate the promo code and apply the discount
    // For now, we'll just log it
    console.log(`Applying promo code: ${promoCode}`);
    updateDiscount(20); // Mock discount application

    setPromoCode(''); // Clear the input after applying
  };

  const handleOrderCheckout = () => {
    // Mock checkout process
    toast('Check out successfully!');
    clearCart(); // Clear the cart after checkout
  };

  const discountAmount = (subTotalPrice * discount) / 100;

  return (
    <Card className="h-fit sm:w-full lg:max-w-[31.5rem] rounded-[1.25rem] border border-border-foreground shadow-none px-6 [&>*]:px-0">
      <CardHeader className="pt-5">
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 [&>div>p:nth-child(1)]:text-black/60 [&>div>p:nth-child(2)]:font-bold [&>div]:flex [&>div]:w-full [&>div]:items-center [&>div]:justify-between [&>div]:text-xl">
        <div>
          <p>Subtotal</p>
          <p>{formatCurrency(items.length ? subTotalPrice : 0)}</p>
        </div>
        <div>
          <p>Discount (-{discount}%)</p>
          <p className="text-warn">
            -{items.length ? formatCurrency(discountAmount) : 0}
          </p>
        </div>
        <div>
          <p>Delivery Fee</p>
          <p>{items.length ? formatCurrency(fee) : 0}</p>
        </div>
      </CardContent>
      <CardFooter className="w-full flex-col gap-6 border-t border-black/10 pb-5 pt-6">
        <div className="flex w-full items-center justify-between text-xl">
          <p>Total</p>
          <p className="text-2xl font-semibold">
            {items.length ? formatCurrency(totalPrice) : 0}
          </p>
        </div>

        <div className="grid w-full grid-cols-[1fr_7rem] gap-3">
          <InputField
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Add promo code"
            className="w-full border-none bg-shade-200 placeholder:text-black/40"
            startIcon={<Tag color="#00000066" />}
          />
          <Button
            onClick={handleApplyPromo}
            disabled={!promoCode.trim()}
            className="h-full max-h-12"
          >
            Apply
          </Button>
        </div>

        <Button onClick={handleOrderCheckout} className="w-full space-x-3 py-6">
          <span>Go to Checkout</span>
          <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
};
export default OrderSummaryCard;
