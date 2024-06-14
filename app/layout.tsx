import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Crypto Vault',
  description: 'The best cryptocurrency portfolio tracker',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${raleway.className} container mx-auto px-2 md:px-8`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
