
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog & Wawasan Terbaru',
  description: 'Kumpulan artikel, panduan, dan wawasan terbaru seputar dunia granule, konstruksi playground, dan strategi konten SEO dari para ahli.',
};

const blogPosts = [
  {
    title: 'Panduan Lengkap Pemasangan Lantai Karet EPDM: Dari Persiapan Hingga Finishing',
    description: 'Ingin tahu proses pemasangan lantai karet EPDM? Panduan langkah demi langkah ini membahas semua dari persiapan sub-base hingga finishing.',
    href: '/blog/panduan-pemasangan-lantai-karet-epdm',
    imageUrl: 'https://placehold.co/600x400',
    imageAlt: 'Proses pemasangan lantai karet EPDM',
    imageHint: 'rubber flooring installation',
    category: 'Panduan Teknis'
  },
  {
    title: 'Mengapa Jasa Artikel SEO Profesional Mengalahkan Konten AI? 5 Alasan Krusial',
    description: 'Anda sudah mencoba ChatGPT, tapi hasilnya biasa saja. Inilah 5 alasan fundamental mengapa sentuhan strategis dari seorang ahli SEO masih tak tergantikan.',
    href: '/blog/mengapa-jasa-artikel-seo-mengalahkan-ai',
    imageUrl: 'https://placehold.co/600x400',
    imageAlt: 'Perbandingan antara jasa penulis SEO dan robot AI',
    imageHint: 'man vs robot',
    category: 'SEO & Marketing'
  },
  {
    title: 'Hindari 5 Kesalahan Fatal Ini! Panduan Membangun Playground yang Aman',
    description: 'Dari pemilihan lokasi hingga lantai karet yang salah. Pelajari cara membangun area bermain yang 100% aman, sesuai standar SNI, dan menghindarkan Anda dari risiko.',
    href: '/panduan-playground-aman',
    imageUrl: 'https://placehold.co/600x400',
    imageAlt: 'Playground yang aman dan berwarna-warni',
    imageHint: 'safe playground',
    category: 'Konstruksi & Keamanan'
  },
  // Tambahkan artikel lain di sini
];

export default function BlogIndexPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Blog & Wawasan
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            Temukan artikel, panduan, dan tips terbaru dari tim ahli kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {blogPosts.map((post) => (
            <Card key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={post.href} className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt={post.imageAlt}
                  width={600}
                  height={400}
                  data-ai-hint={post.imageHint}
                />
              </Link>
              <div className="flex flex-1 flex-col justify-between bg-card p-6">
                <div className="flex-1">
                   <p className="text-sm font-medium text-accent">
                    {post.category}
                  </p>
                  <Link href={post.href} className="mt-2 block">
                    <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
                    <CardDescription className="mt-3">{post.description}</CardDescription>
                  </Link>
                </div>
                <div className="mt-6">
                  <Link href={post.href} className="font-semibold text-primary hover:text-primary/80 flex items-center gap-1">
                    Baca Selengkapnya
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
