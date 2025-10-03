'use client';

import { useEffect, useState } from 'react';
import { TestimonialDetails } from '@/types/testimonials';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import TestimonialCard from './CardTestimonial';

export default function TestimonialWrapper() {
  const [testimonials, setTestimonials] = useState<TestimonialDetails[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const res = await fetch(`/api/testimonials`);
        if (!res.ok) throw new Error('Failed to fetch');

        const data = await res.json();

        setTestimonials(data);
      } catch (error) {
        console.log('Error to fetching testimonial', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonial();
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <p className="text-center text-gray-500">Loading Testimoni...</p>
        </div>
      ) : testimonials.length === 0 ? (
        <div>
          <p className="text-center text-gray-500">Belum Ada Testimoni</p>
        </div>
      ) : (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoHeight={true}
          className=""
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id} className="py-4">
              <TestimonialCard testimonial={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
