import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { FadingVideo } from './FadingVideo';
import { Sparkle, Sparkles, Home, ArrowRight, Waves, Bird } from 'lucide-react';
import gsap from 'gsap';

// THE CENTERPIECE: Plant Scanning Screen
const PlantScanningScreen: React.FC<{ onOpenPremium?: () => void }> = ({ onOpenPremium }) => {
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
    if (scanLineRef.current) {
      gsap.killTweensOf(scanLineRef.current);
      gsap.fromTo(scanLineRef.current,
        { top: '0%' },
        { top: '100%', repeat: -1, yoyo: true, duration: 2.2, ease: 'sine.inOut' }
      );
    }
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
      className="relative flex h-[390px] w-full max-w-[250px] flex-col bg-gradient-to-br from-[#101a14] to-[#040d08] rounded-[1.75rem] border-4 border-white/10 shadow-2xl overflow-hidden mx-auto justify-between transition-all duration-300"
    >
      {/* TopAppBar */}
      <div className="absolute top-2.5 right-3 z-20">
        <button 
          onClick={handleNext}
          className="px-2 py-0.5 hover:opacity-85 transition-opacity cursor-pointer"
        >
          <span className="text-[#13ec5b] text-[10px] font-bold tracking-wide font-sans">Skip</span>
        </button>
      </div>

      {/* Upper Camera Port (50% height) */}
      <div className="relative w-full h-[52%] bg-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out" 
          style={{ backgroundImage: `url("${plantSpecies[speciesIndex].bg}")` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Circular crop area */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-24 h-24 border border-white/25 rounded-full flex items-center justify-center overflow-hidden bg-black/20">
              {/* Scan corners */}
              <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#13ec5b] rounded-tl-sm"></div>
              <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#13ec5b] rounded-tr-sm"></div>
              <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#13ec5b] rounded-bl-sm"></div>
              <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#13ec5b] rounded-br-sm"></div>
              
              {/* Inner animated crop */}
              <div className="w-18 h-18 rounded-full border border-[#13ec5b]/30 overflow-hidden relative">
                <div 
                  ref={plantImgRef}
                  className="w-full h-full bg-cover bg-center transition-all duration-700" 
                  style={{ backgroundImage: `url("${plantSpecies[speciesIndex].img}")` }}
                ></div>
              </div>

              {/* Scanning laser scan line */}
              <div 
                ref={scanLineRef}
                className="absolute left-0 w-full h-[2px] bg-[#13ec5b] shadow-[0_0_10px_#13ec5b] z-20 pointer-events-none"
                style={{ top: '50%' }}
              ></div>
            </div>
          </div>

          {/* Floating glass label */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[92%] z-10 text-center">
            <div className="backdrop-blur-md bg-black/60 border border-white/10 rounded-full py-0.5 px-2 flex items-center justify-center gap-1">
              <span className="w-1 h-1 bg-[#13ec5b] rounded-full animate-pulse"></span>
              <span className="text-white text-[7px] font-bold tracking-wider uppercase whitespace-nowrap">
                SCANNING... <span className="text-[#13ec5b] font-mono">{plantSpecies[speciesIndex].name}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom controls card (48% height) */}
      <div className="bg-black/80 backdrop-blur-md flex-grow flex flex-col justify-between pt-3 pb-3.5 px-3.5 border-t border-white/5">
        <div className="text-center">
          <h4 className="text-white tracking-tight text-xs font-bold font-sans">
            Identify Any Plant
          </h4>
          <p className="text-white/60 text-[9px] leading-tight max-w-[180px] mx-auto font-sans mt-0.5">
            Take a photo and let our AI instantly tell you the species and health index.
          </p>
        </div>

        <div>
          {/* Indicators */}
          <div className="flex w-full flex-row items-center justify-center gap-1 pb-2">
            {plantSpecies.map((_, idx) => (
              <div 
                key={idx}
                className={`h-0.5 transition-all duration-500 rounded-full ${idx === speciesIndex ? 'w-3 bg-[#13ec5b]' : 'w-1 bg-white/20'}`}
              ></div>
            ))}
          </div>

          {/* Action Button */}
          <button 
            onClick={handleNext}
            className="w-full py-1.5 bg-[#13ec5b] hover:bg-[#13ec5b]/90 text-black font-bold text-[10px] rounded-lg flex items-center justify-center gap-1 transition-all cursor-pointer"
          >
            <span>Scan Next</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          {/* Bottom Tab Bar Mock */}
          <div className="mt-2.5 pt-1.5 border-t border-white/5 flex justify-around items-center">
            <button className="flex flex-col items-center gap-0.5 text-white/40 hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer">
              <Home className="w-3 h-3" />
              <span className="text-[6px] font-mono uppercase tracking-wider">Home</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 text-[#13ec5b] bg-transparent border-0 p-0">
              <div className="w-4 h-4 rounded-full bg-[#13ec5b]/10 flex items-center justify-center">
                <Sparkle className="w-2.5 h-2.5" />
              </div>
            </button>
            <button 
              onClick={onOpenPremium}
              className="flex flex-col items-center gap-0.5 text-[#13ec5b] bg-transparent border-0 p-0 cursor-pointer font-bold"
            >
              <Sparkles className="w-3 h-3 animate-pulse" />
              <span className="text-[6px] font-mono uppercase tracking-wider text-[#13ec5b]">Premium</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// THE CENTERPIECE: Insect Scanning Screen
const InsectScanningScreen: React.FC<{ onOpenPremium?: () => void }> = ({ onOpenPremium }) => {
  const scanLineRef = useRef<HTMLDivElement>(null);
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
    if (scanLineRef.current) {
      gsap.killTweensOf(scanLineRef.current);
      gsap.fromTo(scanLineRef.current,
        { top: '0%' },
        { top: '100%', repeat: -1, yoyo: true, duration: 2.2, ease: 'sine.inOut' }
      );
    }
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
      className="relative flex h-[390px] w-full max-w-[250px] flex-col bg-gradient-to-b from-[#1c180a] to-[#0a0804] rounded-[1.75rem] border-4 border-white/10 shadow-2xl overflow-hidden mx-auto justify-between transition-all duration-300"
    >
      {/* TopAppBar */}
      <div className="absolute top-2.5 right-3 z-20">
        <button 
          onClick={handleNext}
          className="px-2 py-0.5 hover:opacity-85 transition-opacity cursor-pointer"
        >
          <span className="text-[#d4b411] text-[10px] font-bold tracking-wide font-sans">Skip</span>
        </button>
      </div>

      {/* Upper Camera Port (50% height) */}
      <div className="relative w-full h-[52%] bg-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out" 
          style={{ backgroundImage: `url("${insectSpecies[speciesIndex].img}")` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Scanning Box */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-24 h-24 border border-white/25 rounded-full flex items-center justify-center overflow-hidden bg-black/20">
              <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#d4b411] rounded-tl-sm"></div>
              <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#d4b411] rounded-tr-sm"></div>
              <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#d4b411] rounded-bl-sm"></div>
              <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-white rounded-br-sm"></div>
              
              {/* Inner animated crop */}
              <div className="w-18 h-18 rounded-full border border-[#d4b411]/30 overflow-hidden relative">
                <div 
                  ref={insectImgRef}
                  className="w-full h-full bg-cover bg-center transition-all duration-700" 
                  style={{ backgroundImage: `url("${insectSpecies[speciesIndex].img}")` }}
                ></div>
              </div>

              {/* Horizontal Scanning Line */}
              <div 
                ref={scanLineRef}
                className="absolute left-0 w-full h-[2px] bg-[#d4b411] shadow-[0_0_10px_rgba(212,180,17,0.8)] z-10 pointer-events-none"
                style={{ top: '50%' }}
              ></div>
            </div>
          </div>

          {/* Frosted Label */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[92%] z-10 text-center">
            <div className="backdrop-blur-md bg-black/60 border border-white/10 rounded-full py-0.5 px-2 flex items-center justify-center gap-1">
              <span className="w-1 h-1 bg-[#d4b411] rounded-full animate-pulse"></span>
              <span className="text-white text-[7px] font-bold tracking-wider uppercase whitespace-nowrap">
                Scanning... <span className="font-mono text-white">{insectSpecies[speciesIndex].name}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom controls card (48% height) */}
      <div className="bg-black/80 backdrop-blur-md flex-grow flex flex-col justify-between pt-3 pb-3.5 px-3.5 border-t border-white/5">
        <div className="text-center">
          <h4 className="text-white tracking-tight text-xs font-bold font-sans">
            Identify Any Insect
          </h4>
          <p className="text-white/60 text-[9px] leading-tight max-w-[180px] mx-auto font-sans mt-0.5">
            Discover macro world fauna, chitin structures, and behavior patterns instantly.
          </p>
        </div>

        <div>
          {/* Indicators */}
          <div className="flex w-full flex-row items-center justify-center gap-1 pb-2">
            {insectSpecies.map((_, idx) => (
              <div 
                key={idx}
                className={`h-0.5 transition-all duration-500 rounded-full ${idx === speciesIndex ? 'w-3 bg-[#d4b411]' : 'w-1 bg-white/20'}`}
              ></div>
            ))}
          </div>

          {/* Action Button */}
          <button 
            onClick={handleNext}
            className="w-full py-1.5 bg-[#d4b411] hover:bg-[#d4b411]/90 text-black font-bold text-[10px] rounded-lg flex items-center justify-center gap-1 transition-all cursor-pointer"
          >
            <span>Scan Next</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          {/* Bottom Tab Bar Mock */}
          <div className="mt-2.5 pt-1.5 border-t border-white/5 flex justify-around items-center">
            <button className="flex flex-col items-center gap-0.5 text-white/40 hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer">
              <Home className="w-3 h-3" />
              <span className="text-[6px] font-mono uppercase tracking-wider">Home</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 text-[#d4b411] bg-transparent border-0 p-0">
              <div className="w-4 h-4 rounded-full bg-[#d4b411]/10 flex items-center justify-center">
                <Sparkle className="w-2.5 h-2.5" />
              </div>
            </button>
            <button 
              onClick={onOpenPremium}
              className="flex flex-col items-center gap-0.5 text-[#d4b411] bg-transparent border-0 p-0 cursor-pointer font-bold"
            >
              <Sparkles className="w-3 h-3 animate-pulse" />
              <span className="text-[6px] font-mono uppercase tracking-wider text-clay">Premium</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// THE CENTERPIECE: Fish Scanning Screen
const FishScanningScreen: React.FC<{ onOpenPremium?: () => void }> = ({ onOpenPremium }) => {
  const scanLineRef = useRef<HTMLDivElement>(null);
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
    if (scanLineRef.current) {
      gsap.killTweensOf(scanLineRef.current);
      gsap.fromTo(scanLineRef.current,
        { top: '0%' },
        { top: '100%', repeat: -1, yoyo: true, duration: 2.2, ease: 'sine.inOut' }
      );
    }
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
      className="relative flex h-[390px] w-full max-w-[250px] flex-col bg-gradient-to-b from-[#0a1e30] to-[#030910] rounded-[1.75rem] border-4 border-white/10 shadow-2xl overflow-hidden mx-auto justify-between transition-all duration-300"
    >
      {/* TopAppBar */}
      <div className="absolute top-2.5 right-3 z-20">
        <button 
          onClick={handleNext}
          className="px-2 py-0.5 hover:opacity-85 transition-opacity cursor-pointer"
        >
          <span className="text-white/80 hover:text-white text-[10px] font-bold tracking-wide font-sans">Skip</span>
        </button>
      </div>

      {/* Upper Camera Port (50% height) */}
      <div className="relative w-full h-[52%] bg-black overflow-hidden animate-pulse-slow">
        {/* Background underwater */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out opacity-40" 
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8qYQQ8QS3SxcZ3T1wZT9WGIblgdKnWXcDb6YhQnhMuybXgZo2Lfr3UK7QKfj9vNnDQIORrQK_-dRYG9l6JmBco9JO9gh0L3v1fesSY8_f40EqsEPc2orni2ZbqZhu8FB_DqMd1XmwV_W080xs8_FaHYvH7at6j76EgIY8hnW-3ywjF5qstDQUURpgdHg_WATAUQvyIJnwGN05eIVdYRMSfG4xAzsmol04gpzP3FcWreCsxKW3-YWwPguVN2Hm0VHEBYqHqL2ttNE')` }}
        ></div>
        
        {/* Scanning circle area */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative w-24 h-24 border border-white/25 rounded-full flex items-center justify-center overflow-hidden bg-black/20">
            <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#0d7ff2] rounded-tl-sm"></div>
            <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#0d7ff2] rounded-tr-sm"></div>
            <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#0d7ff2] rounded-bl-sm"></div>
            <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-white rounded-br-sm"></div>
            
            {/* Animating Fish Image */}
            <div className="w-18 h-18 rounded-full border border-white/20 overflow-hidden relative">
              <div 
                ref={fishImgRef}
                className="w-full h-full bg-cover bg-center transition-all duration-700" 
                style={{ backgroundImage: `url("${fishSpecies[speciesIndex].img}")` }}
              ></div>
            </div>

            {/* Horizontal Scanning Line */}
            <div 
              ref={scanLineRef}
              className="absolute left-0 w-full h-[2px] bg-[#0d7ff2] shadow-[0_0_10px_rgba(13,127,242,0.8)] z-25 pointer-events-none"
              style={{ top: '50%' }}
            ></div>
          </div>
        </div>

        {/* Floating Label */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[92%] z-10 text-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full py-0.5 px-2 flex items-center justify-center gap-1">
            <Waves className="text-white w-2.5 h-2.5 animate-pulse" />
            <span className="text-white text-[7px] font-bold tracking-wider uppercase whitespace-nowrap">
              Scanning... <span className="text-white font-mono font-bold">{fishSpecies[speciesIndex].name}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom controls card (48% height) */}
      <div className="bg-black/80 backdrop-blur-md flex-grow flex flex-col justify-between pt-3 pb-3.5 px-3.5 border-t border-white/5">
        <div className="text-center">
          <h4 className="text-white tracking-tight text-xs font-bold font-sans">
            Identify Any Fish
          </h4>
          <p className="text-white/60 text-[9px] leading-tight max-w-[180px] mx-auto font-sans mt-0.5">
            Capture marine life and explore deep marine bio-networks instantly.
          </p>
        </div>

        <div>
          {/* Indicators */}
          <div className="flex w-full flex-row items-center justify-center gap-1 pb-2">
            {fishSpecies.map((_, idx) => (
              <div 
                key={idx}
                className={`h-0.5 transition-all duration-500 rounded-full ${idx === speciesIndex ? 'w-3 bg-[#0d7ff2]' : 'w-1 bg-white/20'}`}
              ></div>
            ))}
          </div>

          {/* Action Button */}
          <button 
            onClick={handleNext}
            className="w-full py-1.5 bg-[#0d7ff2] hover:bg-[#0d7ff2]/90 text-white font-bold text-[10px] rounded-lg flex items-center justify-center gap-1 transition-all cursor-pointer"
          >
            <span>Scan Next</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          {/* Bottom Tab Bar Mock */}
          <div className="mt-2.5 pt-1.5 border-t border-white/5 flex justify-around items-center">
            <button className="flex flex-col items-center gap-0.5 text-white/40 hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer">
              <Home className="w-3 h-3" />
              <span className="text-[6px] font-mono uppercase tracking-wider">Home</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 text-[#0d7ff2] bg-transparent border-0 p-0">
              <div className="w-4 h-4 rounded-full bg-[#0d7ff2]/10 flex items-center justify-center">
                <Sparkle className="w-2.5 h-2.5" />
              </div>
            </button>
            <button 
              onClick={onOpenPremium}
              className="flex flex-col items-center gap-0.5 text-white/40 hover:text-[#0d7ff2] transition-colors bg-transparent border-0 p-0 cursor-pointer"
            >
              <Sparkles className="w-3 h-3" />
              <span className="text-[6px] font-mono uppercase tracking-wider text-white-40">Premium</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// THE CENTERPIECE: Bird Scanning Screen
const BirdScanningScreen: React.FC<{ onOpenPremium?: () => void }> = ({ onOpenPremium }) => {
  const scanLineRef = useRef<HTMLDivElement>(null);
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
    if (scanLineRef.current) {
      gsap.killTweensOf(scanLineRef.current);
      gsap.fromTo(scanLineRef.current,
        { top: '0%' },
        { top: '100%', repeat: -1, yoyo: true, duration: 2.2, ease: 'sine.inOut' }
      );
    }
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
      className="relative flex h-[390px] w-full max-w-[250px] flex-col bg-gradient-to-b from-[#0b1c2c] to-[#040a12] rounded-[1.75rem] border-4 border-white/10 shadow-2xl overflow-hidden mx-auto justify-between transition-all duration-300"
    >
      {/* TopAppBar */}
      <div className="absolute top-2.5 right-3 z-20">
        <button 
          onClick={handleNext}
          className="px-2 py-0.5 hover:opacity-85 transition-opacity cursor-pointer bg-transparent border-0"
        >
          <span className="text-[#1392ec] text-[10px] font-bold tracking-wide font-sans">Skip</span>
        </button>
      </div>

      {/* Upper Camera Port (50% height) */}
      <div className="relative w-full h-[52%] bg-black overflow-hidden">
        {/* Camera background */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out opacity-45" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=600&auto=format&fit=crop')` }}
        ></div>
        
        {/* Scanning circle area */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative w-24 h-24 border border-white/25 rounded-full flex items-center justify-center overflow-hidden bg-black/20">
            <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#1392ec] rounded-tl-sm"></div>
            <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#1392ec] rounded-tr-sm"></div>
            <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#1392ec] rounded-bl-sm"></div>
            <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-white rounded-br-sm"></div>
            
            {/* Animating Bird Image */}
            <div className="w-18 h-18 rounded-full border border-white/20 overflow-hidden relative">
              <div 
                ref={birdImgRef}
                className="w-full h-full bg-cover bg-center transition-all duration-700" 
                style={{ backgroundImage: `url("${birdSpecies[speciesIndex].img}")` }}
              ></div>
            </div>

            {/* Horizontal Scanning Line */}
            <div 
              ref={scanLineRef}
              className="absolute left-0 w-full h-[2px] bg-[#1392ec] shadow-[0_0_10px_rgba(19,146,236,0.8)] z-25 pointer-events-none"
              style={{ top: '50%' }}
            ></div>
          </div>
        </div>

        {/* Floating Label */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[92%] z-10 text-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full py-0.5 px-2 flex items-center justify-center gap-1">
            <Bird className="text-[#1392ec] w-2.5 h-2.5 animate-pulse" />
            <span className="text-white text-[7px] font-bold tracking-wider uppercase whitespace-nowrap">
              Scanning... <span className="text-white font-mono font-bold">{birdSpecies[speciesIndex].name}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom controls card (48% height) */}
      <div className="bg-black/80 backdrop-blur-md flex-grow flex flex-col justify-between pt-3 pb-3.5 px-3.5 border-t border-white/5">
        <div className="text-center">
          <h4 className="text-white tracking-tight text-xs font-bold font-sans">
            Identify Any Bird
          </h4>
          <p className="text-white/60 text-[9px] leading-tight max-w-[180px] mx-auto font-sans mt-0.5">
            Identify species, track migrations, and explore aviary networks instantly.
          </p>
        </div>

        <div>
          {/* Indicators */}
          <div className="flex w-full flex-row items-center justify-center gap-1 pb-2">
            {birdSpecies.map((_, idx) => (
              <div 
                key={idx}
                className={`h-0.5 transition-all duration-500 rounded-full ${idx === speciesIndex ? 'w-3 bg-[#1392ec]' : 'w-1 bg-white/20'}`}
              ></div>
            ))}
          </div>

          {/* Action Button */}
          <button 
            onClick={handleNext}
            className="w-full py-1.5 bg-[#1392ec] hover:bg-[#1392ec]/90 text-white font-bold text-[10px] rounded-lg flex items-center justify-center gap-1 transition-all cursor-pointer border-0"
          >
            <span>Scan Next</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          {/* Bottom Tab Bar Mock */}
          <div className="mt-2.5 pt-1.5 border-t border-white/5 flex justify-around items-center">
            <button className="flex flex-col items-center gap-0.5 text-white/40 hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer">
              <Home className="w-3 h-3" />
              <span className="text-[6px] font-mono uppercase tracking-wider">Home</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 text-[#1392ec] bg-transparent border-0 p-0">
              <div className="w-4 h-4 rounded-full bg-[#1392ec]/10 flex items-center justify-center">
                <Sparkle className="w-2.5 h-2.5" />
              </div>
            </button>
            <button 
              onClick={onOpenPremium}
              className="flex flex-col items-center gap-0.5 text-white/40 hover:text-[#1392ec] transition-colors bg-transparent border-0 p-0 cursor-pointer font-bold"
            >
              <Sparkles className="w-3 h-3 animate-pulse" />
              <span className="text-[6px] font-mono uppercase tracking-wider text-[#1392ec]">Premium</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RedesignedCapabilities: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { filter: 'blur(10px)', opacity: 0, y: 30 },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="capabilities" className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col justify-between py-24 select-none z-10">
      {/* Background Video: full-bleed */}
      <div className="absolute inset-0 z-0 pointer-events-none h-full w-full">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Main Container Layout */}
      <div className="relative z-10 px-6 md:px-16 lg:px-20 flex-1 flex flex-col justify-between w-full max-w-7xl mx-auto h-full">
        {/* Header */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: -20 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-auto mt-6"
        >
          <span className="text-sm font-body text-white/80 block mb-6 uppercase tracking-wider font-light">
            // Multi-Vision Tracker
          </span>
          <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
            Ecosystem
            <br />
            diagnosed
          </h2>
        </motion.div>

        {/* Four cards grid layout with embedded welcoming scanning screens */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full"
        >
          {/* Card 1: Plant Identifier (Plant Scanning Screen) */}
          <motion.div
            variants={cardVariants}
            className="liquid-glass rounded-[1.5rem] p-6 flex flex-col justify-between hover:bg-white/[0.03] transition-all duration-300"
          >
            {/* Top info and badge */}
            <div className="mb-6 flex justify-between items-start">
              <div>
                <h3 className="font-heading italic text-white text-2xl tracking-[-1px] leading-none">
                  Plant Identifier
                </h3>
                <p className="mt-1 text-[11px] text-white/60 font-body font-light max-w-[28ch]">
                  Identify botanical flora instantly.
                </p>
              </div>
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] px-2 py-0.5 rounded-full font-sans uppercase font-bold tracking-widest">
                Flora
              </span>
            </div>

            {/* Plant Scanning Screen adjusted inside card */}
            <div className="flex-1 flex items-center justify-center py-4">
              <PlantScanningScreen />
            </div>
          </motion.div>

          {/* Card 2: Insect Identifier (Insect Scanning Screen) */}
          <motion.div
            variants={cardVariants}
            className="liquid-glass rounded-[1.5rem] p-6 flex flex-col justify-between hover:bg-white/[0.03] transition-all duration-300"
          >
            {/* Top info and badge */}
            <div className="mb-6 flex justify-between items-start">
              <div>
                <h3 className="font-heading italic text-white text-2xl tracking-[-1px] leading-none">
                  Insect Identifier
                </h3>
                <p className="mt-1 text-[11px] text-white/60 font-body font-light max-w-[28ch]">
                  Classify macro-fauna taxonomies.
                </p>
              </div>
              <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[9px] px-2 py-0.5 rounded-full font-sans uppercase font-bold tracking-widest">
                Microfauna
              </span>
            </div>

            {/* Insect Scanning Screen adjusted inside card */}
            <div className="flex-1 flex items-center justify-center py-4">
              <InsectScanningScreen />
            </div>
          </motion.div>

          {/* Card 3: Fish Identifier (Fish Scanning Screen) */}
          <motion.div
            variants={cardVariants}
            className="liquid-glass rounded-[1.5rem] p-6 flex flex-col justify-between hover:bg-white/[0.03] transition-all duration-300"
          >
            {/* Top info and badge */}
            <div className="mb-6 flex justify-between items-start">
              <div>
                <h3 className="font-heading italic text-white text-2xl tracking-[-1px] leading-none">
                  Fish Identifier
                </h3>
                <p className="mt-1 text-[11px] text-white/60 font-body font-light max-w-[28ch]">
                   Capture marine and aquatic species.
                </p>
              </div>
              <span className="bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[9px] px-2 py-0.5 rounded-full font-sans uppercase font-bold tracking-widest">
                Aquatic
              </span>
            </div>

            {/* Fish Scanning Screen adjusted inside card */}
            <div className="flex-1 flex items-center justify-center py-4">
              <FishScanningScreen />
            </div>
          </motion.div>

          {/* Card 4: Bird Identifier (Bird Scanning Screen) */}
          <motion.div
            variants={cardVariants}
            className="liquid-glass rounded-[1.5rem] p-6 flex flex-col justify-between hover:bg-white/[0.03] transition-all duration-300"
          >
            {/* Top info and badge */}
            <div className="mb-6 flex justify-between items-start">
              <div>
                <h3 className="font-heading italic text-white text-2xl tracking-[-1px] leading-none">
                  Bird Identifier
                </h3>
                <p className="mt-1 text-[11px] text-white/60 font-body font-light max-w-[28ch]">
                   Identify any bird around you instantly.
                </p>
              </div>
              <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[9px] px-2 py-0.5 rounded-full font-sans uppercase font-bold tracking-widest">
                Ornithology
              </span>
            </div>

            {/* Bird Scanning Screen adjusted inside card */}
            <div className="flex-1 flex items-center justify-center py-4">
              <BirdScanningScreen />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
