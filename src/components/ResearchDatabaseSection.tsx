import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Satellite as SatelliteIcon, 
  Plane, 
  Volume2, 
  Ship, 
  Scan, 
  Cpu, 
  Anchor, 
  Camera, 
  Activity, 
  Dna, 
  Compass, 
  ArrowUp, 
  ArrowRight,
  Database,
  CheckCircle2,
  Play,
  Maximize2,
  Layers
} from 'lucide-react';

// Define typed interface for scientific tools
interface ResearchTool {
  id: string;
  num: string;
  title: string;
  resolution: string;
  dataType: string;
  description?: string;
  listItems: string[];
  graphicUrl: string;
  images: string[];
  videos?: string[];
  caption?: string;
  accentColor: string;
}

const RESEARCH_TOOLS_DATA: ResearchTool[] = [
  {
    id: "satellite",
    num: "01",
    title: "Remote Sensing - Satellite",
    resolution: "60m",
    dataType: "Habitat and Communities Data",
    description: "Multi-spectral satellite sensors provide broad-scale monitoring of marine environmental conditions and phytoplankton dynamics across global sea basins.",
    listItems: [
      "Phytoplankton tracking and chlorophyll distribution",
      "Marine environment characterization and surface temperature",
      "Bathymetry profiles and seabed scanning indices",
      "Broad scale habitat mapping for ecosystem protection"
    ],
    graphicUrl: "https://obama-next.eu/technologies/wp-content/uploads/2024/07/H0202_OBAMA_ilustracoes_satelite.svg",
    images: ["https://obama-next.eu/technologies/wp-content/uploads/2024/07/satelite-HD-1024x683.jpg"],
    accentColor: "from-blue-600 to-cyan-500"
  },
  {
    id: "drone",
    num: "02",
    title: "Drone and Aerial Platforms",
    resolution: "0.004 to 0.1m",
    dataType: "Habitat and Communication Data",
    description: "Highly focused drone mapping capturing hyper-resolution imagery of costal ecosystems, marine mammals, bird sanctuaries and flora distributions.",
    listItems: [
      "Benthic communities high-contrast monitoring",
      "Phytoplankton community local scanning and diagnostics",
      "Marine mammals pod observation and tracking",
      "Avian population dynamics and bird nesting site mapping"
    ],
    graphicUrl: "https://obama-next.eu/technologies/wp-content/uploads/2024/07/part2-drone.svg",
    images: [
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/drone-01-1024x576.jpg",
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/drone-02-1024x575.jpg",
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/drone-03-1024x819.jpg"
    ],
    accentColor: "from-teal-600 to-emerald-500"
  },
  {
    id: "acoustics",
    num: "03",
    title: "Acoustics",
    resolution: "0.001 to 0.5m",
    dataType: "Habitat and Communities Data",
    description: "Sonar and echo systems map underwater topography, seafloor hardness, pelagic fish schools and marine soundscapes seamlessly.",
    listItems: [
      "Gross benthic communities structure profiling",
      "Pelagic communities biomass and school density levels",
      "Marine mammals vocal behavior recording (Passive Acoustics)"
    ],
    graphicUrl: "https://obama-next.eu/technologies/wp-content/uploads/2024/07/part2-barco1.svg",
    images: [
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/acoustics-01-1024x838.jpg",
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/acoustics-02-1024x821.jpeg",
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/acoustics-03.jpg"
    ],
    accentColor: "from-indigo-600 to-violet-500"
  },
  {
    id: "ferrybox",
    num: "04",
    title: "Ferrybox System",
    resolution: "10 to 1000m",
    dataType: "Habitat and Communities Data",
    description: "Automated, cost-efficient flow-through sensor packages installed on commercial vessels collect near real-time surface water parameters.",
    listItems: [
      "Plankton communities density and dynamic blooms",
      "Continuous chemical analysis for regional ocean health",
      "Salinity, temperature, oxygen, and pH telemetry"
    ],
    graphicUrl: "https://obama-next.eu/technologies/wp-content/uploads/2024/07/PART2-slide-3-barco.svg",
    images: ["https://obama-next.eu/technologies/wp-content/uploads/2024/07/Asset-6.png"],
    videos: [
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/04-ferribox-01.mp4",
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/04-ferribox-02.mp4"
    ],
    accentColor: "from-sky-600 to-blue-500"
  },
  {
    id: "science",
    num: "05",
    title: "Nature AI Citizen Science",
    resolution: "Proximate Vessel / Human Point",
    dataType: "Habitat and Communities Data",
    description: "Empowering scientists, divers, and members of the public to record live marine sightings globally. Powered by Nature AI deep visual classification models.",
    listItems: [
      "Species identification, community distribution and habitats",
      "AI-driven instant matching for any bird or fish in seconds",
      "Dynamic data upload with accurate location metadata coordination"
    ],
    graphicUrl: "https://obama-next.eu/technologies/wp-content/uploads/2024/07/part2-slider-4-man-telescope.svg",
    images: [
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/CITIZEN-001-1024x682.jpg",
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/CITIZEN-002-1024x683.jpg",
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/CITIZEN-003-1024x715.jpg"
    ],
    accentColor: "from-amber-600 to-orange-500"
  },
  {
    id: "optics",
    num: "06",
    title: "Optic Sensors & Buoys",
    resolution: "10m Point",
    dataType: "Physico-Chemical & Biological Parameters",
    description: "Deep sea sensors tracking immediate changes in ocean properties like heat absorption, photosynthetic active radiation, and nutrient levels.",
    listItems: [
      "Physico-Chemical profiling (Conductivity, Temperature, Pressure)",
      "Biological indicator telemetry (chlorophyll-a concentration)",
      "High-durability buoy nodes with satellite transmission up-links"
    ],
    graphicUrl: "https://obama-next.eu/technologies/wp-content/uploads/2024/07/part2-slider5-sensor.svg",
    images: [
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/boia-01-1024x614.png",
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/boia-02.png",
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/boia-03-1024x761.jpg",
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/boia-04.png"
    ],
    accentColor: "from-fuchsia-600 to-rose-500"
  },
  {
    id: "diving",
    num: "07",
    title: "Scientific Diving Surveys",
    resolution: "Exact underwater point",
    dataType: "Biological & Habitat Characterization",
    description: "In-situ scientific inspections conducted by certified divers to gather rich qualitative and structural parameters of complex marine habitats.",
    listItems: [
      "Biological communities characterization (plankton, fish, megafauna)",
      "Marine mammals encounter diagnostics and underwater photography",
      "Habitat health index (seagrass meadows, reefs, kelp structure)"
    ],
    graphicUrl: "https://obama-next.eu/technologies/wp-content/uploads/2024/07/Asset-2.svg",
    images: [
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/mergulhadores-02.jpg",
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/mergulhadores-03-1024x640.jpg",
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/camera-fotos-01-1024x729.jpg"
    ],
    accentColor: "from-emerald-600 to-cyan-500"
  },
  {
    id: "camera",
    num: "08",
    title: "Underwater Cameras & Scanners",
    resolution: "Millimetric / Micro-exact",
    dataType: "Visual Species Identification",
    description: "Continuous camera monitoring arrays. Simply scan, point, capture and let our trained models classify benthic animals and swimming species instantaneously.",
    listItems: [
      "Underwater camera visual triggers for motion capture",
      "Nature AI offline-capable image recognition for marine fauna",
      "Highly stable, light-balanced, deep-sea enclosure designs"
    ],
    graphicUrl: "https://obama-next.eu/technologies/wp-content/uploads/2024/07/diver-5.svg",
    images: [
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/Underwater-Camera​-02-1024x683.jpg",
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/Underwater-Camera​-03-1024x768.jpg"
    ],
    videos: ["https://obama-next.eu/technologies/wp-content/uploads/2024/07/Underwater-Camera_.mp4"],
    caption: "©Metsähallitus / Parks and Wildlife Finland / Joakim Sjöroos and Juuso Haapaniemi",
    accentColor: "from-cyan-600 to-blue-600"
  },
  {
    id: "biologging",
    num: "09",
    title: "Biologging Technology",
    resolution: "0.05 to 0.5m Tracked",
    dataType: "Animal Behaviour & Movement",
    description: "Miniature bio-sensors mounted directly on species to read telemetry from inside their habitat, capturing physical variables alongside movement.",
    listItems: [
      "Fauna migratory distribution and individual hunting habits",
      "Sub-second dive depth profiles, acceleration, and heart rates",
      "Hydrodynamic sensors that prevent irritation or tracking drag"
    ],
    graphicUrl: "https://obama-next.eu/technologies/wp-content/uploads/2024/07/shark.svg",
    images: [
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/sensores-01-1024x683.jpg",
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/sensores-02.jpg",
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/sensores-03-1024x726.jpg"
    ],
    accentColor: "from-red-600 to-orange-500"
  },
  {
    id: "edna",
    num: "10",
    title: "Environmental DNA (eDNA)",
    resolution: "60m spatial diffusion",
    dataType: "Biodiversity & Genetic Profiles",
    description: "Extracting suspended genetic tracks left behind by marine fauna inside water. Allows remote surveying without active biological capture.",
    listItems: [
      "Cryptic species presence proof without visual contact",
      "Fractions of water processed for biodiversity mapping",
      "Rapid qPCR sequencing and meta-barcoding of oceans"
    ],
    graphicUrl: "https://obama-next.eu/technologies/wp-content/uploads/2024/07/lupa.svg",
    images: [
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/edna-01-1024x768.jpg",
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/edna-02-1024x768.jpg"
    ],
    accentColor: "from-purple-600 to-fuchsia-500"
  },
  {
    id: "rov_auv",
    num: "11",
    title: "ROV and AUV Submersibles",
    resolution: "0.05 to 0.5m",
    dataType: "Deep-sea communities & bathymetry",
    description: "Remotely Operated Vehicles (ROVs) and Autonomous Underwater Vehicles (AUVs) exploring marine environments up to several kilometers deep.",
    listItems: [
      "Benthic habitat survey in extremely cold and high-pressure zones",
      "Targeted benthic collection using articulated manipulator claws",
      "Live 4K optical and sonar streaming to survey vessels"
    ],
    graphicUrl: "https://obama-next.eu/technologies/wp-content/uploads/2024/07/ROV.svg",
    images: [
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/VELMU2013_Four-horned_sculpin-1024x576.jpg",
      "https://obama-next.eu/technologies/wp-content/uploads/2024/07/VELMU2013_Saduria_tracks-1024x576.jpg"
    ],
    caption: "©Syke / VELMU / Ville Karvinen | A four-horned sculpin on the seafloor at 33m, Archipelago Sea",
    accentColor: "from-teal-600 to-blue-500"
  }
];

