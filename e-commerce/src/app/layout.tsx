import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header/header';

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
      <body>
        <Header />
        <div className="container m-auto px-3 lg:px-0">{children}</div>
      </body>
    </html>
  );
}
