import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ArrowLeft,
  X, 
  Sparkles, 
  Menu, 
  Database, 
  Volume2, 
  Globe, 
  Navigation, 
  Activity, 
  Cpu, 
  Flame, 
  Droplet, 
  Bug, 
  ShieldCheck, 
  MessageSquare,
  Sparkle
} from 'lucide-react';

interface PremiumFeaturesProps {
  onBack: () => void;
}

export default function PremiumFeatures({ onBack }: PremiumFeaturesProps) {
  const [activeTab, setActiveTab] = useState<'light' | 'water' | 'insects' | 'aquatic'>('light');
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    { role: 'assistant', text: 'Engage with our fine-tuned companion chatbot agent for 24/7 expert-level, localized natural history consulting. Ask me anything about flora, fauna, soil health, or active taxonomy!' }
  ]);

  const tabsContent = {
    light: {
      title: "Light & Environment Vector",
      details: "Real-time solar irradiance tracking, UV-Index forecasting, and canopy coverage density mapping. Integrates multi-spectral ambient sensors to calculate ideal growing zones.",
      stats: [
        { label: "Canopy Density", value: "78%" },
        { label: "Optimal PAR Range", value: "450-600 μmol" },
        { label: "UV Index", value: "4.2 Low" }
      ]
    },
    water: {
      title: "Water & Soil Diagnostics",
      details: "Multi-layered moisture evaluation models, structural pH assessment, and drainage efficiency mapping based on geological topography. Prevents root rot with proactive forecasts.",
      stats: [
        { label: "Soil Saturation", value: "62.4%" },
        { label: "Target pH Level", value: "6.8 Neutral" },
        { label: "Drainage Coefficient", value: "0.85 Excellent" }
      ]
    },
    insects: {
      title: "Insects, Pests & Wildlife Signatures",
      details: "Taxonomy recognition of regional pests, beneficial insects, and burrowing mammals. Generates pest pressure maps with early biological alerts.",
      stats: [
        { label: "Pest Pressure Index", value: "11% Minimal" },
        { label: "Beneficial Ratio", value: "4.2 : 1" },
        { label: "Recent Sighting", value: "Monarch Larva" }
      ]
    },
    aquatic: {
      title: "Aquatic & Aviary Core Matrices",
      details: "Double-layered sensor analytics matching high-definition image frames to local waterways health, salinity, dissolved oxygen levels, and multi-frequency bird vocalizations.",
      stats: [
        { label: "Audio Frequency", value: "4.8 kHz" },
        { label: "Water Soluble O2", value: "8.2 mg/L" },
        { label: "Aviary Sync", value: "12 Channels Active" }
      ]
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = chatMessage;
    setChatHistory((prev) => [...prev, { role: 'user', text: userMsg }]);
    setChatMessage('');

    setTimeout(() => {
      let reply = "";
      const query = userMsg.toLowerCase();
      if (query.includes('butterfly') || query.includes('insect')) {
        reply = "Micro-Fauna Intelligence reports: Monarch butterflies migrate up to 3,000 miles. Their larvae feed exclusively on milkweed species, incorporating cardiac glycosides for predator defense!";
      } else if (query.includes('plant') || query.includes('leaves') || query.includes('health')) {
        reply = "Botany Diagnostics Core: Leaf pathology analysis indicates trace nitrogen deficiency in sandy soil. I recommend enriching with organic compost and tracking diurnal canopy temperature.";
      } else if (query.includes('fish') || query.includes('reef') || query.includes('aquatic')) {
        reply = "Aquatic Vision System: The specimen detected is Amphiprion ocellaris (Clownfish) in a complex symbiotic relationship with Heteractis magnifica sea anemones. Water temperature index optimal at 25.4°C.";
      } else {
        reply = `Leafy Core Agent: Nature AI has mapped your query against our unified deep database. To explore local natural history, I recommend using our One-Tap Proximity Radar on site! Let me know if you would like me to analyze localized flora, fauna, or active growing parameters.`;
      }
      setChatHistory((prev) => [...prev, { role: 'assistant', text: reply }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#1b190d] font-sans pb-24 relative overflow-x-hidden selection:bg-moss selection:text-white">
      {/* Dynamic Ceramic Top Header */}
      <div className="w-full bg-[#FAF9F5] border-b border-[#E8E5DF] py-6 px-8 sticky top-0 z-50 flex items-center justify-between shadow-sm">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-[#606c38] font-bold text-sm bg-white border border-[#E8E5DF] transition-all hover:scale-[1.03] hover:bg-[#F2F0EA] active:scale-[0.98]"
          style={{ boxShadow: '4px 4px 10px #e1dfda, -4px -4px 10px #ffffff' }}
          id="btn-back-main"
        >
          <ArrowLeft size={16} />
          <span>Back to Main Hub</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#E8E5DF]" style={{ boxShadow: 'inset 2px 2px 5px #e1dfda, inset -2px -2px 5px #ffffff' }}>
          <span className="w-2.5 h-2.5 rounded-full bg-[#d4b411] animate-pulse"></span>
          <span className="text-[11px] uppercase tracking-widest font-mono font-bold text-[#606c38]">Nature AI Features premium</span>
        </div>

        <button 
          onClick={onBack}
          className="p-2.5 rounded-full bg-white border border-[#E8E5DF] transition-all hover:scale-[1.03]"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>

      {/* Hero Section Container */}
      <section className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-12 flex flex-col items-center">
        {/* Decorative Premium Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <span className="px-5 py-2 rounded-full bg-white border border-[#E1DEC5] text-[#606c38] text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2 shadow-sm"
                style={{ boxShadow: '6px 6px 12px #e5e3dd, -6px -6px 12px #ffffff' }}>
            <Sparkles className="w-3.5 h-3.5 text-[#d4b411]" />
            NATURE AI PREMIUM FEATURES
          </span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display tracking-[0.1em] text-7xl md:text-9xl font-black text-center text-[#221f10] uppercase mb-8"
        >
          NATURE
        </motion.h1>

        {/* Hero Featured Image */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="w-full max-w-4xl h-[320px] md:h-[480px] rounded-[2.5rem] overflow-hidden border-[10px] border-white relative shadow-2xl mb-12"
          style={{ boxShadow: '12px 12px 24px #cbd5db, -12px -12px 24px #ffffff' }}
        >
          <img 
            src="https://i.postimg.cc/hjNkSz60/Chat-GPT-Image-Jun-10-2026-02-01-53-AM.png" 
            alt="Hand holding growing biological seedling, representative of Nature AI deep multi-vision ecosystem diagnostics" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1530968464165-7a1861cbaf9f?auto=format&fit=crop&w=1200&q=80";
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="text-white">
              <span className="text-[10px] tracking-widest font-mono text-[#d4b411] uppercase font-bold bg-[#221f10]/80 px-3 py-1 rounded-full border border-white/10">
                LIVING BIOSPHERE CONNECTED
              </span>
              <h3 className="text-2xl font-bold mt-2 font-display">Ecosystem Multi-Vision Scanner</h3>
            </div>
            <div className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-xs font-mono">
              Latitude Index Calibration Active
            </div>
          </div>
        </motion.div>

        {/* Sub-text Area (Inject exact wording from user directive) */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-lg md:text-xl text-[#606c38] max-w-3xl leading-relaxed font-light font-sans tracking-wide border-l-4 border-[#d4b411] pl-6 md:pl-8 py-2 mb-16"
        >
          Explore the living world with expert-level AI multi-vision tracking. Scan, diagnose, and catalog your ecosystem instantly. Engineered with advanced location intelligence and multilingual deep learning layers.
        </motion.p>
      </section>

      {/* Features Bento Grid Section */}
      <section className="bg-gradient-to-b from-[#F9F7F2] to-[#FAF8F3] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-[#221f10] tracking-tight">
              Ecosystem Intelligence Bento Matrix
            </h2>
            <p className="text-[#606c38] hover:text-[#d4b411] transition-all text-sm mt-2">
              Deep Neural Classizers for cross-kingdom data mapping
            </p>
          </div>

          {/* Bento Grid Containers - Minimum 32px borders, Raised Shadows, Smooth Framer Motion Entry Animations */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* Card 1: Plant Spectrum Identification (Col Span 7) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="md:col-span-7 bg-white rounded-[2.5rem] p-10 border border-[#FAF8F3] hover:border-moss/10 transition-all duration-300 flex flex-col justify-between"
              style={{ boxShadow: '12px 12px 24px #d1cfcb, -12px -12px 24px #ffffff' }}
              id="feature-card-plant"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] flex items-center justify-center text-emerald-600 border border-emerald-100 shadow-inner">
                    <Activity size={24} />
                  </div>
                  <span className="text-[#606c38] font-mono text-xs uppercase tracking-widest font-bold">
                    PREMIUM BOTANY CLASSIFIER
                  </span>
                </div>
                
                <h3 className="font-display font-extrabold text-3xl text-[#221f10] mb-4">
                  Plant Spectrum Identification
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-light">
                  Botany, Demystified. Instantly decode taxonomy, active growing conditions, and detailed structural insights for thousands of plant species.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-600 font-bold bg-[#f0fdf4] px-3 py-1 rounded-full">
                  Fully operational db size: 2.1M+
                </span>
                <span className="text-sm font-semibold text-[#606c38] flex items-center gap-1.5 hover:translate-x-1 duration-200 cursor-pointer">
                  Explore Active Spectra <ArrowRight size={16} />
                </span>
              </div>
            </motion.div>

            {/* Card 2: Insect & Arthropod Tracker (Col Span 5) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
              className="md:col-span-5 bg-white rounded-[2.5rem] p-10 border border-[#FAF8F3] hover:border-moss/10 transition-all duration-300 flex flex-col justify-between"
              style={{ boxShadow: '12px 12px 24px #d1cfcb, -12px -12px 24px #ffffff' }}
              id="feature-card-insect"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#fffbeb] flex items-center justify-center text-[#d4b411] border border-amber-100 shadow-inner">
                    <Bug size={24} />
                  </div>
                  <span className="text-[#606c38] font-mono text-xs uppercase tracking-widest font-bold">
                    MICRO WORLD SIGNATURES
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl text-[#221f10] mb-4">
                  Insect & Arthropod Tracker
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                  Micro-Fauna Intelligence. Identify bug variants, structural anatomy, behavioral trends, and outdoor impact markers within seconds.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 text-xs font-mono text-[#d4b411] font-bold">
                Dynamic exoskeleton parsing engine loaded
              </div>
            </motion.div>

            {/* Card 3: Aquatic Vision System (Col Span 5) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
              className="md:col-span-5 bg-white rounded-[2.5rem] p-10 border border-[#FAF8F3] hover:border-moss/10 transition-all duration-300 flex flex-col justify-between"
              style={{ boxShadow: '12px 12px 24px #d1cfcb, -12px -12px 24px #ffffff' }}
              id="feature-card-aquatic"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#eff6ff] flex items-center justify-center text-blue-600 border border-blue-100 shadow-inner">
                    <Droplet size={24} />
                  </div>
                  <span className="text-[#606c38] font-mono text-xs uppercase tracking-widest font-bold">
                    MARINE RADAR MATRIX
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl text-[#221f10] mb-4">
                  Aquatic Vision System
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                  Under-Water Analytics. Seamless identification engine built for marine biology tracking, aquarium management, and river ecosystem monitoring.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 text-xs font-mono text-blue-600 font-bold">
                Continuous pH-solids evaluation calibrated
              </div>
            </motion.div>

            {/* Card 4: Aviary Sound & Vision Engine (Col Span 7) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
              className="md:col-span-7 bg-white rounded-[2.5rem] p-10 border border-[#FAF8F3] hover:border-moss/10 transition-all duration-300 flex flex-col justify-between"
              style={{ boxShadow: '12px 12px 24px #d1cfcb, -12px -12px 24px #ffffff' }}
              id="feature-card-aviary"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100 shadow-inner">
                    <Volume2 size={24} />
                  </div>
                  <span className="text-[#606c38] font-mono text-xs uppercase tracking-widest font-bold">
                    ORNITHOLOGY ACOUSTIC VECTOR
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-3xl text-[#221f10] mb-4">
                  Aviary Sound & Vision Engine
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-light">
                  Ornithology Redefined. Track migratory patterns, bird variants, and catalog local aviary populations with high-precision computer vision vectors.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-indigo-600 font-bold bg-indigo-50 px-3 py-1 rounded-full">
                  Decibel pattern tracker loaded
                </span>
                <span className="text-sm font-semibold text-[#606c38] flex items-center gap-1.5 hover:translate-x-1 duration-200 cursor-pointer">
                  Scan Aviary Frequencies <ArrowRight size={16} />
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Global & Location Section */}
      <section className="py-20 px-6 bg-[#FAF9F5]">
        <div className="max-w-6xl mx-auto">
          {/* Ceramic Card Core */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-white rounded-[3rem] p-8 md:p-14 border border-[#E8E5DF] relative overflow-hidden"
            style={{ boxShadow: '12px 12px 24px #d1cfcb, -12px -12px 24px #ffffff' }}
          >
            {/* Split Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Text */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2">
                  <Globe className="text-[#d4b411] animate-spin-slow" size={20} />
                  <span className="text-[11px] font-mono tracking-widest text-[#606c38] uppercase font-bold">
                    BIOSPHERE DATA MAP
                  </span>
                </div>

                <h2 className="font-display font-bold text-4xl md:text-5xl text-[#221f10] tracking-tight">
                  Borderless Nature Tracking
                </h2>

                <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                  Nature doesn't recognize physical boundaries, and neither does our neural telemetry system. Map the complete natural flow seamlessly across all land divisions and marine sectors.
                </p>

                {/* Unified database feature points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="p-5 bg-[#F9F7F2] rounded-2xl border border-slate-100 flex flex-col justify-between shadow-sm">
                    <span className="text-xs bg-[#fffbeb] text-[#d4b411] px-2.5 py-1 rounded font-bold uppercase font-mono w-fit tracking-wide mb-3">
                      Linguistics System
                    </span>
                    <p className="text-[#221f10] text-xs leading-relaxed font-semibold">
                      15+ Native Languages Support. Nature doesn't speak English, and neither should you have to. Access diagnostics and profiles in your native language.
                    </p>
                  </div>

                  <div className="p-5 bg-[#F9F7F2] rounded-2xl border border-slate-100 flex flex-col justify-between shadow-sm">
                    <span className="text-xs bg-[#eff6ff] text-blue-600 px-2.5 py-1 rounded font-bold uppercase font-mono w-fit tracking-wide mb-3">
                      Global Database
                    </span>
                    <p className="text-[#221f10] text-xs leading-relaxed font-semibold">
                      All Continents Unified Database. Mapping flora, fauna, aviary, and aquatic species across all seven continents.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column Location Section */}
              <div className="lg:col-span-5 bg-[#F9F7F2] p-8 rounded-[2rem] border border-[#E8E5DF] shadow-inner flex flex-col justify-between h-full min-h-[300px]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono tracking-widest text-slate-400 font-bold uppercase">
                      RADAR CALIBRATION
                    </span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-[#221f10]">
                    Real-Time Geolocation Species Mapping
                  </h3>
                  
                  <p className="text-gray-500 text-xs leading-relaxed font-light">
                    Stop guessing what's in your backyard. Use our One-Tap Proximity Radar to display an interactive vector grid of species living around your exact location.
                  </p>
                </div>

                {/* Custom Proximity Radar Simulation Widget */}
                <div className="mt-8 bg-white p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-full bg-amber-50 border border-amber-200 text-[#d4b411]">
                      <Navigation size={18} className="animate-bounce" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-[10px] text-slate-400 font-mono">MAP LATITUDE GRID RECT</div>
                      <div className="text-[12px] font-bold text-[#221f10]">34.0522° N, 118.2437° W</div>
                    </div>
                  </div>
                  <button className="w-full mt-4 py-2 text-xs font-bold text-white bg-[#606c38] rounded-lg transition-colors hover:bg-moss">
                    One-Tap Proximity Radar Active
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Diagnostics & Tools */}
      <section className="py-20 px-6 bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] text-[#d4b411] font-mono uppercase tracking-widest font-bold">
              AI CLINICAL METRICS
            </span>
            <h2 className="font-display font-extrabold text-4xl text-[#221f10] mt-1">
              Diagnostics & Field Ecosystem Tools
            </h2>
          </div>

          {/* Doctor Mode split-screen layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
            
            {/* Split Screen left: Doctor Mode Multi-Spectrum Pathogen Tracking */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#E8E5DF] flex flex-col justify-between"
              style={{ boxShadow: '12px 12px 24px #d1cfcb, -12px -12px 24px #ffffff' }}
            >
              <div>
                <span className="text-[10px] font-mono bg-rose-50 text-rose-600 px-2 rounded uppercase font-bold tracking-wider">
                  CLINICAL PATHOLOGY
                </span>
                <h3 className="font-display font-extrabold text-2xl text-[#221f10] mt-4 mb-3">
                  Multi-Spectrum Pathogen Tracking
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light mb-6">
                  Analyzes complex visual leaf spots, root corrosion, and branch discoloration. Translates cellular stress maps into instant chemical-free biotic remedies with visual accuracy.
                </p>
              </div>

              {/* Pathogen Widget UI */}
              <div className="bg-[#FAF9F5] p-5 rounded-2xl border border-[#E8E5DF] space-y-3">
                <div className="flex justify-between items-center text-[11px] font-mono">
                  <span className="text-slate-400">PATHOGEN COEFFICIENT:</span>
                  <span className="text-rose-600 font-bold">8.4% Moderate</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full w-[38%]"></div>
                </div>
                <div className="text-[10px] text-gray-500 leading-normal">
                  <span className="font-bold text-[#221f10]">Remedial Forecast:</span> Introduce beneficial nematodes to prevent subterranean root deterioration. Reduce evening saturation cycles.
                </div>
              </div>
            </motion.div>

            {/* Split Screen right: Doctor Mode Full Ecosystem Symptom Solver */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#E8E5DF] flex flex-col justify-between"
              style={{ boxShadow: '12px 12px 24px #d1cfcb, -12px -12px 24px #ffffff' }}
            >
              <div>
                <span className="text-[10px] font-mono bg-emerald-50 text-emerald-600 px-2 rounded uppercase font-bold tracking-wider">
                  SOLVER CORE
                </span>
                <h3 className="font-display font-extrabold text-2xl text-[#221f10] mt-4 mb-3">
                  Full Ecosystem Symptom Solver
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light mb-6">
                  Input cumulative environmental stressors—humidity waves, sudden soil compaction, and species competition. Our diagnostic simulation matrix models future decay probabilities instantly.
                </p>
              </div>

              {/* Solver Widget UI */}
              <div className="bg-[#FAF9F5] p-5 rounded-2xl border border-[#E8E5DF] space-y-3">
                <div className="flex justify-between items-center text-[11px] font-mono">
                  <span className="text-slate-400">SIMULATION ACCURACY:</span>
                  <span className="text-emerald-600 font-bold">99.85% Pure</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[9px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-mono uppercase">Soil Compaction</span>
                  <span className="text-[9px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-mono uppercase">Diurnal Swing</span>
                </div>
                <div className="text-[10px] text-gray-400 leading-normal">
                  Simulated 40-day forecast models 85% recovery rate under localized natural filtration techniques.
                </div>
              </div>
            </motion.div>

          </div>

          {/* Micro-Tools Matrix tabbed interface */}
          <div className="max-w-4xl mx-auto mt-16 bg-white rounded-[2.5rem] p-6 md:p-10 border border-[#E8E5DF]" style={{ boxShadow: '12px 12px 24px #cbd5db, -12px -12px 24px #ffffff' }}>
            <h3 className="font-display font-bold text-xl text-[#221f10] mb-6 text-center">
              Micro-Tools Field telemetry Matrix
            </h3>

            {/* Matrix Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-slate-100 pb-4">
              <button 
                onClick={() => setActiveTab('light')}
                className={`px-4 py-2 rounded-full font-mono text-[11px] tracking-wide uppercase transition-all duration-300 font-bold flex items-center gap-1.5 ${activeTab === 'light' ? 'bg-[#606c38] text-white shadow-md' : 'bg-[#FAF8F3] text-gray-500 border border-slate-200 hover:bg-slate-50'}`}
              >
                [Light & Environment]
              </button>
              <button 
                onClick={() => setActiveTab('water')}
                className={`px-4 py-2 rounded-full font-mono text-[11px] tracking-wide uppercase transition-all duration-300 font-bold flex items-center gap-1.5 ${activeTab === 'water' ? 'bg-[#606c38] text-white shadow-md' : 'bg-[#FAF8F3] text-gray-500 border border-slate-200 hover:bg-slate-50'}`}
              >
                [Water & Soil]
              </button>
              <button 
                onClick={() => setActiveTab('insects')}
                className={`px-4 py-2 rounded-full font-mono text-[11px] tracking-wide uppercase transition-all duration-300 font-bold flex items-center gap-1.5 ${activeTab === 'insects' ? 'bg-[#606c38] text-white shadow-md' : 'bg-[#FAF8F3] text-gray-500 border border-slate-200 hover:bg-slate-50'}`}
              >
                [Insects, Pests & Wildlife]
              </button>
              <button 
                onClick={() => setActiveTab('aquatic')}
                className={`px-4 py-2 rounded-full font-mono text-[11px] tracking-wide uppercase transition-all duration-300 font-bold flex items-center gap-1.5 ${activeTab === 'aquatic' ? 'bg-[#606c38] text-white shadow-md' : 'bg-[#FAF8F3] text-gray-500 border border-slate-200 hover:bg-slate-50'}`}
              >
                [Aquatic & Aviary Core]
              </button>
            </div>

            {/* Active Matrix Content with Dynamic Styling */}
            <div className="p-6 bg-[#FAF9F5] rounded-[1.5rem] border border-[#E8E5DF]">
              <h4 className="font-display font-extrabold text-lg text-[#221f10] mb-3">
                {tabsContent[activeTab].title}
              </h4>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 font-light">
                {tabsContent[activeTab].details}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                {tabsContent[activeTab].stats.map((stat, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
                    <span className="text-[10px] text-slate-400 font-mono block uppercase mb-1">
                      {stat.label}
                    </span>
                    <span className="text-sm font-bold text-[#606c38]">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-20 px-6 bg-[#FAF9F5]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] text-[#606c38] font-mono uppercase tracking-widest font-bold">
              SYSTEM UNIFORMITY TEST
            </span>
            <h2 className="font-display font-extrabold text-4xl text-[#221f10] tracking-tight mt-1">
              Cross-Kingdom Comparison Matrix
            </h2>
          </div>

          {/* Visual Ceramic Table Comparing Trad Apps vs Nature AI */}
          <div className="overflow-x-auto rounded-[2rem] border border-[#E8E5DF] bg-white p-5 shadow-lg"
               style={{ boxShadow: '12px 12px 24px #d1cfcb, -12px -12px 24px #ffffff' }}>
            <table className="w-full text-left font-sans text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-100 font-mono text-[10px] tracking-wider text-slate-400 uppercase">
                  <th className="py-4 px-6">Features Category</th>
                  <th className="py-4 px-6 text-center">Traditional Apps</th>
                  <th className="py-4 px-6 text-center text-[#d4b411] font-bold">Nature AI ✨</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                <tr>
                  <td className="py-5 px-6 font-semibold text-[#221f10] text-sm">
                    Cross-Kingdom Diagnostics
                  </td>
                  <td className="py-5 px-6 text-center text-slate-400 font-light">
                    Weak database string matches. Single kingdom taxonomy limitations (flora only).
                  </td>
                  <td className="py-5 px-6 text-center bg-amber-50/40 rounded-xl">
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold text-xs py-1 px-3.5 rounded-full bg-emerald-50 border border-emerald-100">
                      Real-Time Neural Scanner
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-5 px-6 font-semibold text-[#221f10] text-sm">
                    Acoustic Audio Analytics
                  </td>
                  <td className="py-5 px-6 text-center text-slate-400 font-light">
                    No support for live song waveforms, decibels, or aviary audio vectors.
                  </td>
                  <td className="py-5 px-6 text-center bg-amber-50/40">
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold text-xs py-1 px-3.5 rounded-full bg-emerald-50 border border-emerald-100">
                      Multi-Frequency Matching
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-5 px-6 font-semibold text-[#221f10] text-sm">
                    Hyper-Local Proximity Radar
                  </td>
                  <td className="py-5 px-6 text-center text-slate-400 font-light">
                    Static generic state/country lists with no precise radar sync.
                  </td>
                  <td className="py-5 px-6 text-center bg-amber-50/40 rounded-xl">
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold text-xs py-1 px-3.5 rounded-full bg-emerald-50 border border-emerald-100">
                      One-Tap Live Radar Grid
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Companion Chatbot Area */}
      <section className="py-20 px-6 bg-[#F9F7F2]" id="leafy-chat">
        <div className="max-w-3xl mx-auto">
          {/* Core Card with raised shadow */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#E8E5DF]"
            style={{ boxShadow: '12px 12px 24px #cbd5db, -12px -12px 24px #ffffff' }}
          >
            {/* Header / Caption */}
            <div className="flex items-center gap-3.5 mb-8">
              <div className="w-11 h-11 rounded-xl bg-[#606c38] text-white flex items-center justify-center border border-moss/10 shadow-md">
                <MessageSquare size={20} />
              </div>
              <div>
                <span className="text-[10px] text-[#606c38] font-mono tracking-widest uppercase font-bold">
                  24/7 DYNAMIC COMPANION
                </span>
                <h3 className="font-display font-extrabold text-2xl text-[#221f10]">
                  Meet Leafy Chat AI
                </h3>
              </div>
            </div>

            {/* Chat Body Mockup Container */}
            <div className="border border-slate-200 rounded-[1.5rem] overflow-hidden bg-[#FAF9F5] shadow-inner mb-6">
              
              {/* Inner Dialogue Area */}
              <div className="p-6 h-64 overflow-y-auto space-y-4 font-sans text-xs">
                {chatHistory.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`flex ${item.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`p-4 max-w-[85%] rounded-[1.2rem] ${item.role === 'user' ? 'bg-[#606c38] text-white rounded-tr-none' : 'bg-white text-slate-800 rounded-tl-none border border-slate-200 shadow-sm'}`}>
                      <p className="leading-relaxed leading-normal">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input Area */}
              <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
                <input 
                  type="text"
                  placeholder="Ask Leafy about butterflies, soil health, or bird identification..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="flex-grow px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-[#606c38] font-sans"
                />
                <button 
                  type="submit"
                  className="px-5 py-2.5 bg-[#606c38] hover:bg-moss text-white rounded-xl text-xs font-bold font-sans transition-colors shrink-0"
                >
                  Send
                </button>
              </form>
            </div>

            <p className="text-[10px] text-slate-400 font-light text-center leading-relaxed">
              * Leafy Chat Agent integrates deep local parameters regarding soil density, moisture grids, and regional taxonomic hierarchies automatically.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Premium Footer Container (Using Exact Required Content) */}
      <footer className="max-w-6xl mx-auto px-6 pt-12 border-t border-[#E8E5DF]">
        <div className="bg-white rounded-[2.5rem] p-10 border border-[#E8E5DF] flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm"
             style={{ boxShadow: '8px 8px 16px #e1dfda, -8px -8px 16px #ffffff' }}>
          
          <div className="text-center md:text-left">
            <div className="font-display font-extrabold text-2xl tracking-widest text-[#221f10] mb-2">
              NATURE <span className="text-[#606c38]">AI</span>
            </div>
            <p className="text-xs text-gray-500 font-light italic">
              Nature AI — Empowering the next frontier of natural data mapping.
            </p>
          </div>

          <button 
            className="magnetic-btn px-10 py-5 bg-[#606c38] hover:bg-moss text-white rounded-full font-sans font-bold tracking-wider text-sm flex items-center gap-3 shadow-md border border-[#E1DEC5] transition-all hover:scale-[1.03] active:scale-[0.98]"
            style={{ boxShadow: '6px 6px 12px #d1cfcb, -6px -6px 12px #ffffff' }}
          >
            <span>Enter Premium Mode ⚡</span>
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="text-center text-[10px] font-mono font-bold tracking-widest text-slate-400 mt-12 py-2">
          COSMIC CORE BIOME DIGITAL MATRIX v9.7
        </div>
      </footer>
    </div>
  );
}
