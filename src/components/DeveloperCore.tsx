import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { X } from 'lucide-react';

interface DeveloperCoreProps {
  onBack: () => void;
}

// ============================================================================
// REUSABLE COMPONENTS
// ============================================================================

// 1. FadeIn Animation Wrapper
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: string;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = "div",
  className = ""
}) => {
  const MotionComponent = (motion as any)[as] || motion.div;

  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

// 2. Magnet (mouse-following magnetic hover effect)
interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = ""
}) => {
  const [transform, setTransform] = useState("translate3d(0px, 0px, 0px)");
  const [transition, setTransition] = useState(inactiveTransition);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;

      const distanceX = e.clientX - elementCenterX;
      const distanceY = e.clientY - elementCenterY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      const activationDistance = padding + Math.max(rect.width, rect.height) / 2;

      if (distance < activationDistance) {
        setTransition(activeTransition);
        const moveX = distanceX / strength;
        const moveY = distanceY / strength;
        setTransform(`translate3d(${moveX}px, ${moveY}px, 0px)`);
      } else {
        setTransition(inactiveTransition);
        setTransform("translate3d(0px, 0px, 0px)");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ 
        transform, 
        transition, 
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};

// 3. ContactButton
export const ContactButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base active:scale-95 transition-all duration-200 cursor-pointer"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
    </button>
  );
};

// 4. LiveProjectButton
export const LiveProjectButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 active:scale-95 transition-all duration-200 cursor-pointer"
    >
      Live Project
    </button>
  );
};

