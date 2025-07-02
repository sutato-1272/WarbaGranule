
import Image from 'next/image';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowRight, CheckCircle, HardHat, Info, Tool, TriangleAlert } from 'lucide-react';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://warnagranule.com';

export const metadata: Metadata = {
  title: 'Panduan Pemasangan Lantai Karet EPDM: Dari Persiapan Hingga Finishing',
  description: 'Ingin tahu proses pemasangan lantai karet EPDM? Panduan langkah demi langkah ini membahas semua dari persiapan sub-base, pencampuran, hingga finishing.',
  keywords: ['pemasangan lantai karet epdm', 'cara pasang lantai karet', 'tutorial lantai epdm', 'kontraktor jogging track', 'persiapan lantai epdm', 'lem binder pu'],
  alternates: {
    canonical: '/blog/panduan-pemasangan-lantai-karet-epdm',
  },
  openGraph: {
    title: 'Panduan Pemasangan Lantai Karet EPDM: Dari Persiapan Hingga Finishing',
    description: 'Panduan teknis lengkap untuk pemasangan lantai karet EPDM yang benar, memastikan hasil yang awet dan aman.',
    url: `${siteUrl}/blog/panduan-pemasangan-lantai-karet-epdm`,
    siteName: 'WarnaGranule Solutions',
    images: [
      {
        url: `/og-image-panduan-epdm.png`, 
        width: 1200,
        height: 630,
        alt: 'Pekerja sedang melakukan proses pemasangan lantai karet EPDM.',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
};

export default function PemasanganEpdmGuidePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ArticleSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="font-semibold text-accent">PANDUAN TEKNIS LENGKAP</p>
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mt-2">
          Panduan Pemasangan Lantai Karet EPDM
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-primary-foreground/90 md:text-xl">
          Dari persiapan pondasi hingga tahap finishing, pahami setiap langkah krusial untuk memastikan pemasangan lantai karet EPDM Anda sempurna, awet, dan aman.
        </p>
      </div>
    </section>
  );
}

function ArticleSection() {
  return (
    <article className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24 scroll-mt-20">
      <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-headline prose-headings:text-primary prose-strong:text-foreground">
        
        <h2>Kualitas Material Hebat, Instalasi Harus Tepat</h2>
        <p>
          Anda sudah memilih <a href="/#produk">granule EPDM berkualitas tinggi</a> dari kami. Itu adalah langkah awal yang luar biasa. Namun, material terbaik sekalipun akan sia-sia jika proses instalasinya tidak tepat. Kesalahan pemasangan dapat mengakibatkan permukaan yang tidak rata, mudah mengelupas, atau bahkan tidak aman.
        </p>
        <p>
          Artikel ini adalah panduan teknis mendalam tentang **cara pasang lantai karet EPDM** yang benar. Meskipun kami sangat merekomendasikan untuk menggunakan <a href="/jasa-pemasangan-lantai-karet">jasa profesional</a> untuk hasil yang terjamin, memahami prosesnya akan membuat Anda menjadi klien yang lebih cerdas dan pengawas proyek yang lebih baik.
        </p>

        <Image src="https://placehold.co/1200x600" alt="Peralatan yang dibutuhkan untuk pemasangan lantai karet EPDM" width={1200} height={600} className="w-full rounded-lg shadow-lg my-8" data-ai-hint="construction tools flooring" />
        
        <h3>Langkah 1: Persiapan Sub-base (Fondasi Segalanya!)</h3>
        <p>
            Ini adalah tahap **paling krusial** yang sering disepelekan. Kegagalan di tahap ini tidak bisa diperbaiki tanpa membongkar ulang seluruh lantai. Pastikan sub-base Anda (biasanya cor beton) memenuhi syarat berikut:
        </p>
        <ul>
          <li><strong>Rata Sempurna:</strong> Tidak ada lubang, retakan, atau gundukan. Gunakan waterpass untuk memastikan kerataan.</li>
          <li><strong>Kering Total:</strong> Beton harus benar-benar kering (curing minimal 14-28 hari). Kelembapan yang terperangkap akan merusak ikatan lem.</li>
          <li><strong>Bersih dari Debu & Minyak:</strong> Sapu dan bersihkan permukaan hingga bebas dari segala kotoran.</li>
          <li><strong>Primer (Jika Perlu):</strong> Aplikasikan lapisan primer khusus untuk menutup pori-pori beton dan memperkuat ikatan lem.</li>
        </ul>
         <Alert variant="destructive">
          <TriangleAlert className="h-4 w-4" />
          <AlertTitle className="font-headline">Peringatan Keras!</AlertTitle>
          <AlertDescription>
            Jangan pernah memasang lantai EPDM di atas permukaan yang masih lembab, berdebu, atau tidak rata. Ini adalah penyebab utama kegagalan dan pembengkakan lantai di kemudian hari.
          </AlertDescription>
        </Alert>
        
        <h3 className='mt-8'>Langkah 2: Pencampuran Granule & Lem Binder PU</h3>
        <p>
            Presisi adalah kunci. Rasio pencampuran antara granule EPDM dan lem binder PU (Polyurethane) harus tepat. Rasio yang salah akan menghasilkan lantai yang terlalu keras atau terlalu rapuh.
        </p>
        <ul>
            <li>Gunakan mixer khusus (molen) untuk memastikan adonan tercampur merata.</li>
            <li>Tuangkan lem binder terlebih dahulu, baru masukkan granule secara bertahap.</li>
            <li>Aduk selama 3-5 menit hingga setiap butir granule terlapisi lem dengan sempurna.</li>
        </ul>

        <h3>Langkah 3: Pengecoran dan Perataan (Troweling)</h3>
        <p>
          Setelah adonan siap, segera tuangkan ke area kerja. Gunakan alat perata (trowel) yang sudah dilapisi dengan cairan pelicin (release agent) untuk mencegah adonan lengket. Ratakan adonan dengan ketebalan yang konsisten sesuai desain.
        </p>
        
        <Image src="https://placehold.co/1200x600" alt="Pekerja sedang meratakan adonan granule EPDM dengan trowel" width={1200} height={600} className="w-full rounded-lg shadow-lg my-8" data-ai-hint="construction worker trowel" />

        <h3>Langkah 4: Pemadatan dan Finishing</h3>
        <p>
            Setelah diratakan, permukaan harus dipadatkan menggunakan alat roller pemanas (finisher). Proses ini berfungsi untuk:
        </p>
        <ul>
            <li>Memadatkan granule untuk mendapatkan kepadatan yang seragam.</li>
            <li>Menghaluskan permukaan dan menghilangkan bekas trowel.</li>
            <li>Mempercepat proses pengeringan awal (initial curing).</li>
        </ul>
        <p>
            Biarkan lantai mengering selama minimal 24 jam sebelum bisa diinjak ringan, dan 72 jam sebelum digunakan untuk aktivitas penuh.
        </p>

        <h2>Kesimpulan: Keahlian Profesional Tak Tergantikan</h2>
        <p>
            Seperti yang Anda lihat, **pemasangan lantai karet EPDM** adalah pekerjaan yang membutuhkan ketelitian, pengalaman, dan peralatan khusus. Kesalahan kecil di satu tahap dapat berakibat fatal pada hasil akhir.
        </p>

      </div>
    </article>
  );
}

function CTASection() {
    return (
        <section id="kontak-panduan" className="w-full py-16 md:py-24 bg-primary/10 scroll-mt-20">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Terlihat Rumit? Serahkan pada Ahlinya!</h2>
                    <p className="mt-4 text-lg text-foreground/80">
                        Jangan pertaruhkan investasi Anda dengan coba-coba. Tim aplikator profesional kami siap memastikan proyek lantai karet Anda terpasang dengan sempurna, bergaransi, dan sesuai standar tertinggi.
                    </p>
                    <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/jasa-pemasangan-lantai-karet">
                           Lihat Layanan Jasa Pemasangan Profesional Kami
                           <ArrowRight className="ml-2 h-5 w-5"/>
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
