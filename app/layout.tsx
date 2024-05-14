import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

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
      <body className={`${raleway.className} flex flex-col justify-start items-center min-h-svh`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
