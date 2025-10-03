'use client';

import { BodyType } from '@/types/cars';

type Props = {
  selected: BodyType | 'ALL';
  onChange: (value: BodyType | 'ALL') => void;
};

export default function ArmadaFilter({ selected, onChange }: Props) {
  const options: (BodyType | 'ALL')[] = [
    'ALL',
    'HATCHBACK',
    'SEDAN',
    'MPV',
    'SUV',
    'LUXURY',
    'MINIBUS',
  ];

  const labels: Record<BodyType | 'ALL', string> = {
    ALL: 'Semua',
    HATCHBACK: 'Hatchback',
    SEDAN: 'Sedan',
    MPV: 'MPV',
    SUV: 'SUV',
    LUXURY: 'Luxury',
    MINIBUS: 'Minibus',
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          aria-pressed={selected === opt}
          className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors
            ${
              selected === opt
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
        >
          {labels[opt]}
        </button>
      ))}
    </div>
  );
}