export function ResearchDatabaseSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [photoIndex, setPhotoIndex] = useState<{ [key: string]: number }>({});
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const activeTool = RESEARCH_TOOLS_DATA[activeTab];

  // Initialize photo indices for toggling multiple images inside a tool card
  useEffect(() => {
    const indices: { [key: string]: number } = {};
    RESEARCH_TOOLS_DATA.forEach(t => {
      indices[t.id] = 0;
    });
    setPhotoIndex(indices);
    
    // Dynamically update page title if relevant
    document.title = "Nature AI tools";
  }, []);

  const handleNextPhoto = (toolId: string, max: number) => {
    setPhotoIndex(prev => ({
      ...prev,
      [toolId]: (prev[toolId] + 1) % max
    }));
  };

  const selectedPhoto = activeTool.images[photoIndex[activeTool.id] || 0] || activeTool.images[0];

  const scrollUpToStart = () => {
    const el = document.getElementById('research-database-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="research-database-section" 
      className="relative w-full py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-white relative z-20 border-t border-white/5 overflow-hidden select-none"
    >
      {/* Decorative high-tech background grids & ambient light highlights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#09090b_1px,transparent_1px),linear-gradient(to_bottom,#09090b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40 z-0"></div>
      
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-[24rem] h-[24rem] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Custom Header requested by user strictly matching his exact facts query */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70 backdrop-blur-md mb-4"
          >
            <Database className="w-3.5 h-3.5 text-cyan-400" />
            <span>NATURE AI Research tools and Database</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-sans font-medium tracking-tight bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent uppercase leading-tight"
          >
            EXPLORE ALL THE TOOLS INSIDE NATURE AI
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-sm md:text-base text-zinc-400 font-mono tracking-wide max-w-2xl mx-auto"
          >
            Featuring sunlight checker, bird call identifier, aquarium tools, soil moisture tracker, and many more ecosystem utilities.
          </motion.p>
        </div>

        {/* Dynamic Interactive Explorer Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start min-h-[680px]">
          
          {/* LEFT COLUMN: Horizontal / vertical Selector list */}
          <div className="lg:col-span-4 flex flex-col gap-2 max-h-[640px] overflow-y-auto pr-2 custom-scrollbar">
            <div className="text-xs uppercase tracking-wider text-zinc-500 font-mono mb-2 px-3 flex items-center justify-between">
              <span>Sensor Platforms</span>
              <span>11 Systems</span>
            </div>
            
            {RESEARCH_TOOLS_DATA.map((tool, index) => {
              const isActive = index === activeTab;
              return (
                <button
                  key={tool.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-300 group cursor-pointer ${
                    isActive 
                      ? 'bg-white/5 border-white/20 text-white shadow-lg bg-gradient-to-r from-white/[0.04] to-transparent' 
                      : 'bg-transparent border-transparent text-zinc-400 hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  {/* Underline/border indicator on active */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator" 
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-indigo-500 rounded-l"
                    />
                  )}
                  
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs ${isActive ? 'text-cyan-400' : 'text-zinc-600'}`}>
                      {tool.num}
                    </span>
                    <div>
                      <h4 className="text-sm font-medium transition-colors group-hover:text-white">
                        {tool.title}
                      </h4>
                      <p className="text-[11px] font-mono text-zinc-500 mt-0.5">
                        Res: <span className="text-zinc-400">{tool.resolution}</span>
                      </p>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 opacity-0 transition-all ${
                    isActive ? 'opacity-100 text-cyan-400 translate-x-0' : 'group-hover:opacity-40 group-hover:translate-x-1'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Feature presentation with graphics and toggling pictures */}
          <div className="lg:col-span-8 bg-zinc-950/40 border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden min-h-[610px] flex flex-col justify-between">
            
            {/* Holographic glowing orb background matching active theme */}
            <div className={`absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-br ${activeTool.accentColor} opacity-[0.03] blur-[70px] pointer-events-none`} />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10 w-full grow">
              
              {/* Detailed Specs Text */}
              <div className="md:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/50 tracking-wider">
                      Platform {activeTool.num}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-400/20 text-[10px] font-mono text-cyan-400 tracking-wider">
                      Res: {activeTool.resolution}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-2">
                    {activeTool.title}
                  </h3>

                  <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4">
                    {activeTool.dataType}
                  </p>

                  <p className="text-xs md:text-sm text-zinc-300 leading-relaxed max-w-md mb-6">
                    {activeTool.description}
                  </p>

                  {/* Fact Bullet items */}
                  <div className="space-y-3 mb-6">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Diagnostics Tracked</span>
                    {activeTool.listItems.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-tight">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Satellite Specific / Generic Graphic Overlay */}
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center">
                    {activeTool.num === "01" && <SatelliteIcon className="w-5 h-5 text-cyan-400" />}
                    {activeTool.num === "02" && <Plane className="w-5 h-5 text-emerald-400" />}
                    {activeTool.num === "03" && <Volume2 className="w-5 h-5 text-violet-400" />}
                    {activeTool.num === "04" && <Ship className="w-5 h-5 text-sky-400" />}
                    {activeTool.num === "05" && <Scan className="w-5 h-5 text-amber-400" />}
                    {activeTool.num === "06" && <Cpu className="w-5 h-5 text-rose-400" />}
                    {activeTool.num === "07" && <Anchor className="w-5 h-5 text-emerald-400" />}
                    {activeTool.num === "08" && <Camera className="w-5 h-5 text-blue-400" />}
                    {activeTool.num === "09" && <Activity className="w-5 h-5 text-red-400" />}
                    {activeTool.num === "10" && <Dna className="w-5 h-5 text-purple-400" />}
                    {activeTool.num === "11" && <Compass className="w-5 h-5 text-teal-400" />}
                  </div>
                  <div>
                    <h5 className="text-[11px] font-mono text-zinc-400 uppercase">Live Sensor Link</h5>
                    <p className="text-[10px] text-emerald-400 font-mono flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      ACTIVE TRANSMITTING PROTOCOL
                    </p>
                  </div>
                </div>
              </div>

              {/* Graphical Panel: Vector + Photographic Slideshow */}
              <div className="md:col-span-5 flex flex-col gap-4 w-full">
                {/* 1. Vector Blueprint Aspect (Original OBAMA vectors) */}
                <div className="relative aspect-video rounded-xl bg-zinc-900/40 border border-white/5 p-4 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/80 pointer-events-none z-10" />
                  {imageErrors[activeTool.graphicUrl] ? (
                    <div className="flex flex-col items-center justify-center p-6 text-center text-zinc-400 font-mono">
                      <Layers className="w-8 h-8 text-cyan-400/80 mb-2 animate-pulse" />
                      <span className="text-[10px] uppercase text-cyan-400 tracking-wider">Blueprint Graphic Offline</span>
                      <span className="text-[8px] text-zinc-600 mt-0.5">Showing alternative vector mock</span>
                    </div>
                  ) : (
                    <img 
                      src={activeTool.graphicUrl} 
                      alt="System Blueprint" 
                      onError={() => {
                        setImageErrors(prev => ({ ...prev, [activeTool.graphicUrl]: true }));
                      }}
                      className="max-h-24 md:max-h-32 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all transform hover:scale-105 relative z-0" 
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-black/60 border border-white/10 rounded font-mono text-[9px] text-zinc-500">
                    BLUEPRINT
                  </div>
                </div>

                {/* 2. Photographic In-Situ Visual */}
                <div className="relative aspect-video rounded-xl bg-zinc-900 border border-white/5 overflow-hidden group">
                  
                  {activeTool.videos ? (
                    <div className="w-full h-full relative">
                      <video 
                        key={activeTool.videos[0]}
                        src={activeTool.videos[0]} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-full object-cover filter brightness-90 saturate-50 group-hover:saturate-100 transition-all duration-300"
                      />
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-cyan-500/95 text-black font-semibold rounded font-mono text-[9px] uppercase tracking-wider flex items-center gap-1">
                        <Play className="w-2.5 h-2.5 fill-black" /> Video Feed
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full relative">
                      {imageErrors[selectedPhoto] ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950 p-6 text-center text-zinc-400 font-mono">
                          <Compass className="w-10 h-10 text-cyan-400/40 mb-2 animate-pulse" />
                          <span className="text-[10px] uppercase text-cyan-400 tracking-wider">Imagery Data Feed Enroute</span>
                          <span className="text-[8px] text-zinc-600 mt-1">Satellite deep connectivity active</span>
                        </div>
                      ) : (
                        <AnimatePresence mode="wait">
                          <motion.img 
                            key={selectedPhoto}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            src={selectedPhoto} 
                            alt="Real Observation Frame" 
                            onError={() => {
                              setImageErrors(prev => ({ ...prev, [selectedPhoto]: true }));
                            }}
                            className="w-full h-full object-cover filter saturate-50 brightness-75 group-hover:saturate-100 group-hover:brightness-95 transition-all duration-300"
                            referrerPolicy="no-referrer"
                          />
                        </AnimatePresence>
                      )}

                      {/* Multi-Photo Toggler Indicator */}
                      {activeTool.images.length > 1 && (
                        <button 
                          onClick={() => handleNextPhoto(activeTool.id, activeTool.images.length)}
                          className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 hover:bg-black border border-white/10 rounded text-[9px] font-mono text-zinc-300 flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <span>Toggle view</span>
                          <span className="text-cyan-400">({(photoIndex[activeTool.id] || 0) + 1}/{activeTool.images.length})</span>
                        </button>
                      )}
                      
                      <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-black/60 border border-white/10 rounded font-mono text-[9px] text-zinc-500">
                        HD IN-SITU FILE
                      </div>
                    </div>
                  )}
                </div>

                {/* Caption presentation under photography */}
                {activeTool.caption && (
                  <p className="text-[10px] text-zinc-500 italic leading-tight text-center mt-1 px-2">
                    {activeTool.caption}
                  </p>
                )}
              </div>

            </div>

            {/* Quick interactive navigation indicators */}
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <span>Active Sensor:</span>
                <span className="text-white font-medium uppercase tracking-wider">{activeTool.id.replace("_", " ")}</span>
              </div>
              <div className="flex items-center gap-1">
                {RESEARCH_TOOLS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === activeTab ? 'w-4 bg-cyan-400' : 'bg-zinc-700 hover:bg-zinc-500'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Co-funded and project grant agreement info footer mimicking past layout exactly */}
        <div className="mt-20 pt-10 border-t border-white/5 grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-zinc-500 font-mono text-[11px] leading-relaxed select-none">
          
          <div className="md:col-span-4 flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
            {!imageErrors['eu-logo'] ? (
              <img 
                src="https://obama-next.eu/technologies/wp-content/uploads/2024/08/EN-Co-Funded-by-the-EU_POS-2048x430-1-1024x215.png" 
                alt="Co-funded by the EU" 
                onError={() => setImageErrors(prev => ({ ...prev, 'eu-logo': true }))}
                className="h-9 object-contain filter saturate-0 hover:saturate-100 opacity-60 hover:opacity-100 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            ) : (
              <span className="text-[10px] font-mono tracking-wider px-2 py-1 border border-white/10 rounded bg-white/5 text-zinc-400">
                [ EU CO-FUNDED ]
              </span>
            )}
            {!imageErrors['ukri-logo'] ? (
              <img 
                src="https://obama-next.eu/technologies/wp-content/uploads/2024/08/UKRI20logo-300x88-1.png" 
                alt="UKRI" 
                onError={() => setImageErrors(prev => ({ ...prev, 'ukri-logo': true }))}
                className="h-9 object-contain filter saturate-0 hover:saturate-100 opacity-60 hover:opacity-100 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            ) : (
              <span className="text-[10px] font-mono tracking-wider px-2 py-1 border border-white/10 rounded bg-white/5 text-zinc-400">
                [ UKRI PARTNER ]
              </span>
            )}
          </div>

          <div className="md:col-span-5 text-center md:text-left text-zinc-400 text-[10px] md:text-xs">
            <p className="font-bold text-white mb-1">Grant Agreement 101081642 – OBAMA-NEXT</p>
            <p className="text-zinc-500">
              Approved under HORIZON-CL6-2022-BIODIV-01-01: Observing and mapping biodiversity and ecosystems, with focus on coastal and marine ecosystems. Funded by the EU and UK Research and Innovation.
            </p>
          </div>

          <div className="md:col-span-3 flex justify-center md:justify-end gap-4 text-[10px]">
            <button 
              onClick={scrollUpToStart}
              className="flex items-center gap-1.5 hover:text-white px-3 py-1.5 border border-white/5 rounded-lg bg-zinc-900/50 hover:bg-zinc-900 cursor-pointer transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to section top</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
