import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import './globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import AppProvider from './provider';

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
    <html lang="en" className='scroll-smooth'>
      <body className='min-h-screen flex flex-col'>
        <AppProvider>
          <div>
            <Header />
            {children}
          </div>
          <Footer />
          <Toaster />
        </AppProvider>
      </body>
    </html>
  );
}
