import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FadingVideo } from './FadingVideo';

export const CapabilitiesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    currentTarget.style.setProperty('--mouse-x', `${x}px`);
    currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  // Material Icon SVGs (exact paths as specified)
  const AISceneryIcon = () => (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5Zm1-4h12l-3.75-5-3 4L9 13l-3 4Z" />
    </svg>
  );

  const BatchProductionIcon = () => (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 6.47 5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.89-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4Z" />
    </svg>
  );

  const SmartLightingIcon = () => (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z" />
    </svg>
  );

  const cardsData = [
    {
      title: "AI Agent Engineering",
      desc: "AI analyzes business structures to create autonomous planning loops, private local LLM integrations, and custom n8n automation bridges.",
      icon: <AISceneryIcon />,
      tags: ["RAG Systems", "Vector Index", "Gemma API", "n8n Bridges"]
    },
    {
      title: "Laravel SaaS Propulsion",
      desc: "Propel your business in minutes. Build high-performance multi-tenant backend engines, multi-role RBAC matrices, and payment SDK layers.",
      icon: <BatchProductionIcon />,
      tags: ["Multi-Role RBAC", "Cashfree SDK", "High Performance", "Sub Flow"]
    },
    {
      title: "Cloud Systems & DevOps",
      desc: "Automated containerization and continuous integration. Achieve absolute cloud operations health via GCP systems and server monitoring.",
      icon: <SmartLightingIcon />,
      tags: ["GCP Operations", "CI/CD Pipelines", "Containerization", "Security Toggles"]
    }
  ];

  const contentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  } as any;

  const itemVariants = {
    hidden: { filter: 'blur(10px)', opacity: 0, y: 30 },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as any }
    }
  } as any;

  return (
    <section
      id="capabilities-section"
      ref={containerRef}
      className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col select-none z-10"
    >
      
      {/* Background loop video - full bleed */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Capabilities Content Layer */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen w-full max-w-7xl mx-auto"
      >
        
        {/* Header Block (stretches, mb-auto pins it at the top) */}
        <div className="mb-auto">
          <motion.div variants={itemVariants} className="text-sm font-body text-white/80 mb-6 tracking-widest font-semibold uppercase">
            // Capabilities
          </motion.div>
          <motion.h2 variants={itemVariants} className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
            Production
            <br />
            evolved
          </motion.h2>
        </div>

        {/* Three Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full">
          {cardsData.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              onMouseMove={handleMouseMove}
              className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col border border-white/5 shadow-2xl relative group overflow-hidden"
            >
              {/* Radial Cursor Glow Spotlights */}
              <div className="spotlight-card-glow" />
              <div className="spotlight-card-border" />

              {/* Top Row: Icon + Tags */}
              <div className="flex items-start justify-between gap-4 w-full relative z-10">
                {/* Nested Icon Square */}
                <div className="w-11 h-11 rounded-[0.75rem] liquid-glass flex items-center justify-center border border-white/10 text-white flex-shrink-0">
                  {card.icon}
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full liquid-glass px-3 py-1 text-[11px] text-white/90 font-body tracking-wide font-medium whitespace-nowrap border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Flex Space */}
              <div className="flex-1" />

              {/* Bottom: Title + Description */}
              <div className="mt-6 text-left relative z-10">
                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none select-none">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-white/80 font-body font-light leading-snug max-w-[32ch] select-none">
                  {card.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </motion.div>

    </section>
  );
};
