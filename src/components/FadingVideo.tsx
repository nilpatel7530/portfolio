import React, { useRef, useEffect } from 'react';

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export const FadingVideo: React.FC<FadingVideoProps> = ({ src, className, style }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const fadingOutRef = useRef<boolean>(false);

  const fadeTo = (targetOpacity: number, duration: number = 500) => {
    const video = videoRef.current;
    if (!video) return;

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    const currentOpacity = parseFloat(video.style.opacity || '0');
    if (currentOpacity === targetOpacity) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const newOpacity = currentOpacity + (targetOpacity - currentOpacity) * progress;
      video.style.opacity = newOpacity.toString();

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        video.style.opacity = targetOpacity.toString();
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = '0';
    fadingOutRef.current = false;

    const handleLoadedData = () => {
      if (!video) return;
      video.style.opacity = '0';
      fadingOutRef.current = false;
      video.play().then(() => {
        fadeTo(1, 500);
      }).catch(() => {});
    };

    const handleTimeUpdate = () => {
      if (!video.duration || video.duration === Infinity) return;
      const remaining = video.duration - video.currentTime;
      if (remaining <= 0.55 && remaining > 0 && !fadingOutRef.current) {
        fadingOutRef.current = true;
        fadeTo(0, 500);
      }
    };

    const handleEnded = () => {
      if (!video) return;
      video.style.opacity = '0';
      setTimeout(() => {
        if (!video) return;
        video.currentTime = 0;
        video.play().then(() => {
          fadingOutRef.current = false;
          fadeTo(1, 500);
        }).catch(() => {});
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    if (video.readyState >= 2) {
      handleLoadedData();
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      preload="auto"
      className={className}
      style={{ ...style, transition: 'none' }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};
