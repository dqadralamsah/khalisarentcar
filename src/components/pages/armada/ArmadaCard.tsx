'use client';

import Link from 'next/link';
import Image from 'next/image';
import { formatRupiah } from '@/utils/formatter';
import { CarDetails } from '@/types/cars';
import { TbManualGearboxFilled } from 'react-icons/tb';
import { PiSeat } from 'react-icons/pi';
import { BsSuitcase } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

type ArmadaCardProps = {
  car: CarDetails;
};

export default function ArmadaCard({ car }: ArmadaCardProps) {
  const price = car.prices?.[0]?.pricePerDay ?? 0;
  const whatsappUrl = `https://wa.me/6281277772320?text=Halo, saya ingin sewa ${car.carName}`;

  return (
    <div className="flex flex-col w-96 max-w-80 items-center bg-white rounded-2xl shadow-md overflow-hiddeng group">
      <Image
        src={car.imageUrl}
        alt={car.carName}
        width={288}
        height={173}
        className="transition-transform group-hover:scale-105"
      />
      <div className="flex flex-col w-full px-4">
        <h3 className="text-lg font-bold">{car.carName}</h3>
        <p className="flex items-center gap-2 text-gray-500">
          <TbManualGearboxFilled size={16} className="text-gray-500" />
          {car.transmission}
        </p>
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-2 text-gray-500">
            <PiSeat size={16} className="text-gray-500" />
            {car.seats}
          </p>
          <p className="flex items-center gap-2 text-gray-500">
            <BsSuitcase size={16} className="text-gray-500" />
            {car.bags}
          </p>
        </div>
        <p className="text-xs text-gray-500">Mulai Dari</p>
        <p className="text-primary font-bold text-lg">
          {formatRupiah(price)} <span className="text-sm text-gray-500 font-normal">/ hari</span>
        </p>
      </div>
      <div className="flex items-center w-full px-4 py-3 gap-2">
        <Link href={'/armada'} className="flex flex-1">
          <Button className="w-full bg-khsblue1 rounded-2xl hover:bg-khsblue1/80">
            Lihat Detail
          </Button>
        </Link>
        <Link href={whatsappUrl} target="_blank">
          <FaWhatsapp className="w-10 h-10 p-2 text-white bg-accent1 rounded-2xl hover:bg-green-500" />
        </Link>
      </div>
    </div>
  );
}
