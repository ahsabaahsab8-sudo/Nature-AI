import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface BlurTextProps {
  text: string;
  className?: string;
}

export const BlurText: React.FC<BlurTextProps> = ({ text, className }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const words = text.split(/\s+/);

  return (
    <p
      ref={containerRef}
      className={`flex flex-wrap justify-center select-none ${className || ''}`}
      style={{ rowGap: '0.1em' }}
    >
      {words.map((word, i) => {
        const delay = i * 0.1; // 100ms stagger delay
        return (
          <motion.span
            key={i}
            initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
            animate={
              isInView
                ? { filter: 'blur(0px)', opacity: 1, y: 0 }
                : { filter: 'blur(10px)', opacity: 0, y: 50 }
            }
            transition={{
              duration: 0.7,
              ease: 'easeOut',
              delay: delay,
            }}
            style={{
              display: 'inline-block',
              marginRight: '0.28em',
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
};
