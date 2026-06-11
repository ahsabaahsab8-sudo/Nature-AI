import React from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { motion } from 'motion/react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#2A2E2B] font-sans pb-24 relative overflow-x-hidden selection:bg-[#4B6C59] selection:text-white">
      {/* Dynamic Ceramic Top Header */}
      <div className="w-full bg-[#FAF9F5] border-b border-[#E8E5DF] py-6 px-8 sticky top-0 z-50 flex items-center justify-between shadow-sm">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-[#4B6C59] font-bold text-sm bg-white border border-[#E8E5DF] transition-all hover:scale-[1.03] hover:bg-[#F2F0EA] active:scale-[0.98] cursor-pointer"
          style={{ boxShadow: '4px 4px 10px #e1dfda, -4px -4px 10px #ffffff' }}
          id="btn-back-privacy"
        >
          <ArrowLeft size={16} />
          <span>Back to Main Hub</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#E8E5DF]" style={{ boxShadow: 'inset 2px 2px 5px #e1dfda, inset -2px -2px 5px #ffffff' }}>
          <span className="w-2.5 h-2.5 rounded-full bg-[#4B6C59] animate-pulse"></span>
          <span className="text-[11px] uppercase tracking-widest font-mono font-bold text-[#4B6C59]">Nature AI — Privacy Policy</span>
        </div>

        <button 
          onClick={onBack}
          className="p-2.5 rounded-full bg-white border border-[#E8E5DF] transition-all hover:scale-[1.03] cursor-pointer"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>

      <div className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        {/* ==================================================================== */}
        {/* 🏢 PRIVACY POLICY INTERACTIVE CONTAINER                              */}
        {/* ==================================================================== */}
        <motion.main 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#F9F7F2] rounded-[40px] p-6 md:p-16 space-y-16"
          style={{ boxShadow: '16px 16px 40px #e3e0d8, -16px -16px 40px #ffffff' }}
        >
            
            {/* [TOP METADATA & HEADER] */}
            <div className="border-b border-[#4B6C59]/10 pb-10 space-y-4">
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#4B6C59]/10 text-[#4B6C59] text-xs font-bold tracking-wide uppercase font-mono">
                    🛡️ Security Core Certified
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#2A2E2B] font-serif">
                    Security & Privacy Policy <br/><span className="text-[#4B6C59] italic font-normal">Blueprint</span>
                </h1>
                <div className="text-xs font-bold tracking-widest text-[#D67B55] uppercase font-mono">
                    Last Updated: June 2026
                </div>
            </div>

            {/* [1. INTRODUCTION & OVERVIEW] */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#2A2E2B] flex items-center gap-3">
                    <span className="text-[#4B6C59]">1.</span> Introduction & Overview
                </h2>
                <p className="text-sm md:text-base text-[#555C57] leading-relaxed font-semibold">
                    Welcome to Nature AI. Your privacy and data security are fundamental to our engineering core. This Privacy Policy outlines how Nature AI collects, uses, processes, and protects your information when you utilize our mobile application and related services. By using the app, you agree to the collection and use of information in accordance with this policy.
                </p>
            </section>

            {/* [2. CORE DATA & PERMISSIONS] */}
            <section className="space-y-6">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-[#2A2E2B] flex items-center gap-3">
                        <span className="text-[#4B6C59]">2.</span> Core Data & Permissions We Process
                    </h2>
                    <p className="text-sm md:text-base text-[#555C57] font-semibold">
                        Nature AI operates an advanced multi-vision and acoustic parsing engine. To provide our 60+ precision features, the app requires specific device permissions, handled with maximum data safety protocols:
                    </p>
                </div>

                {/* Permissions Grid Map */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Camera Card */}
                    <motion.div 
                      whileHover={{ translateY: -4 }}
                      className="bg-[#F9F7F2] rounded-[28px] p-6 space-y-2 transition-all duration-300"
                      style={{ boxShadow: '8px 8px 20px #e3e0d8, -8px -8px 20px #ffffff' }}
                    >
                        <div className="text-sm font-bold text-[#4B6C59] uppercase tracking-wider font-mono">📷 Camera & Image Data</div>
                        <p className="text-xs md:text-sm text-[#626864] leading-relaxed font-semibold">
                            Used exclusively when you capture or upload photos of plants, insects, fish, or birds. Images are processed through our multi-modal neural network pipelines to deliver real-time taxonomic identification.
                        </p>
                    </motion.div>

                    {/* Microphone Card */}
                    <motion.div 
                      whileHover={{ translateY: -4 }}
                      className="bg-[#F9F7F2] rounded-[28px] p-6 space-y-2 transition-all duration-300"
                      style={{ boxShadow: '8px 8px 20px #e3e0d8, -8px -8px 20px #ffffff' }}
                    >
                        <div className="text-sm font-bold text-[#4B6C59] uppercase tracking-wider font-mono">🎙️ Microphone & Audio Inputs</div>
                        <p className="text-xs md:text-sm text-[#626864] leading-relaxed font-semibold">
                            Accessed strictly when you trigger the Bird Call Identifier tool. Short audio samples are recorded locally to analyze wave frequency parameters against our database and are not stored permanently on our servers.
                        </p>
                    </motion.div>

                    {/* GPS Card */}
                    <motion.div 
                      whileHover={{ translateY: -4 }}
                      className="bg-[#F9F7F2] rounded-[28px] p-6 space-y-2 transition-all duration-300"
                      style={{ boxShadow: '8px 8px 20px #e3e0d8, -8px -8px 20px #ffffff' }}
                    >
                        <div className="text-sm font-bold text-[#4B6C59] uppercase tracking-wider font-mono">📍 Precise Geolocation (GPS)</div>
                        <p className="text-xs md:text-sm text-[#626864] leading-relaxed font-semibold">
                            Utilized solely for the Live Proximity Radar (&quot;Species Near You&quot;) engine. This data allows the backend to instantly fetch localized demographic bio-data. You can enable or disable location tracking at any time via your device settings.
                        </p>
                    </motion.div>

                    {/* Logs Card */}
                    <motion.div 
                      whileHover={{ translateY: -4 }}
                      className="bg-[#F9F7F2] rounded-[28px] p-6 space-y-2 transition-all duration-300"
                      style={{ boxShadow: '8px 8px 20px #e3e0d8, -8px -8px 20px #ffffff' }}
                    >
                        <div className="text-sm font-bold text-[#4B6C59] uppercase tracking-wider font-mono">📊 Device & Performance Logs</div>
                        <p className="text-xs md:text-sm text-[#626864] leading-relaxed font-semibold">
                            We collect non-identifiable technical data (device model, OS version, app crash logs) to optimize our Flutter rendering layer and monitor performance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* [3. DATA STORAGE & INFRASTRUCTURE Security] */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#2A2E2B] flex items-center gap-3">
                    <span className="text-[#4B6C59]">3.</span> Data Storage & Infrastructure Security
                </h2>
                <p className="text-sm md:text-base text-[#555C57] font-semibold">
                    We enforce enterprise-grade defense matrices to ensure your data remains uncompromised:
                </p>
                <div className="bg-[#F5F3ED] rounded-3xl p-6 space-y-4 md:space-y-3" style={{ boxShadow: 'inset 5px 5px 10px #dad7cf, inset -5px -5px 10px #ffffff' }}>
                    <div className="flex items-start gap-3">
                        <span className="text-[#4B6C59] mt-0.5">✔</span>
                        <p className="text-xs md:text-sm text-[#464D48] font-semibold"><strong className="text-[#2A2E2B]">Cloud Protection:</strong> All synchronized data runs on a distributed Firebase infrastructure matrix utilizing end-to-end encryption protocols.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-[#4B6C59] mt-0.5">✔</span>
                        <p className="text-xs md:text-sm text-[#464D48] font-semibold"><strong className="text-[#2A2E2B]">Offline-First Isolation:</strong> Essential data logs, utility configurations, and local history tracking are saved directly on your device using a localized secure database layout, keeping your personal insights offline until you choose to cloud-sync.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-[#4B6C59] mt-0.5">✔</span>
                        <p className="text-xs md:text-sm text-[#464D48] font-semibold"><strong className="text-[#2A2E2B]">No Data Selling:</strong> Nature AI does not sell, lease, or distribute your visual, audio, or geographic profiling metrics to any third-party data brokers.</p>
                    </div>
                </div>
            </section>

            {/* [4. THIRD-PARTY SERVICES & ADMOB] */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#2A2E2B] flex items-center gap-3">
                    <span className="text-[#4B6C59]">4.</span> Third-Party Services & Advertisements (AdMob Compliance)
                </h2>
                <p className="text-sm md:text-base text-[#555C57] leading-relaxed font-semibold">
                    To maintain our open-access utility framework, Nature AI partners with third-party service providers. These services may collect information used to identify your device:
                </p>
                <div className="bg-[#F9F7F2] rounded-[28px] p-6 border-l-4 border-[#4B6C59]" style={{ boxShadow: '8px 8px 20px #e3e0d8, -8px -8px 20px #ffffff' }}>
                    <h4 className="text-sm font-bold text-[#2A2E2B] uppercase tracking-wider mb-1 font-mono">Google AdMob SDK Compliance</h4>
                    <p className="text-xs md:text-sm text-[#626864] leading-relaxed font-semibold">
                        The application integrates official AdMob SDK components to serve advertisements. AdMob may utilize device identifiers, cookies, and generalized location attributes to serve contextual and relevant ad placements while strictly complying with Google Play Developer policies.
                    </p>
                </div>
            </section>

            {/* [5. CHILDREN'S PRIVACY] */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#2A2E2B] flex items-center gap-3">
                    <span className="text-[#4B6C59]">5.</span> Children’s Privacy & Safety Controls
                </h2>
                <p className="text-sm md:text-base text-[#555C57] leading-relaxed font-semibold">
                    Nature AI features robust safety barriers, including a Plant Toxicity Checker to keep environments safe for children and pets. We do not knowingly collect personally identifiable information from children under the age of 13. If we discover that a child under 13 has provided us with personal data, we immediately purge it from our Firebase cloud storage systems.
                </p>
            </section>

            {/* [6. CONTINUOUS UPDATES] */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#2A2E2B] flex items-center gap-3">
                    <span className="text-[#4B6C59]">6.</span> Continuous Security Updates
                </h2>
                <p className="text-sm md:text-base text-[#555C57] leading-relaxed font-semibold">
                    As we scale our global engineering pipeline—including our upcoming worldwide AI Medicine & Medical Report Identifier core ecosystem—this Privacy Policy will expand to meet changing global compliance regulations. Any structural updates or security revisions will be posted transparently on this page with an updated revision date.
                </p>
            </section>

            {/* [7. SUPPORT, QUERIES & CONTACT] */}
            <section className="pt-6 border-t border-[#4B6C59]/10 space-y-6">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-[#2A2E2B] font-serif">
                        Support, Queries, and <span className="text-[#4B6C59] italic font-normal">Legal Contact</span>
                    </h2>
                    <p className="text-sm md:text-base text-[#555C57] leading-relaxed font-semibold">
                        If you have any problems, queries, or feature questions regarding the Nature AI app, data handling practices, or permission frameworks, please feel free to reach out directly to our dedicated engineering support deck.
                    </p>
                </div>

                {/* Contact Details Grid Panel */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a 
                      href="mailto:NatureAI@gmail.com" 
                      className="bg-[#F9F7F2] p-5 rounded-2xl flex items-center space-x-4 group transition-all duration-300 pointer-events-auto border border-transparent hover:border-[#4B6C59]/10"
                      style={{ boxShadow: '6px 6px 14px #e3e0d8, -6px -6px 14px #ffffff' }}
                    >
                        <div className="text-2xl">✉</div>
                        <div>
                            <div className="text-xs font-bold text-[#626864] uppercase tracking-wider font-mono">Official Support Gmail</div>
                            <div className="text-sm md:text-base font-bold text-[#2A2E2B] group-hover:text-[#4B6C59] transition-colors">NatureAI@gmail.com</div>
                        </div>
                    </a>
                    
                    <div className="bg-[#F5F3ED] p-5 rounded-2xl flex items-center space-x-4" style={{ boxShadow: 'inset 5px 5px 10px #dad7cf, inset -5px -5px 10px #ffffff' }}>
                        <div className="text-2xl">⏳</div>
                        <div>
                            <div className="text-xs font-bold text-[#626864] uppercase tracking-wider font-mono">Guaranteed Response Time</div>
                            <div className="text-sm md:text-base font-bold text-[#2A2E2B]">Within 24 to 48 Hours</div>
                        </div>
                    </div>
                </div>
            </section>

        </motion.main>

        {/* [FOOTER CORE BADGE] */}
        <footer className="w-full text-center pt-8 text-xs font-bold tracking-widest text-[#626864]/50 uppercase font-mono">
            Nature AI Ecosystem Platform Hierarchy • Data Vault Secured
        </footer>
      </div>
    </div>
  );
}
