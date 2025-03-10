import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/header/header';
import Faq from './components/faq/faq';
import Footer from './components/footer/footer';
import styles from './page.module.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Five Fights | Five Guesses, Five Fights',
  description:
    'Can you guess the UFC fighter from five of their fights? A new fighter everyday.',
  keywords: 'ufc,five fights, game, mma',
  openGraph: {
    type: 'website',
    url: 'https://www.fivefights.app/',
    title: 'Five Fights | Five Guesses, Five Fights',
    description:
      'Can you guess the UFC fighter from five of their fights?',
    siteName: 'Five Fights',
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
    notranslate: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <Header />
          {children}
          <Faq />
          <Footer />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
