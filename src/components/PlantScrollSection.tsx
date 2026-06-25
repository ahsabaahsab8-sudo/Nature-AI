import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2, Search, MapPin } from 'lucide-react';

export const PlantScrollSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const particlesCanvasRef = useRef<HTMLCanvasElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionThreeInnerRef = useRef<HTMLDivElement>(null);

  const [frames, setFrames] = useState<ImageBitmap[]>([]);
  const [framesReady, setFramesReady] = useState(false);
  const [sectionThreeVisible, setSectionThreeVisible] = useState(false);

  const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260616_212935_bbf608da-62d1-4f25-9be4-c346e4d09cc8.mp4';

  // State/Refs for scroll tracking
  const infoRef = useRef({
    lastFrameIndex: -1,
    videoSeeking: false,
    isActive: false,
  });

  // 1. Frame extraction & fallback video handling
  useEffect(() => {
    let active = true;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas to cover screen area
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const w = Math.round(rect.width * dpr);
      const h = Math.round(rect.height * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      infoRef.current.lastFrameIndex = -1;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    async function extractFrames() {
      try {
        const response = await fetch(VIDEO_URL, { mode: 'cors' });
        const blob = await response.blob();
        if (!active) return;
        const objectUrl = URL.createObjectURL(blob);

        const video = document.createElement('video');
        video.muted = true;
        video.playsInline = true;
        video.crossOrigin = 'anonymous';
        video.preload = 'auto';
        video.src = objectUrl;

        await new Promise<void>((resolve, reject) => {
          video.onloadedmetadata = () => resolve();
          video.onerror = () => reject();
          setTimeout(() => reject(new Error('Timeout loading metadata')), 15000);
        });

        const scale = Math.min(1, 1024 / video.videoWidth);
        const scaledWidth = Math.round(video.videoWidth * scale);
        const scaledHeight = Math.round(video.videoHeight * scale);
        const frameCount = 60; // Optimizing frame counts for speed and memory on low-end systems

        const extracted: ImageBitmap[] = [];
        for (let i = 0; i < frameCount; i++) {
          if (!active) break;
          const time = (i / (frameCount - 1)) * (video.duration - 0.05);
          video.currentTime = time;
          await new Promise<void>((resolve) => {
            const onSeeked = () => {
              video.removeEventListener('seeked', onSeeked);
              resolve();
            };
            video.addEventListener('seeked', onSeeked);
            setTimeout(resolve, 1000); // safety fallback limit
          });
          const bitmap = await createImageBitmap(video, { resizeWidth: scaledWidth, resizeHeight: scaledHeight });
          extracted.push(bitmap);
        }

        if (extracted.length > 0 && active) {
          setFrames(extracted);
          setFramesReady(true);
        }
        URL.revokeObjectURL(objectUrl);
      } catch (e) {
        console.warn('Frame extraction failed or cancelled. Using direct video seek fallback.', e);
      }
    }

    extractFrames();

    return () => {
      active = false;
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // 2. Video scroll tracking loop
  useEffect(() => {
    let animId: number;

    const tick = () => {
      if (!containerRef.current) {
        animId = requestAnimationFrame(tick);
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.scrollHeight;
      const vh = window.innerHeight;

      // Scroll progress mapping
      // Start is when the section starts entering, and end is when it exits the viewport
      const start = rect.top + window.scrollY;
      const end = start + containerHeight - vh;
      const range = end - start;
      const scrollY = window.scrollY;

      let progress = 0;
      if (range > 0) {
        progress = Math.max(0, Math.min(1, (scrollY - start) / range));
      }

      // Draw frames on canvas or seek fallback video
      const canvas = canvasRef.current;
      const videoEl = videoRef.current;

      if (framesReady && frames.length > 0 && canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const idx = Math.round(progress * (frames.length - 1));
          if (idx !== infoRef.current.lastFrameIndex) {
            infoRef.current.lastFrameIndex = idx;
            const frame = frames[idx];
            if (frame) {
              const cw = canvas.width, ch = canvas.height;
              const s = Math.max(cw / frame.width, ch / frame.height);
              const dw = frame.width * s, dh = frame.height * s;
              ctx.clearRect(0, 0, cw, ch);
              ctx.drawImage(frame, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
            }
          }
        }
      } else if (videoEl && videoEl.duration && isFinite(videoEl.duration) && videoEl.readyState >= 1) {
        const target = progress * videoEl.duration;
        if (!infoRef.current.videoSeeking && Math.abs(videoEl.currentTime - target) > 0.05) {
          infoRef.current.videoSeeking = true;
          videoEl.currentTime = target;
        }
      }

      // Hero Opacity fade
      if (heroRef.current) {
        const relativeScrollInContainer = scrollY - start;
        const fade = Math.max(0, 1 - relativeScrollInContainer / (vh * 0.45));
        heroRef.current.style.opacity = fade.toString();
        heroRef.current.style.transform = `translateY(${Math.min(100, Math.max(0, (1 - fade) * 40))}px)`;
      }

      // Fixed Cards Reveal & Opacity Calculations
      if (cardsRef.current && cardsGridRef.current) {
        // Trigger is centered in the middle of our large scroll container
        // Middle height area of the container is around progress 20% to 75%
        const startTrigger = start + vh * 0.8;
        const endTrigger = start + containerHeight - vh * 1.5;
        const triggerRange = endTrigger - startTrigger;

        let activeProgress = 0;
        if (triggerRange > 0) {
          activeProgress = Math.max(0, Math.min(1, (scrollY - startTrigger) / triggerRange));
        }

        const isActive = scrollY >= startTrigger - vh * 0.2 && scrollY <= endTrigger + vh * 0.3;
        const fadeIn = Math.min(1, Math.max(0, (scrollY - (startTrigger - vh * 0.2)) / (vh * 0.3)));
        const fadeOut = Math.min(1, Math.max(0, (endTrigger + vh * 0.3 - scrollY) / (vh * 0.3)));
        const containerOpacity = isActive ? Math.min(fadeIn, fadeOut) : 0;

        cardsRef.current.style.opacity = containerOpacity.toString();
        cardsRef.current.style.pointerEvents = containerOpacity > 0.1 ? 'auto' : 'none';

        // Apply visual reveal transition using CSS linear-gradient mask matching original HTML
        const isMobile = window.innerWidth < 768;
        const revealPct = activeProgress * 150;
        const maskGradient = isMobile
          ? `linear-gradient(to bottom, black ${revealPct}%, transparent ${revealPct + 20}%)`
          : `linear-gradient(to right, black ${revealPct}%, transparent ${revealPct + 15}%)`;

        cardsGridRef.current.style.maskImage = maskGradient;
        cardsGridRef.current.style.webkitMaskImage = maskGradient;
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    const handleSeeked = () => { infoRef.current.videoSeeking = false; };
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.addEventListener('seeked', handleSeeked);
      videoEl.addEventListener('stalled', handleSeeked);
    }

    return () => {
      cancelAnimationFrame(animId);
      if (videoEl) {
        videoEl.removeEventListener('seeked', handleSeeked);
        videoEl.removeEventListener('stalled', handleSeeked);
      }
    };
  }, [frames, framesReady]);

  // 3. Particles generation & rendering loop
  useEffect(() => {
    const canvas = particlesCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const resizeParticles = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const createParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 12000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.15,
        });
      }
    };

    window.addEventListener('resize', resizeParticles);
    resizeParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeParticles);
    };
  }, []);

  // 4. Section Three Intersection Observer
  useEffect(() => {
    const el = sectionThreeInnerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSectionThreeVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.15 });

    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full bg-black select-none"
      style={{ height: '550vh' }} // Expands scroll range beautifully 
    >
      {/* Scroll-Video sticky background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0 bg-black">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ visibility: framesReady ? 'visible' : 'hidden' }}
        />
        
        {!framesReady && (
          <video
            ref={videoRef}
            src={VIDEO_URL}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transition: 'none' }}
            muted
            playsInline
            preload="auto"
          />
        )}
        
        {/* Sleek contrast tint overlay */}
        <div className="absolute inset-0 bg-black/45 z-10" />
      </div>

      {/* Floating Sparkly ambient star particles */}
      <canvas 
        ref={particlesCanvasRef} 
        className="fixed inset-0 w-full h-full pointer-events-none z-10" 
      />

      {/* FIXED FLOATING GLASS CARDS: Fades & renders based on mid-scroll triggers */}
      <div 
        ref={cardsRef}
        className="fixed bottom-0 left-0 right-0 z-20 px-8 py-12 md:py-20 opacity-0 pointer-events-none transition-opacity duration-300 flex items-center justify-center"
      >
        <div 
          ref={cardsGridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mx-auto"
        >
          {/* Card 1 */}
          <div className="liquid-glass rounded-[1.5rem] p-6 text-left flex flex-col min-h-[220px] justify-between shadow-2xl hover:bg-white/[0.02] border border-white/5 transition-all">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-heading italic text-white text-2xl tracking-[-0.5px]">
                Identify Plants
              </h3>
            </div>
            <p className="text-white/70 font-body font-light text-xs mt-4 leading-relaxed">
              Instantly recognize over thousands of species with expert-level accuracy. Nature AI implements state-of-the-art vision algorithms to break down structural morphology, giving you detailed profiles on plant health, origin, species, taxonomy, and direct care instructions inside a single unified view.
            </p>
          </div>

          {/* Card 2 */}
          <div className="liquid-glass rounded-[1.5rem] p-6 text-left flex flex-col min-h-[220px] justify-between shadow-2xl hover:bg-white/[0.02] border border-white/5 transition-all">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                <Search className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-heading italic text-white text-2xl tracking-[-0.5px]">
                Search Any Plant
              </h3>
            </div>
            <p className="text-white/70 font-body font-light text-xs mt-4 leading-relaxed">
              Explore an exhaustive botanical catalog capturing flora spanning across every corner of the Earth. Find any plant instantly and unlock cross-referenced details tailored dynamically to your own localized language, ensuring terminology, toxicity warnings, and growth requirements remain easily understandable.
            </p>
          </div>

          {/* Card 3 */}
          <div className="liquid-glass rounded-[1.5rem] p-6 text-left flex flex-col min-h-[220px] justify-between shadow-2xl hover:bg-white/[0.02] border border-white/5 transition-all">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="font-heading italic text-white text-2xl tracking-[-0.5px]">
                Living Near You
              </h3>
            </div>
            <p className="text-white/70 font-body font-light text-xs mt-4 leading-relaxed">
              Discover the biodiversity native to your environment. By accessing secure geolocation parameters, Nature AI maps and filters local flora living around your coordinates and within your continent, providing deep ecological context on your surroundings instantly.
            </p>
          </div>
        </div>
      </div>

      {/* CORE SCROLL CONTENT TIMELINE LAYOUT */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col">
        {/* Sub-hero (100vh) */}
        <section 
          ref={heroRef}
          className="h-screen w-full flex flex-col justify-end items-center text-center pb-24 px-6 relative"
        >
          <div className="max-w-3xl flex flex-col items-center">
            {/* Tagline */}
            <span className="text-xs uppercase tracking-[0.15em] text-[#d4b411] font-bold font-body mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Nature AI Intelligence
            </span>
            
            {/* Header statement */}
            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-heading italic text-white leading-[0.95] tracking-[-3px] max-w-2xl select-none">
              Explore, identify, and understand the{' '}
              <span className="relative inline-block text-emerald-400 select-text">
                natural world
                <span className="absolute left-0 bottom-1 w-full h-[6px] bg-emerald-500/30 rounded-full" />
              </span>{' '}
              around you.
            </h2>

            {/* CTAs */}
            <div className="mt-8 pointer-events-auto">
              <a 
                href="#capabilities" 
                className="liquid-glass rounded-full px-6 py-3 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/[0.07] transition-all hover:scale-105 active:scale-95"
              >
                Explore Nature AI
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>
        </section>

        {/* Padding and Spacer sections to allow scrolling range */}
        <div className="h-[150vh] w-full" />

        {/* cards-trigger region height driving card reveals */}
        <div id="cards-trigger" className="h-[200vh] w-full" />

        <div className="h-[100vh] w-full" />

        {/* Section Three Conclusion End Trigger (100vh) */}
        <section 
          id="section-three" 
          className="h-screen w-full flex items-center justify-center p-6"
        >
          <div 
            ref={sectionThreeInnerRef}
            className={`flex flex-col items-center text-center max-w-xl transition-all duration-1000 transform ${
              sectionThreeVisible ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-8 blur-sm'
            }`}
          >
            <p className="text-xs text-[#d4b411]/80 uppercase tracking-[0.2em] font-light mb-3">
              Experience the Ecosystem
            </p>
            <h2 className="font-heading italic text-white text-6xl md:text-[6.5rem] leading-none tracking-[-4px]">
              Nature AI
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
};
