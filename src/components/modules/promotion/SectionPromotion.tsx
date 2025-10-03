'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaGift } from 'react-icons/fa';

// import css swiper
import 'swiper/css';

export default function PromotionSection() {
  const promos = [1, 2, 3, 4]; // placeholder

  return (
    <section className="px-4 md:px-16 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Promo Spesial</h2>
        <p className="text-gray-600 mt-2">Nantikan penawaran menarik dari Khalisarentcar</p>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-8"
      >
        {promos.map((p, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center justify-center h-48 rounded-xl bg-gray-100 border border-dashed border-gray-300">
              <FaGift size={32} className="text-khsblue2 mb-2" />
              <p className="text-lg font-semibold">Coming Soon</p>
              <span className="text-sm text-gray-500">Segera Hadir</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
