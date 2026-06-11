import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Bug, Waves, Heart, ShieldAlert, Cpu, Sparkle, Sparkles, Home } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// THE CENTERPIECE: Bird Scanning Screen
const BirdScanningScreen = ({ onOpenPremium }: { onOpenPremium?: () => void }) => {
  const scanLineRef2 = useRef<HTMLDivElement>(null);
  const birdImgRef = useRef<HTMLDivElement>(null);
  const [speciesIndex, setSpeciesIndex] = useState(0);

  const birdSpecies = [
    { 
      name: 'Blue Jay', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPRPOQu7tKyqUYydRZ6dkHPrFBXAcNLY6jZom17W5WC-TegaBeAvYHxRU5lGJEdKZOy-a54ne9UN8HZcYlnc2JhFmhjP4UoUwks4BvsfrZDCsQKNtDYX7gv-BUUftoaAuDvRBSQ7SjiS78ol6GM7Uu6Aw5UM4-ITj7JfoOmh0izAR8iKBJSL8_2hw9u-cVr3joqn8dr7JyzFqnPfz5CbVvfrtBexiy0d8tqrMOzBDL5cL02b-PvcqRBgSqvrwltRyOP0LSqAWhsc0' 
    },
    { 
      name: 'Northern Cardinal', 
      img: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?q=80&w=600&auto=format&fit=crop' 
    },
    { 
      name: 'American Robin', 
      img: 'https://images.unsplash.com/photo-1470114716159-e389f8712fb4?q=80&w=600&auto=format&fit=crop' 
    }
  ];

  useEffect(() => {
    // 1. Horizontal Scanning Line Animation
    if (scanLineRef2.current) {
      gsap.killTweensOf(scanLineRef2.current);
      gsap.fromTo(scanLineRef2.current,
        { top: '0%' },
        { top: '100%', repeat: -1, yoyo: true, duration: 2.2, ease: 'sine.inOut' }
      );
    }

    // 2. High fidelity GSAP breathing/scaling continuous bird animation
    if (birdImgRef.current) {
      gsap.killTweensOf(birdImgRef.current);
      gsap.fromTo(birdImgRef.current,
        { scale: 1 },
        { scale: 1.15, repeat: -1, yoyo: true, duration: 3, ease: 'sine.inOut' }
      );
    }
  }, [speciesIndex]);

  const handleNext = () => {
    setSpeciesIndex((prev) => (prev + 1) % birdSpecies.length);
  };

  return (
    <div 
      className="relative flex h-[520px] md:h-[560px] w-full max-w-[270px] flex-col bg-gradient-to-b from-[#e0f2fe] to-[#ffffff] dark:from-[#101a22] dark:to-[#1e293b] rounded-[2.5rem] border-[6px] border-slate-900 dark:border-slate-700 shadow-2xl overflow-hidden mx-auto justify-between transition-all duration-300"
    >
      {/* TopAppBar inside phone */}
      <div className="absolute top-3 right-4 z-20">
        <button 
          onClick={handleNext}
          className="px-2.5 py-1 hover:opacity-85 transition-opacity"
        >
          <span className="text-[#1392ec] text-xs font-bold leading-normal tracking-wide font-sans">Skip</span>
        </button>
      </div>

      {/* Upper Camera Port (55% height) */}
      <div className="relative w-full h-[55%] bg-slate-900 overflow-hidden">
        {/* Camera background */}
        <div 
          ref={birdImgRef}
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out" 
          style={{ backgroundImage: `url("${birdSpecies[speciesIndex].img}")` }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* Scanning Box */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-32 h-32 border border-white/20 rounded-xl bg-black/5 flex items-center justify-center overflow-hidden">
              {/* Scanning Corners */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-4 border-l-4 border-white rounded-tl-md"></div>
              <div className="absolute top-0 right-0 w-5 h-5 border-t-4 border-r-4 border-white rounded-tr-md"></div>
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-4 border-l-4 border-white rounded-bl-md"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-4 border-r-4 border-white rounded-br-md"></div>
              
              {/* Horizontal Scanning Line */}
              <div 
                ref={scanLineRef2}
                className="absolute left-0 w-full h-[3px] bg-[#1392ec] shadow-[0_0_15px_rgba(19,146,236,0.8)] z-10 pointer-events-none"
                style={{ top: '50%' }}
              ></div>
            </div>
          </div>

          {/* Frosted Glass Label inside screen */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%] z-10">
            <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-full py-1 px-3 flex items-center justify-center gap-1 shadow-md">
              <span className="text-white text-[8px] font-bold tracking-widest uppercase whitespace-nowrap">
                Scanning... <span className="italic font-mono text-white">{birdSpecies[speciesIndex].name}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Text Content & Controls card overlay (45% height) */}
      <div className="bg-white/80 dark:bg-[#1e293b]/90 backdrop-blur-md flex-grow flex flex-col justify-between pt-4 pb-5 px-4 border-t border-slate-100 dark:border-slate-800">
        <div className="text-center">
          {/* HeadlineText */}
          <h4 className="text-[#0d161b] dark:text-white tracking-tight text-base font-bold pb-1 font-display">
            Identify Any Bird
          </h4>
          {/* BodyText */}
          <p className="text-[#4c799a] dark:text-slate-400 text-[10px] leading-relaxed max-w-[200px] mx-auto font-sans">
            Scan birds around you and discover their species instantly.
          </p>
        </div>

        <div>
          {/* PageIndicators */}
          <div className="flex w-full flex-row items-center justify-center gap-1 pb-3">
            {birdSpecies.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1 transition-all duration-500 rounded-full ${idx === speciesIndex ? 'w-4 bg-[#1392ec]' : 'w-1 bg-slate-300 dark:bg-slate-700'}`}
              ></div>
            ))}
          </div>

          {/* Action Button */}
          <button 
            onClick={handleNext}
            className="w-full py-2 bg-[#1392ec] hover:bg-[#1392ec]/95 text-white rounded-full font-bold text-xs shadow-md shadow-sky-500/20 flex items-center justify-center gap-1.5 transition-all duration-200"
          >
            <span>Next</span>
            <ArrowRight className="w-3.5 h-3.5 font-bold" />
          </button>

          {/* Bottom Tab Bar Mock */}
          <div className="mt-4 pt-2.5 border-t border-slate-100 dark:border-white/5 flex justify-around items-center">
            <button className="flex flex-col items-center gap-0.5 text-slate-300 dark:text-slate-600 hover:text-slate-400 transition-colors bg-transparent border-0 py-0 px-0 cursor-pointer">
              <Home className="w-3.5 h-3.5" />
              <span className="text-[7px] font-semibold tracking-wider font-mono uppercase">Home</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 text-[#1392ec] transition-colors relative bg-transparent border-0 py-0 px-0">
              <div className="w-5 h-5 rounded-full bg-[#1392ec]/10 flex items-center justify-center">
                <Sparkle className="w-3 h-3" />
              </div>
            </button>
            <button 
              onClick={onOpenPremium}
              className="flex flex-col items-center gap-0.5 text-slate-300 hover:text-[#1392ec] transition-all hover:scale-105 duration-200 cursor-pointer bg-transparent border-0 py-0 px-0 font-bold"
              title="Features"
              id="bird-features-tab-btn"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#1392ec] animate-pulse" />
              <span className="text-[7px] font-bold tracking-wider font-mono uppercase text-[#1392ec]">Features</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// THE CENTERPIECE: Plant Scanning Screen
const PlantScanningScreen = ({ onOpenPremium }: { onOpenPremium?: () => void }) => {
  const scanLineRef = useRef<HTMLDivElement>(null);
  const plantImgRef = useRef<HTMLDivElement>(null);
  const [speciesIndex, setSpeciesIndex] = useState(0);

  const plantSpecies = [
    { 
      name: 'Monstera Deliciosa', 
      bg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEa7N12m3PQLR1nHza7RevizsifJ1EF8M_BEYiddsAk29glyfO_OpNzL6WBA0rjRV34WrTif8pvdCRPf-sBs1qN6mmOZ1rOu1dZp34Cb4ymd6y914eWcqsj9kVCtHiNxdUN2ANYWiI6Dz2ufnxIv0fXvaV7tFjSUqULN-0Vry9apEpZtwOJ-Jngj3MCb9zgXfpnTjNu1ymW-UZ6a1ZpZvmN9wKO9AVO7ESb0ElVMB4nC_G0vuj_0zx1AowMyTzllCvrDOREMtn8Ck',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR8Ejqaraqmd3VgRgtOM-jOmCSfxoFSxGKuge5OajzsltbyMcT8q1dYy5to81kfgLHCJCFK0xRNrFR0WwbHoU5OvBflo7l46Z1nPHBBBQn9Ys6Z-50l7L8G9OpqB6-slqAiZihW56mh4ZT6u-nXm-rgEno8p98mO78Un9pbTfQFxVs32vya7l1reoMA6z-1MhCh3v93EF8gVehFeErWIAvULjModIe8_6Pw_q2K1HYGuPp5GkBjM4Idq0sfoA-FiXK_Q2AQVupzaI' 
    },
    { 
      name: 'Ficus Lyrata', 
      bg: 'https://images.unsplash.com/photo-1597055181300-e3633a207518?q=80&w=600&auto=format&fit=crop',
      img: 'https://images.unsplash.com/photo-1597055181300-e3633a207518?q=80&w=600&auto=format&fit=crop' 
    },
    { 
      name: 'Dracaena Marginata', 
      bg: 'https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=600&auto=format&fit=crop',
      img: 'https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=600&auto=format&fit=crop' 
    }
  ];

  useEffect(() => {
    // 1. Precise GSAP scan line animation reproducing laser beam
    if (scanLineRef.current) {
      gsap.killTweensOf(scanLineRef.current);
      gsap.fromTo(scanLineRef.current,
        { top: '0%' },
        { top: '100%', repeat: -1, yoyo: true, duration: 2.2, ease: 'sine.inOut' }
      );
    }

    // 2. High fidelity GSAP breathing/scaling continuous plant animation
    if (plantImgRef.current) {
      gsap.killTweensOf(plantImgRef.current);
      gsap.fromTo(plantImgRef.current,
        { scale: 1 },
        { scale: 1.12, repeat: -1, yoyo: true, duration: 3, ease: 'sine.inOut' }
      );
    }
  }, [speciesIndex]);

  const handleNext = () => {
    setSpeciesIndex((prev) => (prev + 1) % plantSpecies.length);
  };

  return (
    <div 
      className="relative flex h-[520px] md:h-[560px] w-full max-w-[270px] flex-col bg-gradient-to-br from-[#fdf2f8] to-[#f0fdf4] dark:from-[#1a1014] dark:to-[#0d1b12] rounded-[2.5rem] border-[6px] border-slate-900 dark:border-slate-700 shadow-2xl overflow-hidden mx-auto justify-between transition-all duration-300"
    >
      {/* TopAppBar */}
      <div className="absolute top-3 right-4 z-20">
        <button 
          onClick={handleNext}
          className="px-2.5 py-1 hover:opacity-85 transition-opacity"
        >
          <span className="text-[#4c9a66] dark:text-[#13ec5b] text-xs font-bold leading-normal tracking-wide font-sans">Skip</span>
        </button>
      </div>

      {/* Upper Camera Port (55% height) */}
      <div className="relative w-full h-[55%] bg-[#0d1b12] overflow-hidden">
        {/* Background photo */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out" 
          style={{ backgroundImage: `url("${plantSpecies[speciesIndex].bg}")` }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* Circular crop area */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-32 h-32 border border-white/20 rounded-full flex items-center justify-center overflow-hidden bg-black/15">
              {/* Scan corners */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#13ec5b] rounded-tl-sm"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#13ec5b] rounded-tr-sm"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#13ec5b] rounded-bl-sm"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#13ec5b] rounded-br-sm"></div>
              
              {/* Inner animated crop */}
              <div className="w-24 h-24 rounded-full border border-[#13ec5b]/45 overflow-hidden relative">
                <div 
                  ref={plantImgRef}
                  className="w-full h-full bg-cover bg-center transition-all duration-700" 
                  style={{ backgroundImage: `url("${plantSpecies[speciesIndex].img}")` }}
                ></div>
              </div>

              {/* Scanning laser scan line */}
              <div 
                ref={scanLineRef}
                className="absolute left-0 w-full h-[3px] bg-[#13ec5b] shadow-[0_0_15px_#13ec5b] z-20 pointer-events-none"
                style={{ top: '50%' }}
              ></div>
            </div>
          </div>

          {/* Floating glass label */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%] z-10 text-center">
            <div className="backdrop-blur-md bg-black/60 border border-white/15 rounded-full py-1 px-3 flex items-center justify-center gap-1 shadow-md">
              <span className="w-1.5 h-1.5 bg-[#13ec5b] rounded-full animate-pulse"></span>
              <span className="text-white text-[8px] font-bold tracking-widest uppercase whitespace-nowrap">
                SCANNING... <span className="italic text-[#13ec5b] font-mono">{plantSpecies[speciesIndex].name}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom controls card (45% height) */}
      <div className="bg-white/80 dark:bg-[#102216]/80 backdrop-blur-md flex-grow flex flex-col justify-between pt-4 pb-5 px-4 border-t border-slate-100 dark:border-white/5">
        <div className="text-center">
          <h4 className="text-[#0d1b12] dark:text-white tracking-tight text-base font-bold pb-1 font-sans">
            Identify Any Plant
          </h4>
          <p className="text-[#0d1b12]/70 dark:text-white/70 text-[10px] leading-relaxed max-w-[200px] mx-auto font-sans">
            Take a photo and let our AI instantly tell you the species and health.
          </p>
        </div>

        <div>
          {/* Indicators */}
          <div className="flex w-full flex-row items-center justify-center gap-1 pb-3">
            {plantSpecies.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1 transition-all duration-500 rounded-full ${idx === speciesIndex ? 'w-4 bg-[#13ec5b]' : 'w-1 bg-[#cfe7d7] dark:bg-white/20'}`}
              ></div>
            ))}
          </div>

          {/* Action Button */}
          <button 
            onClick={handleNext}
            className="w-full py-2 bg-[#13ec5b] hover:bg-[#13ec5b]/95 text-[#0d1b12] font-semibold text-xs rounded-xl shadow-md shadow-[#13ec5b]/20 flex items-center justify-center gap-1.5 transition-all duration-200"
          >
            <span>Next</span>
            <ArrowRight className="w-3.5 h-3.5 font-bold" />
          </button>

          {/* Bottom Tab Bar Mock */}
          <div className="mt-4 pt-2.5 border-t border-slate-100 dark:border-white/5 flex justify-around items-center">
            <button className="flex flex-col items-center gap-0.5 text-slate-300 dark:text-slate-600 hover:text-slate-400 transition-colors bg-transparent border-0 py-0 px-0 cursor-pointer">
              <Home className="w-3.5 h-3.5" />
              <span className="text-[7px] font-semibold tracking-wider font-mono uppercase">Home</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 text-[#13ec5b] transition-colors relative bg-transparent border-0 py-0 px-0">
              <div className="w-5 h-5 rounded-full bg-[#13ec5b]/10 flex items-center justify-center">
                <Sparkle className="w-3 h-3" />
              </div>
            </button>
            <button 
              onClick={onOpenPremium}
              className="flex flex-col items-center gap-0.5 text-slate-300 hover:text-[#13ec5b] transition-all hover:scale-105 duration-200 cursor-pointer bg-transparent border-0 py-0 px-0 font-bold"
              title="Features"
              id="plant-features-tab-btn"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#13ec5b] animate-pulse" />
              <span className="text-[7px] font-bold tracking-wider font-mono uppercase text-[#13ec5b]">Features</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// THE CENTERPIECE: Fish Scanning Screen
const FishScanningScreen = ({ onOpenPremium }: { onOpenPremium?: () => void }) => {
  const scanLineRef3 = useRef<HTMLDivElement>(null);
  const fishImgRef = useRef<HTMLDivElement>(null);
  const [speciesIndex, setSpeciesIndex] = useState(0);

  const fishSpecies = [
    { 
      name: 'Clownfish', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ3x0AOu028UH6GnfE2lJ0oBuR_UYVWE4d32PhRkanuL0Z6JtrokucbPBIDjJiijlApOCNfVWzQh-CxJd34uZiwYXqQYQmt3-uXYGQhyt-CLbRTWKtaSuvZDViSyG5WpMCtgSujasUj-rrMgno7wvEXspBgUz1tHYK-T64mDVjG9Bs3wkDVFobDI4E7i74McLLtET5ky_q8aqQ4CjAFnuiwLMyYgl0c6z-0t013GpS_aayMgLG8_aEgT91OzqQq9ToRSqoE_pW_dI' 
    },
    { 
      name: 'Blue Tang', 
      img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop' 
    },
    { 
      name: 'Mandarinfish', 
      img: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?q=80&w=600&auto=format&fit=crop' 
    }
  ];

  useEffect(() => {
    // 1. Horizontal Scanning Line Animation
    if (scanLineRef3.current) {
      gsap.killTweensOf(scanLineRef3.current);
      gsap.fromTo(scanLineRef3.current,
        { top: '0%' },
        { top: '100%', repeat: -1, yoyo: true, duration: 2.2, ease: 'sine.inOut' }
      );
    }

    // 2. High fidelity GSAP breathing/scaling continuous fish animation
    if (fishImgRef.current) {
      gsap.killTweensOf(fishImgRef.current);
      gsap.fromTo(fishImgRef.current,
        { scale: 1 },
        { scale: 1.15, repeat: -1, yoyo: true, duration: 3, ease: 'sine.inOut' }
      );
    }
  }, [speciesIndex]);

  const handleNext = () => {
    setSpeciesIndex((prev) => (prev + 1) % fishSpecies.length);
  };

  return (
    <div 
      className="relative flex h-[520px] md:h-[560px] w-full max-w-[270px] flex-col bg-[#0a2e4d] dark:bg-[#101922] rounded-[2.5rem] border-[6px] border-slate-900 dark:border-slate-700 shadow-2xl overflow-hidden mx-auto justify-between transition-all duration-300"
    >
      {/* TopAppBar */}
      <div className="absolute top-3 right-4 z-20">
        <button 
          onClick={handleNext}
          className="px-2.5 py-1 hover:opacity-85 transition-opacity"
        >
          <span className="text-white/80 hover:text-white text-xs font-bold leading-normal tracking-wide font-sans">Skip</span>
        </button>
      </div>

      {/* Upper Camera Port (55% height) */}
      <div className="relative w-full h-[55%] bg-slate-950/40 overflow-hidden">
        {/* Background of underwater reef */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out opacity-60" 
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8qYQQ8QS3SxcZ3T1wZT9WGIblgdKnWXcDb6YhQnhMuybXgZo2Lfr3UK7QKfj9vNnDQIORrQK_-dRYG9l6JmBco9JO9gh0L3v1fesSY8_f40EqsEPc2orni2ZbqZhu8FB_DqMd1XmwV_W080xs8_FaHYvH7at6j76EgIY8hnW-3ywjF5qstDQUURpgdHg_WATAUQvyIJnwGN05eIVdYRMSfG4xAzsmol04gpzP3FcWreCsxKW3-YWwPguVN2Hm0VHEBYqHqL2ttNE')` }}
        ></div>
        
        {/* Scanning circle area */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative w-32 h-32 border border-white/20 rounded-full flex items-center justify-center overflow-hidden bg-black/10">
            {/* Scanning Corners */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#0d7ff2] rounded-tl-sm"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#0d7ff2] rounded-tr-sm"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#0d7ff2] rounded-bl-sm"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white rounded-br-sm"></div>
            
            {/* Animating Fish Image */}
            <div className="w-24 h-24 rounded-full border border-white/30 overflow-hidden relative">
              <div 
                ref={fishImgRef}
                className="w-full h-full bg-cover bg-center transition-all duration-700" 
                style={{ backgroundImage: `url("${fishSpecies[speciesIndex].img}")` }}
              ></div>
            </div>

            {/* Horizontal Scanning Line */}
            <div 
              ref={scanLineRef3}
              className="absolute left-0 w-full h-[3px] bg-[#0d7ff2]/80 shadow-[0_0_15px_rgba(13,127,242,0.8)] z-25 pointer-events-none"
              style={{ top: '50%' }}
            ></div>
          </div>
        </div>

        {/* Floating Glass Label */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%] z-10 text-center">
          <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-full py-1 px-3 flex items-center justify-center gap-1 shadow-lg">
            <Waves className="text-white w-3 h-3 animate-pulse" />
            <span className="text-white text-[8px] font-bold tracking-widest uppercase whitespace-nowrap">
              SCANNING... <span className="text-white font-mono font-bold">{fishSpecies[speciesIndex].name}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom controls card (45% height) */}
      <div className="bg-[#f5f7f8]/90 dark:bg-[#101922]/90 backdrop-blur-md flex-grow flex flex-col justify-between pt-4 pb-5 px-4 border-t border-slate-100 dark:border-white/5">
        <div className="text-center">
          <h4 className="text-[#0d141c] dark:text-white tracking-tight text-base font-bold pb-1 font-display">
            Identify Any Fish
          </h4>
          <p className="text-[#4b5563] dark:text-gray-400 text-[10px] leading-relaxed max-w-[200px] mx-auto font-sans">
            Capture marine life and explore underwater species with advanced AI recognition.
          </p>
        </div>

        <div>
          {/* Indicators */}
          <div className="flex w-full flex-row items-center justify-center gap-1 pb-3">
            {fishSpecies.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1 transition-all duration-500 rounded-full ${idx === speciesIndex ? 'w-4 bg-[#0d7ff2]' : 'w-1 bg-[#cbd5e1] dark:bg-slate-700'}`}
              ></div>
            ))}
          </div>

          {/* Action Button */}
          <button 
            onClick={handleNext}
            className="w-full py-2 bg-[#0d7ff2] hover:bg-[#0d7ff2]/95 text-white rounded-full font-bold text-xs shadow-md shadow-sky-500/20 flex items-center justify-center gap-1.5 transition-all duration-200"
          >
            <span>Next</span>
            <ArrowRight className="w-3.5 h-3.5 font-bold" />
          </button>

          {/* Bottom Tab Bar Mock */}
          <div className="mt-4 pt-2.5 border-t border-slate-100 dark:border-white/5 flex justify-around items-center">
            <button className="flex flex-col items-center gap-0.5 text-slate-300 dark:text-slate-600 hover:text-slate-400 transition-colors bg-transparent border-0 py-0 px-0 cursor-pointer">
              <Home className="w-3.5 h-3.5" />
              <span className="text-[7px] font-semibold tracking-wider font-mono uppercase">Home</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 text-[#0d7ff2] transition-colors relative bg-transparent border-0 py-0 px-0">
              <div className="w-5 h-5 rounded-full bg-[#0d7ff2]/10 flex items-center justify-center">
                <Sparkle className="w-3 h-3" />
              </div>
            </button>
            <button 
              onClick={onOpenPremium}
              className="flex flex-col items-center gap-0.5 text-slate-300 hover:text-[#0d7ff2] transition-all hover:scale-105 duration-200 cursor-pointer bg-transparent border-0 py-0 px-0 font-bold"
              title="Features"
              id="fish-features-tab-btn"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0d7ff2] animate-pulse" />
              <span className="text-[7px] font-bold tracking-wider font-mono uppercase text-[#0d7ff2]">Features</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// THE CENTERPIECE: Insect Scanning Screen
const InsectScanningScreen = ({ onOpenPremium }: { onOpenPremium?: () => void }) => {
  const scanLineRef4 = useRef<HTMLDivElement>(null);
  const insectImgRef = useRef<HTMLDivElement>(null);
  const [speciesIndex, setSpeciesIndex] = useState(0);

  const insectSpecies = [
    { 
      name: 'Monarch Butterfly', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzCL0xPFY-LYpoeCZNv0Pa-MvZ1ZAUXy9Io2IpASGDA7CsyRRYV6HB3_GLZxJEOXeGNyODZYpYNP29onPRJyPRRM_dvTUzMOq_0OuhCuM9CxaOdvP1dxEhGIK-84f6Pdsf7NeD0RCzrL_HOA0hawapqlUNIFotqJXYTScWMxh7NVxD4Xwd1TzIytjoZtmNRc8XR0kvMRrSUpxivZuEqoa3ytdMY9Azwyl3ec5CtStj71cPolmgLegjVLdlfGDCuVAR5nggK1zOe5w' 
    },
    { 
      name: 'Honeybee', 
      img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=600&auto=format&fit=crop' 
    },
    { 
      name: 'Ladybug', 
      img: 'https://images.unsplash.com/photo-1481819613568-3701ccd2f15a?q=80&w=600&auto=format&fit=crop' 
    }
  ];

  useEffect(() => {
    // 1. Horizontal Scanning Line Animation
    if (scanLineRef4.current) {
      gsap.killTweensOf(scanLineRef4.current);
      gsap.fromTo(scanLineRef4.current,
        { top: '0%' },
        { top: '100%', repeat: -1, yoyo: true, duration: 2.2, ease: 'sine.inOut' }
      );
    }

    // 2. High fidelity GSAP breathing/scaling continuous insect animation
    if (insectImgRef.current) {
      gsap.killTweensOf(insectImgRef.current);
      gsap.fromTo(insectImgRef.current,
        { scale: 1 },
        { scale: 1.15, repeat: -1, yoyo: true, duration: 3, ease: 'sine.inOut' }
      );
    }
  }, [speciesIndex]);

  const handleNext = () => {
    setSpeciesIndex((prev) => (prev + 1) % insectSpecies.length);
  };

  return (
    <div 
      className="relative flex h-[520px] md:h-[560px] w-full max-w-[270px] flex-col bg-gradient-to-b from-[#fdfcf0] to-[#f4f1e0] dark:from-[#2a2715] dark:to-[#1a180c] rounded-[2.5rem] border-[6px] border-slate-900 dark:border-slate-700 shadow-2xl overflow-hidden mx-auto justify-between transition-all duration-300"
    >
      {/* TopAppBar inside phone */}
      <div className="absolute top-3 right-4 z-20">
        <button 
          onClick={handleNext}
          className="px-2.5 py-1 hover:opacity-85 transition-opacity"
        >
          <span className="text-[#d4b411] text-xs font-bold leading-normal tracking-wide font-sans">Skip</span>
        </button>
      </div>

      {/* Upper Camera Port (55% height) */}
      <div className="relative w-full h-[55%] bg-slate-900 overflow-hidden">
        {/* Camera background */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out" 
          style={{ backgroundImage: `url("${insectSpecies[speciesIndex].img}")` }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* Scanning Box */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-32 h-32 border border-white/20 rounded-full flex items-center justify-center overflow-hidden bg-black/15">
              {/* Scanning Corners */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#d4b411] rounded-tl-sm"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#d4b411] rounded-tr-sm"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#d4b411] rounded-bl-sm"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white rounded-br-sm"></div>
              
              {/* Inner animated crop */}
              <div className="w-24 h-24 rounded-full border border-[#d4b411]/45 overflow-hidden relative">
                <div 
                  ref={insectImgRef}
                  className="w-full h-full bg-cover bg-center transition-all duration-700" 
                  style={{ backgroundImage: `url("${insectSpecies[speciesIndex].img}")` }}
                ></div>
              </div>

              {/* Horizontal Scanning Line */}
              <div 
                ref={scanLineRef4}
                className="absolute left-0 w-full h-[3px] bg-[#d4b411]/80 shadow-[0_0_15px_rgba(212,180,17,0.8)] z-10 pointer-events-none"
                style={{ top: '50%' }}
              ></div>
            </div>
          </div>

          {/* Frosted Glass Label inside screen */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%] z-10">
            <div className="backdrop-blur-md bg-white/20 border border-white/20 rounded-full py-1 px-3 flex items-center justify-center gap-1 shadow-md">
              <span className="w-1.5 h-1.5 bg-[#d4b411] rounded-full animate-pulse"></span>
              <span className="text-white text-[8px] font-bold tracking-widest uppercase whitespace-nowrap">
                Scanning... <span className="italic font-mono text-white">{insectSpecies[speciesIndex].name}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Text Content & Controls card overlay (45% height) */}
      <div className="bg-white/80 dark:bg-[#1e293b]/90 backdrop-blur-md flex-grow flex flex-col justify-between pt-4 pb-5 px-4 border-t border-slate-100 dark:border-slate-800">
        <div className="text-center">
          {/* HeadlineText */}
          <h4 className="text-[#0d161b] dark:text-white tracking-tight text-base font-bold pb-1 font-display">
            Identify Any Insect
          </h4>
          {/* BodyText */}
          <p className="text-[#4c799a] dark:text-slate-400 text-[10px] leading-relaxed max-w-[200px] mx-auto font-sans">
            Scan insects and explore the hidden micro world around you.
          </p>
        </div>

        <div>
          {/* PageIndicators */}
          <div className="flex w-full flex-row items-center justify-center gap-1 pb-3">
            {insectSpecies.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1 transition-all duration-500 rounded-full ${idx === speciesIndex ? 'w-4 bg-[#d4b411]' : 'w-1 bg-slate-300 dark:bg-slate-700'}`}
              ></div>
            ))}
          </div>

          {/* Action Button */}
          <button 
            onClick={handleNext}
            className="w-full py-2 bg-[#d4b411] hover:bg-[#d4b411]/95 text-white rounded-full font-bold text-xs shadow-md shadow-amber-500/20 flex items-center justify-center gap-1.5 transition-all duration-200"
          >
            <span>Next</span>
            <ArrowRight className="w-3.5 h-3.5 font-bold" />
          </button>

          {/* Bottom Tab Bar Mock */}
          <div className="mt-4 pt-2.5 border-t border-slate-100 dark:border-white/5 flex justify-around items-center">
            <button className="flex flex-col items-center gap-0.5 text-slate-300 dark:text-slate-600 hover:text-slate-400 transition-colors bg-transparent border-0 py-0 px-0 cursor-pointer">
              <Home className="w-3.5 h-3.5" />
              <span className="text-[7px] font-semibold tracking-wider font-mono uppercase">Home</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 text-[#d4b411] transition-colors relative bg-transparent border-0 py-0 px-0">
              <div className="w-5 h-5 rounded-full bg-[#d4b411]/10 flex items-center justify-center">
                <Sparkle className="w-3 h-3" />
              </div>
            </button>
            <button 
              onClick={onOpenPremium}
              className="flex flex-col items-center gap-0.5 text-slate-300 hover:text-[#d4b411] transition-all hover:scale-105 duration-200 cursor-pointer bg-transparent border-0 py-0 px-0 font-bold"
              title="Features"
              id="insect-features-tab-btn"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d4b411] animate-pulse" />
              <span className="text-[7px] font-bold tracking-wider font-mono uppercase text-clay">Features</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Card B telemetry: Neural Stream for Insects
const NeuralStream = () => {
  const messages = [
    'Analyzing micro-fauna variant anatomy...',
    'Scanning exoskeleton chitin layers...',
    'Detecting outdoor behavioral trend vectors...',
    'Cataloging arthropod taxonomy profiles...',
  ];
  const [text, setText] = useState('');
  const [msgIndex, setMsgIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentMsg = messages[msgIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        if (text === '') {
          setIsDeleting(false);
          setMsgIndex((prev) => (prev + 1) % messages.length);
        }
      }, 40);
    } else {
      timer = setTimeout(() => {
        setText(currentMsg.slice(0, text.length + 1));
        if (text === currentMsg) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 70);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, msgIndex]);

  return (
    <div className="relative w-full h-[220px] bg-charcoal rounded-[1.5rem] p-6 overflow-hidden flex flex-col justify-end border border-white/5 shadow-md">
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-clay animate-pulse"></div>
        <span className="text-cream/50 font-mono text-[10px] uppercase tracking-widest font-bold">
          Microfauna Feed
        </span>
      </div>
      
      <div className="font-mono text-cream/90 text-xs leading-relaxed mb-1">
        <span className="text-clay mr-2">&gt;</span>
        {text}
        <span className="inline-block w-1.5 h-3.5 bg-clay ml-0.5 animate-pulse align-middle"></span>
      </div>
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
    </div>
  );
};

// Card C telemetry: Sonar scanner for Aquatic Systems
const AquaticSonar = () => {
  const sonarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.sonar-ring', {
        scale: 3,
        opacity: 0,
        duration: 3,
        stagger: 0.8,
        repeat: -1,
        ease: 'power1.out',
      });
    }, sonarRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sonarRef} className="relative w-full h-[220px] bg-cream rounded-[1.5rem] p-6 overflow-hidden flex flex-col justify-between border border-moss/10 shadow-md">
      <div className="absolute top-4 left-4 text-moss/50 font-mono text-[10px] uppercase tracking-widest font-bold">
        Aquatic Sonar
      </div>
      <div className="flex-1 flex items-center justify-center relative mt-4">
        {/* Radar Ring animation */}
        <div className="absolute w-12 h-12 rounded-full bg-clay/20 flex items-center justify-center z-10 shadow-sm border border-clay/10">
          <Waves className="w-5 h-5 text-clay animate-pulse" />
        </div>
        <div className="sonar-ring absolute w-12 h-12 rounded-full border border-clay/60 pointer-events-none"></div>
        <div className="sonar-ring absolute w-12 h-12 rounded-full border border-clay/40 pointer-events-none"></div>
        <div className="sonar-ring absolute w-12 h-12 rounded-full border border-clay/20 pointer-events-none"></div>
      </div>
      <div className="flex justify-between items-center text-[10px] font-mono text-moss/60 border-t border-moss/10 pt-2 grid grid-cols-3 text-center">
        <div>pH: <span className="font-bold text-moss">7.4</span></div>
        <div>Salinity: <span className="font-bold text-moss">32ppt</span></div>
        <div>Biomass: <span className="font-bold text-moss">Dense</span></div>
      </div>
    </div>
  );
};

