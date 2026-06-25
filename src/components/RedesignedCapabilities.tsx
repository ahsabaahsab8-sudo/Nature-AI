import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FadingVideo } from './FadingVideo';

// 1. Plant Scanning Screen (Flora)
const PlantScanningScreen: React.FC = () => {
  const plants = [
    { name: 'Monstera Deliciosa', type: 'Swiss Cheese Plant', match: '98%', status: 'Healthy', icon: '🌿', light: 'Indirect Bright', temp: '18-27°C' },
    { name: 'Ficus Lyrata', type: 'Fiddle Leaf Fig', match: '95%', status: 'Dry Soil', icon: '🍃', light: 'Direct Bright', temp: '16-24°C' },
    { name: 'Dracaena Marginata', type: 'Dragon Tree', match: '92%', status: 'Excellent', icon: '🌴', light: 'Low/Medium', temp: '15-25°C' },
  ];
  const [idx, setIdx] = useState(0);
  const [scanning, setScanning] = useState(false);
  const current = plants[idx];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (scanning) return;
    setScanning(true);
    setTimeout(() => {
      setIdx((prev) => (prev + 1) % plants.length);
      setScanning(false);
    }, 1200);
  };

  return (
    <div className="w-full max-w-[200px] sm:max-w-[210px] h-[310px] rounded-[2rem] bg-black/95 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-3 flex flex-col justify-between relative overflow-hidden select-none mx-auto">
      {/* Laser scan line */}
      {scanning && (
        <div className="absolute left-0 right-0 h-0.5 bg-green-400 shadow-[0_0_12px_#4ade80] animate-[scan_1.2s_ease-in-out_infinite] z-20" />
      )}

      {/* Top phone bar */}
      <div className="flex justify-between items-center text-[7px] text-white/40 font-mono tracking-wider uppercase">
        <span>02:08 UTC</span>
        <div className="w-8 h-3 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[6px] text-green-400 font-bold scale-90">
          ● LENS
        </div>
        <span>5G 📶</span>
      </div>

      {/* Scanner viewfinder box */}
      <div className="flex-1 my-1.5 rounded-[1rem] bg-white/[0.02] border border-white/5 relative flex flex-col items-center justify-center p-2 group transition-all">
        {/* Corners brackets */}
        <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-green-400/50 rounded-tl" />
        <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-green-400/50 rounded-tr" />
        <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-green-400/50 rounded-bl" />
        <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-green-400/50 rounded-br" />

        {/* Big plant icon representation */}
        <div className={`text-4xl transition-all duration-300 ${scanning ? 'animate-pulse scale-90 blur-[2px]' : 'scale-100'}`}>
          {current.icon}
        </div>

        {/* Viewfinder Overlay labels */}
        <div className="absolute bottom-1.5 left-2 right-2 flex justify-between items-center text-[6px] font-mono text-white/50">
          <span>MAG: 1.4X</span>
          <span>AF-C AUTO</span>
        </div>
      </div>

      {/* Info Output Card */}
      <div className="bg-white/[0.04] border border-white/10 rounded-[0.8rem] p-2 flex flex-col gap-0.5">
        {scanning ? (
          <div className="h-8 flex flex-col items-center justify-center gap-1">
            <div className="w-3 h-3 border-2 border-green-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-[7px] font-mono tracking-widest text-green-400 uppercase">Analyzing Flora...</span>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-bold text-white truncate max-w-[110px]">{current.name}</span>
              <span className="text-[7px] font-mono bg-green-500/20 text-green-400 px-1 rounded border border-green-500/30 font-bold">{current.match}</span>
            </div>
            <span className="text-[7px] text-white/50 leading-tight">{current.type}</span>
            
            <div className="grid grid-cols-2 gap-1 mt-1 pt-1 border-t border-white/5 text-[6px] text-white/40 font-mono">
              <div>Light: <span className="text-white/80">{current.light}</span></div>
              <div>Temp: <span className="text-white/80">{current.temp}</span></div>
            </div>
          </div>
        )}
      </div>

      {/* Action button */}
      <button
        onClick={handleNext}
        disabled={scanning}
        className="w-full mt-1.5 py-1 bg-green-500 text-black font-semibold text-[8px] uppercase tracking-wider rounded-full active:scale-95 hover:bg-green-400 transition-all cursor-pointer flex items-center justify-center gap-1 font-body shadow-[0_2px_8px_rgba(34,197,94,0.3)]"
      >
        <span>{scanning ? 'Scanning...' : 'Scan Next Plant'}</span>
        <span className="text-[9px]">🌿</span>
      </button>
    </div>
  );
};

