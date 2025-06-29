import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MaterialEstimator } from '@/components/material-estimator';
import { Leaf, Phone, ShieldCheck, ThumbsUp, Truck, MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ArticleSection />
      <EstimatorSection />
      <WhyUsSection />
      <ProductGallerySection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-primary/10">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-6xl lg:text-7xl">
          Produsen & Supplier Granule EPDM #1 di Indonesia
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
          Solusi Inovatif dan Tahan Lama untuk Playground, Lapangan Olahraga, dan Kebutuhan Industri Anda. <strong>Jual Granule Warna EPDM</strong> dan <strong>Granule Hitam SBR</strong> Kualitas Terbaik.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#estimasi">
              Hitung Kebutuhan Material
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#kontak">
              Hubungi Kami
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ArticleSection() {
  return (
    <article id="produk" className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24 scroll-mt-20">
      <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-headline prose-headings:text-primary prose-strong:text-foreground">
        <h2 className="text-center">Produk Unggulan Granule Kami</h2>
        <p className="text-center text-xl text-foreground/80 !mb-12 not-prose">
            Dari playground yang aman hingga lapangan olahraga berstandar tinggi, temukan solusi granule EPDM dan SBR terbaik yang kami produksi dan distribusikan untuk setiap kebutuhan proyek Anda.
        </p>
        <p>
          Selamat datang di **WarnaGranule Solutions**, pusat solusi **granule EPDM** terlengkap di Indonesia. Sebagai **pabrik granule EPDM** terkemuka, kami juga bertindak sebagai **produsen**, **distributor**, dan **supplier granule warna EPDM** serta **granule hitam SBR** yang terpercaya. Kami siap memenuhi segala kebutuhan proyek Anda dengan produk premium yang aman, tahan lama, dan ramah lingkungan. Apakah Anda mencari penawaran **harga granule EPDM per m2** yang kompetitif untuk playground, atau butuh pasokan untuk lapangan futsal? Kami solusinya. Kami **jual granule** dengan layanan pengiriman ke seluruh Indonesia, dari Aceh hingga Papua.
        </p>
        
        <h3 id="granule-warna">Granule Warna EPDM: Solusi Terbaik untuk Playground & Jogging Track</h3>
        <p>
          Ketika berbicara tentang keamanan dan estetika untuk area rekreasi, **granule warna EPDM** adalah jawabannya. Material ini menjadi pilihan utama bagi para kontraktor dan pengembang fasilitas publik karena fleksibilitas dan keunggulannya yang tak tertandingi. Sebagai **pabrik granule warna EPDM** terkemuka, kami memastikan setiap butir granule yang kami produksi memenuhi standar kualitas dan keamanan tertinggi.
        </p>
        <Image src="https://placehold.co/1200x600" alt="Playground anak-anak dengan lantai granule warna EPDM" width={1200} height={600} className="w-full rounded-lg shadow-lg" data-ai-hint="colorful playground" />

        <h4 className="mt-8">Keunggulan Utama Granule Warna EPDM dari Kami</h4>
        <p>
          Memilih **supplier granule warna EPDM** yang tepat adalah kunci keberhasilan proyek Anda. Berikut adalah alasan mengapa produk kami menjadi pilihan terbaik di pasar:
        </p>
        <ul>
          <li><strong>Tahan Lama dan Tahan Cuaca Ekstrem:</strong> Dibuat dari bahan EPDM (Ethylene Propylene Diene Monomer) murni, granule kami memiliki ketahanan luar biasa terhadap sinar UV, hujan, dan perubahan suhu. Warna tidak akan pudar dan permukaan tidak akan retak meski terpapar cuaca ekstrem selama bertahun-tahun.</li>
          <li><strong>Pilihan Warna Cerah dan Menarik:</strong> Kami menyediakan palet warna yang luas, mulai dari hijau, merah, biru, kuning, hingga oranye. Ini memungkinkan Anda menciptakan desain playground atau jogging track yang kreatif, menarik, dan sesuai tema yang diinginkan.</li>
          <li><strong>Keamanan Adalah Prioritas:</strong> Permukaan yang terbuat dari **granule EPDM** memiliki sifat peredam benturan (impact-absorbing) yang sangat baik. Ini secara signifikan mengurangi risiko cedera saat anak-anak terjatuh. Permukaannya juga anti-slip, sehingga aman digunakan bahkan dalam kondisi basah.</li>
          <li><strong>Ramah Lingkungan dan Bebas Racun:</strong> Kami berkomitmen pada keberlanjutan. Granule kami diproduksi menggunakan bahan baku berkualitas dan tidak mengandung zat berbahaya (non-toxic), sehingga aman untuk anak-anak dan lingkungan sekitar.</li>
        </ul>
        
        <h4>Aplikasi Granule Warna EPDM</h4>
        <p>
          Fleksibilitas produk kami memungkinkannya digunakan dalam berbagai aplikasi. Sebagai **distributor granule warna EPDM** dengan jangkauan nasional, kami telah melayani berbagai proyek:
        </p>
        <ul>
            <li><strong>Taman Bermain (Playground):</strong> Baik untuk sekolah (TK, SD), perumahan, maupun fasilitas umum.</li>
            <li><strong>Lintasan Jogging dan Atletik (Jogging Track):</strong> Memberikan permukaan lari yang nyaman dan mengurangi tekanan pada sendi.</li>
            <li><strong>Area Fitness Outdoor:</strong> Alas yang ideal untuk peralatan gym di luar ruangan.</li>
            <li><strong>Dek Kolam Renang:</strong> Permukaan anti-slip yang aman di sekitar area basah.</li>
            <li><strong>Lantai Multifungsi:</strong> Untuk area senam, studio yoga, atau area rekreasi lainnya.</li>
        </ul>
        <p>
          Kami **jual granule warna EPDM** dalam berbagai kemasan yang dapat disesuaikan dengan volume proyek Anda. Hubungi tim kami untuk konsultasi mengenai **harga granule EPDM per m2** atau per kg.
        </p>

        <h3 id="granule-hitam">Granule Hitam (SBR): Solusi Andal untuk Lapangan Futsal & Mini Soccer</h3>
        <p>
          Untuk lapangan olahraga yang membutuhkan daya tahan tinggi dan performa optimal, **granule hitam** atau yang sering disebut granule SBR (Styrene-Butadiene Rubber) adalah pilihan yang paling efisien dan ekonomis. Sebagai **produsen granule hitam** yang berpengalaman, kami mengolah bahan baku karet daur ulang berkualitas tinggi menjadi granule yang sempurna untuk infill rumput sintetis.
        </p>
        <Image src="https://placehold.co/1200x600" alt="Lapangan futsal dengan rumput sintetis dan infill granule hitam" width={1200} height={600} className="w-full rounded-lg shadow-lg" data-ai-hint="futsal field" />
        
        <h4 className="mt-8">Keunggulan Granule Hitam Produksi Kami</h4>
        <p>
            Memilih kami sebagai **supplier granule hitam** Anda berarti Anda berinvestasi pada kualitas dan durabilitas. 
        </p>
        <ul>
            <li><strong>Stabilitas dan Performa Lapangan:</strong> Granule hitam berfungsi sebagai infill yang memberikan stabilitas pada serat rumput sintetis, menjaganya tetap tegak. Ini memastikan bola dapat memantul dan bergulir dengan konsisten, layaknya di lapangan rumput alami.</li>
            <li><strong>Daya Tahan Tinggi:</strong> Produk kami dirancang untuk menahan penggunaan intensitas tinggi di lapangan futsal dan mini soccer. Materialnya tidak mudah hancur dan tetap memberikan performa terbaik dalam jangka waktu yang lama.</li>
            <li><strong>Efisiensi Biaya:</strong> Dibandingkan EPDM, granule hitam menawarkan solusi yang jauh lebih ekonomis tanpa mengorbankan fungsi utama sebagai infill. Ini menjadikannya pilihan favorit untuk proyek dengan anggaran yang kompetitif.</li>
            <li><strong>Aplikasi Serbaguna:</strong> Selain untuk infill rumput sintetis, granule hitam juga sering digunakan sebagai lapisan dasar (base layer) untuk sistem lantai karet, memberikan tambahan bantalan dan ketahanan.</li>
        </ul>
        <p>
          Sebagai **pabrik granule hitam** yang berfokus pada kualitas, kami memastikan setiap produk bebas dari kontaminan logam atau material berbahaya lainnya. Proses produksi kami yang canggih menjamin ukuran granule yang seragam untuk hasil pemasangan yang sempurna.
        </p>

        <h3 id="mesh-20">Mesh 20 EPDM: Performa Unggul untuk Cairan Ban Tubeless</h3>
        <p>
          Tidak hanya berfokus pada lantai rekreasi, kami juga merambah ke sektor industri otomotif dengan menyediakan **Mesh 20 EPDM**. Ini adalah bubuk karet EPDM super halus yang menjadi komponen krusial dalam pembuatan cairan anti-bocor untuk ban tubeless.
        </p>
        <h4>Mengapa Mesh 20 EPDM Kami Pilihan Terbaik?</h4>
        <ul>
            <li><strong>Elastisitas Superior:</strong> Ukuran partikel yang sangat halus dan sifat elastis EPDM memastikan cairan dapat menutup lubang pada ban dengan cepat dan efektif.</li>
            <li><strong>Stabilitas Kimia:</strong> Material EPDM tahan terhadap berbagai reaksi kimia, memastikan cairan ban tetap stabil dan tidak merusak velg atau bagian dalam ban.</li>
            <li><strong>Kualitas Terjamin:</strong> Diproduksi dengan standar industri yang ketat untuk memenuhi kebutuhan produsen cairan ban tubeless terkemuka.</li>
        </ul>
        
        <ProductComparisonTable />
      </div>
    </article>
  );
}

function ProductComparisonTable() {
    return (
        <>
            <h3 className="not-prose">Perbandingan Cepat Produk Granule Kami</h3>
            <div className="overflow-x-auto not-prose">
                <Table className="my-8">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold">Fitur</TableHead>
                            <TableHead className="font-bold">Granule Warna EPDM</TableHead>
                            <TableHead className="font-bold">Granule Hitam SBR</TableHead>
                            <TableHead className="font-bold">Mesh 20 EPDM</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Material Utama</TableCell>
                            <TableCell>EPDM (Ethylene Propylene Diene Monomer) Virgin</TableCell>
                            <TableCell>Karet SBR (Styrene-Butadiene Rubber) Daur Ulang</TableCell>
                            <TableCell>Bubuk Halus EPDM</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Aplikasi Utama</TableCell>
                            <TableCell>Playground, Jogging Track, Area Fitness</TableCell>
                            <TableCell>Infill Rumput Sintetis (Futsal, Soccer), Base Layer</TableCell>
                            <TableCell>Bahan Baku Cairan Ban Tubeless</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Keunggulan</TableCell>
                            <TableCell>Estetika Tinggi, Tahan UV, Pilihan Warna, Sangat Aman</TableCell>
                            <TableCell>Sangat Ekonomis, Daya Tahan Tinggi, Performa Stabil</TableCell>
                            <TableCell>Elastisitas Superior, Stabilitas Kimia</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Pilihan Warna</TableCell>
                            <TableCell>Sangat Beragam (Merah, Hijau, Biru, dll)</TableCell>
                            <TableCell>Hitam</TableCell>
                            <TableCell>Tergantung formulasi</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Target Market</TableCell>
                            <TableCell>Kontraktor Fasilitas Publik, Sekolah, Pengembang Properti</TableCell>
                            <TableCell>Kontraktor Lapangan Olahraga, Pemilik Futsal</TableCell>
                            <TableCell>Industri Otomotif, Produsen Cairan Ban</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

function EstimatorSection() {
  return (
    <section id="estimasi" className="w-full py-16 md:py-24 bg-primary/5 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <MaterialEstimator />
      </div>
    </section>
  );
}

function WhyUsSection() {
    const features = [
        { icon: <ThumbsUp className="h-8 w-8 text-accent"/>, title: "Produk Berkualitas Tinggi", description: "Setiap granule diproduksi dengan teknologi terbaik untuk hasil optimal dan tahan lama." },
        { icon: <Truck className="h-8 w-8 text-accent"/>, title: "Pengiriman Seluruh Indonesia", description: "Kami melayani kebutuhan Anda di mana pun Anda berada, dari Aceh hingga Papua." },
        { icon: <ShieldCheck className="h-8 w-8 text-accent"/>, title: "Harga Kompetitif", description: "Menawarkan solusi terjangkau tanpa mengorbankan kualitas produk." },
        { icon: <Leaf className="h-8 w-8 text-accent"/>, title: "Dukungan Ramah Lingkungan", description: "Menggunakan bahan baku pilihan yang mendukung keberlanjutan lingkungan." }
    ]
    return (
        <section id="mengapa-kami" className="w-full py-16 md:py-24 scroll-mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center">
                    <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Kepercayaan Anda, Komitmen Kami</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                        Sebagai <strong>supplier granule EPDM profesional</strong>, kami berkomitmen memberikan yang terbaik untuk setiap proyek Anda.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {features.map((feature, index) => (
                        <Card key={index} className="text-center shadow-md hover:shadow-xl transition-shadow">
                            <CardHeader className="items-center">
                                {feature.icon}
                                <CardTitle className="font-headline">{feature.title}</CardTitle>
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

function ProductGallerySection() {
    const galleryItems = [
        { src: "https://placehold.co/400x400", alt: "Granule Warna EPDM Merah", title: "Merah Menyala", hint: "red granules" },
        { src: "https://placehold.co/400x400", alt: "Granule Warna EPDM Hijau", title: "Hijau Segar", hint: "green granules" },
        { src: "https://placehold.co/400x400", alt: "Granule Warna EPDM Biru", title: "Biru Samudera", hint: "blue granules" },
        { src: "https://placehold.co/400x400", alt: "Granule Warna EPDM Kuning", title: "Kuning Ceria", hint: "yellow granules" },
        { src: "https://placehold.co/400x400", alt: "Granule Warna EPDM Oranye", title: "Oranye Semangat", hint: "orange granules" },
        { src: "https://placehold.co/400x400", alt: "Granule Hitam SBR", title: "Hitam Klasik", hint: "black granules" },
    ];
    return (
        <section id="galeri" className="w-full py-16 md:py-24 bg-primary/5 scroll-mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center">
                    <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Galeri Produk Kami</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                        Lihat beberapa pilihan warna dan produk unggulan yang kami tawarkan.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
                    {galleryItems.map((item, index) => (
                        <div key={index} className="group relative">
                            <Image src={item.src} alt={item.alt} width={400} height={400} data-ai-hint={item.hint} className="w-full h-full object-cover rounded-lg"/>
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                                <span className="text-white font-bold text-lg">{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQSection() {
    const faqs = [
        {
            question: "Apa perbedaan utama antara granule EPDM dan SBR?",
            answer: "<strong>Granule EPDM</strong> terbuat dari karet sintetis virgin, menawarkan ketahanan UV dan pilihan warna yang superior, ideal untuk area outdoor premium seperti playground. <strong>Granule SBR</strong> terbuat dari karet daur ulang, lebih ekonomis, dan umumnya digunakan sebagai infill rumput sintetis. Keduanya memiliki daya tahan yang baik, namun EPDM lebih unggul dalam hal estetika dan ketahanan warna."
        },
        {
            question: "Berapa ketebalan ideal lantai karet untuk playground?",
            answer: "Ketebalan ideal sangat bergantung pada 'Critical Fall Height' (CFH) atau ketinggian jatuh kritis dari peralatan bermain. Standar umum berkisar antara <strong>4 cm hingga 15 cm</strong>. Untuk area dengan peralatan panjat yang tinggi, diperlukan lapisan yang lebih tebal. Tim kami dapat membantu Anda menentukan ketebalan yang sesuai dengan standar keamanan SNI."
        },
        {
            question: "Apakah saya bisa memesan dalam jumlah kecil?",
            answer: "Tentu saja. Kami melayani pemesanan dalam berbagai skala, dari kebutuhan retail untuk proyek kecil hingga pasokan besar untuk kontraktor. Granule kami tersedia dalam kemasan sak (biasanya 25 kg) hingga pesanan dalam satuan ton. Silakan hubungi kami untuk mendiskusikan kebutuhan Anda."
        },
        {
            question: "Bagaimana cara merawat lantai karet granule?",
            answer: "Perawatan lantai karet sangat mudah. Cukup bersihkan secara rutin dengan sapu, blower, atau semprotan air bertekanan rendah untuk menghilangkan debu dan kotoran. Hindari penggunaan bahan kimia pembersih yang keras. Untuk noda membandel, gunakan sabun lembut dan sikat."
        },
        {
            question: "Berapa lama proses pengiriman ke luar Jawa?",
            answer: "Waktu pengiriman bervariasi tergantung lokasi tujuan dan jenis layanan kargo yang dipilih. Kami bekerja sama dengan berbagai ekspedisi terpercaya untuk memastikan pengiriman yang efisien. Rata-rata, pengiriman ke luar Jawa memakan waktu antara <strong>5 hingga 14 hari kerja</strong>. Kami akan memberikan estimasi yang lebih akurat saat Anda melakukan pemesanan."
        }
    ];

    return (
        <section id="faq" className="w-full py-16 md:py-24 scroll-mt-20">
            <div className="container mx-auto max-w-4xl px-4 md:px-6">
                <div className="text-center">
                    <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Pertanyaan yang Sering Diajukan (FAQ)</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                        Menemukan jawaban cepat untuk pertanyaan umum tentang produk dan layanan kami.
                    </p>
                </div>
                <Accordion type="single" collapsible className="w-full mt-12">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                            <AccordionContent>
                                <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section id="kontak" className="w-full py-16 md:py-24 bg-primary/10 scroll-mt-20">
            <div className="container mx-auto">
                <Card className="max-w-4xl mx-auto shadow-xl bg-card">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8">
                            <h2 className="font-headline text-3xl font-bold text-primary">Siap Memulai Proyek Anda?</h2>
                            <p className="mt-4 text-foreground/80">
                                Hubungi kami sekarang untuk mendapatkan penawaran eksklusif, sampel produk, atau konsultasi gratis dengan ahli kami. Kami adalah mitra tepercaya untuk keberhasilan proyek Anda.
                            </p>
                            <div className="mt-6 space-y-4">
                                <div className="flex items-center gap-4">
                                    <Phone className="h-6 w-6 text-accent"/>
                                    <span className="font-semibold text-lg">Telepon/SMS:</span>
                                </div>
                                <a href="tel:085283212205" className="block text-xl font-bold hover:text-primary">0852-8321-2205</a>
                                
                                <div className="flex items-center gap-4 pt-4">
                                    <MessageCircle className="h-6 w-6 text-accent"/>
                                    <span className="font-semibold text-lg">WhatsApp:</span>
                                </div>
                                <a href="https://wa.me/6285283212205" target="_blank" rel="noopener noreferrer" className="block text-xl font-bold hover:text-primary">0852-8321-2205</a>
                            </div>
                            <Button asChild size="lg" className="w-full mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                                <a href="https://wa.me/6285283212205?text=Halo,%20saya%20tertarik%20dengan%20produk%20granule%20EPDM%20Anda." target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="mr-2 h-5 w-5"/>
                                    Chat via WhatsApp
                                </a>
                            </Button>
                        </div>
                        <div className="hidden md:block">
                            <Image src="https://placehold.co/600x600" alt="Tim WarnaGranule Solutions siap melayani" width={600} height={600} className="object-cover w-full h-full rounded-r-lg" data-ai-hint="customer service" />
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}

    