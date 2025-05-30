import { CartItem } from '@/types/cart';

export const calculateTotalPrice = (
  items: CartItem[],
  discount: number = 0,
  fee: number = 0
) => {
  const subTotal = items.reduce((total, item) => {
    const itemTotal = item.price * item.quantity;
    return (
      total +
      (item.discountPercentage
        ? itemTotal - (itemTotal * item.discountPercentage) / 100
        : itemTotal)
    );
  }, 0);

  const total = subTotal - (subTotal * discount) / 100 + fee;

  return { subTotal, total };
};
