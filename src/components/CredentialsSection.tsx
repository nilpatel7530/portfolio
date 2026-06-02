import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FadingVideo } from './FadingVideo';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  desc: string;
  icon: string;
  id?: string;
  verifyUrl: string;
}

const CERTS_DATA: Certification[] = [
  {
    title: "AI Agents Fundamentals",
    issuer: "Hugging Face",
    date: "Apr 2026",
    desc: "Mastering autonomous AI agent loops, tool calling mechanisms, dynamic planning capabilities, and system prompt orchestration using Hugging Face pipelines.",
    icon: "🤗",
    id: "nilpatel7530",
    verifyUrl: "https://cas-bridge.xethub.hf.co/xet-bridge-us/67a47037749ea2c4b9fafd4b/8c94643a534c27cb4ec58faa86ef9b58b239302e624fd208aed23fb7e70fc4dd",
  },
  {
    title: "Cloud Technical Series: AI in Action",
    issuer: "Google Cloud APAC",
    date: "Apr 2026",
    desc: "Advanced architecture of production machine learning systems, enterprise LLM APIs, scaling pipelines on GCP, and real-world intelligence solutions.",
    icon: "⚡",
    id: "178814351",
    verifyUrl: "https://googlecloudapac.accredible.com/e96cc411-9ac9-4bc1-8140-ed758129fdd0",
  },
  {
    title: "AI Tools Workshop",
    issuer: "Be10x",
    date: "Feb 2026",
    desc: "Mastering production-grade workflows using modern AI platforms, agent structures, and configuring tools to enhance developer and enterprise automation.",
    icon: "🛠️",
    id: "0270772f-3809-4400-b29b-1e1c61cd09971049973",
    verifyUrl: "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971049973",
  },
  {
    title: "Cloud Technical Series: Gemini at Work Edition",
    issuer: "United Latino Students Association",
    date: "Nov 2025",
    desc: "Practical deployment of Google Gemini integrations, structured data pipelines, workspace optimizations, and custom business agent platforms.",
    icon: "☁️",
    id: "166910245",
    verifyUrl: "https://googlecloudapac.accredible.com/90f104f9-57c1-4700-9778-aaeb69786e1d#acc.V8oWFid7",
  },
  {
    title: "Cloud Technical Series: ADK Builder's Badge",
    issuer: "United Latino Students Association",
    date: "Nov 2025",
    desc: "Proven proficiency in containerized cloud operations, microservices management, and configuring continuous deployment scripts.",
    icon: "🏅",
    verifyUrl: "https://www.credly.com/badges/7b5173b9-f59b-4138-b6e5-ad07bdf5dd75/linked_in_profile",
  },
  {
    title: "Prompt Design in Vertex AI Skill Badge",
    issuer: "Google",
    date: "Nov 2025",
    desc: "Verified Google Cloud credentials in advanced system prompt engineering, context length optimization, and Vertex AI parameters tweaking.",
    icon: "💡",
    verifyUrl: "https://www.credly.com/badges/d2b63ee7-ed47-4724-9625-d725fef04fd6/linked_in_profile",
  },
];

export const CredentialsSection: React.FC = () => {
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

  const gridVariants = {
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
      id="credentials-section"
      ref={containerRef}
      className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col select-none z-10"
    >
      
      {/* Background loop video */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4?v=credentials"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content Layer */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-20 flex flex-col min-h-screen w-full max-w-7xl mx-auto"
      >
        
        {/* Header Block */}
        <div className="mb-12">
          <motion.div variants={itemVariants} className="text-sm font-body text-white/80 mb-6 tracking-widest font-semibold uppercase">
            // Crew Badges
          </motion.div>
          <motion.h2 variants={itemVariants} className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
            Verified
            <br />
            credentials
          </motion.h2>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {CERTS_DATA.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              onMouseMove={handleMouseMove}
              className="liquid-glass rounded-[1.25rem] p-6 flex flex-col gap-5 justify-between group border border-white/5 shadow-2xl relative overflow-hidden"
            >
              {/* Radial Cursor Glow Spotlights */}
              <div className="spotlight-card-glow" />
              <div className="spotlight-card-border" />

              <div className="flex items-start gap-4 relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-[0.75rem] liquid-glass flex items-center justify-center text-2xl flex-shrink-0 border border-white/10 text-white">
                  {cert.icon}
                </div>

                {/* Issuer & Date */}
                <div className="font-body">
                  <h3 className="text-base font-bold text-white group-hover:text-[#DEDBC8] transition-colors tracking-tight leading-snug">
                    {cert.title}
                  </h3>
                  <span className="text-[10px] text-white/50 font-semibold tracking-wider block mt-1 uppercase">
                    {cert.issuer} &bull; {cert.date}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/80 text-xs md:text-sm leading-relaxed text-justify font-body font-light flex-1 relative z-10">
                {cert.desc}
              </p>

              {/* Badges & Links */}
              <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto font-body relative z-10">
                {cert.id ? (
                  <span className="rounded-full liquid-glass px-2.5 py-0.5 text-[9px] text-white/50 border border-white/5 font-mono">
                    ID: {cert.id}
                  </span>
                ) : (
                  <span className="text-[10px] text-white/40 italic">Public crew badge</span>
                )}

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] text-[#DEDBC8] font-bold hover:text-white transition-colors cursor-pointer"
                >
                  Verify Crew Badge &rarr;
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </motion.div>

    </section>
  );
};
