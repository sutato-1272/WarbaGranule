
import Image from 'next/image';
import type { Metadata } from 'next';
import { CheckCircle, FileCheck, Gauge, BrainCircuit, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://warnagranule.com';

export const metadata: Metadata = {
  title: 'Jasa Posting Artikel SEO Profesional | Tingkatkan Peringkat Google',
  description: 'Layanan jasa posting artikel SEO profesional yang ditulis oleh ahli. Bukan sekadar teks AI, kami membangun halaman yang dioptimalkan secara teknis untuk hasil maksimal di Google.',
  keywords: ['jasa posting artikel', 'jasa artikel seo', 'penulis artikel seo', 'beli artikel seo', 'jasa konten website'],
  alternates: {
    canonical: '/jasa-posting-artikel',
  },
  openGraph: {
    title: 'Jasa Posting Artikel SEO Profesional | Tingkatkan Peringkat Google',
    description: 'Tinggalkan artikel AI yang tidak efektif. Dapatkan konten SEO berkualitas tinggi yang ditulis oleh manusia, dioptimalkan secara teknis, dan benar-benar mendatangkan traffic.',
    url: `${siteUrl}/jasa-posting-artikel`,
    siteName: 'WarnaGranule Solutions',
    images: [
      {
        url: `/og-image-jasa-artikel.png`,
        width: 1200,
        height: 630,
        alt: 'Seseorang sedang menulis artikel SEO di laptop.',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function JasaArtikelPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProblemSolutionSection />
      <WhyUsSection />
      <ProcessSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Stop Buang Waktu dengan Artikel AI Biasa
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-primary-foreground/90 md:text-xl">
          Kami tidak hanya menulis. Kami merancang, membangun, dan mengoptimalkan setiap halaman sebagai aset digital yang bekerja 24/7 untuk mendatangkan traffic dan konversi.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#harga">Lihat Paket Harga</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <a href="#kontak-jasa-artikel">Konsultasi Gratis</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProblemSolutionSection() {
    return (
        <article id="tentang-jasa" className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24 scroll-mt-20">
            <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-headline prose-headings:text-primary prose-strong:text-foreground">
                <h2 className="text-center">Mengapa Artikel dari ChatGPT & Gemini Gagal Mendatangkan Hasil?</h2>
                <p className="text-center text-xl text-foreground/80 !mb-12 not-prose">
                    Anda sudah mencoba AI, tapi traffic website tidak kunjung naik. Inilah masalah yang tidak mereka selesaikan.
                </p>
                <p>
                    AI seperti ChatGPT dan Gemini memang hebat dalam menghasilkan teks. Namun, di arena kompetitif Google, <strong>teks saja tidak cukup</strong>. Google tidak memberi peringkat pada dokumen Word, ia memberi peringkat pada <strong>halaman web</strong>. Sebuah halaman web adalah ekosistem kompleks yang terdiri dari teks, kode, struktur, kecepatan, dan puluhan sinyal teknis lainnya.
                </p>
                <p>
                    Inilah perbedaan fundamental layanan kami. Kami tidak menjual artikel. Kami menawarkan <strong>jasa posting artikel SEO</strong> yang menyeluruh. Kami menangani semuanya, mulai dari riset kata kunci, penulisan konten oleh manusia yang ahli, hingga implementasi teknis yang sempurna di website Anda. Hasilnya bukan sekadar tulisan, melainkan halaman web yang cepat, terstruktur, dan siap bersaing untuk peringkat teratas.
                </p>

                <Image src="https://placehold.co/1200x600" alt="Perbandingan antara teks AI biasa dengan halaman web yang dioptimalkan secara teknis" width={1200} height={600} className="w-full rounded-lg shadow-lg my-8" data-ai-hint="comparison chart" />

                <h3 className="mt-8">Solusi Kami: Artikel + Optimasi Teknis = Peringkat</h3>
                <p>
                    Setiap artikel yang kami posting untuk Anda akan dibangun dengan fondasi yang kokoh, mencakup:
                </p>
                <ul>
                    <li><strong>Struktur Heading (H1, H2, H3) yang Logis:</strong> Memberi tahu Google hierarki informasi dalam konten Anda.</li>
                    <li><strong>Optimasi Metadata:</strong> Title tag dan meta description yang menarik untuk meningkatkan Click-Through Rate (CTR) di hasil pencarian.</li>
                    <li><strong>Optimasi Gambar:</strong> Kompresi gambar, penamaan file yang benar, dan `alt text` yang deskriptif.</li>
                    <li><strong>Internal & External Linking:</strong> Membangun koneksi yang relevan untuk meningkatkan otoritas halaman Anda.</li>
                    <li><strong>Kode yang Bersih dan Cepat:</strong> Memastikan halaman dimuat secepat kilat, salah satu faktor peringkat terpenting saat ini.</li>
                </ul>
                <p>
                    Berhentilah berjudi dengan konten AI. Investasikan pada konten berkualitas yang benar-benar memberikan hasil nyata untuk bisnis Anda.
                </p>
            </div>
        </article>
    )
}

function WhyUsSection() {
    const features = [
        { icon: <FileCheck className="h-10 w-10 text-accent"/>, title: "Optimasi SEO Menyeluruh", description: "Dari riset keyword hingga struktur teknis, kami memastikan setiap halaman siap untuk 'bertarung' di Google." },
        { icon: <Gauge className="h-10 w-10 text-accent"/>, title: "Kecepatan Muat Maksimal", description: "Setiap halaman dibangun di atas fondasi Next.js yang cepat, faktor kunci yang disukai Google." },
        { icon: <BrainCircuit className="h-10 w-10 text-accent"/>, title: "Konten Ditulis Ahli", description: "Artikel ditulis oleh penulis manusia yang memahami niche Anda, bukan sekadar hasil 'prompt' AI." },
        { icon: <ShieldCheck className="h-10 w-10 text-accent"/>, title: "100% Original & Unik", description: "Kami menjamin setiap artikel lolos uji plagiarisme dan memiliki sudut pandang yang segar." }
    ];

    return (
        <section id="keunggulan" className="w-full py-16 md:py-24 bg-primary/5 scroll-mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center">
                    <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Bukan Sekadar Jasa Penulis Artikel</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                        Kami adalah mitra strategis Anda dalam content marketing dan SEO.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {features.map((feature, index) => (
                        <Card key={index} className="text-center shadow-md hover:shadow-xl transition-shadow border-0 bg-transparent">
                            <CardHeader className="items-center">
                                {feature.icon}
                                <CardTitle className="font-headline mt-4">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProcessSection() {
    return (
        <section id="proses-kerja" className="w-full py-16 md:py-24 scroll-mt-20">
            <div className="container mx-auto max-w-4xl px-4 md:px-6">
                <div className="text-center">
                    <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Proses Kerja Kami yang Transparan</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                        Hanya 4 langkah mudah untuk mendapatkan konten SEO berkualitas tinggi di website Anda.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">1</span>Brief & Konsultasi</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Anda memberikan kami brief tentang topik, target audiens, dan tujuan artikel. Kami akan berdiskusi untuk memastikan pemahaman yang sama.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="font-headline flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">2</span>Riset & Penulisan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Tim kami melakukan riset keyword mendalam dan mulai menulis draf pertama yang komprehensif dan sesuai dengan kaidah SEO.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="font-headline flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">3</span>Revisi & Persetujuan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Draf artikel kami kirimkan kepada Anda untuk diulas. Kami menyediakan satu sesi revisi untuk memastikan Anda 100% puas.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="font-headline flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">4</span>Publikasi & Optimasi</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Setelah disetujui, kami akan mempublikasikan artikel langsung di website Anda dengan semua optimasi teknis yang diperlukan.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

function PricingSection() {
    return (
        <section id="harga" className="w-full py-16 md:py-24 bg-primary/10 scroll-mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center">
                    <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Investasi Konten yang Tepat</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                        Pilih paket yang paling sesuai dengan kebutuhan dan anggaran bisnis Anda.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-headline">Paket Starter</CardTitle>
                            <CardDescription>Untuk bisnis yang baru memulai content marketing.</CardDescription>
                            <p className="text-4xl font-bold text-primary pt-4">Rp 500k</p>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" />4 Artikel / bulan</li>
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" />~1000 kata per artikel</li>
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" />Riset 1 Keyword Utama</li>
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" />Optimasi SEO On-Page</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="outline">Pilih Paket</Button>
                        </CardFooter>
                    </Card>
                    <Card className="flex flex-col border-accent shadow-accent/50 shadow-lg relative">
                        <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                            <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">Paling Populer</span>
                        </div>
                        <CardHeader>
                            <CardTitle className="font-headline">Paket Bisnis</CardTitle>
                            <CardDescription>Untuk pertumbuhan agresif dan mendominasi SERP.</CardDescription>
                            <p className="text-4xl font-bold text-primary pt-4">Rp 1.5jt</p>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" />10 Artikel / bulan</li>
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" />~1500 kata per artikel</li>
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" />Riset Keyword Mendalam</li>
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" />Optimasi SEO On-Page Penuh</li>
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" />Termasuk Optimasi Gambar</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Pilih Paket</Button>
                        </CardFooter>
                    </Card>
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-headline">Paket Custom</CardTitle>
                            <CardDescription>Solusi total untuk kebutuhan konten skala besar.</CardDescription>
                            <p className="text-4xl font-bold text-primary pt-4">Hubungi Kami</p>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" />Jumlah artikel fleksibel</li>
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" />Pillar page & cluster content</li>
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" />Strategi backlink</li>
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" />Laporan performa bulanan</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="outline">Diskusikan Kebutuhan</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section id="kontak-jasa-artikel" className="w-full py-16 md:py-24 scroll-mt-20">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Siap Meninggalkan Kompetitor Anda?</h2>
                    <p className="mt-4 text-lg text-foreground/80">
                        Hubungi kami sekarang untuk konsultasi gratis. Mari kita diskusikan bagaimana kami bisa membantu bisnis Anda tumbuh melalui konten yang tidak hanya dibaca, tapi juga ditemukan.
                    </p>
                    <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                        <a href="https://wa.me/6285283212205?text=Halo,%20saya%20tertarik%20dengan%20jasa%20posting%20artikel%20SEO%20dan%20ingin%20berkonsultasi." target="_blank" rel="noopener noreferrer">
                            Hubungi Kami via WhatsApp
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}

    