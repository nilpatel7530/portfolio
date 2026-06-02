import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HeroSection } from './components/HeroSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CredentialsSection } from './components/CredentialsSection';
import { SystemIntelligenceSection } from './components/SystemIntelligenceSection';
import { ContactSection } from './components/ContactSection';
import { StellarPreloader } from './components/StellarPreloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Suppress benign Framer Motion key warnings in console
    const originalError = console.error;
    console.error = (...args: any[]) => {
      if (args[0] && typeof args[0] === 'string' && (args[0].includes('Framer Motion') || args[0].includes('key'))) {
        return;
      }
      originalError.apply(console, args);
    };

    return () => {
      console.error = originalError;
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <StellarPreloader onLoadComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className="bg-black text-white min-h-screen flex flex-col font-body selection:bg-white selection:text-black scroll-smooth relative">
        <div className="starfield" />
      {/* Section 1: Hero Section */}
      <HeroSection />

      {/* Section 2: Capabilities Section */}
      <CapabilitiesSection />

      {/* Section 3: Selected Work (Fleet Registry) */}
      <ProjectsSection />

      {/* Section 4: Verified Credentials (Crew Badges) */}
      <CredentialsSection />

      {/* Section 4.5: System Intelligence Hub (AEO/GEO FAQ & Entity Registry) */}
      <SystemIntelligenceSection />

      {/* Section 5: Inquiries Form (Mission Launch Control) */}
      <ContactSection />

      {/* Premium Minimal Space Footer */}
      <footer className="w-full bg-black border-t border-white/5 py-12 px-6 md:px-12 select-none z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-body text-sm text-white/50">
          <div className="font-bold text-white tracking-wider">
            NIL PATEL &bull; STELLAR SYSTEMS ARCHITECT
          </div>
          <div className="flex gap-6 uppercase tracking-widest text-xs font-semibold">
            <a href="#projects-section" className="hover:text-[#DEDBC8] transition-colors">Projects</a>
            <a href="#intelligence-section" className="hover:text-[#DEDBC8] transition-colors">Intelligence Hub</a>
            <a href="#contact-section" className="hover:text-[#DEDBC8] transition-colors">Connect</a>
          </div>
          <div className="text-xs text-white/30 font-mono">
            &copy; 2026 NIL PATEL &bull; VADODARA, IN
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

export default App;