// 2. Insect Scanning Screen (Microfauna)
const InsectScanningScreen: React.FC = () => {
  const insects = [
    { name: 'Monarch Butterfly', class: 'Danaus plexippus', match: '99%', status: 'Migratory', icon: '🦋', habitat: 'Fields & Meadows', rarity: 'Vulnerable' },
    { name: 'Honeybee', class: 'Apis mellifera', match: '97%', status: 'Active Pollinator', icon: '🐝', habitat: 'Flowering Gardens', rarity: 'Common' },
    { name: 'Ladybug', class: 'Coccinellidae', match: '94%', status: 'Aphid Predator', icon: '🐞', habitat: 'Crop Leaves', rarity: 'Common' },
  ];
  const [idx, setIdx] = useState(0);
  const [scanning, setScanning] = useState(false);
  const current = insects[idx];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (scanning) return;
    setScanning(true);
    setTimeout(() => {
      setIdx((prev) => (prev + 1) % insects.length);
      setScanning(false);
    }, 1200);
  };

  return (
    <div className="w-full max-w-[200px] sm:max-w-[210px] h-[310px] rounded-[2rem] bg-black/95 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-3 flex flex-col justify-between relative overflow-hidden select-none mx-auto">
      {/* Laser scan line */}
      {scanning && (
        <div className="absolute left-0 right-0 h-0.5 bg-amber-400 shadow-[0_0_12px_#fbbf24] animate-[scan_1.2s_ease-in-out_infinite] z-20" />
      )}

      {/* Top phone bar */}
      <div className="flex justify-between items-center text-[7px] text-white/40 font-mono tracking-wider uppercase">
        <span>02:08 UTC</span>
        <div className="w-8 h-3 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[6px] text-amber-400 font-bold scale-90">
          ● TARGET
        </div>
        <span>5G 📶</span>
      </div>

      {/* Scanner viewfinder box */}
      <div className="flex-1 my-1.5 rounded-[1rem] bg-white/[0.02] border border-white/5 relative flex flex-col items-center justify-center p-2 group transition-all">
        {/* Radar concentric circles */}
        <div className="absolute inset-2 border border-white/[0.03] rounded-full animate-[ping_3s_infinite_linear]" />
        
        {/* Corners brackets */}
        <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-amber-400/50 rounded-tl" />
        <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-amber-400/50 rounded-tr" />
        <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-amber-400/50 rounded-bl" />
        <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-amber-400/50 rounded-br" />

        {/* Insect icon representation */}
        <div className={`text-4xl transition-all duration-300 ${scanning ? 'animate-pulse scale-90 blur-[2px]' : 'scale-100'}`}>
          {current.icon}
        </div>

        {/* Viewfinder Overlay labels */}
        <div className="absolute bottom-1.5 left-2 right-2 flex justify-between items-center text-[6px] font-mono text-white/50">
          <span>GRID: 6x6</span>
          <span>TRACKING ON</span>
        </div>
      </div>

      {/* Info Output Card */}
      <div className="bg-white/[0.04] border border-white/10 rounded-[0.8rem] p-2 flex flex-col gap-0.5">
        {scanning ? (
          <div className="h-8 flex flex-col items-center justify-center gap-1">
            <div className="w-3 h-3 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-[7px] font-mono tracking-widest text-amber-400 uppercase">Analyzing Insect...</span>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-bold text-white truncate max-w-[110px]">{current.name}</span>
              <span className="text-[7px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1 rounded border border-amber-500/30 font-bold">{current.match}</span>
            </div>
            <span className="text-[7px] text-white/50 italic leading-tight">{current.class}</span>
            
            <div className="grid grid-cols-2 gap-1 mt-1 pt-1 border-t border-white/5 text-[6px] text-white/40 font-mono">
              <div>Habitat: <span className="text-white/80">{current.habitat}</span></div>
              <div>Rarity: <span className="text-white/80">{current.rarity}</span></div>
            </div>
          </div>
        )}
      </div>

      {/* Action button */}
      <button
        onClick={handleNext}
        disabled={scanning}
        className="w-full mt-1.5 py-1 bg-amber-400 text-black font-semibold text-[8px] uppercase tracking-wider rounded-full active:scale-95 hover:bg-amber-300 transition-all cursor-pointer flex items-center justify-center gap-1 font-body shadow-[0_2px_8px_rgba(245,158,11,0.3)]"
      >
        <span>{scanning ? 'Scanning...' : 'Scan Next Insect'}</span>
        <span className="text-[9px]">🦋</span>
      </button>
    </div>
  );
};

