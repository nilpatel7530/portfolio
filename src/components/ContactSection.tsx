import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FadingVideo } from './FadingVideo';

export const ContactSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    currentTarget.style.setProperty('--mouse-x', `${x}px`);
    currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showChannelSelect, setShowChannelSelect] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [linkedinNotice, setLinkedinNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate high-tech telemetry indexing and parsing
    setTimeout(() => {
      setIsSubmitting(false);
      setShowChannelSelect(true);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleEmailTransmit = () => {
    const bodyText = `Mission Specialist: ${formData.name}\nLaunch Coordinates (Email): ${formData.email}\nObjective: ${formData.subject}\n\nParameters:\n${formData.message}`;
    const mailtoUrl = `mailto:nilpatel7530@gmail.com?subject=${encodeURIComponent("Mission Launch: " + formData.subject)}&body=${encodeURIComponent(bodyText)}`;
    window.open(mailtoUrl, '_blank');
    setIsSubmitted(true);
    setShowChannelSelect(false);
    // Clear form fields
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleWhatsAppTransmit = () => {
    const bodyText = `*Mission Specialist:* ${formData.name}\n*Launch Coordinates (Email):* ${formData.email}\n*Objective:* ${formData.subject}\n\n*Parameters:*\n${formData.message}`;
    const whatsappUrl = `https://wa.me/916355343580?text=${encodeURIComponent(bodyText)}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
    setShowChannelSelect(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleLinkedInTransmit = () => {
    const bodyText = `Mission Specialist: ${formData.name}\nLaunch Coordinates (Email): ${formData.email}\nObjective: ${formData.subject}\n\nParameters:\n${formData.message}`;
    navigator.clipboard.writeText(bodyText).then(() => {
      setLinkedinNotice(true);
      setTimeout(() => {
        setLinkedinNotice(false);
        window.open('https://linkedin.com/in/nilpatel7530', '_blank');
        setIsSubmitted(true);
        setShowChannelSelect(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1500);
    }).catch(() => {
      window.open('https://linkedin.com/in/nilpatel7530', '_blank');
      setIsSubmitted(true);
      setShowChannelSelect(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    });
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

  // High-Fidelity Official Brand SVG Icons
  const GmailIcon = () => (
    <svg className="w-6 h-6 text-[#DEDBC8] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/>
    </svg>
  );

  const WhatsAppIcon = () => (
    <svg className="w-6 h-6 text-[#DEDBC8] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.004 0C5.378 0 0 5.375 0 12c0 2.112.551 4.167 1.6 5.975L.054 24l6.195-1.62C8.033 23.415 10.007 24 12.004 24c6.623 0 12-5.377 12-12s-5.377-12-12-12Zm6.002 16.925c-.255.725-1.485 1.34-2.045 1.4-1.52.16-3.415-.365-5.265-2.145-2.29-2.2-3.87-4.88-4.045-6.14-.145-.985.495-1.895 1.255-2.005.18-.025.365-.035.545-.035.275 0 .425.07.565.355.22.44.75 1.825.815 1.955.065.13.11.28.02.46-.09.18-.195.345-.335.51-.14.165-.295.345-.125.635.345.585.81 1.16 1.44 1.77.68.66 1.33 1.09 1.96 1.38.3.14.475.105.65-.09.215-.24.915-1.065 1.16-1.43.085-.125.23-.205.395-.145.18.065 1.325.625 1.55.735.225.11.375.165.43.26.055.095.055.55-.2 1.275Z"/>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg className="w-6 h-6 text-[#DEDBC8] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/>
    </svg>
  );

  const GitHubIcon = () => (
    <svg className="w-6 h-6 text-[#DEDBC8] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.527-10-10-10z"/>
    </svg>
  );

  return (
    <section
      id="contact-section"
      ref={containerRef}
      className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col select-none z-10"
    >
      {/* Background loop video */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4?v=contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content Layer */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-20 flex flex-col min-h-screen w-full max-w-4xl mx-auto items-center justify-center"
      >
        {/* Header Block */}
        <div className="text-center mb-10">
          <motion.div variants={itemVariants} className="text-sm font-body text-[#DEDBC8] mb-6 tracking-widest font-semibold uppercase">
            // Mission Launch Control
          </motion.div>
          <motion.h2 variants={itemVariants} className="font-heading italic text-white text-5xl md:text-6xl tracking-[-2px] leading-tight">
            Let's build something exceptional.
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-sm md:text-base text-white/75 font-body font-light max-w-lg mx-auto">
            Whether you're launching a startup, scaling local AI agent planning loops, or planning your next Laravel SaaS propulsion module — I'd love to partner with you.
          </motion.p>
        </div>

        {/* Dashboard Form Card - Dynamic Transparent Liquid-Glass that darkens slightly on hover */}
        <motion.div
          variants={itemVariants}
          className="liquid-glass rounded-[1.25rem] p-6 md:p-10 border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] transition-colors duration-500 max-w-2xl w-full shadow-2xl backdrop-blur-md"
        >
          {/* Quick Connect Row - 4 columns: Email, WhatsApp, LinkedIn, GitHub (Fluid responsive 2-column mobile to 4-column tablet/desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 font-body">
            <a
              href="mailto:nilpatel7530@gmail.com"
              onMouseMove={handleMouseMove}
              className="liquid-glass rounded-xl flex flex-col items-center gap-2.5 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] transition-all duration-300 text-center group cursor-pointer overflow-hidden relative"
            >
              <div className="spotlight-card-glow" />
              <div className="spotlight-card-border" />
              <div className="relative z-10 flex flex-col items-center gap-2.5">
                <GmailIcon />
                <span className="text-[10px] text-white/70 group-hover:text-white font-bold uppercase tracking-wider transition-colors">Email</span>
              </div>
            </a>
            <a
              href="https://wa.me/916355343580"
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleMouseMove}
              className="liquid-glass rounded-xl flex flex-col items-center gap-2.5 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] transition-all duration-300 text-center group cursor-pointer overflow-hidden relative"
            >
              <div className="spotlight-card-glow" />
              <div className="spotlight-card-border" />
              <div className="relative z-10 flex flex-col items-center gap-2.5">
                <WhatsAppIcon />
                <span className="text-[10px] text-white/70 group-hover:text-white font-bold uppercase tracking-wider transition-colors">WhatsApp</span>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/nilpatel7530"
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleMouseMove}
              className="liquid-glass rounded-xl flex flex-col items-center gap-2.5 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] transition-all duration-300 text-center group cursor-pointer overflow-hidden relative"
            >
              <div className="spotlight-card-glow" />
              <div className="spotlight-card-border" />
              <div className="relative z-10 flex flex-col items-center gap-2.5">
                <LinkedInIcon />
                <span className="text-[10px] text-white/70 group-hover:text-white font-bold uppercase tracking-wider transition-colors">LinkedIn</span>
              </div>
            </a>
            <a
              href="https://github.com/nilpatel7530"
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleMouseMove}
              className="liquid-glass rounded-xl flex flex-col items-center gap-2.5 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] transition-all duration-300 text-center group cursor-pointer overflow-hidden relative"
            >
              <div className="spotlight-card-glow" />
              <div className="spotlight-card-border" />
              <div className="relative z-10 flex flex-col items-center gap-2.5">
                <GitHubIcon />
                <span className="text-[10px] text-white/70 group-hover:text-white font-bold uppercase tracking-wider transition-colors">GitHub</span>
              </div>
            </a>
          </div>

          {/* Form and Channel Select Carousel driven by AnimatePresence crossfade */}
          <AnimatePresence mode="wait">
            {!showChannelSelect ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 font-body text-left"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-white/50" htmlFor="inp-name">
                      Mission Specialist (Name)
                    </label>
                    <input
                      id="inp-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Marcus Chen"
                      className="w-full bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] focus:bg-black/30 focus:border-[#DEDBC8] focus:shadow-[0_0_12px_rgba(222,219,200,0.1)] rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-white/50" htmlFor="inp-email">
                      Launch Coordinates (Email)
                    </label>
                    <input
                      id="inp-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] focus:bg-black/30 focus:border-[#DEDBC8] focus:shadow-[0_0_12px_rgba(222,219,200,0.1)] rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-white/50" htmlFor="inp-subject">
                    Mission Objective
                  </label>
                  <input
                    id="inp-subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enterprise SaaS, Local AI Agents, CRM automation..."
                    className="w-full bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] focus:bg-black/30 focus:border-[#DEDBC8] focus:shadow-[0_0_12px_rgba(222,219,200,0.1)] rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-white/50" htmlFor="inp-message">
                    Flight Parameters (Project Details)
                  </label>
                  <textarea
                    id="inp-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me more — goals, integrations, general budget range..."
                    className="w-full bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] focus:bg-black/30 focus:border-[#DEDBC8] focus:shadow-[0_0_12px_rgba(222,219,200,0.1)] rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none resize-none transition-all duration-300"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    isSubmitted
                      ? 'bg-green-600 text-white border-green-600 shadow-md'
                      : 'bg-white hover:bg-[#DEDBC8] text-black hover:gap-3 border border-white shadow-md'
                  } disabled:opacity-75 disabled:pointer-events-none`}
                >
                  {isSubmitting ? (
                    <span className="inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : isSubmitted ? (
                    "✓ Inquiry Transmitted Successfully!"
                  ) : (
                    "Process Parameters & Launch →"
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="channels"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6 font-body text-center"
              >
                <div className="text-left mb-2">
                  <h4 className="text-lg font-bold text-white tracking-wide font-body">
                    Select Mission Transmission Channel
                  </h4>
                  <p className="text-xs text-white/50 font-body font-light mt-1.5">
                    Your project telemetry has been compiled and is ready for transmission. Choose a platform below to establish a direct connection with Nil Patel.
                  </p>
                </div>

                {/* Grid layout that is perfectly responsive: stacks on mobile, splits into 3 columns on tablet/desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                  {/* Email Transmission */}
                  <button
                    onClick={handleEmailTransmit}
                    className="liquid-glass rounded-xl flex flex-col items-center gap-3 p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group cursor-pointer text-center"
                  >
                    <GmailIcon />
                    <div>
                      <span className="text-xs font-bold text-white block uppercase tracking-wider group-hover:text-[#DEDBC8] transition-colors">Email Client</span>
                      <span className="text-[10px] text-white/50 font-light block mt-1">Pre-fills mail client body</span>
                    </div>
                  </button>

                  {/* WhatsApp Transmission */}
                  <button
                    onClick={handleWhatsAppTransmit}
                    className="liquid-glass rounded-xl flex flex-col items-center gap-3 p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group cursor-pointer text-center"
                  >
                    <WhatsAppIcon />
                    <div>
                      <span className="text-xs font-bold text-white block uppercase tracking-wider group-hover:text-[#DEDBC8] transition-colors">WhatsApp Chat</span>
                      <span className="text-[10px] text-white/50 font-light block mt-1">Launches chat with details</span>
                    </div>
                  </button>

                  {/* LinkedIn Transmission */}
                  <button
                    onClick={handleLinkedInTransmit}
                    className="liquid-glass rounded-xl flex flex-col items-center gap-3 p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group cursor-pointer text-center relative"
                  >
                    <LinkedInIcon />
                    <div>
                      <span className="text-xs font-bold text-white block uppercase tracking-wider group-hover:text-[#DEDBC8] transition-colors">LinkedIn DM</span>
                      <span className="text-[10px] text-white/50 font-light block mt-1">Copies text & opens profile</span>
                    </div>
                    {/* Floating mini clipboard alert */}
                    {linkedinNotice && (
                      <motion.span
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute inset-0 bg-black/95 rounded-xl border border-white/10 flex items-center justify-center text-xs text-[#DEDBC8] font-bold px-4"
                      >
                        ✓ Copied to Clipboard!
                      </motion.span>
                    )}
                  </button>
                </div>

                {/* Back button */}
                <button
                  onClick={() => setShowChannelSelect(false)}
                  className="text-xs text-white/40 hover:text-white transition-colors cursor-pointer font-body uppercase font-bold tracking-wider mt-4 underline underline-offset-4"
                >
                  &larr; Back to Parameters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="mt-8 text-center text-[10px] text-white/30 font-body tracking-wider select-none font-semibold">
          📍 Base Coordinates: Vadodara, Gujarat, India &bull; Serving global clients in NZ, AU & India.
        </div>

      </motion.div>
    </section>
  );
};
