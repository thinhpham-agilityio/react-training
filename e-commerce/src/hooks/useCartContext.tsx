import { Cart, CartItem } from '@/types/cart';
import useSessionStorage from './useSessionStorage';
import { Product } from '@/types/products';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo
} from 'react';
import { CART } from '@/constants/storage';
import { calculateTotalPrice } from '@/utils/calculate';

interface CartContextProps {
  cart: Cart;
  addToCart: (newItem: Product, quantity: number) => void;
  updateQuantity: (itemId: number, newQuantity: number) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  findItemInCart: (itemId: number) => CartItem | undefined;
  updateDiscount: (discount: number) => void;
}

const CartContext = createContext<CartContextProps>({
  cart: { items: [], totalPrice: 0, subTotalPrice: 0, discount: 0, fee: 0 },
  addToCart: () => {},
  updateQuantity: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  findItemInCart: () => undefined,
  updateDiscount: () => {}
});

const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CardProvider');
  }

  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { storedValue: cart, setValue: setCart } = useSessionStorage<Cart>(
    CART,
    {
      items: [],
      totalPrice: 0,
      subTotalPrice: 0,
      discount: 0,
      fee: 25 // Default fee, can be adjusted when has api
    }
  );

  const findItemInCart = useCallback(
    (itemId: number) => {
      return cart.items.find((item) => item.id === itemId);
    },
    [cart.items]
  );

  const addToCart = useCallback(
    (newItem: Product, quantity: number) => {
      const existingItem = findItemInCart(newItem.id);

      if (existingItem) {
        const newListItem = cart.items.map((item) =>
          item.id === newItem.id
            ? {
                ...item,
                quantity: item.quantity + quantity
              }
            : item
        );
        // Recalculate total price after adding the item
        const { subTotal, total } = calculateTotalPrice(
          newListItem,
          cart.discount,
          cart.fee
        );

        setCart({
          ...cart,
          items: newListItem,
          subTotalPrice: subTotal,
          totalPrice: total
        });
      } else {
        const { subTotal, total } = calculateTotalPrice(
          [...cart.items, { ...newItem, quantity }],
          cart.discount,
          cart.fee
        );

        setCart({
          ...cart,
          items: [
            ...cart.items,
            {
              id: newItem.id,
              title: newItem.title,
              thumbnail: newItem.thumbnail,
              quantity,
              category: newItem.category,
              discountPercentage: newItem.discountPercentage,
              price: newItem.price
            }
          ],
          subTotalPrice: subTotal,
          totalPrice: total
        });
      }
    },
    [cart, findItemInCart, setCart]
  );

  const removeFromCart = useCallback(
    (itemId: number) => {
      const { subTotal, total } = calculateTotalPrice(
        cart.items.filter((item) => item.id !== itemId),
        cart.discount,
        cart.fee
      );

      setCart({
        ...cart,
        items: cart.items.filter((item) => item.id !== itemId),
        subTotalPrice: subTotal,
        totalPrice: total
      });
    },
    [cart, setCart]
  );

  const updateQuantity = useCallback(
    (itemId: number, newQuantity: number) => {
      if (newQuantity <= 0) {
        removeFromCart(itemId);
      } else {
        const { subTotal, total } = calculateTotalPrice(
          cart.items.map((item) =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
          ),
          cart.discount,
          cart.fee
        );

        setCart({
          ...cart,
          items: cart.items.map((item) =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
          ),
          subTotalPrice: subTotal,
          totalPrice: total
        });
      }
    },
    [cart, removeFromCart, setCart]
  );

  const clearCart = useCallback(() => {
    setCart({
      items: [],
      totalPrice: 0,
      subTotalPrice: 0,
      discount: 0,
      fee: 25 // Default fee, can be adjusted when has api
    });
  }, [setCart]);

  const updateDiscount = useCallback(
    (discount: number) => {
      const { subTotal, total } = calculateTotalPrice(
        cart.items,
        discount,
        cart.fee
      );

      setCart({
        ...cart,
        discount,
        subTotalPrice: subTotal,
        totalPrice: total
      });
    },
    [cart, setCart]
  );

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      findItemInCart,
      updateDiscount
    }),
    [cart, addToCart, updateQuantity, removeFromCart, clearCart, findItemInCart, updateDiscount]
  );

  return <CartContext value={value}>{children}</CartContext>;
};

export default useCartContext;
