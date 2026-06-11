import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar({ onOpenPremium, onOpenDevCore, onOpenPrivacy }: { onOpenPremium?: () => void, onOpenDevCore?: () => void, onOpenPrivacy?: () => void }) {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-8 py-4 rounded-full transition-all duration-500 w-[90%] max-w-5xl ${
        isScrolled
          ? 'bg-white/60 backdrop-blur-md text-moss border border-moss/10 shadow-sm'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="font-outfit font-bold tracking-wider text-xl flex items-center gap-2">
        <span className="text-clay">NATURE</span>
        <span className="opacity-80">AI</span>
      </div>
      <div className="hidden md:flex items-center gap-6 font-sans text-xs lg:text-sm font-medium tracking-wide">
        <button 
          onClick={onOpenPremium}
          className="hover:text-clay transition-colors font-bold flex items-center gap-1 cursor-pointer bg-transparent border-none py-0 px-0"
        >
          Scanner Hub <span className="text-[10px] bg-clay text-white px-1.5 py-0.5 rounded-full">Premium ✨</span>
        </button>
        <button 
          onClick={onOpenDevCore}
          className="hover:text-clay transition-colors cursor-pointer bg-transparent border-none py-0 px-0"
        >
          Developer Core
        </button>
        <a href="#philosophy" className="hover:opacity-70 transition-opacity">Global Reach</a>
        <a href="#protocol" className="hover:opacity-70 transition-opacity">System Core</a>
        <a href="#unrivaled" className="hover:opacity-70 transition-opacity">Comparison</a>
        <a href="#leafy-chat" className="hover:opacity-70 transition-opacity">Leafy Chat</a>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={onOpenPremium}
          className={`hidden md:block px-5 py-2 rounded-full font-sans text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
            isScrolled ? 'bg-clay text-white hover:bg-clay/90' : 'bg-white text-moss hover:bg-white/90'
          }`}
        >
          Premium Mode ⚡
        </button>
        <button className="md:hidden" onClick={onOpenPremium}>
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
