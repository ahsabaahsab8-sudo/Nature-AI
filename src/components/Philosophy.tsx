import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const textTitleRef = useRef<HTMLHeadingElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Background
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Split Text Reveal for title
      const splitText = (element: HTMLElement | null) => {
        if (!element) return;
        const text = element.innerText || '';
        element.innerHTML = '';
        if (text.trim()) {
          text.split(' ').forEach((word) => {
            const span = document.createElement('span');
            span.innerText = word + ' ';
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            span.style.transform = 'translateY(15px)';
            element.appendChild(span);
          });
        }
        return element.children;
      };

      const words = splitText(textTitleRef.current);

      gsap.to(words, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textTitleRef.current,
          start: 'top 85%',
        },
      });

      // Staggered cards reveal
      gsap.from('.global-card', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: 'top 80%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative w-full min-h-[100dvh] bg-charcoal flex flex-col justify-center overflow-hidden py-32"
    >
      {/* Parallax Organic Texture */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 opacity-15 scale-110 pointer-events-none"
        style={{
          backgroundImage: 'url("https://i.postimg.cc/ZnXcX69v/Chat-GPT-Image-Jun-10-2026-01-35-47-AM.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 flex flex-col gap-16 md:gap-24">
        <div className="text-center">
          <h2
            ref={textTitleRef}
            className="font-serif italic font-light text-5xl md:text-7xl lg:text-8xl text-clay leading-tight mb-4 inline-block"
          >
          </h2>
          <p className="font-sans text-cream/60 max-w-lg mx-auto text-sm md:text-base font-light tracking-wide uppercase mt-4">
            Unified Biosphere Mapping & Deep Learning
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Feature Card 1 */}
          <div className="global-card bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 bg-clay/20 text-clay rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 8 6 6 6-6"/>
                  <path d="M4 14h16"/>
                </svg>
              </div>
              <h3 className="font-sans font-bold text-2xl text-cream mb-4">
                15+ Native Languages Support
              </h3>
              <p className="font-sans text-cream/70 text-sm md:text-base leading-relaxed font-light">
                Nature doesn't speak English, and neither should you have to. Access comprehensive diagnostic sheets, behavioral breakdowns, and botanical profiles completely rendered in your native language. Full localized support for over 15+ global languages.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/[0.05] font-mono text-xs text-clay">
              LOCALIZED SYNAPSE ACTIVE
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="global-card bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 bg-moss/50 text-cream rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3 className="font-sans font-bold text-2xl text-cream mb-4">
                All Continents Unified Database
              </h3>
              <p className="font-sans text-cream/70 text-sm md:text-base leading-relaxed font-light">
                From the dense rainforests of South America to the unique arid biomes of Australia, Nature AI features a multi-cluster cloud database mapping distinct flora, fauna, aviary, and aquatic species across all seven continents.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/[0.05] font-mono text-xs text-cream/40">
              7/7 CONTINENTS COVERED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
