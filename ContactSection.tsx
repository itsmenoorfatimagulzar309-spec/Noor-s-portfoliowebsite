import React, { useState } from 'react';
import { FadeIn } from '../common/FadeIn';
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';

/* Configurable Social and Contact Placeholders */
export const CONTACT_CONFIG = {
  email: 'itsmenoorfatimagulzar309@gmail.com',
  github: '',
  linkedin: '',
};

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (CONTACT_CONFIG.email) {
      navigator.clipboard.writeText(CONTACT_CONFIG.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 sm:py-32 select-none overflow-hidden"
    >
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-[#B600A8]/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        <FadeIn delay={0} y={20}>
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-light block mb-4">
            Get In Touch
          </span>
        </FadeIn>

        <FadeIn delay={0.1} y={30}>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none text-center mb-8"
            style={{ fontSize: 'clamp(2.8rem, 9vw, 120px)' }}
          >
            Let&apos;s Build Something
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <p className="text-[#D7E2EA]/80 font-light text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
            Have an idea, project, or opportunity? Let&apos;s turn it into something meaningful.
          </p>
        </FadeIn>

        {/* Contact Actions */}
        <FadeIn delay={0.3} y={20}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href={`mailto:${CONTACT_CONFIG.email}`}
              className="inline-flex items-center gap-3 rounded-full text-white font-medium uppercase tracking-widest px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm md:text-base cursor-pointer transition-all duration-300 select-none whitespace-nowrap"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                outline: '2px solid #FFFFFF',
                outlineOffset: '-3px',
              }}
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/20 bg-[#161616] hover:bg-[#202020] text-[#D7E2EA] font-mono text-xs sm:text-sm px-6 py-3.5 sm:py-4 transition-all duration-200 cursor-pointer"
              title="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#D7E2EA]/60" />
                  <span>{CONTACT_CONFIG.email}</span>
                </>
              )}
            </button>
          </div>
        </FadeIn>

        {/* Social / Professional Links */}
        <FadeIn delay={0.4} y={20}>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-8 border-t border-[#D7E2EA]/10">
            <a
              href={CONTACT_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D7E2EA]/15 bg-[#121212] hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 text-xs sm:text-sm uppercase tracking-wider transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href={CONTACT_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D7E2EA]/15 bg-[#121212] hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 text-xs sm:text-sm uppercase tracking-wider transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
