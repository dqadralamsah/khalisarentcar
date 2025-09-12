import prisma from '@/lib/prisma';

async function main() {
  console.log('🌱 Start seeding...');

  // Bersihkan data lama
  await prisma.testimonial.deleteMany();
  await prisma.rentalPrice.deleteMany();
  await prisma.car.deleteMany();

  // Data mobil per kategori
  const cars = [
    {
      id: 'KRS01CAR001',
      name: 'Toyota - Agya',
      bodyType: 'HATCHBACK',
      transmission: 'AUTOMATIC',
      seats: 4,
      bags: 2,
      description: 'Mobil mungil hemat bahan bakar, cocok untuk perkotaan.',
      imageUrl: '/img/cars/Toyota-Agya.png',
      prices: {
        create: {
          id: 'KRS02PRC001',
          pricePerDay: 250000,
          pricePerWeek: 1500000,
          pricePerMonth: 4500000,
          description: 'Harga termasuk asuransi dasar',
        },
      },
      testimonials: {
        create: [
          {
            id: 'KRS03TSM001',
            customerName: 'Andi',
            reviewContent: 'Mobilnya enak dipakai keliling kota, irit banget!',
            rating: 5,
          },
        ],
      },
    },
    {
      id: 'KRS01CAR002',
      name: 'Honda - Civic',
      bodyType: 'SEDAN',
      transmission: 'AUTOMATIC',
      seats: 4,
      bags: 3,
      description: 'Sedan elegan dengan performa tinggi dan kenyamanan premium.',
      imageUrl: '/img/cars/Honda-Civic.png',
      prices: {
        create: {
          id: 'KRS02PRC002',
          pricePerDay: 600000,
          pricePerWeek: 3600000,
          pricePerMonth: 10800000,
        },
      },
      testimonials: {
        create: [
          {
            id: 'KRS03TSM002',
            customerName: 'Budi',
            reviewContent: 'Nyaman banget buat perjalanan bisnis, interior mewah.',
            rating: 4,
          },
        ],
      },
    },
    {
      id: 'KRS01CAR003',
      name: 'Toyota - Avanza',
      bodyType: 'MPV',
      transmission: 'MANUAL',
      seats: 7,
      bags: 4,
      description: 'MPV keluarga andalan, cocok untuk perjalanan jarak jauh.',
      imageUrl: '/img/cars/Toyota-Avanza.png',
      prices: {
        create: {
          id: 'KRS02PRC003',
          pricePerDay: 350000,
          pricePerWeek: 2100000,
          pricePerMonth: 6300000,
        },
      },
      testimonials: {
        create: [
          {
            id: 'KRS03TSM003',
            customerName: 'Citra',
            reviewContent: 'Pas banget untuk liburan keluarga, lega dan nyaman.',
            rating: 5,
          },
        ],
      },
    },
    {
      id: 'KRS01CAR004',
      name: 'Mitsubishi - Pajero Sport',
      bodyType: 'SUV',
      transmission: 'AUTOMATIC',
      seats: 7,
      bags: 5,
      description: 'SUV tangguh dengan performa mesin bertenaga.',
      imageUrl: '/img/cars/Mitsubishi-Pajero-Sport.png',
      prices: {
        create: {
          id: 'KRS02PRC004',
          pricePerDay: 800000,
          pricePerWeek: 4800000,
          pricePerMonth: 14400000,
        },
      },
      testimonials: {
        create: [
          {
            id: 'KRS03TSM004',
            customerName: 'Dewi',
            reviewContent: 'Mantap buat perjalanan luar kota, suspensinya empuk.',
            rating: 5,
          },
        ],
      },
    },
    {
      id: 'KRS01CAR005',
      name: 'Toyota - Alphard',
      bodyType: 'LUXURY',
      transmission: 'AUTOMATIC',
      seats: 7,
      bags: 5,
      description: 'MPV mewah dengan kenyamanan kelas eksekutif.',
      imageUrl: '/img/cars/Toyota-Alphard.png',
      prices: {
        create: {
          id: 'KRS02PRC005',
          pricePerDay: 2000000,
          pricePerWeek: 12000000,
          pricePerMonth: 36000000,
        },
      },
      testimonials: {
        create: [
          {
            id: 'KRS03TSM005',
            customerName: 'Fajar',
            reviewContent: 'Layanan VIP beneran terasa, mobil super nyaman!',
            rating: 5,
          },
        ],
      },
    },
    {
      id: 'KRS01CAR006',
      name: 'Toyota - Hiace',
      bodyType: 'MINIBUS',
      transmission: 'MANUAL',
      seats: 15,
      bags: 10,
      description: 'Minibus untuk rombongan besar, ideal untuk wisata.',
      imageUrl: '/images/cars/Toyota-Hiace.png',
      prices: {
        create: {
          id: 'KRS02PRC006',
          pricePerDay: 1200000,
          pricePerWeek: 7200000,
          pricePerMonth: 21600000,
        },
      },
      testimonials: {
        create: [
          {
            id: 'KRS03TSM006',
            customerName: 'Gita',
            reviewContent: 'Rombongan kantor puas, semua muat dan nyaman.',
            rating: 4,
          },
        ],
      },
    },
  ];

  for (const car of cars) {
    await prisma.car.create({
      data: {
        carName: car.name,
        slug: car.name
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, ''),
        bodyType: car.bodyType as any,
        transmission: car.transmission as any,
        seats: car.seats,
        bags: car.bags,
        description: car.description,
        imageUrl: car.imageUrl,
        prices: {
          create: car.prices.create,
        },
        testimonials: {
          create: car.testimonials.create,
        },
      },
    });
  }

  console.log('✅ Seeding selesai!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
