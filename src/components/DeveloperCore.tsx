import React from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { motion } from 'motion/react';

interface DeveloperCoreProps {
  onBack: () => void;
}

export default function DeveloperCore({ onBack }: DeveloperCoreProps) {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#2A2E2B] font-sans pb-24 relative overflow-x-hidden selection:bg-[#4B6C59] selection:text-white">
      {/* Dynamic Ceramic Top Header */}
      <div className="w-full bg-[#FAF9F5] border-b border-[#E8E5DF] py-6 px-8 sticky top-0 z-50 flex items-center justify-between shadow-sm">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-[#4B6C59] font-bold text-sm bg-white border border-[#E8E5DF] transition-all hover:scale-[1.03] hover:bg-[#F2F0EA] active:scale-[0.98] cursor-pointer"
          style={{ boxShadow: '4px 4px 10px #e1dfda, -4px -4px 10px #ffffff' }}
          id="btn-back-dev"
        >
          <ArrowLeft size={16} />
          <span>Back to Main Hub</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#E8E5DF]" style={{ boxShadow: 'inset 2px 2px 5px #e1dfda, inset -2px -2px 5px #ffffff' }}>
          <span className="w-2.5 h-2.5 rounded-full bg-[#4B6C59] animate-pulse"></span>
          <span className="text-[11px] uppercase tracking-widest font-mono font-bold text-[#4B6C59]">Nature AI — Developer Core</span>
        </div>

        <button 
          onClick={onBack}
          className="p-2.5 rounded-full bg-white border border-[#E8E5DF] transition-all hover:scale-[1.03] cursor-pointer"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>

      <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* ==================================================================== */}
        {/* 🏢 MAIN DEVELOPER CORE WRAPPER SECTION                               */}
        {/* ==================================================================== */}
        <div id="developer-core" className="w-full space-y-24">
            
            {/* [SECTION HEADER] */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto space-y-4"
            >
                <h2 className="font-serif italic text-4xl md:text-6xl font-bold tracking-tight text-[#2A2E2B] leading-tight">
                    The Neural Engine: <br/>
                    <span className="text-[#4B6C59] italic font-normal not-italic font-sans block mt-2 text-3xl md:text-5xl">Engineering Ecosystem Intelligence</span>
                </h2>
                <p className="text-base md:text-lg text-[#626864] font-medium leading-relaxed font-sans">
                    Transparent, robust, and precision-engineered architecture power the Nature AI ecosystem.
                </p>
            </motion.div>

            {/* ==================================================================== */}
            {/* 🛠️ ARCHITECTURE PART 1: THE NATURE AI ADVANCED TECH STACK             */}
            {/* ==================================================================== */}
            <div className="space-y-8">
                <div className="flex items-center space-x-3">
                    <span className="h-px w-8 bg-[#4B6C59]/30"></span>
                    <h3 className="text-xs uppercase font-bold tracking-widest text-[#4B6C59] font-mono">Architecture Spectrum Engine</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                    {/* Flutter Card */}
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className="bg-[#F9F7F2] rounded-[32px] p-8 md:p-10 space-y-4 transition-all duration-300 hover:-translate-y-1"
                      style={{ boxShadow: '12px 12px 28px #e3e0d8, -12px -12px 28px #ffffff' }}
                    >
                        <div className="w-12 h-12 rounded-2xl bg-[#4B6C59]/10 flex items-center justify-center text-[#4B6C59] font-bold text-xl">⚡</div>
                        <h4 className="text-xl font-bold text-[#2A2E2B] font-display">Cross-Platform Environment: Flutter Enterprise Framework</h4>
                        <p className="text-sm md:text-base text-[#555C57] leading-relaxed font-medium font-sans">
                            Built entirely inside a reactive Flutter development environment. We leverage fully optimized native bindings and hardware-accelerated rendering layers to ensure a fluid 60FPS UI execution flow across both modern and legacy Android systems.
                        </p>
                    </motion.div>

                    {/* Firebase Card */}
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      className="bg-[#F9F7F2] rounded-[32px] p-8 md:p-10 space-y-4 transition-all duration-300 hover:-translate-y-1"
                      style={{ boxShadow: '12px 12px 28px #e3e0d8, -12px -12px 28px #ffffff' }}
                    >
                        <div className="w-12 h-12 rounded-2xl bg-[#4B6C59]/10 flex items-center justify-center text-[#4B6C59] font-bold text-xl">🔥</div>
                        <h4 className="text-xl font-bold text-[#2A2E2B] font-display">Real-Time Cloud Infrastructure: Firebase Scaled Backend</h4>
                        <p className="text-sm md:text-base text-[#555C57] leading-relaxed font-medium font-sans">
                            Our backend pipeline runs on a distributed Firebase infrastructure matrix. We utilize encrypted Firestore clusters for low-latency user data persistence, Firebase Cloud Storage containers for secure high-resolution vision payload delivery, and edge-triggered Cloud Functions for lightning-fast API synchronization.
                        </p>
                    </motion.div>

                    {/* Agentic Card */}
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="bg-[#F9F7F2] rounded-[32px] p-8 md:p-10 space-y-4 transition-all duration-300 hover:-translate-y-1"
                      style={{ boxShadow: '12px 12px 28px #e3e0d8, -12px -12px 28px #ffffff' }}
                    >
                        <div className="w-12 h-12 rounded-2xl bg-[#4B6C59]/10 flex items-center justify-center text-[#4B6C59] font-bold text-xl">🧠</div>
                        <h4 className="text-xl font-bold text-[#2A2E2B] font-display">Core Processing Layer: Autonomous Agentic Workflows</h4>
                        <p className="text-sm md:text-base text-[#555C57] leading-relaxed font-medium font-sans">
                            Nature AI transcends standard static pattern matching. Our system deploys autonomous agentic workflows where multi-agent LLM systems reason dynamically. The agent correlates visual computer vision logs with environmental variables, historic migration charts, and real-time sensor streams to generate adaptive, hyper-contextual ecosystem reports.
                        </p>
                    </motion.div>

                    {/* Offline Card */}
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                      className="bg-[#F9F7F2] rounded-[32px] p-8 md:p-10 space-y-4 transition-all duration-300 hover:-translate-y-1"
                      style={{ boxShadow: '12px 12px 28px #e3e0d8, -12px -12px 28px #ffffff' }}
                    >
                        <div className="w-12 h-12 rounded-2xl bg-[#4B6C59]/10 flex items-center justify-center text-[#4B6C59] font-bold text-xl">🌲</div>
                        <h4 className="text-xl font-bold text-[#2A2E2B] font-display">Data Engineering: Offline-First Data Architecture</h4>
                        <p className="text-sm md:text-base text-[#555C57] leading-relaxed font-medium font-sans">
                            Engineered for the wilderness. By combining local SQLite database structures with intelligent model quantization, the app maintains core identification capabilities and essential utility functionality without an active network handshake, syncing securely with the cloud once a connection is re-established.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* ==================================================================== */}
            {/* 🚀 ARCHITECTURE PART 2: THE CURRENT CORE TECHNICAL PILLARS            */}
            {/* ==================================================================== */}
            <div className="space-y-8">
                <div className="flex items-center space-x-3">
                    <span className="h-px w-8 bg-[#4B6C59]/30"></span>
                    <h3 className="text-xs uppercase font-bold tracking-widest text-[#4B6C59] font-mono">Core Technical Pillars</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                    {/* Pillar 1 */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-[#F9F7F2] rounded-[32px] p-8 md:p-10 space-y-3"
                      style={{ boxShadow: '12px 12px 28px #e3e0d8, -12px -12px 28px #ffffff' }}
                    >
                        <div className="text-[#4B6C59] font-bold text-lg border-b border-[#4B6C59]/10 pb-2 font-display">01 / Multi-Modal Neural Pipelines</div>
                        <p className="text-sm md:text-base text-[#464D48] leading-relaxed font-medium tracking-wide">
                            Hamara identification engine multi-modal convolutional neural network (CNN) architecture par operate karta hy. Hum flora, insects, fish, aur birds ke visual inputs ko process karke milliseconds mein high-confidence inference results deliver karte hain.
                        </p>
                    </motion.div>

                    {/* Pillar 2 */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-[#F9F7F2] rounded-[32px] p-8 md:p-10 space-y-3"
                      style={{ boxShadow: '12px 12px 28px #e3e0d8, -12px -12px 28px #ffffff' }}
                    >
                        <div className="text-[#4B6C59] font-bold text-lg border-b border-[#4B6C59]/10 pb-2 font-display">02 / Taxonomic Validation Matrix</div>
                        <p className="text-sm md:text-base text-[#464D48] leading-relaxed font-medium tracking-wide">
                            Accuracy hamari priority hy. Hum global biological databases ko real-time taxonomic verification layers ke sath integrate karte hain taake har scan scientific-grade identification aur ecological integrity ke sath match ho.
                        </p>
                    </motion.div>

                    {/* Pillar 3 */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-[#F9F7F2] rounded-[32px] p-8 md:p-10 space-y-3"
                      style={{ boxShadow: '12px 12px 28px #e3e0d8, -12px -12px 28px #ffffff' }}
                    >
                        <div className="text-[#4B6C59] font-bold text-lg border-b border-[#4B6C59]/10 pb-2 font-display">03 / Agentic Intelligence Framework</div>
                        <p className="text-sm md:text-base text-[#464D48] leading-relaxed font-medium tracking-wide">
                            Nature AI sirf &apos;dekhta&apos; nahi, balki &apos;sochta&apos; hy. Hamara autonomous agentic framework visual markers ko user ki geolocation, seasonal data, aur behavioral patterns ke sath correlate karke contextual care diagnostics provide karta hy.
                        </p>
                    </motion.div>

                    {/* Pillar 4 */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-[#F9F7F2] rounded-[32px] p-8 md:p-10 space-y-3"
                      style={{ boxShadow: '12px 12px 28px #e3e0d8, -12px -12px 28px #ffffff' }}
                    >
                        <div className="text-[#4B6C59] font-bold text-lg border-b border-[#4B6C59]/10 pb-2 font-display">04 / Latency-Optimized Global Edge</div>
                        <p className="text-sm md:text-base text-[#464D48] leading-relaxed font-medium tracking-wide">
                            Humne apne pipelines ko edge-device performance ke liye optimize kiya hy. Model quantization aur localized processing ki wajah se Nature AI low-bandwidth ya remote outdoor areas mein bhi robust performance deta hy.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* ==================================================================== */}
            {/* 🌐 ARCHITECTURE PART 3: GLOBAL CONNECTIVITY HUB                     */}
            {/* ==================================================================== */}
            <div className="space-y-8">
                <div className="flex items-center space-x-3">
                    <span className="h-px w-8 bg-[#4B6C59]/30"></span>
                    <h3 className="text-xs uppercase font-bold tracking-widest text-[#4B6C59] font-mono">Global Connectivity Hub</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans">
                    {/* Multilingual Node */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="bg-[#F5F3ED] rounded-[32px] p-8 flex flex-col items-start gap-6 border border-[#E8E5DF]"
                      style={{ boxShadow: 'inset 6px 6px 12px #dad7cf, inset -6px -6px 12px #ffffff' }}
                    >
                        <div className="space-y-2">
                            <div className="text-xs uppercase tracking-widest font-bold text-[#4B6C59] font-mono">Translation Pipeline</div>
                            <h4 className="text-xl font-bold text-[#2A2E2B] font-display">Multilingual Neural Translation</h4>
                            <p className="text-sm text-[#555C57] leading-relaxed font-semibold">
                                Hamara backend identification output ko 15+ regional languages mein dynamically map karta hy. Is se scientific terms aapki apni zaban mein readable aur accurate ho jate hain.
                            </p>
                        </div>
                    </motion.div>

                    {/* Geolocation Node */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="bg-[#F5F3ED] rounded-[32px] p-8 flex flex-col items-start gap-6 border border-[#E8E5DF]"
                      style={{ boxShadow: 'inset 6px 6px 12px #dad7cf, inset -6px -6px 12px #ffffff' }}
                    >
                        <div className="space-y-2">
                            <div className="text-xs uppercase tracking-widest font-bold text-[#4B6C59] font-mono">Location Subsystem</div>
                            <h4 className="text-xl font-bold text-[#2A2E2B] font-display">Geolocation Species Mapping</h4>
                            <p className="text-sm text-[#555C57] leading-relaxed font-semibold">
                                Advanced native GPS tracking ke zariye hamara system 200ms se bhi kam waqt mein aapke kareeb maujood species ka interactive vector grid fetch kar leta hy.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ==================================================================== */}
            {/* 🌍 ARCHITECTURE PART 4: GLOBAL FUTURE PIPELINE (SISTER SHOWCASE)     */}
            {/* ==================================================================== */}
            <div className="space-y-8">
                <div className="flex items-center space-x-3">
                    <span className="h-px w-8 bg-[#D67B55]/30"></span>
                    <h3 className="text-xs uppercase font-bold tracking-widest text-[#D67B55] font-mono">Global Future Pipeline</h3>
                </div>

                {/* Future Project Blueprint Container */}
                <motion.div 
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#F9F7F2] rounded-[40px] p-8 md:p-12 relative overflow-hidden transition-all duration-300 border-2 border-[rgba(214,123,85,0.15)] hover:border-[rgba(214,123,85,0.3)]"
                  style={{ boxShadow: '14px 14px 32px #e3e0d8, -14px -14px 32px #ffffff' }}
                >
                    {/* Subtle Top Accent Overlay Decorative Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D67B55]/50 via-[#D67B55] to-[#D67B55]/50"></div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10 font-sans">
                        <div className="lg:col-span-1 space-y-3">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#D67B55]/10 text-[#D67B55] text-xs font-bold uppercase tracking-wider font-mono">
                                In Active R&D Phase
                            </span>
                            <h4 className="text-3xl md:text-4xl font-bold text-[#2A2E2B] leading-tight font-serif italic">
                                Global Ecosystem Innovation Pipeline
                            </h4>
                            <div className="text-sm font-semibold text-[#D67B55] uppercase tracking-wide font-mono">
                                Focus: AI Medicine & Medical Report Identifier
                            </div>
                        </div>
                        
                        <div className="lg:col-span-2">
                            <p className="text-sm md:text-base text-[#464D48] leading-relaxed font-semibold tracking-wide">
                                Our development core is actively scaling into global healthcare frontiers. We are currently engineering a massive worldwide medical intelligence platform dedicated to Human Safety and accessible healthcare tips. Built as an open-access system, this application acts as an intelligent Medical Report Identifier and personalized health manager. 
                                <br/><br/>
                                Featuring a complex matrix of over 60+ specialized features—including advanced molecular compound checkers, symptom analysis algorithms, and the world’s most comprehensive medicine core utility toolkit—this upcoming ecosystem is designed to establish a new global benchmark for digital health check optimization and free preventive care distribution.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ==================================================================== */}
            {/* 🛠️ TECH STACK BADGES FOOTER BAR                                     */}
            {/* ==================================================================== */}
            <div className="w-full pt-8 border-t border-[#4B6C59]/10">
                <div className="flex flex-wrap items-center justify-center gap-3 text-center font-mono">
                    <span className="px-4 py-2 rounded-xl bg-[#F5F3ED] text-[#555C57] text-xs font-bold tracking-wide shadow-[2px_2px_6px_#e3e0d8]">Flutter SDK</span>
                    <span className="px-4 py-2 rounded-xl bg-[#F5F3ED] text-[#555C57] text-xs font-bold tracking-wide shadow-[2px_2px_6px_#e3e0d8]">Firebase Cloud Services</span>
                    <span className="px-4 py-2 rounded-xl bg-[#F5F3ED] text-[#555C57] text-xs font-bold tracking-wide shadow-[2px_2px_6px_#e3e0d8]">Agentic Core AI Workflows</span>
                    <span className="px-4 py-2 rounded-xl bg-[#F5F3ED] text-[#555C57] text-xs font-bold tracking-wide shadow-[2px_2px_6px_#e3e0d8]">CNN Multi-Vision Pipelines</span>
                    <span className="px-4 py-2 rounded-xl bg-[#F5F3ED] text-[#555C57] text-xs font-bold tracking-wide shadow-[2px_2px_6px_#e3e0d8]">Localized Node Optimization</span>
                    <span className="px-4 py-2 rounded-xl bg-[#F5F3ED] text-[#555C57] text-xs font-bold tracking-wide shadow-[2px_2px_6px_#e3e0d8]">Medical Intelligence Framework</span>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
