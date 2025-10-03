import Link from 'next/link';
import { CarDetails } from '@/types/cars';
import { Button } from '@/components/ui/button';
import { FaArrowCircleRight } from 'react-icons/fa';
import PromotionSection from '@/components/modules/promotion/SectionPromotion';
import ArmadaList from '@/components/pages/armada/ArmadaList';
import FeatureSection from '@/components/modules/features/SectionFeatures';
import TestimonialSection from '@/components/modules/testimonial/SectionTestimonial';
import CTASection from '@/components/modules/cta/SectionCTA';
import ArticleList from '@/components/pages/articles/ArticleList';

async function getCars(): Promise<CarDetails[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cars?mode=random&limit=6`, {
    cache: 'no-store',
    // next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error('Failed to fetch cars');

  return res.json();
}

async function getArticles() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles?limit=3`, {
    cache: 'no-store',
    // next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Failed to fetch articles');
  return res.json();
}

export default async function Home() {
  const [cars, articles] = await Promise.all([getCars(), getArticles()]);

  return (
    <div className="space-y-4">
      {/* Hero Section */}
      <section className="min-h-screen bg-[url('/img/img-hero-section-mobile.png')] bg-cover bg-center bg-no-repeat md:bg-[url('/img/Img-Hero-Section.png')] md:bg-bottom">
        <div className="px-4 py-36 space-y-4 md:px-16">
          <div className="max-w-[40rem] p-2 rounded-md bg-white/30 backdrop-blur-sm md:bg-none md:backdrop-blur-none">
            <h2 className="font-medium md:text-xl">
              Rental Mobil <span className="text-khsblue2 font-bold">JABODETABEK</span>
            </h2>
            <h1 className="text-xl font-extrabold md:text-4xl">
              MAU <span className="text-khsblue2">PERJALANAN</span> MUDAH &{' '}
              <span className="text-khsblue2">MENYENANGKAN</span> KEMANA AJA
            </h1>
            <p className="text-sm font-medium md:text-base">
              Khalisarentcar hadir buat kamu yang mau sewa mobil harian, mingguan, bulanan. Armada
              kami siap membawa kamu kemana aja.
            </p>
          </div>
          <Link href={'#armada-section'}>
            <Button
              size={'lg'}
              className="flex items-center gap-3 text-lg font-semibold rounded-full bg-khsblue2 hover:bg-khsblue1"
            >
              Armada Kami <FaArrowCircleRight size={24} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Promotion Section */}
      <PromotionSection />

      {/* Armada Section */}
      <section id="armada-section" className="px-4 py-8 space-y-8 md:px-16 md:space-y-8">
        <div>
          <h1 className="text-2xl text-center text-khsblue2 font-bold">Armada Kami</h1>
          <p className="text-center text-khsblue2 font-medium">
            Beragam pilihan mobil untuk kebutuhan harian, wisata, maupun bisnis.
          </p>
        </div>
        <ArmadaList cars={cars} />
        <Link href={'/armada'} className="flex items-center justify-center">
          <Button
            variant={'outline'}
            className="text-khsblue1 font-extrabold border border-khsblue1 rounded-sm hover:bg-khsblue1 hover:text-white"
          >
            selengkapnya
          </Button>
        </Link>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* AboutUs Section */}
      <section className="px-4 py-8 space-y-8 md:px-16">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl text-center text-khsblue2 font-bold">Tentang Kami</h1>
          <div className="w-16 h-0.5 bg-khsblue2"></div>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-justify font-medium md:text-lg">
            Khalisarentcar Solution adalah layanan rental mobil yang berlokasi di Jakarta Barat.
            Kami hadir untuk memenuhi kebutuhan transportasi baik untuk perjalanan pribadi, liburan
            keluarga, hingga kebutuhan perusahaan. Dengan armada yang lengkap, terawat, dan selalu
            siap digunakan, kami berkomitmen memberikan pengalaman perjalanan yang mudah, nyaman,
            dan menyenangkan.
          </p>
          <p className="text-sm text-justify font-medium md:text-lg">
            Kami percaya setiap perjalanan memiliki cerita, dan tugas kami adalah memastikan
            perjalanan tersebut dapat dinikmati dengan nyaman tanpa kendala. Dengan layanan yang
            ramah, harga yang transparan, serta proses pemesanan yang mudah dan cepat,
            Khalisarentcar Solution siap menjadi mitra perjalanan yang terpercaya.
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Call-to-Action Section */}
      <CTASection />

      {/* Article Section */}
      <section className="armada-section px-4 py-8 space-y-8 md:px-16 md:space-y-8">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl text-center text-khsblue2 font-bold">Terbaru Dari Kami</h1>
          <div className="w-16 h-0.5 bg-khsblue2"></div>
        </div>
        <ArticleList articles={articles} />
        <Link href={'/articles'} className="flex items-center justify-center">
          <Button
            variant={'outline'}
            className="text-khsblue1 font-extrabold border border-khsblue1 rounded-sm hover:bg-khsblue1 hover:text-white"
          >
            selengkapnya
          </Button>
        </Link>
      </section>
    </div>
  );
}
