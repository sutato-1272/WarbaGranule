import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://warnagranule.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'WarnaGranule Solutions | Produsen & Supplier Granule EPDM #1 Indonesia',
    template: '%s | WarnaGranule Solutions',
  },
  description: 'Produsen, distributor, dan supplier granule warna EPDM dan granule hitam SBR berkualitas. Solusi terbaik untuk playground, jogging track, & lapangan olahraga. Jual granule harga kompetitif ke seluruh Indonesia.',
  keywords: ['granule epdm', 'granule warna', 'granule hitam', 'jual granule', 'supplier granule', 'produsen granule', 'pabrik granule', 'playground', 'jogging track', 'mini soccer', 'futsal', 'harga granule epdm', 'karet epdm', 'lantai karet'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'WarnaGranule Solutions | Produsen & Supplier Granule EPDM #1 Indonesia',
    description: 'Solusi granule EPDM dan SBR berkualitas tinggi untuk playground, jogging track, dan lapangan olahraga di seluruh Indonesia.',
    url: siteUrl,
    siteName: 'WarnaGranule Solutions',
    images: [
      {
        url: `/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Playground dengan lantai granule EPDM berwarna-warni.',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WarnaGranule Solutions | Produsen & Supplier Granule EPDM #1 Indonesia',
    description: 'Solusi granule EPDM dan SBR berkualitas tinggi untuk playground, jogging track, dan lapangan olahraga di seluruh Indonesia.',
    images: [`/og-image.png`],
  },
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