// 3. Marine & Avian Scanning Screen (Aquatic & Aviation - Fish & Bird)
const FishBirdScanningScreen: React.FC = () => {
  const fauna = [
    { name: 'Clownfish', type: 'Marine / Aquatic', match: '98%', status: 'Active Reef', icon: '🐠', domain: 'Saltwater', range: '1-15m' },
    { name: 'Hummingbird', type: 'Fauna / Avian', match: '96%', status: 'Nectaring', icon: '🐦', domain: 'Forest/Garden', range: 'Aviation' },
    { name: 'Blue Tang', type: 'Marine / Aquatic', match: '94%', status: 'Foraging', icon: '🐟', domain: 'Saltwater', range: '2-40m' },
  ];
  const [idx, setIdx] = useState(0);
  const [scanning, setScanning] = useState(false);
  const current = fauna[idx];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (scanning) return;
    setScanning(true);
    setTimeout(() => {
      setIdx((prev) => (prev + 1) % fauna.length);
      setScanning(false);
    }, 1200);
  };

  return (
    <div className="w-full max-w-[200px] sm:max-w-[210px] h-[310px] rounded-[2rem] bg-black/95 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-3 flex flex-col justify-between relative overflow-hidden select-none mx-auto">
      {/* Laser scan line */}
      {scanning && (
        <div className="absolute left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-[scan_1.2s_ease-in-out_infinite] z-20" />
      )}

      {/* Top phone bar */}
      <div className="flex justify-between items-center text-[7px] text-white/40 font-mono tracking-wider uppercase">
        <span>02:08 UTC</span>
        <div className="w-8 h-3 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[6px] text-cyan-400 font-bold scale-90">
          ● SONAR
        </div>
        <span>5G 📶</span>
      </div>

      {/* Scanner viewfinder box */}
      <div className="flex-1 my-1.5 rounded-[1rem] bg-white/[0.02] border border-white/5 relative flex flex-col items-center justify-center p-2 group transition-all">
        {/* Sonar sweep effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.03)_0%,transparent_80%)]" />
        
        {/* Corners brackets */}
        <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400/50 rounded-tl" />
        <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400/50 rounded-tr" />
        <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400/50 rounded-bl" />
        <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400/50 rounded-br" />

        {/* Fauna icon representation */}
        <div className={`text-4xl transition-all duration-300 ${scanning ? 'animate-pulse scale-90 blur-[2px]' : 'scale-100'}`}>
          {current.icon}
        </div>

        {/* Viewfinder Overlay labels */}
        <div className="absolute bottom-1.5 left-2 right-2 flex justify-between items-center text-[6px] font-mono text-white/50">
          <span>RANGE: AUTO</span>
          <span>SONAR ACTIVE</span>
        </div>
      </div>

      {/* Info Output Card */}
      <div className="bg-white/[0.04] border border-white/10 rounded-[0.8rem] p-2 flex flex-col gap-0.5">
        {scanning ? (
          <div className="h-8 flex flex-col items-center justify-center gap-1">
            <div className="w-3 h-3 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-[7px] font-mono tracking-widest text-cyan-400 uppercase">Analyzing Fauna...</span>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-bold text-white truncate max-w-[110px]">{current.name}</span>
              <span className="text-[7px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-300/30 px-1 rounded border border-cyan-300/30 font-bold">{current.match}</span>
            </div>
            <span className="text-[7px] text-white/50 leading-tight">{current.type}</span>
            
            <div className="grid grid-cols-2 gap-1 mt-1 pt-1 border-t border-white/5 text-[6px] text-white/40 font-mono">
              <div>Domain: <span className="text-white/80">{current.domain}</span></div>
              <div>Range: <span className="text-white/80">{current.range}</span></div>
            </div>
          </div>
        )}
      </div>

      {/* Action button */}
      <button
        onClick={handleNext}
        disabled={scanning}
        className="w-full mt-1.5 py-1 bg-cyan-400 text-black font-semibold text-[8px] uppercase tracking-wider rounded-full active:scale-95 hover:bg-cyan-300 transition-all cursor-pointer flex items-center justify-center gap-1 font-body shadow-[0_2px_8px_rgba(34,211,238,0.3)]"
      >
        <span>{scanning ? 'Scanning...' : 'Scan Next Species'}</span>
        <span className="text-[9px]">🐠</span>
      </button>
    </div>
  );
};