// 5. AnimatedText (character-by-character scroll reveal)
export const AnimatedText: React.FC<{ text: string }> = ({ text }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  });

  const characters = text.split("");

  return (
    <p 
      ref={containerRef} 
      className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] tracking-wide relative select-text"
      style={{ fontSize: "clamp(0.95rem, 1.25vw, 1.15rem)" }}
    >
      {characters.map((char, index) => {
        const start = index / characters.length;
        const end = (index + 1) / characters.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

        return (
          <span key={index} className="relative inline-block whitespace-pre">
            <span className="opacity-0">{char}</span>
            <motion.span 
              style={{ opacity }} 
              className="absolute inset-0 select-text"
            >
              {char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};

// 6. BlurText helper
export const BlurText: React.FC<{ text: string }> = ({ text }) => {
  const words = text.split(" ");
  return (
    <span className="inline-block">
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 0.8, delay: idx * 0.08 }}
          className="inline-block mr-3"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};


// ============================================================================
// SECTION COMPONENTS
// ============================================================================

// 1. HeroSection
const HeroSection: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <section className="relative h-screen flex flex-col justify-between overflow-hidden w-full select-none">
      {/* Navbar wrapper */}
      <FadeIn delay={0} y={-20} as="nav" className="w-full">
        <div className="flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8">
          {["About", "Price", "Projects", "Contact"].map((link) => (
            <button 
              key={link}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
              onClick={() => {
                if (link === "About") {
                  document.getElementById("about-section")?.scrollIntoView({ behavior: 'smooth' });
                } else if (link === "Projects") {
                  document.getElementById("projects-section-light")?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  document.getElementById("about-section")?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {link}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Portrait wrapped in Magnet */}
      <FadeIn 
        delay={0.6} 
        y={30} 
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 flex justify-center"
      >
        <Magnet padding={150} strength={3}>
          <img 
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
            alt="Hero 3D Portrait" 
            className="w-full h-auto object-contain pointer-events-none"
          />
        </Magnet>
      </FadeIn>

      {/* Hero Heading Container */}
      <div className="w-full flex-1 flex items-center justify-center relative z-0 px-4">
        <FadeIn delay={0.15} y={40} className="w-full max-w-5xl text-center">
          <div className="w-full">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-[1.15] w-full text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-12 select-text">
              <BlurText text="Hi, we are Arre Deep Minded Services Limited" />
            </h1>
          </div>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        <FadeIn delay={0.35} y={20}>
          <p 
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[280px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={() => {
            document.getElementById("about-section")?.scrollIntoView({ behavior: 'smooth' });
          }} />
        </FadeIn>
      </div>
    </section>
  );
};

// 2. MarqueeSection
const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  const images1 = [
    "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
    "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
    "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
    "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
    "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
    "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
    "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
    "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
    "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
    "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
    "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  ];

  const images2 = [
    "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
    "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
    "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
    "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
    "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
    "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
    "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
    "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
    "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
    "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
  ];

  const row1Images = [...images1, ...images1, ...images1];
  const row2Images = [...images2, ...images2, ...images2];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const translateRow1 = scrollOffset - 200;
  const translateRow2 = -(scrollOffset - 200);

  return (
    <div 
      ref={sectionRef} 
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      {/* Row 1 */}
      <div className="mb-3 overflow-hidden whitespace-nowrap">
        <div 
          className="flex gap-3 transition-transform duration-100 ease-out"
          style={{ 
            transform: `translateX(${translateRow1}px)`,
            willChange: 'transform' 
          }}
        >
          {row1Images.map((src, index) => (
            <img 
              key={`r1-${index}`} 
              src={src} 
              alt="Scroll Showcase" 
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="overflow-hidden whitespace-nowrap">
        <div 
          className="flex gap-3 transition-transform duration-100 ease-out"
          style={{ 
            transform: `translateX(${translateRow2}px)`,
            willChange: 'transform' 
          }}
        >
          {row2Images.map((src, index) => (
            <img 
              key={`r2-${index}`} 
              src={src} 
              alt="Scroll Showcase" 
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// 3. AboutSection
const AboutSection: React.FC = () => {
  const paragraphText = "With more than five years of experience in AI-driven design and development, we specialize in intelligent applications, healthcare AI, productivity tools, and user experience. We build solutions that help businesses stand out and deliver real impact. Let's build something incredible together!";

  return (
    <section 
      id="about-section" 
      className="relative min-h-screen bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Decorative 3D images with FadeIn */}
      <FadeIn 
        delay={0.1} 
        x={-80} 
        y={0} 
        duration={0.9} 
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" 
          alt="3D Moon" 
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain pointer-events-none"
        />
      </FadeIn>

      <FadeIn 
        delay={0.25} 
        x={-80} 
        y={0} 
        duration={0.9} 
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" 
          alt="3D Abstract Object" 
          className="w-[100px] sm:w-[140px] md:w-[180px] object-contain pointer-events-none"
        />
      </FadeIn>

      <FadeIn 
        delay={0.15} 
        x={80} 
        y={0} 
        duration={0.9} 
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" 
          alt="3D Lego" 
          className="w-[100px] sm:w-[140px] md:w-[180px] object-contain pointer-events-none"
        />
      </FadeIn>

      <FadeIn 
        delay={0.3} 
        x={80} 
        y={0} 
        duration={0.9} 
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" 
          alt="3D Group" 
          className="w-[130px] sm:w-[170px] md:w-[220px] object-contain pointer-events-none"
        />
      </FadeIn>

      {/* Main Content Column */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 
            className="hero-heading font-black uppercase leading-[1.1] tracking-tight text-center"
            style={{ fontSize: "clamp(2rem, 5vw, 64px)" }}
          >
            About US
          </h2>
        </FadeIn>

        {/* Spacer / Gap */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Character-by-character scroll reveal text */}
        <AnimatedText text={paragraphText} />

        {/* Spacer / Gap */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact Button */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

// 4. ProjectsSectionLight
const ProjectsSectionLight: React.FC = () => {
  const projects = [
    {
      num: "01",
      name: "AI Medicine Identifier",
      desc: "AI-powered medicine recognition system that identifies pills and medicines from images using computer vision. Helps healthcare providers and patients quickly verify medication with 95%+ accuracy."
    },
    {
      num: "02",
      name: "Nature AI",
      desc: "Advanced AI platform for environmental monitoring and species identification. Uses machine learning to analyze biodiversity data, track ecosystem health, and support conservation efforts through real-time insights."
    },
    {
      num: "03",
      name: "AI Habits Tracker",
      desc: "Smart habit tracking application powered by behavioral AI. Analyzes user patterns, provides personalized recommendations, and uses predictive analytics to help users build lasting habits with data-driven motivation."
    }
  ];

  return (
    <section 
      id="projects-section-light" 
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none relative z-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Heading */}
        <h2 
          className="font-black uppercase text-center text-[#0C0C0C] leading-[1.1] tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 64px)" }}
        >
          Projects
        </h2>

        {/* Spacer */}
        <div className="mb-16 sm:mb-20 md:mb-28" />

        {/* Vertical list with 1px borders */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {projects.map((project, i) => (
            <FadeIn 
              key={project.num}
              delay={i * 0.1}
              y={30}
              className="flex flex-col md:flex-row items-start md:items-center py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] gap-6 md:gap-12"
            >
              {/* Left Number */}
              <div 
                className="font-black text-[#0C0C0C] leading-none shrink-0"
                style={{ fontSize: "clamp(2rem, 5vw, 56px)" }}
              >
                {project.num}
              </div>

              {/* Stack Right */}
              <div className="flex flex-col gap-2">
                <h3 
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.5rem)" }}
                >
                  {project.name}
                </h3>
                <p 
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]/60"
                  style={{ fontSize: "clamp(0.85rem, 1.1vw, 1rem)" }}
                >
                  {project.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. Sticky stacking cards section (Dark)
interface CardProps {
  index: number;
  total: number;
  project: {
    num: string;
    category: string;
    name: string;
    img1: string;
    img2: string;
    imgTall: string;
  };
}

const ProjectCard: React.FC<CardProps> = ({ index, total, project }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div 
      ref={containerRef} 
      className="h-[85vh] flex items-start justify-center sticky z-10 select-none"
      style={{
        top: `calc(96px + ${index * 28}px)`
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-5xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between h-[70vh] shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      >
        {/* Top row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#D7E2EA]/15 pb-4 md:pb-6 gap-3">
          <div className="flex items-center gap-4">
            <span className="font-black text-3xl sm:text-5xl md:text-6xl text-white">
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/60">
                {project.category}
              </span>
              <span className="text-sm sm:text-lg md:text-xl font-bold uppercase text-white tracking-wide">
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="grid grid-cols-12 gap-4 mt-4 md:mt-6 flex-1 items-stretch overflow-hidden">
          {/* Left Column (40% width / 5 cols) */}
          <div className="col-span-5 flex flex-col justify-between gap-4 h-full">
            <img 
              src={project.img1} 
              alt={`${project.name} preview 1`} 
              className="w-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img 
              src={project.img2} 
              alt={`${project.name} preview 2`} 
              className="w-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          {/* Right Column (60% width / 7 cols) */}
          <div className="col-span-7 h-full">
            <img 
              src={project.imgTall} 
              alt={`${project.name} large preview`} 
              className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSectionDark: React.FC = () => {
  const projectCardsData = [
    {
      num: "01",
      category: "Healthcare AI",
      name: "AI Medicine Identifier",
      img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      imgTall: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    },
    {
      num: "02",
      category: "Environmental AI",
      name: "Nature AI",
      img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      imgTall: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    },
    {
      num: "03",
      category: "Productivity AI",
      name: "AI Habits Tracker",
      img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      imgTall: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    }
  ];

  return (
    <section 
      id="projects-section-dark"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-24 pb-48 px-5 sm:px-8 md:px-10 relative z-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto flex flex-col mb-16">
        <h2 
          className="hero-heading font-black uppercase text-center leading-[1.1] tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 64px)" }}
        >
          Projects
        </h2>
      </div>

      {/* Sticky stacking wrapper */}
      <div className="relative flex flex-col gap-12 max-w-5xl mx-auto">
        {projectCardsData.map((project, index) => (
          <ProjectCard 
            key={project.num} 
            index={index} 
            total={projectCardsData.length} 
            project={project} 
          />
        ))}
      </div>
    </section>
  );
};


// ============================================================================
// MAIN COMPONENT EXPORT
// ============================================================================
export default function DeveloperCore({ onBack }: DeveloperCoreProps) {
  useEffect(() => {
    // Dynamic page title setting on mount
    document.title = "Arre Deep Minded Services Limited -- 3D Creator";
  }, []);

  return (
    <div className="kanit-font min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-sans pb-24 relative overflow-x-clip selection:bg-white selection:text-black">
      {/* Google Font Kanit Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800;900&display=swap');
        
        .kanit-font {
          font-family: 'Kanit', sans-serif !important;
        }
        
        .hero-heading {
          background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Smooth scroll support within this view */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Elegant Close Button */}
      <button 
        onClick={onBack}
        className="fixed top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-200 cursor-pointer backdrop-blur-md border border-white/15 active:scale-95"
        aria-label="Back to Home"
      >
        <X size={20} />
      </button>

      {/* Wrapper to clip overflow horizontally */}
      <div className="w-full overflow-x-clip">
        {/* 1. HeroSection */}
        <HeroSection onBack={onBack} />

        {/* 2. MarqueeSection */}
        <MarqueeSection />

        {/* 3. AboutSection */}
        <AboutSection />

        {/* 4. ProjectsSection (Light Version) */}
        <ProjectsSectionLight />

        {/* 5. ProjectsSection (Dark Stacking Cards Version) */}
        <ProjectsSectionDark />
      </div>
    </div>
  );
}
