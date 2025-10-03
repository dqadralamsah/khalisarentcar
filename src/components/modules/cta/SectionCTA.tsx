import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';

export default function CTASection() {
  return (
    <section className="relative px-4 md:px-16">
      <Image
        src={'/img/img-cta-section.png'}
        alt="cta-image"
        width={1312}
        height={240}
        className="h-70 object-cover object-center rounded-lg md:h-60"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center space-y-4">
        <h1 className="text-lg text-white font-bold lg:w-5xl md:text-2xl lg:text-4xl">
          Mau Perjalanan Mudah & Menyenangkan Kemana Aja? Khalisarentcar Solusinya!
        </h1>
        <p className="px-2 text-sm text-white font-medium lg:text-base">
          Temukan sewa mobil terbaik mulai dari Armada terawat, harga kompetitif, dan layanan
          profesional.
        </p>
        <div className="flex items-center gap-4">
          <Link href={'/armada'} className="w-32 md:w-40">
            <Button className="w-full bg-khsblue2 rounded-full hover:bg-khsblue1">Armada</Button>
          </Link>
          <Link
            href={'https://wa.me/6281277772320?text=Halo, saya ingin sewa mobil di Khalisarentcar'}
            target="_blank"
          >
            <Button className="flex items-center w-32 gap-2 font-medium rounded-full bg-accent1 hover:bg-green-500 md:w-40">
              Book Now <FaWhatsapp size={24} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