export const RedesignedCapabilities: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="capabilities" className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col justify-between py-20 select-none z-10">
      {/* Self-contained CSS injection for scan animation */}
      <style>{`
        @keyframes scan {
          0%, 100% { top: 10%; }
          50% { top: 90%; }
        }
      `}</style>

      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none h-full w-full">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_093722_ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </div>

      {/* Content Area */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-10 flex flex-col min-h-screen w-full max-w-7xl mx-auto justify-between">
        {/* Header */}
        <div className="mb-auto">
          <motion.p
            initial={{ filter: 'blur(10px)', opacity: 0, y: 15 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-body text-white/80 mb-4 uppercase tracking-wider font-light"
          >
            // Capabilities & Ecosystems
          </motion.p>
          <motion.h2
            initial={{ filter: 'blur(15px)', opacity: 0, y: 20 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading italic text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-[-2px] sm:tracking-[-3px] text-white"
          >
            Nature AI Lens,
            <br />
            Right at Your Fingertips
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 sm:mt-16 w-full"
        >
          {/* Card 1: Plants */}
          <motion.div
            variants={cardVariants}
            className="liquid-glass rounded-[1.5rem] p-5 sm:p-6 flex flex-col justify-between hover:bg-white/[0.03] transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
          >
            {/* Top Row: Icon + Tags */}
            <div className="flex justify-between items-start gap-3">
              <div className="liquid-glass h-10 w-10 rounded-[0.75rem] flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🌿</span>
              </div>
              <div className="flex flex-wrap gap-1 justify-end max-w-[70%]">
                {["Flora AI", "Lush Lens", "Care Tracker"].map((tag, idx) => (
                  <span
                    key={idx}
                    className="liquid-glass rounded-full px-2.5 py-0.5 text-[9px] sm:text-[10px] text-white/80 font-body whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Simulated interactive phone screen */}
            <div className="my-5 sm:my-6 flex justify-center items-center w-full">
              <PlantScanningScreen />
            </div>

            {/* Title & Body */}
            <div>
              <h3 className="font-heading italic text-2xl sm:text-3xl tracking-[-1px] leading-tight text-white mb-2">
                Plant Scanning
              </h3>
              <p className="text-[12px] sm:text-sm text-white/70 font-body font-light leading-relaxed max-w-[280px]">
                Detect species, monitor health conditions, and access tailored care guidelines instantaneously with precision target alignment.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Insects */}
          <motion.div
            variants={cardVariants}
            className="liquid-glass rounded-[1.5rem] p-5 sm:p-6 flex flex-col justify-between hover:bg-white/[0.03] transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
          >
            {/* Top Row: Icon + Tags */}
            <div className="flex justify-between items-start gap-3">
              <div className="liquid-glass h-10 w-10 rounded-[0.75rem] flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🦋</span>
              </div>
              <div className="flex flex-wrap gap-1 justify-end max-w-[70%]">
                {["Microfauna", "Radar Scan", "Species DB"].map((tag, idx) => (
                  <span
                    key={idx}
                    className="liquid-glass rounded-full px-2.5 py-0.5 text-[9px] sm:text-[10px] text-white/80 font-body whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Simulated interactive phone screen */}
            <div className="my-5 sm:my-6 flex justify-center items-center w-full">
              <InsectScanningScreen />
            </div>

            {/* Title & Body */}
            <div>
              <h3 className="font-heading italic text-2xl sm:text-3xl tracking-[-1px] leading-tight text-white mb-2">
                Insect Identification
              </h3>
              <p className="text-[12px] sm:text-sm text-white/70 font-body font-light leading-relaxed max-w-[280px]">
                Target small wildlife in real-time. Uncover crucial information on habitats, environmental impacts, and global rarity rankings.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Fish & Birds */}
          <motion.div
            variants={cardVariants}
            className="liquid-glass rounded-[1.5rem] p-5 sm:p-6 flex flex-col justify-between hover:bg-white/[0.03] transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
          >
            {/* Top Row: Icon + Tags */}
            <div className="flex justify-between items-start gap-3">
              <div className="liquid-glass h-10 w-10 rounded-[0.75rem] flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🐠</span>
              </div>
              <div className="flex flex-wrap gap-1 justify-end max-w-[70%]">
                {["Aquatic", "Avian Scan", "Sonar Tracker"].map((tag, idx) => (
                  <span
                    key={idx}
                    className="liquid-glass rounded-full px-2.5 py-0.5 text-[9px] sm:text-[10px] text-white/80 font-body whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Simulated interactive phone screen */}
            <div className="my-5 sm:my-6 flex justify-center items-center w-full">
              <FishBirdScanningScreen />
            </div>

            {/* Title & Body */}
            <div>
              <h3 className="font-heading italic text-2xl sm:text-3xl tracking-[-1px] leading-tight text-white mb-2">
                Fish & Bird Tracking
              </h3>
              <p className="text-[12px] sm:text-sm text-white/70 font-body font-light leading-relaxed max-w-[280px]">
                Scan through marine depths or skies. Fully integrated sonar tracking technology provides accurate class categorization and habitat depths.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
