import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface RedesignedNavbarProps {
  onHome: () => void;
  onScannerHub: () => void;
  onDevCore: () => void;
  onGlobalReach: () => void;
  onSystemCore: () => void;
  onPremiumMode: () => void;
  onFishIdentify: () => void;
  onBirdIdentify: () => void;
}

export const RedesignedNavbar: React.FC<RedesignedNavbarProps> = ({
  onHome,
  onScannerHub,
  onDevCore,
  onGlobalReach,
  onSystemCore,
  onFishIdentify,
  onBirdIdentify,
  onPremiumMode,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileClick = (callback: () => void) => {
    setMobileOpen(false);
    callback();
  };

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6 lg:px-8 flex items-center justify-between w-full select-none pointer-events-none">
        {/* Left: liquid-glass circle with italic "n" */}
        <div 
          onClick={onHome}
          className="liquid-glass h-12 w-12 rounded-full flex items-center justify-center text-white font-heading text-2xl italic cursor-pointer pointer-events-auto hover:scale-105 active:scale-95 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        >
          n
        </div>

        {/* Center: high-visibility original premium glass pill */}
        <div className="hidden lg:flex items-center gap-1 liquid-glass rounded-full px-2 py-1.5 pointer-events-auto shadow-[0_8px_32px_rgba(0,0,0,0.6)] text-xs font-semibold tracking-wider font-body">
          <button
            onClick={onHome}
            className="px-3.5 py-2 text-white/85 hover:text-white transition-all cursor-pointer uppercase text-[10px] tracking-widest rounded-full hover:bg-white/5 border border-transparent hover:border-white/10"
          >
            Home
          </button>
          <button
            onClick={onScannerHub}
            className="px-3.5 py-2 text-white/85 hover:text-white transition-all cursor-pointer uppercase text-[10px] tracking-widest flex items-center gap-1 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10"
          >
            Scanner Hub <span className="text-[9px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded-full font-mono uppercase font-bold">Premium ✨</span>
          </button>
          <button
            onClick={onDevCore}
            className="px-3.5 py-2 text-white/85 hover:text-white transition-all cursor-pointer uppercase text-[10px] tracking-widest rounded-full hover:bg-white/5 border border-transparent hover:border-white/10"
          >
            Developer Core
          </button>
          <button
            onClick={onFishIdentify}
            className="px-3.5 py-2 text-cyan-300 hover:text-cyan-200 transition-all cursor-pointer uppercase text-[10px] tracking-widest flex items-center gap-1 rounded-full hover:bg-white/5 border border-transparent hover:border-cyan-400/30"
          >
            Identify Fish <span className="text-[9px] bg-cyan-400/20 text-cyan-200 border border-cyan-400/30 px-1.5 py-0.5 rounded font-mono uppercase font-bold">AI 🐠</span>
          </button>
          <button
            onClick={onBirdIdentify}
            className="px-3.5 py-2 text-indigo-300 hover:text-indigo-200 transition-all cursor-pointer uppercase text-[10px] tracking-widest flex items-center gap-1 rounded-full hover:bg-white/5 border border-transparent hover:border-indigo-400/30"
          >
            Identify Bird <span className="text-[9px] bg-indigo-400/20 text-indigo-200 border border-indigo-400/30 px-1.5 py-0.5 rounded font-mono uppercase font-bold">AI 🦅</span>
          </button>
          <button
            onClick={onGlobalReach}
            className="px-3.5 py-2 text-white/85 hover:text-white transition-all cursor-pointer uppercase text-[10px] tracking-widest rounded-full hover:bg-white/5 border border-transparent hover:border-white/10"
          >
            Global Reach
          </button>
          <button
            onClick={onSystemCore}
            className="px-3.5 py-2 text-white/85 hover:text-white transition-all cursor-pointer uppercase text-[10px] tracking-widest mr-1 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10"
          >
            System Core
          </button>
          
          {/* Premium Mode Action Button */}
          <button 
            onClick={onPremiumMode}
            className="ml-1 bg-gradient-to-r from-amber-400 to-amber-200 text-black text-[11px] font-bold px-4 py-2 rounded-full flex items-center gap-1 hover:brightness-110 active:scale-95 transition-all cursor-pointer whitespace-nowrap shadow-[0_2px_10px_rgba(245,158,11,0.3)] uppercase tracking-wider"
          >
            Premium Mode ⚡
          </button>
        </div>

        {/* Right: Hamburger on mobile/tablet */}
        <div className="flex lg:hidden pointer-events-auto">
          <button
            onClick={toggleMobileMenu}
            className="liquid-glass h-12 w-12 flex items-center justify-center rounded-full text-white cursor-pointer active:scale-90 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
          </button>
        </div>
        <div className="hidden lg:block h-12 w-12" />
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/98 backdrop-blur-2xl flex flex-col justify-center px-8 py-20 animate-fadeSlideUp lg:hidden">
          <div className="flex flex-col space-y-5 max-w-sm mx-auto w-full select-none">
            <span className="text-[11px] font-mono tracking-widest text-white/40 uppercase border-b border-white/10 pb-2 font-body">
              Menu
            </span>
            
            <button 
              onClick={() => handleMobileClick(onHome)}
              className="text-2xl font-semibold text-white hover:text-white/80 text-left py-1.5 border-b border-white/5 flex justify-between items-center"
            >
              Home
            </button>
            
            <button 
              onClick={() => handleMobileClick(onScannerHub)}
              className="text-2xl font-semibold text-white hover:text-white/80 text-left py-1.5 border-b border-white/5 flex justify-between items-center"
            >
              <span className="flex items-center gap-2">
                Scanner Hub
                <span className="text-[9px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-mono uppercase font-bold">Premium</span>
              </span>
            </button>

            <button 
              onClick={() => handleMobileClick(onDevCore)}
              className="text-2xl font-semibold text-white hover:text-white/80 text-left py-1.5 border-b border-white/5 flex justify-between items-center"
            >
              Developer Core
            </button>

            <button 
              onClick={() => handleMobileClick(onFishIdentify)}
              className="text-2xl font-semibold text-cyan-300 hover:text-cyan-200 text-left py-1.5 border-b border-white/5 flex justify-between items-center"
            >
              <span className="flex items-center gap-2">
                Identify Fish
                <span className="text-[9px] bg-cyan-400/20 text-cyan-200 border border-cyan-400/30 px-2 py-0.5 rounded font-mono uppercase font-bold">AI</span>
              </span>
            </button>
            <button 
              onClick={() => handleMobileClick(onBirdIdentify)}
              className="text-2xl font-semibold text-indigo-300 hover:text-indigo-200 text-left py-1.5 border-b border-white/5 flex justify-between items-center"
            >
              <span className="flex items-center gap-2">
                Identify Bird
                <span className="text-[9px] bg-indigo-400/20 text-indigo-200 border border-indigo-400/30 px-2 py-0.5 rounded font-mono uppercase font-bold">AI</span>
              </span>
            </button>

            <button 
              onClick={() => handleMobileClick(onGlobalReach)}
              className="text-2xl font-semibold text-white hover:text-white/80 text-left py-1.5 border-b border-white/5 flex justify-between items-center"
            >
              Global Reach
            </button>

            <button 
              onClick={() => handleMobileClick(onSystemCore)}
              className="text-2xl font-semibold text-white hover:text-white/80 text-left py-1.5 border-b border-white/5 flex justify-between items-center"
            >
              System Core
            </button>

            <button 
              onClick={() => handleMobileClick(onPremiumMode)}
              className="mt-6 w-full rounded-full bg-gradient-to-r from-amber-400 to-amber-200 py-3 text-center text-sm font-bold text-black hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(245,158,11,0.3)]"
            >
              <span>Premium Mode</span>
              <Sparkles className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};