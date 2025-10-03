import { Card, CardContent } from '@/components/ui/card';
import { FaCar, FaTag } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import { LuHeadset } from 'react-icons/lu';

const features = [
  {
    icon: <FaCar className="w-12 h-12 text-blue-400" />,
    title: 'Armada Berkualitas & Terawat',
    desc: 'Pilihan mobil beragam, selalu dalam kondisi prima dan siap digunakan.',
  },
  {
    icon: <FaTag className="w-12 h-12 text-green-400" />,
    title: 'Harga Transparan',
    desc: 'Biaya sewa jelas tanpa ada biaya tersembunyi.',
  },
  {
    icon: <HiLightningBolt className="w-12 h-12 text-yellow-400" />,
    title: 'Pemesanan Cepat & Mudah',
    desc: 'Booking praktis melalui layanan komunikasi resmi.',
  },
  {
    icon: <LuHeadset className="w-12 h-12 text-purple-400" />,
    title: 'Layanan Profesional',
    desc: 'Didukung tim yang ramah dan pengemudi berpengalaman.',
  },
];

export default function FeatureSection() {
  return (
    <section className="px-4 py-8 bg-gradient-to-t from-[#0A2A5C] to-[#1562D8] shadow-[inset_0_8px_12px_rgba(0,0,0,0.25),inset_0_-8px_12px_rgba(0,0,0,0.25)] md:px-16">
      <div className="space-y-8">
        <h2 className="text-3xl text-center text-white font-bold md:text-4xl">
          Kenapa Harus Memilih Kami?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="flex flex-col items-center text-center border-0 rounded-2xl bg-white/10 backdrop-blur-sm  shadow-lg  transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <CardContent className="flex flex-col items-center p-6 space-y-4">
                {feature.icon}
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-white/80">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
