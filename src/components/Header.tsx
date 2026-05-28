"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#412567] bg-[#1a0b2e]">
      <nav className="w-full max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center py-4 md:py-5">
          <div className="w-[137px] sm:w-[170px] md:w-[219px]">
            <Image
              src="/assets/images/TechWave.png"
              alt="logo"
              width={219}
              height={40}
              className="w-full h-auto"
            />
          </div>
          <div className="md:hidden w-6 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Image
              src="/assets/images/hamburger-menu.png"
              alt="hamburger"
              width={24}
              height={24}
              className="w-full h-auto"
            />
          </div>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex absolute md:relative top-[60px] md:top-0 left-0 w-full md:w-auto p-2.5 md:p-0 rounded-[20px] md:rounded-none z-10`}>
            <ul className="flex flex-col md:flex-row gap-8 md:gap-3 bg-white/10 md:bg-transparent rounded-2xl md:rounded-none shadow-[0_4px_30px_rgba(0,0,0,0.1)] md:shadow-none backdrop-blur-[6.6px] md:backdrop-blur-none border border-white/50 md:border-none p-4 md:p-0 text-white font-medium text-base">
              <li className="relative group cursor-pointer">
                <a href="#">About</a>
                <div className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-tr from-[#f7e93f] via-[#fb09b4] to-[#9100f8] transition-all duration-300 group-hover:w-full"></div>
              </li>
              <li className="relative group cursor-pointer">
                <a href="#">Episodes</a>
                <div className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-tr from-[#f7e93f] via-[#fb09b4] to-[#9100f8] transition-all duration-300 group-hover:w-full"></div>
              </li>
              <li className="relative group cursor-pointer">
                <a href="#">Host</a>
                <div className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-tr from-[#f7e93f] via-[#fb09b4] to-[#9100f8] transition-all duration-300 group-hover:w-full"></div>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex btn">
            <span className="font-semibold text-base capitalize">Subscribe</span>
            <Image
              src="/assets/images/ArrowRight.png"
              alt="arrow"
              width={20}
              height={20}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
