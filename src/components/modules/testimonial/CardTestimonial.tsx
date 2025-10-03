'use client';

import { FaStar } from 'react-icons/fa';
import { TestimonialDetails } from '@/types/testimonials';
import { Card, CardContent } from '@/components/ui/card';

export default function TestimonialCard({ testimonial }: { testimonial: TestimonialDetails }) {
  return (
    <Card className="border shadow-md">
      <CardContent className="flex flex-col justify-between h-full space-y-4">
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <p className="text-xs text-gray-500">{testimonial.car.carName}</p>
          </div>
          <p className="text-sm text-gray-700 italic">{testimonial.reviewContent}</p>
        </div>
        <div>
          <p className="text-gray-500">{testimonial.customerName}</p>
        </div>
      </CardContent>
    </Card>
  );
}
