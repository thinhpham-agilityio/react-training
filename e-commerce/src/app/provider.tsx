'use client';

import { CartProvider } from '@/hooks/useCartContext';
import { SessionProvider } from "next-auth/react"
import { ReactNode } from 'react';

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <CartProvider>{children}</CartProvider>
    </SessionProvider>
  );
}
