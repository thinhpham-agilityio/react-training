'use client';
import { useState } from 'react';
import { toast } from 'sonner';
import { Minus, Plus } from 'lucide-react';
import type { Product } from '@/types/products';
import StarRating from '../product/star-rating';
import PriceDisplay from '../product/price-display';
import { Button } from '../ui/button';
import useCartContext from '@/hooks/useCartContext';
import { useSession } from 'next-auth/react';

interface InfoDisplayProps {
  product: Product;
}

const InfoDisplay = ({ product }: InfoDisplayProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartContext();
  const { data: session } = useSession();

  const handleQuantityChange = (change: number) => {
    if (quantity <= 1 && change < 0) {
      // Prevent quantity from going below 1
      return;
    }

    setQuantity(quantity + change);
  };

  const handleAddToCart = () => {
    if (!session?.user) {
      toast.error('Please log in to use this action.');
      return;
    }

    addToCart(product, quantity);
    toast('Product added to cart successfully!', {
      description: 'Please check your cart for details.',
    });


    setQuantity(1); // Reset quantity after adding to cart
  };

  return (
    <div className="flex flex-col divide-y divide-secondary/10">
      <header className="pb-6">
        <h2 className="font-integral font-bold text-2xl leading-[1.2] md:text-[2rem] lg:text-[2.5rem]">
          {product.title}
        </h2>

        <StarRating rating={product.rating} />

        <PriceDisplay
          price={product.price}
          discountPercentage={product.discountPercentage}
        />

        <p className="mt-3 leading-[1.375rem] text-primary max-md:text-sm">
          {product.description}
        </p>
      </header>

      <div className="space-y-4 py-6 text-sm">
        <h3 className="text-primary">Tags</h3>
        <ul className="mt-2 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-shade-200 px-5 py-3 capitalize text-primary"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between gap-3 py-6 md:gap-4">
        <div className="flex items-center justify-center gap-6 rounded-full bg-secondary/10 px-4 py-3.5 font-medium md:py-4 lg:gap-8 lg:px-5 lg:py-4">
          <button
            type="button"
            onClick={() => handleQuantityChange(-1)}
            className="active:scale-90"
          >
            <Minus className="size-4 md:size-6" />
          </button>

          <span>{quantity}</span>

          <button
            type="button"
            onClick={() => {
              handleQuantityChange(1);
            }}
            className="active:scale-90"
          >
            <Plus className="size-4 md:size-6" />
          </button>
        </div>

        <div className="w-full">
          <Button
            onClick={handleAddToCart}
            className="size-full max-md:py-3.5 lg:py-4"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoDisplay;
