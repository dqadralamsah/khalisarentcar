'use client';

import { CarDetails } from '@/types/cars';
import ArmadaCard from './ArmadaCard';

export default function ArmadaList({ cars }: { cars: CarDetails[] }) {
  if (!cars.length) {
    return <p className="text-gray-500">Tidak ada mobil tersedia.</p>;
  }

  return (
    <div className="grid items-center justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <ArmadaCard key={car.id} car={car} />
      ))}
    </div>
  );
}
