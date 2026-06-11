import React from 'react';

export default function Footer({ onOpenPremium, onOpenDevCore, onOpenPrivacy, onOpenTerms }: { onOpenPremium?: () => void, onOpenDevCore?: () => void, onOpenPrivacy?: () => void, onOpenTerms?: () => void }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream rounded-t-[3.5rem] px-8 pt-20 pb-12 mt-32 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
        
        {/* Left Column Text */}
        <div className="text-center md:text-left md:max-w-sm">
          <div className="font-outfit font-extrabold text-3xl tracking-wider text-cream mb-4 flex items-center justify-center md:justify-start gap-2">
            <span className="text-clay">NATURE</span>
            <span className="opacity-80">AI</span>
          </div>
          <p className="font-sans text-sm text-cream/70 leading-relaxed font-light">
            Nature AI — Empowering the next frontier of natural data mapping.
          </p>
        </div>

        {/* Right CTA */}
        <div className="flex flex-col items-center md:items-end">
          <button 
            onClick={onOpenPremium}
            className="magnetic-btn px-8 py-4 bg-clay hover:bg-clay/90 text-white rounded-full font-sans font-semibold tracking-wide shadow-xl flex items-center gap-2 cursor-pointer"
          >
            Enter Premium Mode ⚡
          </button>
          <div className="mt-4 flex items-center gap-2 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#F2F0E9]/70 font-bold">
              All Systems Operational
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/[0.08] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Center Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-sans text-xs font-semibold text-cream/60">
          <button onClick={onOpenPremium} className="hover:text-[#CC5833] transition-colors cursor-pointer bg-transparent border-none py-0 px-0">Features</button>
          <span className="text-white/10 hidden sm:inline">|</span>
          <button onClick={onOpenDevCore} className="hover:text-[#CC5833] transition-colors cursor-pointer bg-transparent border-none py-0 px-0">Developer Core</button>
          <span className="text-white/10 hidden sm:inline">|</span>
          <button onClick={onOpenPrivacy} className="hover:text-[#CC5833] transition-colors cursor-pointer bg-transparent border-none py-0 px-0">Security Privacy Policy</button>
          <span className="text-white/10 hidden sm:inline">|</span>
          <button onClick={onOpenTerms} className="hover:text-[#CC5833] transition-colors cursor-pointer bg-transparent border-none py-0 px-0">Terms of Service</button>
        </div>

        <p className="font-mono text-[10px] text-cream/40 uppercase tracking-widest">
          &copy; {currentYear} NATURE AI INC. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
