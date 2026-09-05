import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0C0C0C] text-[#D7E2EA] pt-12 pb-12 px-6 md:px-10 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Brand identity */}
        <div className="mb-8">
          <h4 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-2">
            Noor
          </h4>
          <p className="text-xs sm:text-sm text-[#D7E2EA]/60 font-light uppercase tracking-widest">
            Computer Science Student • Developer • Creative Technologist
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-10 text-xs sm:text-sm uppercase tracking-wider text-[#D7E2EA]/70">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Bottom bar */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5 text-xs sm:text-sm text-[#D7E2EA]/50 uppercase tracking-wider">
          <div>
            &copy; 2026 Noor. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors group cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
