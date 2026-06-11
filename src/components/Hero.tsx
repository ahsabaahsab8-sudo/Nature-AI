import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });
      
      tl.fromTo(
        [textRef1.current, subtitleRef.current, ctaRef.current],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, delay: 0.5 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-black">
      {/* SECTION 1: MAIN HERO CONSOLE */}
      <section className="relative w-full h-[100dvh] flex flex-col justify-end overflow-hidden">
        {/* Background Video with Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-black">
          <video
            src="https://res.cloudinary.com/dzzeaa6jv/video/upload/v1781074631/Hey_create_same_to_same_video_j2il4h.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-24 md:pb-32 flex flex-col items-start text-left">
          <h1 className="flex flex-col text-white leading-[0.9]">
            <span
              ref={textRef1}
              className="font-serif font-bold text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase text-cream filter drop-shadow-md"
            >
              WILDER
            </span>
          </h1>
          
          <p
            ref={subtitleRef}
            className="mt-6 text-cream/95 font-sans text-base md:text-lg max-w-2xl font-light leading-relaxed"
          >
            Explore the living world with expert-level AI multi-vision tracking. Scan, diagnose, and catalog your ecosystem instantly. Engineered with advanced location intelligence and multilingual deep learning layers.
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4 items-center">
            <a
              href="#protocol"
              className="magnetic-btn px-8 py-4 bg-clay text-white rounded-full font-sans font-semibold tracking-wide flex items-center gap-3 group"
            >
              <span>Get it on Google Play ➔</span>
            </a>
            <a
              href="#unrivaled"
              className="magnetic-btn px-8 py-4 bg-transparent text-white border border-white/20 hover:border-white/50 rounded-full font-sans font-medium tracking-wide transition-colors"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: HERO STREAM PREVIEW */}
      <section className="relative w-full py-24 bg-charcoal border-t border-white/5 overflow-hidden flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-8 w-full text-left">
          <div className="mb-12">
            <span className="text-clay font-mono text-xs uppercase tracking-widest font-bold">
              STREAM FEED 02 // MULTI-VISION SPECTRUM ACTIVE
            </span>
            <h3 className="font-serif italic font-light text-3xl md:text-4xl text-cream mt-2">
              Deep-Learning Computer Vision Tracker
            </h3>
          </div>
          
          <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-black">
            <video
              src="https://res.cloudinary.com/dexarncvw/video/upload/v1781076276/Hey_create_same_to_same_video_1_yvxpj8.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-100"
            />
            {/* Telemetry and analytics details */}
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
              <div className="w-2 h-2 rounded-full bg-clay animate-pulse"></div>
              <span className="font-mono text-[10px] text-cream uppercase tracking-widest font-black">LIVE STREAM ACTIVE</span>
            </div>
            
            <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 font-mono text-[9px] text-cream/70 text-left leading-relaxed">
              <div>RESOLUTION: 3840 x 2160 [UHD]</div>
              <div>CLASSIFIER: ACTIVE VECTORS</div>
              <div>PROXIMITY RADAR: SECURE</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
