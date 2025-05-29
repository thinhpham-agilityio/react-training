import { Cart } from '@/types/cart';
import useSessionStorage from './useSessionStorage';
import { Product } from '@/types/products';

const useShoppingCart = () => {
  const { storedValue: cart, setValue: setCart } = useSessionStorage<Cart>(
    'cart',
    {
      id: 'cart',
      items: [],
    }
  );

  const addToCart = (newItem: Product) => {
    const existingItem = cart.items.find((item) => item.id === newItem.id);

    if (existingItem) {
      setCart({
        ...cart,
        items: cart.items.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      setCart({
        ...cart,
        items: [
          ...cart.items,
          {
            id: newItem.id,
            name: newItem.title,
            imageUrl: newItem.thumbnail,
            quantity: 1,
            price: newItem.price
          }
        ],
      });
    }
  };

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCart(
        {
          ...cart,
          items: cart.items.map((item) =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
          ),
        }
      );
    }
  };

  const removeFromCart = (itemId: number) => {
    setCart({
      ...cart,
      items: cart.items.filter((item) => item.id !== itemId),
    });
  };

  const clearCart = () => {
    setCart({
      id: 'cart',
      items: [],
    });
  };

  const findItemInCart = (itemId: number) => {
    return cart.items.find((item) => item.id === itemId);
  };

  return {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    findItemInCart
  };
};

export default useShoppingCart;
