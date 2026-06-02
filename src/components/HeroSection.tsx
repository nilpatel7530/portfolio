import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FadingVideo } from './FadingVideo';
import { BlurText } from './BlurText';

export const HeroSection: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredNavIdx, setHoveredNavIdx] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // SVG Icons
  const ArrowUpRight = () => (
    <svg className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );

  const PlayIcon = () => (
    <svg className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24">
      <polygon points="6,4 20,12 6,20" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-[28px] h-[28px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );

  const GlobeIcon = () => (
    <svg className="w-[28px] h-[28px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );

  const navItems = ["Home", "Capabilities", "Projects", "Credentials", "Connect"];

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col justify-between select-none z-10">
      
      {/* Background loop video - 120% scale, top-aligned */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
          className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top"
          style={{ width: "120%", height: "120%" }}
        />
      </div>

      {/* Floating Sticky Navbar Pill (Unified scroll-responsive layout) */}
      <header className="fixed top-6 left-0 right-0 z-50 px-6 w-full flex justify-center pointer-events-none select-none">
        <div
          className={`rounded-full max-w-5xl w-full px-6 py-3 flex items-center justify-between transition-all duration-500 backdrop-blur-md pointer-events-auto border ${
            isScrolled
              ? 'bg-black/85 border-white/15 shadow-2xl shadow-black/60 text-white'
              : 'bg-white/5 border-white/10 text-white'
          }`}
        >
          {/* Brand Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="w-8 h-8 rounded-full liquid-glass flex items-center justify-center font-heading italic text-lg text-white select-none -translate-y-[1px] border border-white/10 group-hover:scale-105 transition-transform">
              n
            </span>
            <span className="font-bold text-base font-body tracking-wider text-white">
              Nil Patel
            </span>
          </div>

          {/* Links - Hidden on Mobile */}
          <div className="hidden md:flex items-center gap-2 font-body font-semibold text-xs tracking-wide">
            {navItems.map((item, idx) => {
              const targets = ['#', 'capabilities-section', 'projects-section', 'credentials-section', 'contact-section'];
              return (
                <button
                  key={idx}
                  onMouseEnter={() => setHoveredNavIdx(idx)}
                  onMouseLeave={() => setHoveredNavIdx(null)}
                  onClick={() => {
                    if (idx === 0) {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      const el = document.getElementById(targets[idx]);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="relative text-white/80 hover:text-white transition-colors cursor-pointer px-3.5 py-1.5 whitespace-nowrap outline-none"
                >
                  {hoveredNavIdx === idx && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-white/10 border border-white/5 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item}
                </button>
              );
            })}
          </div>

          {/* Right action */}
          <button
            onClick={() => {
              const el = document.getElementById('contact-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="rounded-full bg-white text-black hover:bg-white/90 px-4 py-1.5 text-xs font-bold flex items-center gap-1 transition-all cursor-pointer whitespace-nowrap shadow-md"
          >
            Let's Build
            <svg className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" /><path d="M7 7h10v10" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Content Area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-32 px-4 text-center max-w-5xl mx-auto w-full">
        
        {/* Mission Commander Avatar */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, scale: 0.8 }}
          animate={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative w-24 h-24 mb-6 group cursor-pointer select-none"
          whileHover={{ scale: 1.05 }}
        >
          {/* Pulsing Outer Orbit Ring */}
          <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-25" />
          {/* Inner Glowing Ring */}
          <div className="absolute inset-[-4px] rounded-full border border-white/10 bg-white/5 blur-sm scale-105" />
          {/* Main Headshot Image */}
          <img
            src="/headshot.jpg"
            alt="Nil Patel - Stellar Systems Architect"
            className="w-full h-full rounded-full object-cover border-2 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.15)] relative z-10"
          />
        </motion.div>

        {/* High-Fidelity Active Systems Badge Pill */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          whileHover={{ scale: 1.02, y: -1 }}
          className="rounded-full liquid-glass pl-3 pr-5 py-1.5 flex items-center gap-3 mb-6 shadow-lg shadow-black/40 select-none border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
        >
          {/* Active System Pulsing Dot */}
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DEDBC8] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DEDBC8]"></span>
          </span>
          
          {/* Monospaced system status label */}
          <span className="text-[10px] font-bold font-mono tracking-widest text-[#DEDBC8] uppercase">
            Systems Active
          </span>
          
          {/* Subtle separator */}
          <span className="w-[1px] h-3 bg-white/20" />

          {/* Announcement text */}
          <span className="text-xs font-semibold text-white/80 tracking-wide font-body">
            Elite AI Agent & Scalable SaaS Propulsion Systems 2026
          </span>
        </motion.div>

        {/* Word-by-Word Headline */}
        <BlurText
          text="Venture Past Our Sky Across the Universe"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl justify-center tracking-[-4px] mb-6 select-none"
        />

        {/* Subheading text */}
        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
          className="text-white text-sm md:text-base leading-tight font-light font-body max-w-2xl mb-8"
        >
          Accelerating digital frontiers. As a Google Certified Agent Developer and Full-Stack Architect, I engineer autonomous AI agent loops, custom RAG vector indexes, and high-performance Laravel SaaS platforms that propel global enterprises.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.1 }}
          className="flex items-center gap-6 mb-10"
        >
          <button
            onClick={() => {
              const el = document.getElementById('contact-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5 border border-white/5 transition-all flex items-center gap-2 cursor-pointer group"
          >
            Launch Your Voyage
            <ArrowUpRight />
          </button>

          <button
            onClick={() => {
              const el = document.getElementById('projects-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white hover:underline transition-all cursor-pointer font-body"
          >
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <PlayIcon />
            </span>
            View Fleet Registry
          </button>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.3 }}
          className="flex flex-col sm:flex-row items-stretch justify-center gap-4 select-none mb-12"
        >
          {/* Stat 1 */}
          <div className="liquid-glass rounded-[1.25rem] p-5 w-[220px] h-[145px] flex flex-col justify-between items-start border border-white/5 text-left shadow-lg">
            <ClockIcon />
            <div>
              <div className="font-heading italic text-4xl text-white tracking-[-1px] leading-none">
                30+ Shipped
              </div>
              <div className="text-xs text-white/60 font-body font-light mt-2 tracking-wide">
                Production SaaS & AI Platforms
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="liquid-glass rounded-[1.25rem] p-5 w-[220px] h-[145px] flex flex-col justify-between items-start border border-white/5 text-left shadow-lg">
            <GlobeIcon />
            <div>
              <div className="font-heading italic text-4xl text-white tracking-[-1px] leading-none">
                6+ Badges
              </div>
              <div className="text-xs text-white/60 font-body font-light mt-2 tracking-wide">
                Verified Cloud & AI Credentials
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Global Partners */}
      <motion.footer
        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 1.4 }}
        className="relative z-10 flex flex-col items-center gap-4 pb-8 w-full select-none"
      >
        {/* Supporting Chip */}
        <div className="rounded-full liquid-glass px-3.5 py-1 text-xs font-semibold text-white/90 tracking-wide font-body border border-white/5">
          Collaborating with top frameworks, cloud databases, and AI partners
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 md:gap-x-16 gap-y-2 mt-2">
          {["Hugging Face", "Google Cloud", "Laravel", "MySQL", "Vertex AI"].map((name, i) => (
            <span
              key={i}
              className="font-heading italic text-2xl md:text-3xl text-white/70 hover:text-white transition-colors tracking-tight select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </motion.footer>

    </section>
  );
};
