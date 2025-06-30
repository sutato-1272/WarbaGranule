
import Image from 'next/image';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, Info, DollarSign, Users, HardHat, Palette, PenSquare } from 'lucide-react';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://warnagranule.com';

export const metadata: Metadata = {
  title: 'Hindari 5 Kesalahan Fatal Ini! Panduan Playground Aman | WarnaGranule',
  description: 'Jangan sampai salah langkah! Pelajari 5 kesalahan fatal dalam membangun playground dan cara menghindarinya dengan panduan lengkap dari desain hingga lantai karet EPDM.',
  keywords: ['kesalahan playground', 'playground tidak aman', 'panduan playground', 'membuat playground', 'playground aman', 'standar playground sni', 'lantai karet epdm', 'biaya pembuatan playground', 'desain playground', 'kontraktor playground'],
  alternates: {
    canonical: '/panduan-playground-aman',
  },
  openGraph: {
    title: 'Hindari 5 Kesalahan Fatal Ini! Panduan Lengkap Playground Aman',
    description: 'Dari pemilihan lokasi hingga lantai karet yang salah. Pelajari cara membangun playground yang 100% aman dan lolos standar SNI.',
    url: `${siteUrl}/panduan-playground-aman`,
    siteName: 'WarnaGranule Solutions',
    images: [
      {
        url: `/og-image-panduan-playground.png`, // Placeholder, Anda bisa membuat gambar spesifik
        width: 1200,
        height: 630,
        alt: 'Anak-anak bermain di playground dengan lantai karet EPDM yang aman.',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
};

export default function PanduanPlaygroundPage() {
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
        <p className="font-semibold text-accent">PERINGATAN UNTUK KONTRAKTOR & PENGEMBANG</p>
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mt-2">
          5 Kesalahan Fatal Saat Membangun Playground (Dan Cara Menghindarinya)
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-primary-foreground/90 md:text-xl">
          Dari pemilihan lokasi hingga lantai karet yang salah. Pelajari cara membangun area bermain yang 100% aman, sesuai standar SNI, dan menghindarkan Anda dari risiko di kemudian hari.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#kontak-panduan">
              Dapatkan Solusi dari Ahli
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ArticleSection() {
  return (
    <article className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24 scroll-mt-20">
      <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-headline prose-headings:text-primary prose-strong:text-foreground">
        
        <h2>Mengapa Playground yang Aman Bukan Sekadar Pilihan?</h2>
        <p>
          Membangun playground seringkali berfokus pada pilihan ayunan atau perosotan yang menarik. Namun, fondasi dari sebuah area bermain yang hebat adalah <strong>keamanan</strong>. Menurut data global, sebagian besar cedera di playground terjadi akibat jatuh ke permukaan yang keras. Inilah mengapa investasi pada permukaan yang tepat, seperti <strong>lantai karet EPDM</strong>, bukan lagi kemewahan, melainkan sebuah keharusan untuk melindungi aset paling berharga kita: anak-anak.
        </p>
        <p>
          Artikel ini adalah panduan lengkap Anda, yang akan membawa Anda melalui setiap langkah penting dalam proses <strong>membuat playground</strong>, memastikan hasil akhirnya adalah ruang yang aman, tahan lama, dan dicintai oleh anak-anak.
        </p>

        <Image src="https://placehold.co/1200x600" alt="Grafik yang menunjukkan pentingnya permukaan aman di playground" width={1200} height={600} className="w-full rounded-lg shadow-lg my-8" data-ai-hint="safe playground" />

        <div className="not-prose my-12 p-6 border-l-4 border-accent bg-primary/5 rounded-r-lg shadow-md">
            <div className='flex items-start gap-4'>
                <PenSquare className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-headline text-xl !text-primary !mt-0">Jadikan Konten Sebagai Aset Anda</h4>
                    <p className="!my-2 text-foreground/90">
                        Suka dengan cara penyajian dan kualitas artikel ini? Ini adalah contoh nyata dari layanan jasa posting artikel SEO kami. Kami tidak hanya menulis, kami membangun halaman yang dioptimalkan secara teknis untuk mendatangkan traffic.
                    </p>
                    <Link href="/jasa-posting-artikel" className="font-bold text-accent hover:underline">
                        Pelajari Layanan Jasa Artikel SEO Profesional Kami →
                    </Link>
                </div>
            </div>
        </div>

        <h2>Langkah-Langkah Kunci Menghindari Kesalahan Fatal</h2>
        <p>Berikut adalah 5 langkah krusial yang perlu Anda ikuti untuk mewujudkan playground yang sukses dan bebas masalah.</p>
        
        <h3>1. Kesalahan Perencanaan & Desain: Fondasi yang Rapuh</h3>
        <p>
          Kesalahan paling umum adalah terburu-buru tanpa perencanaan matang. Pertimbangkan beberapa hal berikut untuk membangun fondasi yang kokoh:
        </p>
        <ul>
          <li><strong>Lokasi:</strong> Pastikan area tersebut bebas dari bahaya seperti kabel listrik, selokan, atau lalu lintas kendaraan. Permukaan harus rata dan memiliki drainase yang baik.</li>
          <li><strong>Anggaran:</strong> Tentukan total anggaran Anda. Ini akan mempengaruhi luas area, jenis peralatan, dan kualitas material permukaan yang bisa Anda pilih.</li>
          <li><strong>Target Usia:</strong> Desain playground untuk anak balita tentu berbeda dengan untuk anak usia sekolah dasar. Kelompokkan area bermain berdasarkan usia untuk keamanan ekstra.</li>
          <li><strong>Tema:</strong> Tema seperti 'petualangan hutan' atau 'luar angkasa' bisa membuat playground lebih menarik dan imajinatif.</li>
        </ul>

        <h3>2. Kesalahan Memilih Peralatan Bermain yang Murah & Tidak Standar</h3>
        <p>
          Memilih peralatan hanya karena harga murah adalah kesalahan fatal. Pilih peralatan yang terbuat dari material berkualitas, bebas racun, dan tahan cuaca. Pastikan tidak ada ujung yang tajam atau celah yang bisa menjepit. Peralatan harus memiliki sertifikasi keamanan, idealnya yang sesuai dengan <strong>Standar Nasional Indonesia (SNI)</strong>.
        </p>

        <h3>3. Mengabaikan Faktor Kunci Keamanan: Lantai Karet EPDM</h3>
        <p>
          Inilah elemen terpenting untuk mencegah cedera serius. Permukaan beton, aspal, atau bahkan rumput biasa tidak cukup aman. Lantai karet yang terbuat dari <strong>granule EPDM</strong> adalah standar emas untuk playground modern.
        </p>
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle className="font-headline">Apa itu Critical Fall Height (CFH)?</AlertTitle>
          <AlertDescription>
            CFH adalah ketinggian jatuh maksimum dari sebuah peralatan bermain di mana cedera kepala yang mengancam jiwa tidak mungkin terjadi jika mendarat di permukaan tertentu. Ketebalan <strong>lantai karet EPDM</strong> harus disesuaikan dengan CFH peralatan Anda untuk menjamin keamanan optimal.
          </AlertDescription>
        </Alert>
        <p className="mt-4">
          Keunggulan lantai karet EPDM dari <a href="/#produk">WarnaGranule Solutions</a>:
        </p>
        <ul>
          <li><strong>Peredam Benturan Superior:</strong> Secara signifikan mengurangi risiko cedera saat anak terjatuh.</li>
          <li><strong>Tahan Cuaca & UV:</strong> Warna tidak pudar dan material tidak mudah retak, cocok untuk iklim tropis Indonesia.</li>
          <li><strong>Anti-Slip:</strong> Permukaan tetap aman digunakan bahkan saat basah.</li>
          <li><strong>Desain Kreatif:</strong> Tersedia dalam berbagai warna cerah, memungkinkan Anda membuat desain lantai yang edukatif dan menyenangkan.</li>
        </ul>
        
        <h3>4. Buta Terhadap Standar Keamanan (SNI)</h3>
        <p>
          Membangun tanpa merujuk pada SNI 8124 tentang Keamanan Mainan adalah resep bencana. Standar ini mencakup berbagai aspek, mulai dari material yang digunakan, desain peralatan, hingga zona aman di sekitar area bermain. Bekerja sama dengan <strong>kontraktor playground</strong> yang memahami SNI adalah sebuah keharusan.
        </p>
        
        <h3>5. Melakukan Instalasi Amatir (DIY)</h3>
        <p>
          Material terbaik pun akan sia-sia jika tidak dipasang dengan benar. Proses pemasangan lantai karet membutuhkan keahlian khusus, mulai dari persiapan sub-base (dasar coran), pencampuran material dengan lem, hingga pemadatan. Selalu gunakan <a href="/jasa-pemasangan-lantai-karet">jasa pemasangan lantai karet profesional</a> untuk memastikan hasil yang rata, padat, dan tahan lama.
        </p>

        <Image src="https://placehold.co/1200x600" alt="Tim profesional sedang memasang lantai karet EPDM di sebuah playground sekolah" width={1200} height={600} className="w-full rounded-lg shadow-lg my-8" data-ai-hint="playground construction" />

        <h2>Estimasi Biaya Pembuatan Playground</h2>
        <p>
          <strong>Biaya pembuatan playground</strong> sangat bervariasi. Berikut adalah komponen utama yang mempengaruhi total biaya:
        </p>
        <div className="grid md:grid-cols-2 gap-6 not-prose">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl font-headline"><HardHat className="w-6 h-6 text-accent" /> Peralatan Bermain</CardTitle>
                </CardHeader>
                <CardContent>
                    Ini adalah komponen biaya terbesar, bisa berkisar antara 40% hingga 60% dari total anggaran.
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl font-headline"><Palette className="w-6 h-6 text-accent" /> Permukaan & Lantai</CardTitle>
                </CardHeader>
                <CardContent>
                    Biaya untuk lantai karet EPDM, termasuk material dan instalasi. Biasanya sekitar 25% - 40% dari total biaya.
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl font-headline"><Users className="w-6 h-6 text-accent" /> Jasa Instalasi & Sipil</CardTitle>
                </CardHeader>
                <CardContent>
                    Termasuk persiapan lahan, pekerjaan sipil, dan biaya pemasangan peralatan. Sekitar 10% - 20%.
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl font-headline"><DollarSign className="w-6 h-6 text-accent" /> Lain-lain</CardTitle>
                </CardHeader>
                <CardContent>
                    Biaya untuk pagar, bangku, tempat sampah, dan pengiriman material. Sekitar 5% - 10%.
                </CardContent>
            </Card>
        </div>
        <p className="mt-6">Gunakan <a href="/#estimasi">Kalkulator Estimasi Material</a> kami untuk mendapatkan perkiraan kebutuhan granule EPDM untuk luas area Anda.</p>
        
      </div>
    </article>
  );
}

function CTASection() {
    return (
        <section id="kontak-panduan" className="w-full py-16 md:py-24 bg-primary/10 scroll-mt-20">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Jangan Ambil Risiko. Wujudkan Playground Aman Impian Anda.</h2>
                    <p className="mt-4 text-lg text-foreground/80">
                        Bingung mulai dari mana? Tim ahli kami di WarnaGranule Solutions siap membantu Anda di setiap langkah. Dari konsultasi desain, pemilihan material EPDM terbaik, hingga rekomendasi kontraktor profesional.
                    </p>
                    <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                        <a href="https://wa.me/6285283212205?text=Halo,%20saya%20sudah%20membaca%20panduan%20kesalahan%20playground%20dan%20ingin%20berkonsultasi%20lebih%20lanjut." target="_blank" rel="noopener noreferrer">
                            Konsultasi Gratis dengan Ahli Playground
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
