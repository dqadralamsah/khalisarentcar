export type BodyType = 'HATCHBACK' | 'SEDAN' | 'MPV' | 'SUV' | 'LUXURY' | 'MINIBUS';

export type CarDetails = {
  id: string;
  carName: string;
  slug: string;
  bodyType: string;
  transmission: string;
  seats?: number | null;
  bags?: number | null;
  description?: string | null;
  imageUrl: string;
  prices: {
    id: string;
    pricePerDay: number;
    pricePerWeek?: number | null;
    pricePerMonth?: number | null;
    description?: string | null;
  }[];
};
