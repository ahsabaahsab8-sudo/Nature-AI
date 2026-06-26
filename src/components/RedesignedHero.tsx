import React from 'react';
import { motion } from 'motion/react';
import { FadingVideo } from './FadingVideo';
import { BlurText } from './BlurText';

interface RedesignedHeroProps {
  onOpenPremium?: () => void;
  onOpenDevCore?: () => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const RedesignedHero: React.FC<RedesignedHeroProps> = ({
  onOpenPremium,
  onOpenDevCore,
}) => {
  const fadeInUpVariants = {
    hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-between pt-24 z-10">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full w-full">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
          className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top"
          style={{ width: '120%', height: '120%' }}
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto mt-8">
        {/* Badge */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ delay: 0.4 }}
          className="liquid-glass rounded-full px-4 py-1.5 flex items-center gap-2 max-w-max text-xs"
        >
          <span className="bg-white text-black px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest">
            New
          </span>
          <span className="text-white/90 font-body font-light">
            Multi-Vision AI -- Identify plants, insects, fish &amp; birds instantly
          </span>
        </motion.div>

        {/* Heading Statement with word-by-word BlurText styling */}
        <div className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[1.05] max-w-4xl tracking-[-2px] sm:tracking-[-3px] mt-6 select-none px-4">
          <BlurText text="Explore the Living World with Nature AI" />
        </div>

        {/* Subtitle description statement */}
        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="mt-6 text-sm md:text-base text-white/80 max-w-2xl font-body font-light leading-relaxed px-2"
        >
          Expert-level AI multi-vision tracking for plants, insects, fish, and birds. Scan, diagnose, and catalog your ecosystem instantly with advanced location intelligence and multilingual deep learning layers.
        </motion.p>

        {/* Action controllers CTAs */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
          className="flex items-center justify-center gap-6 mt-8 flex-wrap"
        >
          <button
            onClick={onOpenPremium}
            className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-semibold text-white flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-[0_4px_24px_rgba(255,255,255,0.05)]"
          >
            <span>Explore Premium</span>
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </button>

          <button
            onClick={onOpenDevCore}
            className="flex items-center gap-2 text-white/90 font-semibold hover:text-white transition-colors cursor-pointer text-sm"
          >
            <span>Developer Core</span>
            <span className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 active:bg-white/30 transition-all">
              <svg className="w-3 h-3 fill-current text-white ml-0.5" viewBox="0 0 24 24">
                <polygon points="6,4 20,12 6,20" />
              </svg>
            </span>
          </button>
        </motion.div>

        {/* Dynamic numerical records cards row */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: 'easeOut' }}
          className="flex items-stretch justify-center gap-4 mt-12 flex-wrap w-full"
        >
          {/* Card 1 */}
          <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left flex flex-col justify-between min-h-[140px] shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div>
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </div>
            <div className="mt-4">
              <span className="font-heading italic text-white text-4xl md:text-5xl tracking-[-1px] leading-none">
                50K+
              </span>
              <p className="text-xs text-white/70 font-body font-light mt-1 uppercase tracking-wider">
                Species Identified Across All Kingdoms
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left flex flex-col justify-between min-h-[140px] shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div>
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="mt-4">
              <span className="font-heading italic text-white text-4xl md:text-5xl tracking-[-1px] leading-none">
                15+
              </span>
              <p className="text-xs text-white/70 font-body font-light mt-1 uppercase tracking-wider">
                Native Languages Supported Worldwide
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trust bar */}
      <motion.div
        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center gap-4 pb-8 mt-12 w-full"
      >
        <div className="liquid-glass rounded-full px-4 py-1 text-xs font-medium text-white/80">
          Powered by advanced AI neural networks and multi-spectral vision technology
        </div>
        <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap font-heading italic text-white text-2xl md:text-3xl tracking-tight select-none opacity-95">
          <span>Flora</span>
          <span className="opacity-40 font-body text-lg font-light">•</span>
          <span>Fauna</span>
          <span className="opacity-40 font-body text-lg font-light">•</span>
          <span>Aquatic</span>
          <span className="opacity-40 font-body text-lg font-light">•</span>
          <span>Aviary</span>
          <span className="opacity-40 font-body text-lg font-light">•</span>
          <span>Insecta</span>
        </div>
      </motion.div>
    </section>
  );
};
