import React from 'react';
import Logo from '@/public/assets/elite_logo.png';
import Link from 'next/link';
import Image from 'next/image';
import { FaDiscord, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center mt-10">
      <div className="flex items-center space-x-3 text-white text-xl">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt="Elite Club Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="font-bold text-2xl bg-gradient-to-r from-red-500 to-indigo-500 bg-clip-text text-transparent">
            Kien Nguyen
          </span>
        </Link>
      </div>

      <div className="flex items-center justify-center gap-6 text-2xl text-white">
        <Link
          href="https://www.linkedin.com/in/kien-nguyen-46bab22a1/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="hover:text-blue-500 transition-colors" />
        </Link>
        <Link
          href="https://github.com/K1enNg"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-gray-400 transition-colors" />
        </Link>
        <Link
          href="https://www.instagram.com/ngkien.272/"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-pink-500 transition-colors" />
        </Link>
        <Link
          href="/"
          aria-label="Discord"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord className="hover:text-indigo-500 transition-colors" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
