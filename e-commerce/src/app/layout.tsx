import type { Metadata } from 'next';
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
    <html lang="en">
      <body className='min-h-screen flex flex-col'>
        <AppProvider>
          <div>
            <Header />
            <div className="container m-auto px-3 lg:px-0">{children}</div>
          </div>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
