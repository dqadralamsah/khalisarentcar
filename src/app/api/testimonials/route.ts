import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      take: 6,
      orderBy: { date: 'desc' },
      include: {
        car: { select: { carName: true } },
      },
    });

    return NextResponse.json(testimonials);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to fetch testimonial' }, { status: 500 });
  }
}