// Card D telemetry: Aviary pattern matching timeline
const AviaryTracker = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const seasons = ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR'];
  const [activeSeason, setActiveSeason] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      tl.set(cursorRef.current, { x: 0, y: 0, opacity: 0, scale: 1 });
      tl.to(cursorRef.current, { opacity: 1, duration: 0.5, ease: 'power2.out' });
      tl.to(cursorRef.current, { x: 100, y: 30, duration: 1.2, ease: 'power3.inOut' });
      tl.to(cursorRef.current, { scale: 0.8, duration: 0.1, onComplete: () => setActiveSeason(3) });
      tl.to(cursorRef.current, { scale: 1, duration: 0.1 });
      tl.to(cursorRef.current, { x: 180, y: 80, duration: 1, delay: 0.4, ease: 'power3.inOut' });
      tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
      tl.to(cursorRef.current, { scale: 1, duration: 0.1 });
      tl.to(cursorRef.current, { opacity: 0, duration: 0.5, delay: 0.5, onComplete: () => setActiveSeason(null) });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[220px] bg-white rounded-[1.5rem] p-6 border border-moss/10 overflow-hidden flex flex-col justify-between shadow-md">
      <div className="absolute top-4 left-4 text-moss/50 font-mono text-[10px] uppercase tracking-widest font-bold">
        Aviary Migratory Trajectory
      </div>
      
      <div className="mt-8 flex justify-between gap-1">
        {seasons.map((season, i) => (
          <div
            key={i}
            className={`flex-1 py-1.5 rounded text-center transition-colors duration-300 text-[9px] font-bold font-mono
              ${activeSeason === i ? 'bg-clay text-white' : 'bg-cream text-moss/40'}
            `}
          >
            {season}
          </div>
        ))}
      </div>
      
      <div className="space-y-2 my-2">
        <div className="h-1.5 w-full bg-cream rounded-full overflow-hidden">
          <div className={`h-full bg-clay transition-all duration-500 ${activeSeason !== null ? 'w-4/5' : 'w-1/5'}`}></div>
        </div>
        <div className="h-1.5 w-4/5 bg-cream rounded-full overflow-hidden">
          <div className={`h-full bg-moss transition-all duration-500 ${activeSeason !== null ? 'w-2/3' : 'w-1/4'}`}></div>
        </div>
      </div>
      
      <div className="self-end text-[10px] font-sans font-bold bg-moss text-white px-2.5 py-1 rounded">
        Route Sync Complete
      </div>

      {/* Mock Cursor */}
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 w-4 h-4 z-50 pointer-events-none"
        style={{ transformOrigin: 'top left' }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.87a.5.5 0 00.35-.85L6.35 2.86a.5.5 0 00-.85.35z" fill="#CC5833" stroke="#FFFFFF" strokeWidth="1.5"/>
        </svg>
      </div>
    </div>
  );
};

