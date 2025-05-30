'use client';

import { CartProvider } from '@/hooks/useCartContext';
import { ReactNode } from 'react';

export default function AppProvider({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
