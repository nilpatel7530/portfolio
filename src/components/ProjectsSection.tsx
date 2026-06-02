import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FadingVideo } from './FadingVideo';

interface Project {
  title: string;
  category: string;
  desc: string;
  stack: string[];
  isPrivate: boolean;
  demoUrl?: string;
  codeUrl?: string;
  credentials?: {
    loginUrl: string;
    roles: { role: string; email: string; pass: string; access?: string }[];
  };
}

const PROJECTS_DATA: Project[] = [
  {
    title: "Goswami Sangath Matrimonial",
    category: "SaaS Platforms",
    desc: "A secure, community-oriented matrimonial matchmaking platform featuring custom profile management, secure admin authentication with 2FA, responsive design, and middleware-based multi-role access controls.",
    stack: ["Laravel", "Bootstrap", "JavaScript", "MySQL"],
    isPrivate: true,
    demoUrl: "https://goswamisangath.developmentdemo.co.in/admin",
    codeUrl: "https://github.com/nilpatel7530/goswami-sangath",
    credentials: {
      loginUrl: "https://goswamisangath.developmentdemo.co.in/admin",
      roles: [
        { role: "Super Admin", email: "admin@goswamisangath.com", pass: "Admin@123", access: "Full Control" }
      ]
    }
  },
  {
    title: "Suyog Matrimonial Platform",
    category: "SaaS Platforms",
    desc: "Scalable matchmaking service with a robust Friend system, multi-currency subscriptions with real-time exchange rates, Cashfree test/prod payment toggles, and high-performance profile queries.",
    stack: ["Laravel", "Cashfree SDK", "Bootstrap", "Real-Time SMS"],
    isPrivate: true,
    demoUrl: "https://www.suyog.life/",
    codeUrl: "https://github.com/nilpatel7530/suyog-matrimonial",
  },
  {
    title: "Creative Engineering SRS (ERM)",
    category: "CRM Solutions",
    desc: "Granular role-based ERP portal built for team scheduling, CAPEX/OPEX invoice tracking, module-level permission matrices, and highly optimized backend query performance for live operations.",
    stack: ["Laravel", "MySQL", "Bootstrap", "Granular RBAC"],
    isPrivate: true,
    demoUrl: "https://srs.developmentdemo.co.in/login",
    codeUrl: "https://github.com/nilpatel7530/creative-srs-erm",
    credentials: {
      loginUrl: "https://srs.developmentdemo.co.in/login",
      roles: [
        { role: "Super Admin", email: "admin@example.com", pass: "password", access: "Full Control" }
      ]
    }
  },
  {
    title: "Enterprise HRMS Dashboard",
    category: "SaaS Platforms",
    desc: "A comprehensive Human Resource Management System featuring robust employee workflows, department analytics, multi-role views, and complete English/Arabic multi-language support (RTL).",
    stack: ["Laravel", "Bootstrap", "MySQL", "Multi-Language"],
    isPrivate: true,
    demoUrl: "https://hrms.developmentdemo.co.in/login",
    codeUrl: "https://github.com/nilpatel7530/enterprise-hrms",
    credentials: {
      loginUrl: "https://hrms.developmentdemo.co.in/login",
      roles: [
        { role: "Super Admin", email: "admin@hrms.com", pass: "password123", access: "All modules, payroll" },
        { role: "HR Admin", email: "hradmin@hrms.com", pass: "password123", access: "Leaves, travel, tasks" }
      ]
    }
  },
  {
    title: "TrustLine Energy Platform",
    category: "Web Applications",
    desc: "SEO-optimized corporate web portal for a prominent renewable solar energy engineering firm, featuring responsive service showcases, digital lead capture systems, and fast-loading web performance.",
    stack: ["HTML5", "CSS3 Variables", "JavaScript", "Bootstrap"],
    isPrivate: false,
    demoUrl: "https://trustlineenergy.com/",
    codeUrl: "https://github.com/nilpatel7530/trustlineenergy",
  },
];

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [openCredsIdx, setOpenCredsIdx] = useState<number | null>(null);

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
      id="projects-section"
      ref={containerRef}
      className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col select-none z-10"
    >
      
      {/* Background loop video */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
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
            // Fleet Registry
          </motion.div>
          <motion.h2 variants={itemVariants} className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
            Selected
            <br />
            voyage projects
          </motion.h2>
        </div>

        {/* Bento Grid (6-column math-balanced arrangement) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 w-full">
          {PROJECTS_DATA.map((project, idx) => {
            const spanClass = idx < 2 ? 'md:col-span-3' : 'md:col-span-2';
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                onMouseMove={handleMouseMove}
                className={`liquid-glass rounded-[1.25rem] p-6 md:p-8 flex flex-col justify-between gap-6 border border-white/5 shadow-2xl relative group overflow-hidden ${spanClass}`}
              >
                {/* Radial Cursor Glow Spotlights */}
                <div className="spotlight-card-glow" />
                <div className="spotlight-card-border" />

                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors pointer-events-none" />

                <div className="flex flex-col gap-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full liquid-glass px-3.5 py-1 text-[11px] text-white font-body tracking-wide font-medium border border-white/10">
                      {project.category}
                    </span>
                    {project.isPrivate && (
                      <span className="rounded-full liquid-glass px-2.5 py-0.5 text-[10px] text-white/50 border border-white/5 flex items-center gap-1 font-body font-medium">
                        Private
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-heading italic text-white text-3xl group-hover:text-[#DEDBC8] transition-colors tracking-tight leading-none">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm text-white/80 font-body font-light leading-snug max-w-[45ch]">
                      {project.desc}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 mt-auto relative z-10">
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full liquid-glass px-3 py-1 text-[10px] text-white/90 font-body border border-white/5 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions Row */}
                  <div className="flex items-center justify-between gap-3 font-body flex-wrap">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#DEDBC8] font-bold hover:text-white transition-colors cursor-pointer"
                      >
                        Live Voyage &rarr;
                      </a>
                    ) : (
                      <span className="text-xs text-gray-500 font-body">Private registry</span>
                    )}

                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setOpenCredsIdx(openCredsIdx === idx ? null : idx)}
                        className={`rounded-full liquid-glass px-3 py-1 text-[11px] font-medium border transition-colors cursor-pointer flex items-center gap-1 ${
                          openCredsIdx === idx 
                            ? 'bg-white text-black border-white' 
                            : 'text-white/80 hover:text-white border-white/10 hover:bg-white/5'
                        }`}
                      >
                        🔑 Credentials
                      </button>

                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
                        >
                          View Code
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Inline Collapsible Credentials Terminal */}
                  <AnimatePresence>
                    {openCredsIdx === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden font-body text-xs text-white/90 liquid-glass border border-white/10 rounded-xl p-4 flex flex-col gap-2.5 text-left bg-black/40 shadow-inner"
                      >
                        {project.credentials ? (
                          <>
                            <div className="flex justify-between items-center pb-1.5 border-b border-white/5">
                              <span className="font-bold text-[#DEDBC8]">Credentials Terminal</span>
                              <a href={project.credentials.loginUrl} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white underline font-medium">Login Page &rarr;</a>
                            </div>
                            <div className="flex flex-col gap-1.5 font-mono select-text">
                              {project.credentials.roles.map((roleInfo, rIdx) => (
                                <div key={rIdx} className="p-2 rounded bg-white/5 border border-white/5 flex flex-col gap-1">
                                  <div className="flex justify-between font-bold text-[#DEDBC8] text-[10px]">
                                    <span>{roleInfo.role}</span>
                                    {roleInfo.access && <span className="opacity-60 font-body">({roleInfo.access})</span>}
                                  </div>
                                  <div><span className="text-white/40">Email:</span> <code className="text-white/95">{roleInfo.email}</code></div>
                                  <div><span className="text-white/40">Pass:</span> <code className="text-white/95">{roleInfo.pass}</code></div>
                                </div>
                              ))}
                            </div>
                          </>
                        ) : (
                          <div className="text-white/50 italic py-2 text-center">
                            {idx === 1 
                              ? "Live platform: self-registration is fully operational. Please create a custom crew account." 
                              : "Landing page showcase: no authentication required."
                            }
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </motion.div>
            );
          })}
        </div>

      </motion.div>

    </section>
  );
};
