export interface CartItem {
  id: number;
  name: string;
  imageUrl: string;
  quantity: number;
  price: number;
}

export interface Cart {
  id: string;
  items: CartItem[];
}

export interface CartItemPayload {
  productId: number;
  quantity: number;
}

export interface CartPayload {
  items: CartItemPayload[];
  userId?: string;
}

export interface CardDB {
  id: string;
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  userId?: string;
}

export interface CartResponse {
  data: CardDB;
  message: string;
}
