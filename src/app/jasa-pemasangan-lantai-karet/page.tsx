
import Image from 'next/image';
import type { Metadata } from 'next';
import { CheckCircle, Users, HardHat, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://warnagranule.com';

export const metadata: Metadata = {
  title: 'Jasa Pemasangan Lantai Karet Granule EPDM Profesional',
  description: 'WarnaGranule menyediakan jasa pemasangan lantai karet EPDM dan SBR profesional untuk playground, jogging track, dan lapangan olahraga. Tim ahli, pengerjaan rapi, dan garansi. Hubungi kami untuk survei & penawaran terbaik.',
  keywords: ['jasa pemasangan lantai karet', 'kontraktor playground', 'aplikator lantai karet', 'pasang rubber flooring', 'jasa jogging track', 'pemasangan EPDM', 'biaya pemasangan lantai karet'],
  alternates: {
    canonical: '/jasa-pemasangan-lantai-karet',
  },
  openGraph: {
    title: 'Jasa Pemasangan Lantai Karet Granule EPDM Profesional',
    description: 'Serahkan pemasangan lantai karet playground atau jogging track Anda kepada tim ahli dari WarnaGranule untuk hasil yang aman, rapi, dan tahan lama.',
    url: `${siteUrl}/jasa-pemasangan-lantai-karet`,
    siteName: 'WarnaGranule Solutions',
    images: [
      {
        url: `/og-image-jasa.png`, // Placeholder, Anda bisa membuat gambar spesifik
        width: 1200,
        height: 630,
        alt: 'Tim profesional sedang melakukan pemasangan lantai karet EPDM berwarna.',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function JasaPemasanganPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ArticleSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Jasa Pemasangan Lantai Karet Granule Profesional
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-primary-foreground/90 md:text-xl">
          Wujudkan playground, jogging track, atau lapangan olahraga impian Anda dengan hasil pemasangan yang rapi, aman, dan bergaransi dari tim aplikator berpengalaman kami.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#kontak-jasa">
              Konsultasi Proyek Anda
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <a href="#proses-kami">
              Lihat Proses Kerja
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ArticleSection() {
  return (
    <article id="tentang-jasa" className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24 scroll-mt-20">
      <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-headline prose-headings:text-primary prose-strong:text-foreground">
        <h2 className="text-center">Mengapa Pemasangan Profesional adalah Kunci Keberhasilan Proyek Lantai Karet Anda?</h2>
        <p className="text-center text-xl text-foreground/80 !mb-12 not-prose">
            Membeli material berkualitas hanyalah setengah dari cerita. Pemasangan yang tepat menentukan daya tahan, keamanan, dan estetika lantai Anda untuk tahun-tahun mendatang.
        </p>
        <p>
          Anda telah memilih <strong>granule EPDM warna</strong> atau <strong>granule hitam SBR</strong> kualitas terbaik dari <a href="/#produk">WarnaGranule Solutions</a>. Langkah selanjutnya yang tak kalah krusial adalah proses pemasangan. Kesalahan dalam aplikasi dapat menyebabkan permukaan tidak rata, mudah rusak, atau bahkan tidak aman untuk digunakan. Inilah mengapa menggunakan <strong>jasa pemasangan lantai karet</strong> profesional bukan lagi sebuah pilihan, melainkan sebuah investasi untuk memastikan hasil akhir yang sempurna.
        </p>
        <p>
          Sebagai <strong>aplikator lantai karet</strong> dan <strong>kontraktor playground</strong> berpengalaman, kami memahami setiap detail teknis yang dibutuhkan. Mulai dari persiapan permukaan (sub-base), pencampuran material dengan lem binder PU yang tepat, hingga teknik pengecoran dan pemadatan yang benar. Kami memastikan setiap meter persegi pekerjaan memenuhi standar keamanan dan kualitas tertinggi.
        </p>

        <Image src="https://placehold.co/1200x600" alt="Tim aplikator lantai karet sedang bekerja meratakan granule EPDM" width={1200} height={600} className="w-full rounded-lg shadow-lg" data-ai-hint="construction worker flooring" />
        
        <h3 className="mt-8">Layanan Pemasangan yang Kami Tawarkan</h3>
        <p>
          Tim kami siap menangani berbagai jenis proyek pemasangan lantai karet di seluruh Indonesia. Berikut adalah spesialisasi kami:
        </p>
        <ul>
          <li><strong>Jasa Pemasangan Playground:</strong> Menciptakan area bermain anak yang aman dengan lapisan peredam benturan (shock-absorbing) sesuai standar SNI. Kami bisa membuat desain custom dengan berbagai warna menarik.</li>
          <li><strong>Jasa Pemasangan Jogging Track:</strong> Membangun lintasan lari yang nyaman, elastis, dan mengurangi risiko cedera pada sendi. Cocok untuk area olahraga, taman kota, atau fasilitas sekolah.</li>
          <li><strong>Jasa Pemasangan Lapangan Olahraga:</strong> Aplikasi untuk lapangan multifungsi seperti basket, voli, bulu tangkis, hingga area fitness outdoor.</li>
          <li><strong>Pemasangan Infill Granule SBR:</strong> Jasa pengisian granule hitam untuk lapangan futsal atau mini soccer dengan rumput sintetis, memastikan stabilitas dan performa lapangan yang optimal.</li>
        </ul>
        <p>
          Kami tidak hanya fokus pada <strong>biaya pemasangan lantai karet</strong> yang kompetitif, tetapi juga pada kualitas pengerjaan. Percayakan proyek Anda kepada kami, dan dapatkan hasil yang tidak hanya indah dipandang, tetapi juga awet dan fungsional.
        </p>
      </div>
    </article>
  );
}

function WhyChooseUsSection() {
    const features = [
        { icon: <HardHat className="h-10 w-10 text-accent"/>, title: "Tim Profesional & Berpengalaman", description: "Tim aplikator kami telah menangani puluhan proyek di seluruh Indonesia dengan berbagai tingkat kerumitan." },
        { icon: <Award className="h-10 w-10 text-accent"/>, title: "Kualitas & Presisi Tinggi", description: "Kami menggunakan peralatan modern dan teknik terbaik untuk memastikan permukaan yang rata, padat, dan rapi." },
        { icon: <CheckCircle className="h-10 w-10 text-accent"/>, title: "Garansi Pemasangan", description: "Kami memberikan garansi untuk setiap pekerjaan pemasangan sebagai jaminan kualitas dan kepuasan Anda." },
        { icon: <Users className="h-10 w-10 text-accent"/>, title: "Konsultasi & Survei Gratis", description: "Kami siap membantu Anda merencanakan proyek dari awal, termasuk survei lokasi untuk area Jabodetabek." }
    ];

    return (
        <section id="mengapa-kami" className="w-full py-16 md:py-24 bg-primary/5 scroll-mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center">
                    <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Alasan Memilih Jasa Kami</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                        Kami lebih dari sekedar aplikator, kami adalah mitra Anda dalam mewujudkan proyek yang berkualitas.
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
    <section id="proses-kami" className="w-full py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Proses Kerja Kami</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Kami mengikuti alur kerja yang sistematis untuk menjamin kualitas di setiap tahapan.
          </p>
        </div>
        <div className="relative mt-12">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
          <div className="space-y-12 md:space-y-0">
            {/* Step 1 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="flex justify-center md:justify-end md:pr-8">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center font-bold text-2xl text-primary-foreground">1</div>
              </div>
              <div>
                <h3 className="font-headline text-2xl text-primary">Konsultasi & Perencanaan</h3>
                <p className="text-muted-foreground mt-2">Kami berdiskusi dengan Anda untuk memahami kebutuhan, desain, dan anggaran. Jika diperlukan, kami melakukan survei lokasi untuk mendapatkan data yang akurat.</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="flex justify-center md:justify-start md:pl-8 md:col-start-2">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center font-bold text-2xl text-primary-foreground">2</div>
              </div>
              <div className="md:text-right md:row-start-1">
                <h3 className="font-headline text-2xl text-primary">Persiapan Area Kerja (Sub-base)</h3>
                <p className="text-muted-foreground mt-2">Tahap paling krusial. Kami memastikan permukaan dasar (biasanya cor beton) rata, kering, bersih, dan memiliki kemiringan yang cukup untuk drainase air.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="flex justify-center md:justify-end md:pr-8">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center font-bold text-2xl text-primary-foreground">3</div>
              </div>
              <div>
                <h3 className="font-headline text-2xl text-primary">Pencampuran & Pengecoran</h3>
                <p className="text-muted-foreground mt-2">Granule EPDM/SBR dicampur dengan lem binder PU menggunakan takaran yang presisi. Adonan kemudian dituangkan dan diratakan di seluruh area proyek.</p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
               <div className="flex justify-center md:justify-start md:pl-8 md:col-start-2">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center font-bold text-2xl text-primary-foreground">4</div>
              </div>
              <div className="md:text-right md:row-start-1">
                <h3 className="font-headline text-2xl text-primary">Pemadatan & Finishing</h3>
                <p className="text-muted-foreground mt-2">Permukaan dipadatkan menggunakan alat khusus (finisher) untuk mendapatkan kepadatan yang seragam dan permukaan yang halus. Proses pengeringan membutuhkan waktu 24-48 jam.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
    return (
        <section id="kontak-jasa" className="w-full py-16 md:py-24 bg-primary/10 scroll-mt-20">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Siap Wujudkan Proyek Impian Anda?</h2>
                    <p className="mt-4 text-lg text-foreground/80">
                        Jangan biarkan material berkualitas terpasang dengan cara yang salah. Hubungi kami sekarang untuk konsultasi gratis, penjadwalan survei, dan mendapatkan penawaran harga terbaik untuk jasa pemasangan lantai karet.
                    </p>
                    <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                        <a href="https://wa.me/6285283212205?text=Halo,%20saya%20tertarik%20dengan%20jasa%20pemasangan%20lantai%20karet%20dan%20ingin%20berkonsultasi." target="_blank" rel="noopener noreferrer">
                            Hubungi Ahli Kami via WhatsApp
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}

    