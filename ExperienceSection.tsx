import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { GraduationCap, Code, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative min-h-[60vh] w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 sm:py-32 select-none overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn delay={0} y={20}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 text-[#D7E2EA]/70 text-xs sm:text-sm uppercase tracking-widest font-light mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#BBCCD7]" />
              <span>Academic Foundations</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} y={30}>
            <h2
              className="hero-heading font-black uppercase tracking-tight leading-none text-center"
              style={{ fontSize: 'clamp(2.6rem, 10vw, 130px)' }}
            >
              Experience & Education
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <p className="text-[#D7E2EA]/60 font-light text-sm sm:text-base md:text-lg max-w-xl mx-auto mt-6">
              A disciplined academic journey in Computer Science, bridging software design patterns, database architecture, and user-centric web applications.
            </p>
          </FadeIn>
        </div>

        {/* Timeline / Card Structure */}
        <div className="flex flex-col gap-8">
          {/* Card 1: BS Computer Science */}
          <FadeIn delay={0.2} y={30}>
            <div className="relative rounded-[36px] sm:rounded-[44px] border border-[#D7E2EA]/20 bg-gradient-to-b from-[#141414] to-[#0D0D0D] p-6 sm:p-10 shadow-2xl backdrop-blur-md">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#D7E2EA]/10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#B600A8]/20 border border-[#B600A8]/40 flex items-center justify-center text-[#D7E2EA] shrink-0">
                    <GraduationCap className="w-7 h-7 text-[#D7E2EA]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest font-mono text-[#B600A8] block">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mt-1">
                      BS Computer Science
                    </h3>
                    <p className="text-sm sm:text-base text-[#D7E2EA]/70 mt-1 font-light">
                      Current Academic Journey • Focus on Software Engineering & Web Technologies
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase tracking-wider self-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Enrolled & Active</span>
                </div>
              </div>

              {/* Focus Areas */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-[#D7E2EA]/60 mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#BBCCD7]" />
                    <span>Key Coursework & Competencies</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#D7E2EA]/85">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B600A8] shrink-0" />
                      <span>Object-Oriented Programming (C++, Python)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B600A8] shrink-0" />
                      <span>Data Structures & Algorithmic Thinking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B600A8] shrink-0" />
                      <span>Database Systems & Relational Schemas (SQLite / SQL)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B600A8] shrink-0" />
                      <span>Modern Web Technologies & Responsive Frontend</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-[#D7E2EA]/60 mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-[#BBCCD7]" />
                    <span>Hands-On Engineering Practices</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/80 leading-relaxed font-light">
                    Applied coursework through functional software builds, terminal utilities, desktop GUIs in Tkinter, and responsive web projects. Focused on clean code modularity, readable documentation, and pragmatic problem-solving.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
