import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { AnimatedText } from '../common/AnimatedText';
import { ContactButton } from '../common/ContactButton';

const MOON_ICON = 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png';
const P59_OBJECT = 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png';
const LEGO_ICON = 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png';
const GROUP_134 = 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png';

const ABOUT_PARAGRAPH = "I am Noor, a Computer Science student passionate about web development, software development, and creative technology. I enjoy turning ideas into functional, visually engaging digital experiences. My goal is to continuously improve my technical skills, build meaningful projects, and create solutions that combine clean design with practical functionality.";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden select-none"
    >
      {/* 4 Decorative 3D images in corners */}
      {/* Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-10 opacity-70">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src={MOON_ICON}
            alt="Decorative 3D Technology Icon"
            className="w-full h-auto object-contain filter drop-shadow-2xl select-none"
            draggable={false}
          />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none z-10 opacity-70">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src={P59_OBJECT}
            alt="Decorative 3D Geometry"
            className="w-full h-auto object-contain filter drop-shadow-2xl select-none"
            draggable={false}
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-10 opacity-70">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src={LEGO_ICON}
            alt="Decorative 3D Modular Element"
            className="w-full h-auto object-contain filter drop-shadow-2xl select-none"
            draggable={false}
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none z-10 opacity-70">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src={GROUP_134}
            alt="Decorative 3D Tech Composition"
            className="w-full h-auto object-contain filter drop-shadow-2xl select-none"
            draggable={false}
          />
        </FadeIn>
      </div>

      {/* Main Content Column */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Academic Degree Pill */}
        <FadeIn delay={0.05} y={20}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 text-[#D7E2EA]/80 text-xs sm:text-sm uppercase tracking-widest font-light mb-6">
            <span className="w-2 h-2 rounded-full bg-[#B600A8] animate-pulse" />
            <span>BS Computer Science</span>
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About Me
          </h2>
        </FadeIn>

        {/* Gap between heading/text */}
        <div className="h-8 sm:h-12 md:h-14" />

        {/* Animated paragraph */}
        <AnimatedText
          text={ABOUT_PARAGRAPH}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[620px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' } as React.CSSProperties}
        />

        {/* Gap between text block and button */}
        <div className="h-12 sm:h-16 md:h-20" />

        {/* Contact button */}
        <FadeIn delay={0.25} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
