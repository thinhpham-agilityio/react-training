import type { Metadata } from 'next';
import { Toaster } from 'sonner';

import './globals.css';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';
import AppProvider from '@/components/providers/provider';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Shop App'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen flex-col">
        <AppProvider>
          <div>
            <Header />
            <div className="mt-18">{children}</div>
          </div>
          <Footer />
          <Toaster />
        </AppProvider>
      </body>
    </html>
  );
}
