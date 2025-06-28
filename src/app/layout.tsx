import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'WarnaGranule Solutions | Produsen & Supplier Granule EPDM',
  description: 'Produsen, distributor, dan supplier granule warna EPDM dan granule hitam berkualitas tinggi. Solusi terbaik untuk playground, jogging track, lapangan mini soccer, dan futsal. Jual granule EPDM harga kompetitif ke seluruh Indonesia.',
  keywords: 'granule epdm, granule warna, granule hitam, jual granule, supplier granule, produsen granule, pabrik granule, playground, jogging track, mini soccer, futsal, harga granule epdm',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-background antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
