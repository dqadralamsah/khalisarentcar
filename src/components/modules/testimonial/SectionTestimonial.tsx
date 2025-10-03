'use client';

import TestimonialWrapper from './WrapperTestimonial';

export default function TestimonialSection() {
  return (
    <section className="px-4 py-4 space-y-8 md:px-16">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl text-center text-khsblue2 font-bold">Kata Mereka</h1>
        <div className="w-16 h-0.5 bg-khsblue2"></div>
      </div>
      <TestimonialWrapper />
    </section>
  );
}
