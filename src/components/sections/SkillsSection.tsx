import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../common/FadeIn';
import { 
  Code2, 
  Globe, 
  Database, 
  Wrench, 
  Palette,
  Sparkles
} from 'lucide-react';

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  skills: { name: string; detail?: string }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    subtitle: 'Core Systems & Logic',
    icon: Code2,
    skills: [
      { name: 'C', detail: 'Procedural Systems' },
      { name: 'C++', detail: 'OOP & Algorithms' },
      { name: 'Python', detail: 'OOP & Automation' },
    ],
  },
  {
    title: 'Web Development',
    subtitle: 'Modern Interfaces',
    icon: Globe,
    skills: [
      { name: 'HTML', detail: 'Semantic' },
      { name: 'CSS', detail: 'Modern Styling' },
      { name: 'JavaScript', detail: 'Dynamic UI' },
      { name: 'PHP', detail: 'Backend' },
      { name: 'Responsive Web Design', detail: 'Fluid Layouts' },
    ],
  },
  {
    title: 'Database',
    subtitle: 'Data Architecture',
    icon: Database,
    skills: [
      { name: 'SQLite', detail: 'Embedded Storage' },
      { name: 'Microsoft Access', detail: 'Relational DB' },
    ],
  },
  {
    title: 'Development Tools',
    subtitle: 'Tooling & Workflow',
    icon: Wrench,
    skills: [
      { name: 'VS Code', detail: 'Primary Editor' },
      { name: 'Code::Blocks', detail: 'C/C++ IDE' },
      { name: 'Git', detail: 'Version Control' },
      { name: 'GitHub', detail: 'Collaboration' },
    ],
  },
  {
    title: 'Creative / Design',
    subtitle: 'Visuals & Media',
    icon: Palette,
    skills: [
      { name: 'Canva', detail: 'Graphic Design' },
      { name: 'CapCut', detail: 'Video Production' },
      { name: 'Filmora', detail: 'Media Editing' },
      { name: 'UI/UX Design', detail: 'Interface Design' },
    ],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 sm:py-32 select-none overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B600A8]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn delay={0} y={20}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 text-[#D7E2EA]/70 text-xs sm:text-sm uppercase tracking-widest font-light mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#BBCCD7]" />
              <span>Technical Capabilities</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} y={30}>
            <h2
              className="hero-heading font-black uppercase tracking-tight leading-none text-center"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Skills
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <p className="text-[#D7E2EA]/60 font-light text-sm sm:text-base md:text-lg max-w-xl mx-auto mt-6">
              A structured technical toolkit spanning procedural programming, web engineering, database architecture, and creative visual tools.
            </p>
          </FadeIn>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, catIndex) => {
            const IconComponent = cat.icon;
            const isFullSpan = catIndex === 4;

            return (
              <FadeIn
                key={cat.title}
                delay={0.1 + catIndex * 0.08}
                y={30}
                className={isFullSpan ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <div className="h-full group relative rounded-[32px] sm:rounded-[36px] border border-[#D7E2EA]/15 bg-gradient-to-b from-[#141414]/90 to-[#0F0F0F]/80 p-6 sm:p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#D7E2EA]/40 hover:shadow-[0_10px_40px_rgba(182,0,168,0.12)]">
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#D7E2EA]/10">
                    <div>
                      <span className="text-[#D7E2EA]/50 text-[11px] sm:text-xs uppercase tracking-widest font-light block">
                        {cat.subtitle}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#D7E2EA] mt-1 group-hover:text-white transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#D7E2EA]/5 border border-[#D7E2EA]/15 flex items-center justify-center text-[#D7E2EA] group-hover:scale-110 group-hover:border-[#B600A8]/60 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Skill Items / Tags */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="group/item flex items-center justify-between gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full border border-[#D7E2EA]/15 bg-[#181818]/80 hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 transition-all duration-200 cursor-default"
                      >
                        <span className="text-[#D7E2EA] font-medium text-xs sm:text-sm tracking-wide">
                          {skill.name}
                        </span>
                        {skill.detail && (
                          <span className="text-[10px] sm:text-[11px] text-[#D7E2EA]/40 uppercase tracking-wider font-light group-hover/item:text-[#D7E2EA]/70 transition-colors">
                            • {skill.detail}
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
