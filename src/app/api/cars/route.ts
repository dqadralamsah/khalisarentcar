// src/app/api/armada/route.ts
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const mode = searchParams.get('mode') || 'all';
    const limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : undefined;
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
    const bodyType = searchParams.get('bodyType');

    // GET All
    let cars = await prisma.car.findMany({
      include: { prices: true },
    });

    // Filter Random
    if (mode === 'random' && limit) {
      cars = cars.sort(() => 0.5 - Math.random()).slice(0, limit);
    } else {
      // Filter by BodyType
      if (bodyType) {
        cars = cars.filter((car) => car.bodyType === bodyType);
      }

      // Pagination
      if (limit) {
        const start = (page - 1) * limit;
        const end = start + limit;
        cars = cars.slice(start, end);
      }
    }

    return NextResponse.json(cars);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch cars' }, { status: 500 });
  }
}
