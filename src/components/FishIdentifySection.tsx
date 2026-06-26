import React, { useState } from 'react';
import { 
  ArrowRight, 
  X, 
  Sparkles, 
  Compass, 
  Layers, 
  Activity, 
  Dna, 
  RefreshCw, 
  CheckCircle2, 
  Volume2, 
  ShieldCheck,
  Eye,
  Info
} from 'lucide-react';

interface SpecimenData {
  id: string;
  name: string;
  scientificName: string;
  depthRange: string;
  tempRange: string;
  salinity: string;
  eDnaMarker: string;
  behavior: string;
  ecologicalRole: string;
  microclimate: string;
  lightPolarization: string;
}

const EXPERT_SPECIES: SpecimenData[] = [
  {
    id: "clownfish",
    name: "Clown Anemonefish",
    scientificName: "Amphiprion ocellaris",
    depthRange: "1m - 15m",
    tempRange: "24°C - 28°C",
    salinity: "34 - 36 ppt",
    eDnaMarker: "eDNA-AMPH-OCEL-09X",
    behavior: "Protandrous hermaphrodite; mutualistic relationship with Heteractis magnifica sea anemone, utilizing immune-mucus layer.",
    ecologicalRole: "Reef dweller. Acts as host defender by driving off butterflyfishes that consume anemones, while receiving waste nutrients and safety.",
    microclimate: "Sub-surface coral reefs, highly oxygenated shallow waves.",
    lightPolarization: "Reflects highly saturated ultraviolet bands to coordinate school dynamics."
  },
  {
    id: "manta",
    name: "Giant Oceanic Manta Ray",
    scientificName: "Mobula birostris",
    depthRange: "0m - 1000m",
    tempRange: "10°C - 26°C",
    salinity: "33 - 35 ppt",
    eDnaMarker: "eDNA-MOB-BIRO-882A",
    behavior: "Highly intelligent cephalic horn maneuvers. Frequently visits subaquatic cleaning stations manned by wrasses and cleaner shrimps.",
    ecologicalRole: "Keystone filter feeder. Transports high concentrations of nutrients across steep thermal gradients between shallow reefs and deep zones.",
    microclimate: "Pelagic twilight zones, shelf breaks, and coastal upwelling currents.",
    lightPolarization: "Ventral countershading patterns absorb deep solar light polarizations."
  },
  {
    id: "seadragon",
    name: "Leafy Seadragon",
    scientificName: "Phycodurus eques",
    depthRange: "4m - 30m",
    tempRange: "13°C - 19°C",
    salinity: "35 - 37 ppt",
    eDnaMarker: "eDNA-PHYC-EQUE-77C",
    behavior: "Master of camouflage. Uses leaf-like appendages for visual blending; feeds on mysid shrimp by suction-feeding via tubular snout.",
    ecologicalRole: "Bio-indicator of southern seagrass meadow health. Prefers canopy density shelter in pristine kelp and seagrass communities.",
    microclimate: "Temperate shallow reefs, coastal shelf margins with high kelp coverage.",
    lightPolarization: "Multi-layered dermal structures mimic organic seagrass light scattering."
  }
];

