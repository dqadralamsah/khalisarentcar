'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CarDetails } from '@/types/cars';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const [cars, setCars] = useState<CarDetails[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch(`/api/cars?mode=random&limit=6`);
        if (!res.ok) throw new Error('Failed to fetch cars');

        const data = await res.json();

        setCars(data);
      } catch (error) {
        console.log('Error to fetching cars', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="flex flex-col justify-between mt-8 text-white space-y-4 bg-gradient-to-r from-[#0A2A5C] to-[#1562D8]">
      {/* Footer */}
      <div className="flex flex-col px-4 pt-8 gap-4 lg:flex-row lg:justify-between lg:px-16">
        {/* Information */}
        <div className="flex flex-col justify-between max-w-[32rem] gap-4">
          <div className="space-y-2">
            <Image
              src={'/img/logo/TemporaryLogo-Small.png'}
              alt="Logo Khalisarent"
              width={224}
              height={62}
            />
            <p className="">PT. Khalisarentcar Solution</p>
          </div>
          <div>
            <div className="space-y-2">
              <p className="text-sm font-bold">Hubungi Kami</p>
              <div className="flex items-center gap-2 text-white">
                <AiOutlineMail size={16} className="w-4 h-4" />
                <p className="text-sm">Khalisarent@gmail.com</p>
              </div>
              <div className="flex items-start gap-2">
                <HiOutlineLocationMarker size={24} className="w-4 h-4" />
                <p className="text-sm">
                  Jl. Perumahan Kb. Jeruk Baru, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat,
                  Daerah Khusus Ibukota Jakarta 11530
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm  font-bold">Ikuti Kami</p>
            <div className="flex items-center gap-4 ">
              <FaInstagram size={24} />
              <FaTiktok size={24} />
              <AiOutlineYoutube size={32} />
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-between w-full sm:flex-col md:flex-row lg:max-w-96">
          <div className="w-full space-y-4">
            <h3 className="text-sm font-bold">Layanan</h3>
            <div className="flex flex-col gap-1">
              <Link href={'/'}>Sewa Harian</Link>
              <Link href={'/'}>Sewa Mingguan</Link>
              <Link href={'/'}>Sewa Bulanan</Link>
            </div>
          </div>
          <div className="w-full min-w-56 space-y-4">
            <h3 className="text-sm font-bold">Armada </h3>
            <div className="flex flex-col gap-1">
              {cars.map((car) => (
                <Link key={car.id} href={`/armada/${car.slug}`}>
                  Sewa {car.carName}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="flex flex-col items-center gap-4 lg:max-w-72">
          <h3 className="text-base text-center font-bold">
            Mau Perjalanan Mudah & Menyenangkan Kemana Aja, Khalisarencar Solusinya !
          </h3>
          <Link
            href={'https://wa.me/6281277772320?text=Halo, saya ingin sewa mobil di Khalisarentcar'}
            target="_blank"
          >
            <Button className="flex items-center gap-2 font-medium rounded-full bg-accent1 hover:bg-green-500">
              Book Now <FaWhatsapp size={24} />
            </Button>
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-16 py-2 text-center text-sm border-t border-white/20">
        © {new Date().getFullYear()} PT. Khalisarentcar Solution. All Rights Reserved.
      </div>
    </div>
  );
}
