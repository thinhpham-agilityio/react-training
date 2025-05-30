'use client';

import useCartContext from '@/hooks/useCartContext';
import { ShoppingCart } from 'lucide-react';

const ShoppingCartIcon = () => {
  const { cart } = useCartContext();

  const itemCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      <ShoppingCart />
      {itemCount > 0 && (
        <div className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-xs text-contained">
          <span>{`${itemCount}`}</span>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartIcon;
