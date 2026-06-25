import React, { useRef, useEffect, useState } from 'react';

interface FadingVideoProps {
  src: string | string[];
  className?: string;
  style?: React.CSSProperties;
}

export const FadingVideo: React.FC<FadingVideoProps> = ({ src, className, style }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafIdRef = useRef<number | null>(null);
  const fadingOutRef = useRef<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine current active source
  const currentSrc = Array.isArray(src) ? src[currentIndex] : src;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly set initial opacity
    video.style.opacity = '0';
    fadingOutRef.current = false;

    const fadeTo = (target: number, duration: number = 500) => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }

      const startOpacity = parseFloat(video.style.opacity || '0');
      const startTime = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentOpacity = startOpacity + (target - startOpacity) * progress;
        
        video.style.opacity = currentOpacity.toString();

        if (progress < 1) {
          rafIdRef.current = requestAnimationFrame(animate);
        } else {
          rafIdRef.current = null;
        }
      };

      rafIdRef.current = requestAnimationFrame(animate);
    };

    const handleLoadedData = () => {
      video.style.opacity = '0';
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((e) => console.log("Video auto-play prevented:", e));
      }
      fadeTo(1, 500);
    };

    const handleTimeUpdate = () => {
      const duration = video.duration;
      const currentTime = video.currentTime;
      if (!isNaN(duration) && duration > 0) {
        const remaining = duration - currentTime;
        if (!fadingOutRef.current && remaining <= 0.55 && remaining > 0) {
          fadingOutRef.current = true;
          fadeTo(0, 550); // fade out over 550ms
        }
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      if (Array.isArray(src)) {
        // Advance to next index (cycling)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % src.length);
      } else {
        // Single source: reset and replay
        setTimeout(() => {
          video.currentTime = 0;
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch((e) => console.log("Video replay prevented:", e));
          }
          fadingOutRef.current = false;
          fadeTo(1, 500);
        }, 100);
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    // If source changes or video is already ready
    if (video.readyState >= 2) {
      handleLoadedData();
    }

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [currentSrc, src]);

  return (
    <video
      ref={videoRef}
      src={currentSrc}
      className={className}
      style={{ ...style, transition: 'none' }}
      muted
      playsInline
      preload="auto"
    />
  );
};