export function FishIdentifySection() {
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [scanState, setScanState] = useState<'scanning' | 'results'>('scanning');
  const [scanProgress, setScanProgress] = useState(0);
  const [currentStepText, setCurrentStepText] = useState('');
  const [selectedSpecimen, setSelectedSpecimen] = useState<SpecimenData>(EXPERT_SPECIES[0]);

  const startIdentificationScanner = () => {
    setIsScannerOpen(true);
    setScanState('scanning');
    setScanProgress(0);
    setCurrentStepText('INITIATING SUB-SURFACE OPTICAL VECTOR RADAR...');

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        const next = prev + 1.5;
        if (next >= 100) {
          clearInterval(interval);
          setScanState('results');
          return 100;
        }

        // Update technical diagnostics messages
        if (next > 80) {
          setCurrentStepText('DECONSTRUCTING eDNA SEQUENCING MARKER PATHS...');
        } else if (next > 60) {
          setCurrentStepText('MATCHING DEEP AQUATIC VISUAL NEURAL VECTORS...');
        } else if (next > 40) {
          setCurrentStepText('EXTRACTING HYDRODYNAMIC FLUID SALINITY DENSITIES...');
        } else if (next > 20) {
          setCurrentStepText('ISOLATING EXTREME DEPTH TAXONOMIC KEY COGNIZANCES...');
        }

        return next;
      });
    }, 30);
  };

  return (
    <section 
      id="fish-identify-section" 
      className="relative min-h-screen py-32 md:py-40 flex items-center justify-center w-full overflow-hidden bg-black font-geist select-none text-white border-t border-white/10"
    >
      
      {/* 1. Viewport Background Looping Video (no z-index or z-0) */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: '70% center' }}
      />

      {/* Ambient overlay to protect readability */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      {/* 2. Foldcraft-styled Hero Content (z-10) */}
      <div className="relative z-10 flex flex-col justify-between w-full max-w-7xl mx-auto px-6 pb-10 pt-12 sm:pb-12 sm:pt-16 md:px-12 md:pb-16 md:pt-20 lg:px-16 gap-16">
        
        {/* Top Section */}
        <div className="max-w-3xl">
          <div 
            className="text-xs sm:text-sm text-white/90 mb-4 sm:mb-6 uppercase tracking-widest font-mono"
            style={{ animation: 'fadeSlideUp 0.8s ease 0.2s both' }}
          >
            Nature AI Multi-Vision Lab
          </div>

          <h1 
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-white uppercase"
            style={{ animation: 'fadeSlideUp 0.8s ease 0.4s both' }}
          >
            Identify any fish <span className="text-white/40">/</span><br/>
            with Nature AI, go beyond<br/>
            identification.
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-start">
          <p 
            className="text-sm sm:text-base md:text-lg leading-relaxed text-white/60 max-w-sm sm:max-w-lg mb-5 sm:mb-6"
            style={{ animation: 'fadeSlideUp 0.8s ease 0.7s both' }}
          >
            Get expert level details about underwater sea life, sub-surface oceanic species, and cryptic deep-water ecosystems instantly.
          </p>

          <button 
            onClick={startIdentificationScanner}
            className="rounded-lg bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-black hover:scale-105 transition-transform inline-flex items-center gap-2 cursor-pointer"
            style={{ animation: 'fadeSlideUp 0.8s ease 0.9s both' }}
          >
            <span>Identify Fish</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>

      {/* 5. Fulscreen HUD Futuristic Scanner Overlay */}
      {isScannerOpen && (
        <div className="absolute inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col justify-between p-6 md:p-12">
          
          {/* Looping video inside HUD */}
          <div className="absolute inset-0 opacity-15 pointer-events-none z-0">
            <video 
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4"
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover filter saturate-150 brightness-75 hue-rotate-15"
            />
          </div>

          {/* Scanner Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <RefreshCw className="w-5 h-5 text-cyan-400 animate-spin" />
              <div>
                <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-widest font-bold">SUB-SURFACE REALTIME SCANNER</h3>
                <p className="text-[10px] text-zinc-400 font-mono uppercase">Nature AI Deep Taxonomic Diagnostic Module</p>
              </div>
            </div>
            
            <button 
              onClick={() => setIsScannerOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Core Scanner Content */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center py-8">
            {scanState === 'scanning' ? (
              <div className="max-w-md w-full space-y-6 text-center">
                
                {/* Sonar visual circles */}
                <div className="relative inline-flex items-center justify-center w-36 h-36">
                  <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping" />
                  <div className="absolute inset-2 rounded-full border border-cyan-400/40 animate-pulse" />
                  <div className="w-24 h-24 rounded-full border-2 border-dashed border-cyan-400/80 flex items-center justify-center font-mono text-xl font-bold text-cyan-300">
                    {Math.floor(scanProgress)}%
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400">ANALYZING SPECIMEN BIOMETRIC SIGNATURES</span>
                  <p className="text-xs font-mono text-slate-300 h-6 overflow-hidden max-w-sm mx-auto">
                    {currentStepText}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-white/5 border border-white/10 h-2 rounded-full overflow-hidden p-[2px]">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all duration-100 shadow-[0_0_8px_#22d3ee]"
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-[fadeSlideUp_0.6s_ease_both]">
                
                {/* Specimen Switcher */}
                <div className="lg:col-span-4 flex flex-col gap-2.5 bg-white/[0.02] border border-white/5 rounded-2xl p-4 md:p-6 justify-center">
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Select Identified Match</span>
                  </h4>
                  {EXPERT_SPECIES.map((fish) => {
                    const isSelected = fish.id === selectedSpecimen.id;
                    return (
                      <button
                        key={fish.id}
                        onClick={() => setSelectedSpecimen(fish)}
                        className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer ${
                          isSelected 
                            ? 'bg-cyan-500/10 border-cyan-400/40 text-white'
                            : 'bg-transparent border-transparent text-zinc-400 hover:text-white hover:bg-white/[0.02]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold block">{fish.name}</span>
                            <span className="text-[9px] font-mono italic text-zinc-500 block mt-0.5">{fish.scientificName}</span>
                          </div>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Detailed Underground Nature Data */}
                <div className="lg:col-span-8 bg-zinc-950/85 border border-cyan-500/20 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                      <div>
                        <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">IDENTIFIED PROFILE</span>
                        <h2 className="text-2xl font-semibold text-white tracking-tight uppercase">{selectedSpecimen.name}</h2>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-400/30 rounded-full font-mono text-[9px] text-cyan-400 font-bold">
                        <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                        <span>EXPERT VERIFICATION COGNIZANCE</span>
                      </div>
                    </div>

                    {/* Scientific parameter blocks */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono">
                      <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl text-center">
                        <span className="text-[9px] text-zinc-500 block">Scientific ID</span>
                        <span className="text-[11px] font-semibold text-cyan-300 block truncate mt-1 italic">{selectedSpecimen.scientificName}</span>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl text-center">
                        <span className="text-[9px] text-zinc-500 block">Depth Range</span>
                        <span className="text-[11px] font-semibold text-cyan-300 block mt-1">{selectedSpecimen.depthRange}</span>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl text-center">
                        <span className="text-[9px] text-zinc-500 block">Salinity Bounds</span>
                        <span className="text-[11px] font-semibold text-cyan-300 block mt-1">{selectedSpecimen.salinity}</span>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl text-center">
                        <span className="text-[9px] text-zinc-500 block">eDNA Sequence</span>
                        <span className="text-[10px] font-semibold text-cyan-300 block truncate mt-1">{selectedSpecimen.eDnaMarker}</span>
                      </div>
                    </div>

                    {/* Behavior and microclimate */}
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">Biological Habitats & Behaviors</span>
                        <p className="text-xs text-zinc-300 leading-relaxed bg-white/[0.01] border border-white/5 p-3.5 rounded-xl">
                          {selectedSpecimen.behavior}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">Underground Ecological Role</span>
                        <p className="text-xs text-zinc-300 leading-relaxed bg-white/[0.01] border border-white/5 p-3.5 rounded-xl">
                          {selectedSpecimen.ecologicalRole}
                        </p>
                      </div>

                      {/* Advanced details requested by user */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div className="space-y-1">
                          <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">Cryptic Microclimate Preference</span>
                          <p className="text-xs text-cyan-300/95 leading-relaxed bg-cyan-950/20 border border-cyan-800/20 p-3 rounded-xl">
                            {selectedSpecimen.microclimate}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">Light polarization & reflectance</span>
                          <p className="text-xs text-cyan-300/95 leading-relaxed bg-cyan-950/20 border border-cyan-800/20 p-3 rounded-xl">
                            {selectedSpecimen.lightPolarization}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-cyan-400" />
                      TAXONOMIC DATA SYNCED TO GLOBAL BASIN REGISTRY
                    </span>
                    <button 
                      onClick={startIdentificationScanner}
                      className="px-3.5 py-1.5 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors cursor-pointer"
                    >
                      Rescan Specimen
                    </button>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Scanner Footer */}
          <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-zinc-500 pt-4 border-t border-white/10">
            <span>COGNIZANCE MATRIX VER 5.2</span>
            <span>PROPRIETARY NATURE AI NEURAL ENGINE</span>
          </div>

        </div>
      )}

      {/* Slide up animation CSS */}
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
}
