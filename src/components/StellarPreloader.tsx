import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface StellarPreloaderProps {
  onLoadComplete: () => void;
}

interface LoaderTheme {
  bg: string;
  glow: string;
  spinnerBorderBg: string;
  spinnerBorderActive: string;
  logoText: string;
  textMuted: string;
  textHighlight: string;
  barBg: string;
  barFill: string;
}

const darkTheme: LoaderTheme = {
  bg: "bg-black",
  glow: "bg-white/5",
  spinnerBorderBg: "border-white/10",
  spinnerBorderActive: "border-t-2 border-white/40 border-r-2 border-transparent border-b-2 border-transparent border-l-2 border-transparent",
  logoText: "text-white",
  textMuted: "text-white/40",
  textHighlight: "text-white/70",
  barBg: "bg-white/5 border border-white/5",
  barFill: "bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]",
};

const lightTheme: LoaderTheme = {
  bg: "bg-[#FAF9F6]", // Premium minimalist warm cream background
  glow: "bg-[#DEDBC8]/25", // Soft warm gold-amber glow matching Nil's primary color
  spinnerBorderBg: "border-stone-900/10",
  spinnerBorderActive: "border-t-2 border-stone-900/40 border-r-2 border-transparent border-b-2 border-transparent border-l-2 border-transparent",
  logoText: "text-stone-900",
  textMuted: "text-stone-500/80",
  textHighlight: "text-stone-700",
  barBg: "bg-stone-900/5 border border-stone-900/5",
  barFill: "bg-[#DEDBC8] shadow-[0_0_8px_rgba(222,219,200,0.8)]",
};

