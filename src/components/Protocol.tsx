import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, ShieldAlert, Cpu, Leaf, Eye, Droplet, Bug, EyeOff, Sparkles, Volume2, Waves } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// INTERACTIVE WIDGET 1: PROXIMITY RADAR RADAR
// ==========================================
const ProximityRadarWidget = () => {
  const [scanning, setScanning] = useState(false);
  const [discovered, setDiscovered] = useState<any[]>([]);
  const sweepRef = useRef<HTMLDivElement>(null);

  const startScan = () => {
    if (scanning) return;
    setScanning(true);
    setDiscovered([]);

    // GSAP Radar Sweep Effect
    gsap.fromTo(sweepRef.current, 
      { rotation: 0 },
      { rotation: 1080, duration: 3, ease: 'power2.inOut', onComplete: () => {
        setScanning(false);
        setDiscovered([
          { name: 'Monarch Butterfly (Danaus plexippus)', category: 'Arthropod', status: 'Migrating Southward', alert: 'High Activity', tox: 'Safe' },
          { name: 'Stinging Nettle (Urtica dioica)', category: 'Flora', status: 'Active Growing State', alert: 'Toxicity Hazard', tox: 'Toxic on Contact' },
          { name: 'Common Bluegill (Lepomis macrochirus)', category: 'Fisheries', status: 'Deep Pool Presence', alert: 'Normal', tox: 'Safe' },
          { name: 'Red-Tailed Hawk (Buteo jamaicensis)', category: 'Aviary', status: 'Nesting In Proximity', alert: 'High Presence', tox: 'Safe' },
        ]);
      }}
    );
  };

  return (
    <div className="w-full max-w-lg bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 text-cream">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Compass className={`w-5 h-5 text-clay ${scanning ? 'animate-spin' : ''}`} />
          <span className="font-mono text-xs uppercase tracking-widest text-[#F2F0E9]/60">One-Tap Proximity Radar</span>
        </div>
        <div className="px-2 py-0.5 bg-clay/20 text-clay rounded-full font-mono text-[9px] uppercase font-bold">
          Active GPS Link
        </div>
      </div>

      <div className="relative aspect-square w-full max-w-[260px] mx-auto rounded-full border border-white/10 bg-black/30 overflow-hidden flex items-center justify-center">
        {/* Sweep Scan line */}
        <div 
          ref={sweepRef}
          className="absolute inset-0 origin-center pointer-events-none z-10"
          style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(204, 88, 51, 0.45) 100%)' }}
        ></div>

        <div className="absolute w-2/3 h-2/3 rounded-full border border-white/5"></div>
        <div className="absolute w-1/3 h-1/3 rounded-full border border-white/5"></div>

        {/* Dynamic Scan Elements */}
        {scanning ? (
          <div className="text-center z-20">
            <span className="font-mono text-xs text-clay animate-pulse tracking-widest block">RADAR SWEEP ACTIVE</span>
            <span className="font-mono text-[10px] text-[#F2F0E9]/40 mt-1 block">AGGREGATING BIO-DATA...</span>
          </div>
        ) : discovered.length > 0 ? (
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            {/* Display green glowing dots represent species */}
            <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-green-500 rounded-full"></div>

            <div className="absolute top-[60%] left-[70%] w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute top-[60%] left-[70%] w-2 h-2 bg-yellow-500 rounded-full"></div>

            <div className="absolute top-[40%] left-[50%] w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute top-[40%] left-[50%] w-2 h-2 bg-blue-500 rounded-full"></div>

            <span className="font-mono text-[11px] text-clay font-bold tracking-widest bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-md">
              4 SPECIES MATCHED
            </span>
          </div>
        ) : (
          <button 
            onClick={startScan}
            className="z-20 bg-clay hover:bg-clay/90 text-white font-sans text-xs font-bold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            Scan Current Proximity 📡
          </button>
        )}
      </div>

      {/* Discovered List */}
      <div className="mt-6 space-y-3 max-h-[140px] overflow-y-auto pr-1">
        {discovered.length > 0 ? (
          discovered.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-2.5 bg-white/[0.03] border border-white/5 rounded-xl text-left">
              <div>
                <span className="text-[10px] font-mono text-[#F2F0E9]/50 block">{item.category}</span>
                <span className="text-xs font-medium text-cream">{item.name}</span>
              </div>
              <div className="text-right">
                {item.alert === 'Toxicity Hazard' ? (
                  <span className="inline-block px-2 py-0.5 bg-red-920 text-red-400 text-[9px] font-mono rounded-full font-bold">
                    {item.tox}
                  </span>
                ) : (
                  <span className="inline-block px-1.5 py-0.5 bg-green-920 text-green-400 text-[9px] font-mono rounded-full font-bold">
                    {item.status}
                  </span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-4 text-cream/40 font-mono text-xs">
            Coordinates Idle. Run proximity check.
          </div>
        )}
      </div>
    </div>
  );
};

// ==========================================
// INTERACTIVE WIDGET 2: DIAGNOSTIC SPLIT LAYOUT
// ==========================================
const DiagnosticsWidget = () => {
  const [selectedLeafFile, setSelectedLeafFile] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);

  const handleDiagnose = () => {
    setAnalyzing(true);
    setAnalysisResult(null);
    setTimeout(() => {
      setAnalyzing(false);
      setAnalysisResult('Foliar stress: 42% chlorophyll decline observed. Pathogen matched: Gymnosporangium juniperi-virginianae (Cedar Apple Rust). Propose systemic copper soap mist application.');
    }, 2500);
  };

  return (
    <div className="w-full max-w-2xl bg-cream text-charcoal rounded-[2rem] p-6 md:p-8 border border-moss/10 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Left Component Card [Leaf Health Diagnose] */}
        <div className="bg-white p-5 rounded-2xl border border-moss/5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Leaf className="w-4 h-4 text-clay" />
            <span className="font-mono text-[10px] text-moss/60 font-bold uppercase tracking-widest">Leaf Health Diagnose</span>
          </div>
          <h4 className="font-sans font-bold text-base text-charcoal mb-2">
            Multi-Spectrum Pathogen Tracking
          </h4>
          <p className="font-sans text-xs text-charcoal/70 leading-relaxed mb-4">
            Upload close-up foliage samples to decode early symptom indications. Our advanced neural layers run real-time anomaly comparisons.
          </p>

          <div className="border border-dashed border-moss/20 rounded-xl p-4 bg-cream/30 text-center">
            {selectedLeafFile ? (
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-xs text-moss font-bold">
                  <Eye className="w-4 h-4 animate-bounce text-clay" />
                  <span>foliage_sample_close.jpg</span>
                </div>
                {analyzing ? (
                  <div className="font-mono text-[10px] text-clay animate-pulse">
                    RUNNING MULTI-SPECTRUM MAPS...
                  </div>
                ) : analysisResult ? (
                  <div className="bg-moss/5 p-2 rounded text-[10px] text-moss font-mono leading-relaxed text-left border-l-2 border-clay">
                    {analysisResult}
                  </div>
                ) : (
                  <button 
                    onClick={handleDiagnose}
                    className="w-full py-1.5 bg-clay text-white rounded font-mono text-[10px] font-bold"
                  >
                    Run AI Diagnostics
                  </button>
                )}
              </div>
            ) : (
              <div onClick={() => setSelectedLeafFile(true)} className="cursor-pointer">
                <svg className="w-8 h-8 text-moss/30 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                </svg>
                <span className="font-mono text-[10px] text-moss/50 uppercase font-black block">Tap to upload foliage close-up</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Component Card [Real Diagnose Hub] */}
        <div className="bg-moss text-cream p-5 rounded-2xl border border-white/5 shadow-inner">
          <div className="flex items-center gap-2 mb-3">
            <Cpu className="w-4 h-4 text-clay" />
            <span className="font-mono text-[10px] text-cream/60 font-bold uppercase tracking-widest">Real Diagnose Hub</span>
          </div>
          <h4 className="font-sans font-bold text-base text-[#F2F0E9] mb-2">
            Full Ecosystem Symptom Solver
          </h4>
          <p className="font-sans text-xs text-cream/80 leading-relaxed mb-4">
            A complete master environment checklist wrapper. Analyze ambient parameters and warnings to formulate a curative solution.
          </p>

          <ul className="space-y-2.5 font-mono text-[10px] text-cream/70">
            <li className="flex items-center gap-2 bg-white/5 p-1.5 rounded">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span>Soil Moisture: 64% (Balanced)</span>
            </li>
            <li className="flex items-center gap-2 bg-white/5 p-1.5 rounded">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
              <span>Regional Humidity Index: 88% (High stress)</span>
            </li>
            <li className="flex items-center gap-2 bg-white/5 p-1.5 rounded">
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
              <span>Active Pest Warning: Invasive Aphid alerts nearby</span>
            </li>
          </ul>

          <div className="border border-white/10 rounded-lg p-2.5 bg-black/40 text-[9px] font-mono text-clay font-bold text-center mt-3 uppercase tracking-wider">
            ANOMALY RESOLUTION MAPPING ACTIVE
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// INTERACTIVE WIDGET 3: MICRO-TOOLS MATRIX TABS
// ==========================================
const MicroToolsWidget = () => {
  const [activeTab, setActiveTab] = useState<'light' | 'water' | 'pests' | 'aquatic'>('light');

  const toolsData = {
    light: [
      { name: 'Sunlight Checker', desc: 'Evaluates lux distributions across variables' },
      { name: 'Lux Meter', desc: 'Real-time intensity measurements' },
      { name: 'Temp & Humidity', desc: 'Charts atmospheric index changes' },
      { name: 'Soil Moisture', desc: 'Volumetric saturation analysis' },
    ],
    water: [
      { name: 'Water Quality Tester', desc: 'Analyzes elemental composition indicators' },
      { name: 'Watering Calculator', desc: 'Specie-specific hydration scheduling' },
      { name: 'Water Checker', desc: 'Medium fluid retention analysis' },
    ],
    pests: [
      { name: 'Insect Bite Identifier', desc: 'Instantly charts minor sting/bite profiles' },
      { name: 'Plant Toxicity Checker', desc: 'Flags risk variables for pets/children' },
      { name: 'Pest Alert Engine', desc: 'Regional outbreak notification hooks' },
      { name: 'Feeding Guide & Habitat Checker', desc: 'Behavioral analytics' },
    ],
    aquatic: [
      { name: 'Bird Call Identifier', desc: 'Acoustic wave frequency analysis' },
      { name: 'Cage Size & Diet Builder', desc: 'Metabolic calculations' },
      { name: 'Aquarium Cycle Tracker & Feeding Scheduler', desc: 'Automated aquatic parameter logging' },
    ],
  };

  return (
    <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 text-cream">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-white/[0.08] pb-4">
        <button 
          onClick={() => setActiveTab('light')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all flex items-center gap-1.5
            ${activeTab === 'light' ? 'bg-clay text-white shadow-md' : 'bg-white/5 text-cream/60 hover:bg-white/10'}`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Light & Env</span>
        </button>
        <button 
          onClick={() => setActiveTab('water')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all flex items-center gap-1.5
            ${activeTab === 'water' ? 'bg-clay text-white shadow-md' : 'bg-white/5 text-cream/60 hover:bg-white/10'}`}
        >
          <Droplet className="w-3.5 h-3.5" />
          <span>Water & Soil</span>
        </button>
        <button 
          onClick={() => setActiveTab('pests')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all flex items-center gap-1.5
            ${activeTab === 'pests' ? 'bg-clay text-white shadow-md' : 'bg-white/5 text-cream/60 hover:bg-white/10'}`}
        >
          <Bug className="w-3.5 h-3.5" />
          <span>Wildlife & Pests</span>
        </button>
        <button 
          onClick={() => setActiveTab('aquatic')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all flex items-center gap-1.5
            ${activeTab === 'aquatic' ? 'bg-clay text-white shadow-md' : 'bg-white/5 text-cream/60 hover:bg-white/10'}`}
        >
          <Waves className="w-3.5 h-3.5" />
          <span>Aquatic/Aviary</span>
        </button>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {toolsData[activeTab].map((tool, index) => (
          <div key={index} className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-clay/40 transition-colors flex flex-col justify-between text-left">
            <div>
              <span className="font-mono text-[9px] text-clay uppercase tracking-widest block mb-1">MEMBER ACCESS UTILITY</span>
              <h5 className="font-sans font-bold text-sm text-[#F2F0E9]">{tool.name}</h5>
              <p className="font-sans text-xs text-cream/65 mt-1 font-light">{tool.desc}</p>
            </div>
            <div className="mt-4 flex justify-between items-center text-[8px] font-mono text-cream/30">
              <span>STATUS: LIVE</span>
              <span className="text-clay">ACTIVATE ➔</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Protocol() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        if (index === cardRefs.current.length - 1) return; // Skip last card

        const nextCard = cardRefs.current[index + 1];

        gsap.to(card, {
          scale: 0.95,
          filter: 'blur(10px)',
          opacity: 0.6,
          ease: 'none',
          scrollTrigger: {
            trigger: nextCard,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const cardsData = [
    {
      id: 'phase-1',
      title: 'Advanced Live Location Discovery Engine',
      subtitle: 'Real-Time Geolocation Species Mapping',
      description: 'Stop guessing what\'s in your backyard. By leveraging advanced native GPS tracking coordinates, Nature AI aggregates immediate demographic bio-data to display an interactive vector grid of every plant, insect, bird, and fish species documented living around your current exact location. Tap to check active migration warnings, localized toxicity reports, and environmental alerts instantly.',
      artifact: <ProximityRadarWidget />,
      bg: 'bg-charcoal',
      text: 'text-cream',
    },
    {
      id: 'phase-2',
      title: 'Advanced Diagnostic Core',
      subtitle: 'AI Clinical Diagnostics for Flora Protection',
      description: 'Run targeted clinical scanning parameters on plants and ecosystems to solve anomalies. Formulate system-wide soil, insect, and humidity remedies within seconds.',
      artifact: <DiagnosticsWidget />,
      bg: 'bg-cream',
      text: 'text-charcoal',
    },
    {
      id: 'phase-3',
      title: 'Ecosystem Micro-Tools Suite',
      subtitle: 'Premium Offline Utility Matrix',
      description: 'Equip yourself with a highly optimized tool belt engineered to analyze environmental variables on site. Instantly run Sunlight calculations, watering metrics, toxic checks, or acoustic audio birds call identification fully offline.',
      artifact: <MicroToolsWidget />,
      bg: 'bg-[#2E4036]', // moss background for final slide
      text: 'text-cream',
    },
  ];

  return (
    <section id="protocol" ref={containerRef} className="relative w-full bg-charcoal">
      {cardsData.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => (cardRefs.current[index] = el)}
          className={`sticky top-0 w-full min-h-[100dvh] flex items-center justify-center py-20 ${card.bg} ${card.text} overflow-hidden rounded-t-[3.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.4)] first:rounded-none first:shadow-none`}
          style={{ zIndex: index }}
        >
          <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 max-w-xl text-left">
              <div className="font-mono text-xs uppercase tracking-widest text-clay font-bold">
                {card.title}
              </div>
              <h2 className="font-serif italic font-light text-4xl md:text-5xl leading-tight text-cream">
                {card.subtitle}
              </h2>
              <p className="font-sans text-sm md:text-base opacity-80 leading-relaxed font-light">
                {card.description}
              </p>
            </div>
            <div className="flex justify-center lg:justify-end w-full">
              {card.artifact}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