// Card E telemetry: System Core Vectors and Eco Index
const TelemetryMonitor = () => {
  const [telemetry, setTelemetry] = useState({
    cores: '98.4%',
    lat: '34.0522 N',
    lng: '118.2437 W',
    satellites: '12 Active',
    uptime: '99.98%'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetry((prev) => ({
        ...prev,
        cores: (95 + Math.random() * 4.9).toFixed(2) + '%'
      }));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[220px] bg-charcoal rounded-[1.5rem] p-6 overflow-hidden flex flex-col justify-between border border-white/5 shadow-md">
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#13ec5b] animate-ping"></span>
        <span className="text-cream/50 font-mono text-[10px] uppercase tracking-widest font-bold">
          System Core Vectors
        </span>
      </div>

      <div className="mt-8 space-y-2 font-mono text-[11px] text-cream/80">
        <div className="flex justify-between border-b border-white/10 pb-1">
          <span>AI NEURAL CORES:</span>
          <span className="text-[#13ec5b] font-bold">{telemetry.cores}</span>
        </div>
        <div className="flex justify-between border-b border-white/10 pb-1">
          <span>LOCATION INDEX:</span>
          <span className="text-cream font-bold">{telemetry.lat}</span>
        </div>
        <div className="flex justify-between border-b border-white/10 pb-1">
          <span>SATELLITE SYNC:</span>
          <span className="text-cream font-bold">{telemetry.satellites}</span>
        </div>
        <div className="flex justify-between">
          <span>UPTIME VECTOR:</span>
          <span className="text-[#13ec5b] font-bold">{telemetry.uptime}</span>
        </div>
      </div>

      <div className="text-[9px] font-mono text-cream/45 border-t border-white/10 pt-2 text-right">
        WILDER CORE LABS v4.81
      </div>
    </div>
  );
};

export default function Features({ onOpenPremium }: { onOpenPremium?: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-24 px-8 max-w-7xl mx-auto border-t border-moss/10">
      <div className="mb-16 md:mb-20 text-center">
        <h2 className="font-sans font-bold text-4xl md:text-5xl text-charcoal tracking-tight mb-4">
          The Core Multi-Vision Scanner Hub
        </h2>
        <p className="font-serif italic text-2xl text-moss/80 max-w-2xl mx-auto">
          Identify, cross-reference, and analyze wild biological networks instantaneously.
        </p>
      </div>

      {/* 6-Column High-Fidelity Balanced Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 items-stretch">
        
        {/* COLUMN 1: Insect and Aquatic trackers */}
        <div className="xl:col-span-1 flex flex-col gap-8 w-full order-3 xl:order-1">
          {/* Arthropod Unit */}
          <div className="feature-card bg-white rounded-[2.5rem] p-8 border border-moss/10 hover:border-moss/30 transition-all duration-300 flex-1 flex flex-col justify-between">
            <div className="mb-6">
              <span className="text-clay font-mono text-xs uppercase tracking-widest font-bold">
                Micro-Fauna Intelligence.
              </span>
              <h3 className="font-sans font-bold text-xl text-charcoal mt-2 mb-2">
                Insect & Arthropod Tracker
              </h3>
              <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light">
                Identify insect variants, exoskeleton metrics, and behavioral markers instantly.
              </p>
            </div>
            <NeuralStream />
          </div>

          {/* Aquatic Unit */}
          <div className="feature-card bg-white rounded-[2.5rem] p-8 border border-moss/10 hover:border-moss/30 transition-all duration-300 flex-1 flex flex-col justify-between">
            <div className="mb-6">
              <span className="text-clay font-mono text-xs uppercase tracking-widest font-bold">
                Under-Water Analytics.
              </span>
              <h3 className="font-sans font-bold text-xl text-charcoal mt-2 mb-2">
                Aquatic Vision System
              </h3>
              <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light">
                Marine biology tracking, pH monitors, and river ecosystem analysis.
              </p>
            </div>
            <AquaticSonar />
          </div>
        </div>

        {/* COLUMN 2: Bird Scanning Screen */}
        <div className="xl:col-span-1 flex justify-center w-full order-1 xl:order-2 feature-card py-4">
          <BirdScanningScreen onOpenPremium={onOpenPremium} />
        </div>

        {/* COLUMN 3: Plant Scanning Screen */}
        <div className="xl:col-span-1 flex justify-center w-full order-2 xl:order-3 feature-card py-4">
          <PlantScanningScreen onOpenPremium={onOpenPremium} />
        </div>

        {/* COLUMN 4: Fish Scanning Screen */}
        <div className="xl:col-span-1 flex justify-center w-full order-4 xl:order-4 feature-card py-4">
          <FishScanningScreen onOpenPremium={onOpenPremium} />
        </div>

        {/* COLUMN 5: Insect Scanning Screen */}
        <div className="xl:col-span-1 flex justify-center w-full order-5 xl:order-5 feature-card py-4">
          <InsectScanningScreen onOpenPremium={onOpenPremium} />
        </div>

        {/* COLUMN 6: Aviary tracker and Live System Telemetry */}
        <div className="xl:col-span-1 flex flex-col gap-8 w-full order-6 xl:order-6">
          {/* Aviary Unit */}
          <div className="feature-card bg-white rounded-[2.5rem] p-8 border border-moss/10 hover:border-moss/30 transition-all duration-300 flex-1 flex flex-col justify-between">
            <div className="mb-6">
              <span className="text-clay font-mono text-xs uppercase tracking-widest font-bold">
                Ornithology Redefined.
              </span>
              <h3 className="font-sans font-bold text-xl text-charcoal mt-2 mb-2">
                Aviary Sound & Vision Engine
              </h3>
              <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light">
                Analyze bird variants, song patterns, and migratory pathways.
              </p>
            </div>
            <AviaryTracker />
          </div>

          {/* Telemetry Unit */}
          <div className="feature-card bg-white rounded-[2.5rem] p-8 border border-moss/10 hover:border-moss/30 transition-all duration-300 flex-1 flex flex-col justify-between">
            <div className="mb-6">
              <span className="text-clay font-mono text-xs uppercase tracking-widest font-bold">
                Vector Processing.
              </span>
              <h3 className="font-sans font-bold text-xl text-charcoal mt-2 mb-2">
                Neural Cloud Gateway
              </h3>
              <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light">
                Continuous satellite telemetry feed, processor state, and cloud logs.
              </p>
            </div>
            <TelemetryMonitor />
          </div>
        </div>

      </div>
    </section>
  );
}
