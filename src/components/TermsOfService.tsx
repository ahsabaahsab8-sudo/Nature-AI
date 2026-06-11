import React from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { motion } from 'motion/react';

interface TermsOfServiceProps {
  onBack: () => void;
}

export default function TermsOfService({ onBack }: TermsOfServiceProps) {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#2A2E2B] font-sans pb-24 relative overflow-x-hidden selection:bg-[#4B6C59] selection:text-white">
      {/* Dynamic Ceramic Top Header */}
      <div className="w-full bg-[#FAF9F5] border-b border-[#E8E5DF] py-6 px-8 sticky top-0 z-50 flex items-center justify-between shadow-sm">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-[#4B6C59] font-bold text-sm bg-white border border-[#E8E5DF] transition-all hover:scale-[1.03] hover:bg-[#F2F0EA] active:scale-[0.98] cursor-pointer"
          style={{ boxShadow: '4px 4px 10px #e1dfda, -4px -4px 10px #ffffff' }}
          id="btn-back-terms"
        >
          <ArrowLeft size={16} />
          <span>Back to Main Hub</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#E8E5DF]" style={{ boxShadow: 'inset 2px 2px 5px #e1dfda, inset -2px -2px 5px #ffffff' }}>
          <span className="w-2.5 h-2.5 rounded-full bg-[#D67B55] animate-pulse"></span>
          <span className="text-[11px] uppercase tracking-widest font-mono font-bold text-[#D67B55]">Nature AI — Terms of Service</span>
        </div>

        <button 
          onClick={onBack}
          className="p-2.5 rounded-full bg-white border border-[#E8E5DF] transition-all hover:scale-[1.03] cursor-pointer"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>

      <div className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        {/* ==================================================================== */}
        {/* 📄 TERMS OF SERVICE MASTER CONTAINER                                 */}
        {/* ==================================================================== */}
        <motion.main 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#F9F7F2] rounded-[48px] p-8 md:p-20 space-y-20 border border-[rgba(255,255,255,0.4)]"
          style={{ boxShadow: '20px 20px 60px #e3e0d8, -20px -20px 60px #ffffff' }}
        >
            
            {/* [HEADER SECTION] */}
            <div className="text-center space-y-6 border-b border-[#4B6C59]/10 pb-12">
                <div className="inline-block px-5 py-2 rounded-full bg-[#4B6C59]/10 text-[#4B6C59] text-xs font-bold uppercase tracking-[0.2em] font-mono">
                    Legal Framework v2.0
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-[#2A2E2B] font-serif">
                    Terms of <span className="text-[#4B6C59] italic font-normal">Service</span>
                </h1>
                <p className="max-w-2xl mx-auto text-[#626864] font-medium leading-relaxed font-sans">
                    Nature AI Ecosystem: Establishing the legal boundaries and operational protocols for our global natural intelligence platforms.
                </p>
            </div>

            {/* [1. ACCEPTANCE OF TERMS] */}
            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#4B6C59] text-white flex items-center justify-center font-bold font-sans">1</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2A2E2B] font-display">Acceptance of Terms</h2>
                </div>
                <div className="bg-[#F5F3ED] rounded-3xl p-8" style={{ boxShadow: 'inset 6px 6px 12px #dad7cf, inset -6px -6px 12px #ffffff' }}>
                    <p className="text-base md:text-lg text-[#464D48] leading-relaxed font-semibold italic font-sans text-center md:text-left">
                        &quot;By downloading, installing, or accessing the Nature AI mobile application or web dashboards, you explicitly agree to comply with and be bound by these Terms of Service.&quot;
                    </p>
                </div>
            </section>

            {/* [2. PERMITTED USE & PERMISSIONS] */}
            <section className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#4B6C59] text-white flex items-center justify-center font-bold font-sans">2</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2A2E2B] font-display">Permitted Use & App Permissions</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div 
                      whileHover={{ translateY: -8, scale: 1.01 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="bg-[#F9F7F2] rounded-[32px] p-8 space-y-3 border border-[rgba(255,255,255,0.4)]"
                      style={{ boxShadow: '8px 8px 24px #e3e0d8, -8px -8px 24px #ffffff' }}
                    >
                        <h4 className="font-bold text-[#4B6C59] uppercase tracking-wide text-sm font-mono">Identification Integrity</h4>
                        <p className="text-sm md:text-base text-[#555C57] leading-relaxed font-semibold font-sans">
                            The application's multi-vision scanner is strictly designed to process real nature samples (such as flora, insects, fish, and birds). Any automated bots or spam requests attempting API extraction will be immediately blocked.
                        </p>
                    </motion.div>
                    <motion.div 
                      whileHover={{ translateY: -8, scale: 1.01 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="bg-[#F9F7F2] rounded-[32px] p-8 space-y-3 border border-[rgba(255,255,255,0.4)]"
                      style={{ boxShadow: '8px 8px 24px #e3e0d8, -8px -8px 24px #ffffff' }}
                    >
                        <h4 className="font-bold text-[#4B6C59] uppercase tracking-wide text-sm font-mono">Hardware Alignment</h4>
                        <p className="text-sm md:text-base text-[#555C57] leading-relaxed font-semibold font-sans">
                            The analytical tools (including the Lux Meter and Water Quality Checker) depend directly on the device's native sensors and camera accuracy. Consequently, users are permitted to access these utilities matching our specified target guidelines.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* [3. GEOLOCATION & MULTILINGUAL] */}
            <section className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#4B6C59] text-white flex items-center justify-center font-bold font-sans">3</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2A2E2B] font-display">Geolocation & Multilingual Systems</h2>
                </div>
                <div className="bg-[#F5F3ED] rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10" style={{ boxShadow: 'inset 6px 6px 12px #dad7cf, inset -6px -6px 12px #ffffff' }}>
                    <div className="space-y-3">
                        <div className="text-xs font-black text-[#626864] uppercase tracking-widest font-mono">Location Coordinates</div>
                        <p className="text-sm text-[#464D48] leading-relaxed font-semibold font-sans">
                            Proximity Radar data tracking runs on real-time native GPS coordinates. The system accesses this location data to render geographical context, though users may adjust their tracking parameters at any time.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <div className="text-xs font-black text-[#626864] uppercase tracking-widest font-mono">Taxonomic Accuracy</div>
                        <p className="text-sm text-[#464D48] leading-relaxed font-semibold font-sans">
                            Localizations are supported in over 15 languages, but scientific biological data is loaded dynamically. Therefore, regional dictionary matches do not constitute a claim of 100% legal or taxonomic precision.
                        </p>
                    </div>
                </div>
            </section>

            {/* [4. THIRD-PARTY ADS (ADMOB)] */}
            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#4B6C59] text-white flex items-center justify-center font-bold font-sans">4</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2A2E2B] font-display">Third-Party Ads Framework (AdMob SDK)</h2>
                </div>
                <div className="bg-[#F9F7F2] rounded-[32px] p-8 border-l-8 border-[#4B6C59]" style={{ boxShadow: '8px 8px 24px #e3e0d8, -8px -8px 24px #ffffff' }}>
                    <h4 className="font-bold text-[#2A2E2B] mb-2 uppercase text-sm tracking-widest font-mono">Ad Interception Prohibited</h4>
                    <p className="text-sm md:text-base text-[#555C57] leading-relaxed font-semibold font-sans">
                        Users must not use any form of ad-blockers, reverse-engineering techniques, or custom script bypasses to alter or force-stop Interstitial Ads displayed on the app's loading or transition screens. Any such attempts may result in an immediate suspension of access.
                    </p>
                </div>
            </section>

            {/* [5. MEDICAL & ECOLOGICAL DISCLAIMER] */}
            <section className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D67B55] text-white flex items-center justify-center font-bold font-sans">5</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2A2E2B] font-display">Critical Health & Safety Disclaimers</h2>
                </div>
                <div className="space-y-6">
                    <div className="bg-[#F9F7F2] border-l-8 border-[#D67B55] bg-[rgba(214,123,85,0.05)] rounded-[32px] p-8" style={{ boxShadow: '8px 8px 24px #e3e0d8, -8px -8px 24px #ffffff' }}>
                        <h4 className="font-bold text-[#D67B55] mb-2 uppercase text-xs tracking-[0.2em] font-mono">Ecosystem Safety Disclaimer</h4>
                        <p className="text-sm md:text-base text-[#464D48] font-semibold leading-relaxed font-sans">
                            Plant toxicity and insect bite profiles are provided purely for informational and reference purposes. Nature AI information cannot replace professional medical, ecological, or life-safety authorities.
                        </p>
                    </div>
                    <div className="bg-[#F9F7F2] border-l-8 border-[#D67B55] bg-[rgba(214,123,85,0.05)] rounded-[32px] p-8" style={{ boxShadow: '8px 8px 24px #e3e0d8, -8px -8px 24px #ffffff' }}>
                        <h4 className="font-bold text-[#D67B55] mb-2 uppercase text-xs tracking-[0.2em] font-mono font-bold">Future AI Medicine Pipeline Notice</h4>
                        <p className="text-sm md:text-base text-[#464D48] font-semibold leading-relaxed font-sans">
                            Our upcoming human health framework and over 60 core medical reference tools are designed purely for preventive checkups and wellness tips. These diagnostic resources will never serve as a substitute for certified medical professionals or dynamic emergency medical procedures. The user is fully responsible for seeking expert advice before relying on any insights provided by the product.
                        </p>
                    </div>
                </div>
            </section>

            {/* [6. CONTACT HUB] */}
            <section className="pt-12 border-t border-[#4B6C59]/10 font-sans">
                <div className="bg-[#F9F7F2] rounded-[32px] p-10 md:p-16 text-center space-y-8 bg-gradient-to-br from-[#F9F7F2] to-[#F5F3ED]" style={{ boxShadow: '8px 8px 24px #e3e0d8, -8px -8px 24px #ffffff' }}>
                    <div className="space-y-2">
                        <h3 className="serif-display text-4xl font-bold text-[#2A2E2B] font-serif">
                          User Accountability & <br/>
                          <span className="text-[#4B6C59] italic font-normal">Support Contact</span>
                        </h3>
                        <p className="text-[#626864] font-semibold font-sans">If you encounter any issues or have concerns with any section of our terms, please feel free to contact us.</p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 font-sans">
                        <a 
                          href="mailto:NatureAI@gmail.com" 
                          className="bg-[#F9F7F2] border border-[rgba(255,255,255,0.4)] px-10 py-5 rounded-[32px] flex items-center gap-4 hover:bg-[#4B6C59] hover:text-white group transition-all duration-500 pointer-events-auto"
                          style={{ boxShadow: '8px 8px 24px #e3e0d8, -8px -8px 24px #ffffff' }}
                        >
                            <span className="text-2xl group-hover:scale-125 transition-transform">📧</span>
                            <div className="text-left">
                                <div className="text-[10px] uppercase font-bold tracking-widest opacity-60 font-mono">Legal & Technical Hub</div>
                                <div className="font-bold">NatureAI@gmail.com</div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

        </motion.main>

        {/* FOOTER CREDITS */}
        <footer className="py-12 text-center text-[10px] font-black uppercase tracking-[0.4em] text-[#2A2E2B]/30 font-mono">
            Nature AI • Legal Operations Core • Authorized Deployment
        </footer>
      </div>
    </div>
  );
}
