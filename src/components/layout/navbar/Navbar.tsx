'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/aboutus', label: 'Tentang Kami' },
  // { href: '/service', label: 'Layanan' },
  { href: '/armada', label: 'Armada' },
  // { href: '/policy', label: 'Kebijakan' },
  { href: '/Article', label: 'Artikel' },
  { href: '/contactus', label: 'Hubungi Kami' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 flex items-center justify-between px-4 py-4 z-50 bg-white md:px-16 transition-colors duration-300 ${
        scrolled ? 'lg:bg-white shadow-md' : 'lg:bg-transparent'
      }`}
    >
      {/* Logo */}
      <div className="navLogo">
        <Link href={'/'}>
          <Image
            src="/img/logo/TemporaryLogo-Large.png"
            width={128}
            height={0}
            className="md:w-40 md:h-auto"
            alt="Khalisarentcar Logo"
          />
        </Link>
      </div>
      {/* Hamburger (Mobile Only) */}
      <div className="flex items-center justify-center lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="w-6 h-6 text-khsblue1" />
          ) : (
            <FaBars className="w-6 h-6 text-khsblue1" />
          )}
        </button>
      </div>
      {/* Links (Desktop) */}
      <div className="hidden items-center justify-center gap-6 text-khsblue2 font-medium lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-semibold hover:text-khsblue1 focus:text-khsblue1"
          >
            {link.label}
          </Link>
        ))}
      </div>
      {/* CTA Button (Desktop) */}
      <div className="hidden lg:block">
        <Link
          href={'https://wa.me/6281277772320?text=Halo, saya ingin sewa mobil di Khalisarentcar'}
          target="_blank"
        >
          <Button className="flex items-center gap-2 font-medium rounded-full bg-accent1 hover:bg-green-500 ">
            Book Now <FaWhatsapp size={24} />
          </Button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 flex flex-col items-center w-full gap-4 z-45 shadow-md overflow-hidden bg-white transition-[height] duration-700 ease-in-out lg:hidden ${
          isOpen ? 'h-screen' : 'h-0'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-semibold text-khsblue2 hover:text-khsblue1 focus:text-khsblue1"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href={'https://wa.me/6281277772320?text=Halo, saya ingin sewa mobil di Khalisarentcar'}
          target="_blank"
        >
          <Button className="flex items-center gap-2 font-medium rounded-full bg-accent1 hover:bg-green-500">
            Book Now <FaWhatsapp size={24} />
          </Button>
        </Link>
      </div>
    </nav>
  );
}
