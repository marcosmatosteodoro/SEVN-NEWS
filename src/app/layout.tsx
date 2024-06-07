import { ApiProvider } from '@/context/ApiContext';
import type { Metadata } from 'next';
import './globals.css';

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
      <body>
        <ApiProvider>{children}</ApiProvider>
      </body>
    </html>
  );
}
