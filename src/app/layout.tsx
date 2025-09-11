import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppinsSans = Poppins({
  weight: '400',
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Khalisarentcar Solution',
  description: 'Rental Mobil Terpercaya',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
