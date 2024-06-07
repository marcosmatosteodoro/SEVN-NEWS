import { ApiProvider } from '@/context/ApiContext';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SEVN NEWS',
  description: 'Canal de notícias da SEVN NEWS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ApiProvider>{children}</ApiProvider>
      </body>
    </html>
  );
}
