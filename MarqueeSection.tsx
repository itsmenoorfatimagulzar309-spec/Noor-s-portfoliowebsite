import React, { useRef, useState, useEffect } from 'react';

const SHOWCASE_ITEMS = [
  ['01', 'University Management System', 'Python / Tkinter / SQLite', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85'],
  ['02', 'Restaurant Billing System', 'Software / Database / UI', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85'],
  ['03', 'Premium Restaurant Website', 'HTML / CSS / JavaScript', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85'],
  ['04', 'University Portal', 'Dashboard / GPA Analytics', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85'],
  ['05', 'Trading Pattern Analyzer', 'Python / Data Visualization', 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=85'],
];

const ROW1_ITEMS = [...SHOWCASE_ITEMS, ...SHOWCASE_ITEMS, ...SHOWCASE_ITEMS];
const ROW2_ITEMS = [...SHOWCASE_ITEMS.slice().reverse(), ...SHOWCASE_ITEMS.slice().reverse(), ...SHOWCASE_ITEMS.slice().reverse()];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const row1Transform = `translateX(${offset - 200}px)`;
  const row2Transform = `translateX(${-(offset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-12 overflow-hidden select-none"
    >
      {/* Section Sub-heading */}
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center sm:text-left flex items-center justify-between">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-mono block">
            Visual Exploration
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-[#D7E2EA] mt-0.5">
            Selected Creative Work
          </h3>
        </div>
        <span className="hidden sm:inline-block text-xs font-mono text-[#D7E2EA]/40 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
          Scroll to explore &bull; Dynamic Motion
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {/* Row 1 - Moves RIGHT on scroll */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: row1Transform,
            willChange: 'transform',
          }}
        >
          {ROW1_ITEMS.map(([number, title, detail, image], index) => (
            <div
              key={`row1-${index}`}
              className="relative w-[320px] sm:w-[380px] md:w-[420px] h-[200px] sm:h-[240px] md:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#161616] border border-white/10 shadow-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <img src={image} alt={`${title} project visual`} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-55 transition-transform duration-500 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-[#08090A]/45 to-transparent" />
              <span className="relative z-10 text-5xl sm:text-6xl font-black text-white/55">{number}</span>
              <div className="relative z-10"><h4 className="text-lg sm:text-xl font-semibold text-white">{title}</h4><p className="text-xs uppercase tracking-widest text-white/65 mt-2">{detail}</p></div>
            </div>
          ))}
        </div>

        {/* Row 2 - Moves LEFT on scroll */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: row2Transform,
            willChange: 'transform',
          }}
        >
          {ROW2_ITEMS.map(([number, title, detail, image], index) => (
            <div
              key={`row2-${index}`}
              className="relative w-[320px] sm:w-[380px] md:w-[420px] h-[200px] sm:h-[240px] md:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#161616] border border-white/10 shadow-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <img src={image} alt={`${title} project visual`} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-55 transition-transform duration-500 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-[#08090A]/45 to-transparent" />
              <span className="relative z-10 text-5xl sm:text-6xl font-black text-white/55">{number}</span>
              <div className="relative z-10"><h4 className="text-lg sm:text-xl font-semibold text-white">{title}</h4><p className="text-xs uppercase tracking-widest text-white/65 mt-2">{detail}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