export const StellarPreloader: React.FC<StellarPreloaderProps> = ({ onLoadComplete }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing voyager core...");

  // References to keep animation loop updates seamless and avoid React scheduler lag
  const targetProgressRef = useRef(0);
  const simulatedProgressRef = useRef(0);
  const realProgressRef = useRef(0);
  const displayedProgressRef = useRef(0);

  useEffect(() => {
    // 1. Detect and Reactively Listen to System Theme Preferences
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkTheme(mediaQuery.matches);
    const themeListener = (e: MediaQueryListEvent) => {
      setIsDarkTheme(e.matches);
    };
    mediaQuery.addEventListener('change', themeListener);

    // 2. Intelligent, Safe Asset Loading Progress Monitor
    interface TrackedAsset {
      id: string;
      type: 'video' | 'image' | 'font' | 'doc';
      weight: number;
      loaded: boolean;
    }

    let assets: TrackedAsset[] = [];
    const WEIGHTS = {
      video: 10,
      image: 2,
      font: 5,
      doc: 10
    };

    const updateRealProgress = () => {
      const totalWeight = assets.reduce((sum, asset) => sum + asset.weight, 0);
      if (totalWeight === 0) {
        realProgressRef.current = 100;
        return;
      }
      const loadedWeight = assets.reduce((sum, asset) => sum + (asset.loaded ? asset.weight : 0), 0);
      realProgressRef.current = Math.floor((loadedWeight / totalWeight) * 100);
    };

    const registerAsset = (id: string, type: 'video' | 'image' | 'font' | 'doc', initialLoaded: boolean = false) => {
      assets.push({ id, type, weight: WEIGHTS[type], loaded: initialLoaded });
      updateRealProgress();
    };

    const markAssetLoaded = (id: string) => {
      const asset = assets.find(a => a.id === id);
      if (asset && !asset.loaded) {
        asset.loaded = true;
        updateRealProgress();
      }
    };

    // Tracking Event Listeners Cleanup Accumulator
    const cleanupListeners: Array<() => void> = [];

    // Track Fonts Loaded State
    registerAsset('fonts', 'font');
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        markAssetLoaded('fonts');
      }).catch(() => {
        markAssetLoaded('fonts');
      });
    } else {
      markAssetLoaded('fonts');
    }

    // Track Basic Document Window Load Event
    registerAsset('document', 'doc', document.readyState === 'complete');
    if (document.readyState !== 'complete') {
      const handleWindowLoad = () => {
        markAssetLoaded('document');
      };
      window.addEventListener('load', handleWindowLoad);
      cleanupListeners.push(() => window.removeEventListener('load', handleWindowLoad));
    }

    // Scan the DOM after 150ms to discover all React-rendered images and videos
    const scanTimer = setTimeout(() => {
      // Discover and track all image assets
      const images = Array.from(document.querySelectorAll('img'));
      images.forEach((img, idx) => {
        const imgId = `img-${idx}-${img.src || 'inline'}`;
        registerAsset(imgId, 'image', img.complete);

        if (!img.complete) {
          const loadHandler = () => markAssetLoaded(imgId);
          const errorHandler = () => markAssetLoaded(imgId);

          img.addEventListener('load', loadHandler);
          img.addEventListener('error', errorHandler);
          cleanupListeners.push(() => {
            img.removeEventListener('load', loadHandler);
            img.removeEventListener('error', errorHandler);
          });
        }
      });

      // Discover and track all video assets (crucial for cinematic sections)
      const videos = Array.from(document.querySelectorAll('video'));
      videos.forEach((video, idx) => {
        const videoId = `video-${idx}-${video.src || 'inline'}`;
        
        // readyState >= 2 means HAVE_CURRENT_DATA (the current frame is available)
        const isLoaded = video.readyState >= 2;
        registerAsset(videoId, 'video', isLoaded);

        if (!isLoaded) {
          const dataHandler = () => markAssetLoaded(videoId);
          const canPlayHandler = () => markAssetLoaded(videoId);
          
          video.addEventListener('loadeddata', dataHandler);
          video.addEventListener('canplaythrough', canPlayHandler);
          cleanupListeners.push(() => {
            video.removeEventListener('loadeddata', dataHandler);
            video.removeEventListener('canplaythrough', canPlayHandler);
          });

          // Dynamic safety timeout: release individual video weight if loading stalls
          const safetyVideoTimeout = setTimeout(() => {
            markAssetLoaded(videoId);
          }, 4500);
          cleanupListeners.push(() => clearTimeout(safetyVideoTimeout));
        }
      });

      updateRealProgress();
    }, 150);

    // 3. requestAnimationFrame Easing Interpolation Loop
    let startTimestamp: number | null = null;
    const minDuration = 2500; // Guarantee 2.5s minimum entry for premium introductory visual cadence
    let rafId: number;

    const statusSteps = [
      { threshold: 0, text: "Syncing launch coordinates..." },
      { threshold: 18, text: "Configuring liquid-glass visual capsules..." },
      { threshold: 38, text: "Scanning Fleet Registry SaaS databases..." },
      { threshold: 58, text: "Engaging AI Agent propulsion loops..." },
      { threshold: 78, text: "Caching verified credentials & badges..." },
      { threshold: 92, text: "Launching Nil Patel's portfolio..." }
    ];

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;

      // Base simulated baseline curve (0% -> 100% in minDuration)
      const simulatedPercent = Math.min((elapsed / minDuration) * 100, 100);
      simulatedProgressRef.current = simulatedPercent;

      // Target progress is strictly capped by the slower of simulated and real assets progress
      const targetVal = Math.min(simulatedProgressRef.current, realProgressRef.current);
      targetProgressRef.current = targetVal;

      // Silk-smooth exponential easing interpolation (0.05 step)
      const diff = targetProgressRef.current - displayedProgressRef.current;
      displayedProgressRef.current += diff * 0.05;

      const currentDisplay = Math.round(displayedProgressRef.current);
      setDisplayedProgress(Math.min(currentDisplay, 100));

      // Retrieve matched status text from tracking boundaries
      const currentStatus = statusSteps.reduce((acc, step) => {
        if (displayedProgressRef.current >= step.threshold) return step.text;
        return acc;
      }, statusSteps[0].text);
      setStatusText(currentStatus);

      if (displayedProgressRef.current < 99.5) {
        rafId = requestAnimationFrame(animate);
      } else {
        setDisplayedProgress(100);
        // Hold at 100% for 150ms to finalize the visual aesthetic before fade-out
        setTimeout(() => {
          onLoadComplete();
        }, 150);
      }
    };

    rafId = requestAnimationFrame(animate);

    // 4. Return robust cleanup handlers
    return () => {
      clearTimeout(scanTimer);
      mediaQuery.removeEventListener('change', themeListener);
      cleanupListeners.forEach(cleanup => cleanup());
      cancelAnimationFrame(rafId);
    };
  }, [onLoadComplete]);

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <motion.div
      className={`fixed inset-0 ${theme.bg} z-[9999] flex flex-col items-center justify-center select-none transition-colors duration-700`}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Dynamic atmospheric breathing glow backdrop */}
      <motion.div
        className={`absolute w-[450px] h-[450px] ${theme.glow} rounded-full blur-[140px] pointer-events-none transition-colors duration-700`}
        animate={{ scale: [1, 1.08, 1], opacity: [0.75, 0.95, 0.75] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbit Logo Loader - High Fidelity Gyroscopic Spinner */}
      <div className="relative w-24 h-24 flex items-center justify-center mb-8">
        {/* Outer Orbit Ring (Slow Clockwise dashed ring) */}
        <motion.div
          className={`absolute inset-0 rounded-full border border-dashed ${theme.spinnerBorderBg} transition-colors duration-700`}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
        {/* Middle Orbit Ring (Medium Counter-Clockwise solid thin ring) */}
        <motion.div
          className={`absolute inset-2 rounded-full border ${theme.spinnerBorderBg} opacity-30 transition-colors duration-700`}
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
        {/* Inner Active Spinning Arc (Fast Clockwise colored sweep) */}
        <motion.div
          className={`absolute inset-3 rounded-full ${theme.spinnerBorderActive} transition-colors duration-700`}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        />
        {/* Central Brand Letter */}
        <motion.span
          className={`font-heading italic text-3xl ${theme.logoText} -translate-y-[2px] transition-colors duration-700`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          n
        </motion.span>
      </div>

      {/* Progress Interface */}
      <div className="flex flex-col items-center w-full max-w-[280px] font-body text-center gap-3">
        
        {/* Progress Bar Container */}
        <div className={`w-full h-[2px] ${theme.barBg} rounded-full overflow-hidden relative transition-colors duration-700`}>
          <motion.div
            className={`h-full rounded-full ${theme.barFill} transition-all duration-100`}
            style={{ width: `${displayedProgress}%` }}
          />
        </div>

        {/* Sub-labeling info - Personalized and Tabular Jitter-Free Font */}
        <div className={`flex justify-between items-center w-full text-[10px] ${theme.textMuted} tracking-wider font-semibold font-mono transition-colors duration-700`}>
          <span>LOADING NIL PATEL'S PORTFOLIO</span>
          <span className="tabular-nums font-bold tracking-widest">{displayedProgress}%</span>
        </div>

        {/* Status prompt */}
        <motion.span
          key={statusText}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`text-xs ${theme.textHighlight} font-light tracking-wide mt-1 transition-colors duration-700`}
        >
          {statusText}
        </motion.span>
      </div>
    </motion.div>
  );
};
