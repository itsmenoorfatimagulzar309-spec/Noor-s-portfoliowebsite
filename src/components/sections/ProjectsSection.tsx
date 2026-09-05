import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../common/FadeIn';
import { LiveProjectButton } from '../common/LiveProjectButton';
import { 
  CheckCircle2, 
  X, 
  Laptop, 
  GraduationCap, 
  Utensils, 
  TrendingUp 
} from 'lucide-react';

interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  visualType: 'university' | 'restaurant-pos' | 'restaurant-web' | 'gpa-portal' | 'trading-chart';
}

const PROJECTS: Project[] = [
  {
    id: '01',
    name: 'University Management System',
    category: 'Software Development',
    description:
      'A beginner-friendly university management system built using Python, Object-Oriented Programming, Tkinter, and SQLite. The system includes student and admin functionality, student management, GPA viewing, attendance management, and database integration.',
    technologies: ['Python', 'OOP', 'Tkinter', 'SQLite'],
    features: [
      'Role-based Student and Admin Login',
      'Student Enrollment & Profile Management',
      'Attendance Tracking & Records Ledger',
      'Semester GPA & Grade Computation',
      'Real-time Search & Filter Functionality',
      'Editable Data Grid with SQLite Persistence',
    ],
    visualType: 'university',
  },
  {
    id: '02',
    name: 'Restaurant Management & Billing System',
    category: 'Software + Business Solution',
    description:
      'A restaurant management and invoice billing system designed to simplify restaurant operations, billing, and order management with structured database transactions.',
    technologies: ['Python', 'Database Integration', 'UI / Tkinter', 'POS Logic'],
    features: [
      'Dynamic Table & Order Dispatching',
      'Automated Itemized Billing & Tax Logic',
      'Printer-Ready Receipt Generation',
      'Product & Menu Price Management',
      'Daily Revenue & Sales Reporting',
      'Persistent SQLite / File Ledger',
    ],
    visualType: 'restaurant-pos',
  },
  {
    id: '03',
    name: 'Premium Restaurant Website',
    category: 'Web Development',
    description:
      'A modern responsive restaurant website designed for a fast-food and bakery business, featuring product presentation, ordering functionality, contact information, and animated product displays.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design'],
    features: [
      'Fluid Cross-Device Responsive Layout',
      'Interactive Food & Bakery Showcase',
      'Order Cart & Checkout Interface Flow',
      'Direct Business Contact & Inquiry Form',
      'Micro-animations & Smooth Transitions',
      'Optimized Mobile & Tablet Experience',
    ],
    visualType: 'restaurant-web',
  },
  {
    id: '04',
    name: 'University Portal / GPA Analytics',
    category: 'Web + Software Development',
    description:
      'A university portal concept focused on student access, academic information, GPA analysis, and an organized dashboard experience.',
    technologies: ['Python', 'Tkinter', 'SQLite', 'UI/UX Design'],
    features: [
      'Secure Student Authentication',
      'Cumulative & Term GPA Calculator',
      'Interactive Academic Performance Trends',
      'Course Syllabus & Grade History',
      'Searchable Course Repository',
      'Clean High-Contrast Dashboard UI',
    ],
    visualType: 'gpa-portal',
  },
  {
    id: '05',
    name: 'Trading Chart Pattern Analyzer',
    category: 'Python Project',
    description:
      'A Python-based trading chart pattern analysis project created to explore chart data, pattern recognition, and technical analysis concepts.',
    technologies: ['Python', 'Data Analysis', 'Chart Visualization', 'Math Algorithms'],
    features: [
      'Historical OHLC Candlestick Parsing',
      'Algorithmic Pattern Recognition (Double Top/Bottom)',
      'Moving Average (SMA/EMA) Calculations',
      'Support & Resistance Level Detection',
      'Clean Interactive Data Visualizations',
      'Modular Quantitative Analysis Pipeline',
    ],
    visualType: 'trading-chart',
  },
];

/* Custom Bespoke Visual Components for Each Project */
const ProjectVisualMockup: React.FC<{ project: Project }> = ({ project }) => {
  switch (project.visualType) {
    case 'university':
      return (
        <div className="w-full h-full min-h-[220px] sm:min-h-[260px] md:min-h-[300px] bg-gradient-to-br from-[#121418] to-[#0A0B0E] p-4 sm:p-6 rounded-[28px] sm:rounded-[36px] border border-[#D7E2EA]/15 flex flex-col justify-between overflow-hidden relative group">
          <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-[10px] sm:text-xs text-[#D7E2EA]/60 tracking-wider">
                UNIV_ADMIN_CONSOLE.SQLITE
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#B600A8]/20 border border-[#B600A8]/40 text-[#D7E2EA] text-[10px] uppercase font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8] animate-ping" />
              <span>ACTIVE DB</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2.5 my-3 sm:my-4">
            <div className="bg-[#181A20] p-2.5 sm:p-3 rounded-xl border border-[#D7E2EA]/10">
              <span className="text-[10px] text-[#D7E2EA]/50 uppercase block font-mono">Enrolled</span>
              <span className="text-sm sm:text-lg font-bold text-white font-mono">Student Records</span>
            </div>
            <div className="bg-[#181A20] p-2.5 sm:p-3 rounded-xl border border-[#D7E2EA]/10">
              <span className="text-[10px] text-[#D7E2EA]/50 uppercase block font-mono">Attendance</span>
              <span className="text-sm sm:text-lg font-bold text-emerald-400 font-mono">94.8%</span>
            </div>
            <div className="bg-[#181A20] p-2.5 sm:p-3 rounded-xl border border-[#D7E2EA]/10">
              <span className="text-[10px] text-[#D7E2EA]/50 uppercase block font-mono">Avg GPA</span>
              <span className="text-sm sm:text-lg font-bold text-[#BBCCD7] font-mono">3.62</span>
            </div>
          </div>

          {/* Simulated Data Table */}
          <div className="bg-[#14161C] rounded-xl p-3 border border-[#D7E2EA]/10 font-mono text-[10px] sm:text-xs text-[#D7E2EA]/80 space-y-1.5">
            <div className="flex justify-between text-[#D7E2EA]/40 text-[9px] uppercase border-b border-[#D7E2EA]/10 pb-1">
              <span>ID • NAME</span>
              <span>DEPARTMENT</span>
              <span>STATUS</span>
            </div>
            <div className="flex justify-between items-center text-white/90">
              <span>#2026-041 • Noor Fatima</span>
              <span className="text-[#BBCCD7]">Computer Science</span>
              <span className="text-emerald-400 font-medium">Student Record</span>
            </div>
            <div className="flex justify-between items-center text-white/70">
              <span>#2026-088 • Student Record</span>
              <span className="text-[#BBCCD7]">Software Eng</span>
              <span className="text-emerald-400">Active</span>
            </div>
            <div className="flex justify-between items-center text-white/60">
              <span>#2026-112 • Student Record</span>
              <span className="text-[#BBCCD7]">Data Science</span>
              <span className="text-emerald-400">Active</span>
            </div>
          </div>
        </div>
      );

    case 'restaurant-pos':
      return (
        <div className="w-full h-full min-h-[220px] sm:min-h-[260px] md:min-h-[300px] bg-gradient-to-br from-[#161214] to-[#0D0B0C] p-4 sm:p-6 rounded-[28px] sm:rounded-[36px] border border-[#D7E2EA]/15 flex flex-col justify-between overflow-hidden relative">
          <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-3">
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-[#BE4C00]" />
              <span className="font-mono text-[10px] sm:text-xs text-[#D7E2EA]/70 tracking-wider">
                POS_TERMINAL_V1 • BILLING ENGINE
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#D7E2EA]/40">ORDER #0849</span>
          </div>

          <div className="grid grid-cols-2 gap-3 my-3">
            <div className="bg-[#1C1618] p-3 rounded-xl border border-[#D7E2EA]/10">
              <span className="text-[10px] text-[#D7E2EA]/50 uppercase font-mono block">Daily Ledger</span>
              <span className="text-base sm:text-xl font-bold text-white font-mono">Order Ledger</span>
              <span className="text-[10px] text-emerald-400 font-mono block mt-0.5">Database Workflow</span>
            </div>
            <div className="bg-[#1C1618] p-3 rounded-xl border border-[#D7E2EA]/10">
              <span className="text-[10px] text-[#D7E2EA]/50 uppercase font-mono block">Order Queue</span>
              <span className="text-base sm:text-xl font-bold text-[#BE4C00] font-mono">Order Queue</span>
              <span className="text-[10px] text-[#D7E2EA]/50 font-mono block mt-0.5">Management View</span>
            </div>
          </div>

          <div className="bg-[#171315] rounded-xl p-3 border border-[#D7E2EA]/10 font-mono text-[10px] sm:text-xs space-y-1">
            <div className="flex justify-between text-white/90">
              <span>1x Crispy Zinger Combo</span>
              <span>₨ 850.00</span>
            </div>
            <div className="flex justify-between text-white/70">
              <span>2x Artisanal Espresso Roast</span>
              <span>₨ 700.00</span>
            </div>
            <div className="flex justify-between text-white/50 border-t border-[#D7E2EA]/10 pt-1 mt-1 font-bold text-white">
              <span>TOTAL (TAX INCLUDED)</span>
              <span className="text-emerald-400">Invoice Ready</span>
            </div>
          </div>
        </div>
      );

    case 'restaurant-web':
      return (
        <div className="w-full h-full min-h-[220px] sm:min-h-[260px] md:min-h-[300px] bg-gradient-to-br from-[#131518] to-[#0A0C0E] p-4 sm:p-6 rounded-[28px] sm:rounded-[36px] border border-[#D7E2EA]/15 flex flex-col justify-between overflow-hidden relative">
          <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-3">
            <div className="flex items-center gap-2">
              <Laptop className="w-4 h-4 text-[#BBCCD7]" />
              <span className="font-mono text-[10px] sm:text-xs text-[#D7E2EA]/70">
                WWW.RESTAURANT-BAKERY.WEB
              </span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono">
              200 OK
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-center my-3 bg-[#191D23] rounded-2xl p-4 border border-[#D7E2EA]/10 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-xs sm:text-sm font-bold uppercase text-white tracking-wide block">
                  Artisan Fast-Food & Bakery
                </span>
                <span className="text-[10px] sm:text-xs text-[#D7E2EA]/60 font-light">
                  Smooth CSS grid, interactive menu cards & checkout flow
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#D7E2EA]/10 text-[10px] font-mono text-[#D7E2EA]">
                Responsive
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#121418] p-2 rounded-xl text-center border border-white/5">
                <span className="text-xs">🍔</span>
                <span className="text-[10px] text-white block mt-0.5 font-medium">Gourmet Burgers</span>
              </div>
              <div className="bg-[#121418] p-2 rounded-xl text-center border border-white/5">
                <span className="text-xs">🥐</span>
                <span className="text-[10px] text-white block mt-0.5 font-medium">Fresh Bakery</span>
              </div>
              <div className="bg-[#121418] p-2 rounded-xl text-center border border-white/5">
                <span className="text-xs">☕</span>
                <span className="text-[10px] text-white block mt-0.5 font-medium">Brewed Coffee</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-[#D7E2EA]/50">
            <span>HTML5 • CSS3 • JAVASCRIPT</span>
            <span className="text-emerald-400">TOUCH & MOBILE READY</span>
          </div>
        </div>
      );

    case 'gpa-portal':
      return (
        <div className="w-full h-full min-h-[220px] sm:min-h-[260px] md:min-h-[300px] bg-gradient-to-br from-[#141219] to-[#0C0B10] p-4 sm:p-6 rounded-[28px] sm:rounded-[36px] border border-[#D7E2EA]/15 flex flex-col justify-between overflow-hidden relative">
          <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-3">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#B600A8]" />
              <span className="font-mono text-[10px] sm:text-xs text-[#D7E2EA]/70">
                STUDENT_ACADEMIC_PORTAL.UI
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#B600A8]">GPA ANALYTICS</span>
          </div>

          <div className="grid grid-cols-3 gap-2.5 my-3">
            <div className="bg-[#1A1722] p-3 rounded-xl border border-[#D7E2EA]/10">
              <span className="text-[9px] uppercase font-mono text-[#D7E2EA]/50">Current Sem</span>
              <span className="text-sm sm:text-lg font-bold text-white font-mono">3.91 GPA</span>
            </div>
            <div className="bg-[#1A1722] p-3 rounded-xl border border-[#D7E2EA]/10">
              <span className="text-[9px] uppercase font-mono text-[#D7E2EA]/50">Credits Passed</span>
              <span className="text-sm sm:text-lg font-bold text-[#BBCCD7] font-mono">72 / 130</span>
            </div>
            <div className="bg-[#1A1722] p-3 rounded-xl border border-[#D7E2EA]/10">
              <span className="text-[9px] uppercase font-mono text-[#D7E2EA]/50">Class Rank</span>
              <span className="text-sm sm:text-lg font-bold text-emerald-400 font-mono">Top 5%</span>
            </div>
          </div>

          <div className="bg-[#15131C] rounded-xl p-3 border border-[#D7E2EA]/10 font-mono text-[10px] sm:text-xs space-y-1 text-[#D7E2EA]/80">
            <div className="flex justify-between">
              <span>CS-201: Data Structures & Algorithms</span>
              <span className="text-emerald-400 font-bold">4.0 (A)</span>
            </div>
            <div className="flex justify-between">
              <span>CS-204: Database Systems & SQL</span>
              <span className="text-emerald-400 font-bold">4.0 (A)</span>
            </div>
            <div className="flex justify-between">
              <span>CS-208: Object-Oriented Programming</span>
              <span className="text-emerald-400 font-bold">3.9 (A-)</span>
            </div>
          </div>
        </div>
      );

    case 'trading-chart':
      return (
        <div className="w-full h-full min-h-[220px] sm:min-h-[260px] md:min-h-[300px] bg-gradient-to-br from-[#121614] to-[#0A0D0B] p-4 sm:p-6 rounded-[28px] sm:rounded-[36px] border border-[#D7E2EA]/15 flex flex-col justify-between overflow-hidden relative">
          <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-[10px] sm:text-xs text-[#D7E2EA]/70">
                PATTERN_ANALYZER.PY • OHLC
              </span>
            </div>
                <span className="text-[10px] font-mono text-emerald-400">PATTERN STUDY</span>
          </div>

          <div className="my-2 bg-[#161D19] rounded-2xl p-3 border border-[#D7E2EA]/10 relative">
            <div className="flex justify-between items-center mb-2 font-mono text-[10px] text-[#D7E2EA]/60">
              <span>BTC/USDT • 4H TIMEFRAME</span>
              <span className="text-emerald-400 font-bold">DATA VIEW</span>
            </div>
            {/* SVG Candlestick Pattern Visual */}
            <svg viewBox="0 0 300 70" className="w-full h-16 stroke-current">
              <line x1="20" y1="20" x2="20" y2="55" stroke="#ef4444" strokeWidth="1.5" />
              <rect x="16" y="28" width="8" height="20" fill="#ef4444" rx="1" />

              <line x1="55" y1="15" x2="55" y2="50" stroke="#ef4444" strokeWidth="1.5" />
              <rect x="51" y="24" width="8" height="22" fill="#ef4444" rx="1" />

              <line x1="90" y1="30" x2="90" y2="60" stroke="#10b981" strokeWidth="1.5" />
              <rect x="86" y="35" width="8" height="18" fill="#10b981" rx="1" />

              <line x1="125" y1="25" x2="125" y2="58" stroke="#ef4444" strokeWidth="1.5" />
              <rect x="121" y="32" width="8" height="20" fill="#ef4444" rx="1" />

              <line x1="160" y1="20" x2="160" y2="52" stroke="#10b981" strokeWidth="1.5" />
              <rect x="156" y="26" width="8" height="22" fill="#10b981" rx="1" />

              <line x1="195" y1="18" x2="195" y2="48" stroke="#10b981" strokeWidth="1.5" />
              <rect x="191" y="22" width="8" height="20" fill="#10b981" rx="1" />

              <line x1="230" y1="12" x2="230" y2="42" stroke="#10b981" strokeWidth="1.5" />
              <rect x="226" y="16" width="8" height="22" fill="#10b981" rx="1" />

              <line x1="265" y1="8" x2="265" y2="38" stroke="#10b981" strokeWidth="1.5" />
              <rect x="261" y="10" width="8" height="24" fill="#10b981" rx="1" />

              {/* Moving Average Line */}
              <path
                d="M 15 45 Q 90 48 160 35 T 275 14"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
            </svg>
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-[#D7E2EA]/50">
            <span>MOVING AVERAGE (EMA 20/50)</span>
            <span className="text-[#38bdf8]">PATTERN VISUALIZATION</span>
          </div>
        </div>
      );
  }
};

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
  onOpenDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onOpenDetails,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.025;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[80vh] sm:h-[85vh] md:h-[90vh] w-full flex items-start justify-center relative"
    >
      <motion.div
        style={{
          scale,
          top: `calc(4.5rem + ${index * 22}px)`,
        }}
        className="sticky w-full max-w-6xl rounded-[36px] sm:rounded-[44px] md:rounded-[52px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C]/95 backdrop-blur-xl p-5 sm:p-7 md:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.95)] will-change-transform origin-top z-10"
      >
        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-[#D7E2EA]/15">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            {/* Project Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none tracking-tighter"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 75px)' }}
            >
              {project.id}
            </span>

            {/* Category Label and Project Name */}
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest font-light">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA] tracking-tight leading-tight mt-0.5"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          {/* View Details Action */}
          <LiveProjectButton
            label="View Details"
            onClick={() => onOpenDetails(project)}
          />
        </div>

        {/* Bottom Content: Two Columns */}
        <div className="mt-5 sm:mt-7 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 items-stretch">
          {/* Left Column (5 cols / 42%): Description & Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div>
              <p className="text-[#D7E2EA]/80 font-normal leading-relaxed text-xs sm:text-sm md:text-base">
                {project.description}
              </p>

              {/* Technologies Pills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono tracking-wider border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 text-[#D7E2EA]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#D7E2EA]/10 text-[10px] sm:text-xs text-[#D7E2EA]/50 uppercase tracking-wider font-light">
              Selected implementation areas shown in the project details.
            </div>
          </div>

          {/* Right Column (7 cols / 58%): Project Visual Mockup */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <ProjectVisualMockup project={project} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-32 select-none"
    >
      <div className="max-w-6xl mx-auto w-full mb-16 sm:mb-20">
        <FadeIn delay={0} y={30}>
          <div className="text-center">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-light block mb-3">
              Selected Works & Architecture
            </span>
            <h2
              className="hero-heading font-black uppercase tracking-tight leading-none text-center"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Projects
            </h2>
          </div>
        </FadeIn>
      </div>

      {/* Sticky Stacking Cards Container */}
      <div className="relative w-full max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
            onOpenDetails={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Interactive Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[32px] sm:rounded-[40px] border border-[#D7E2EA]/30 bg-[#121212] p-6 sm:p-8 text-[#D7E2EA] shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-[#D7E2EA]" />
              </button>

              <div className="pr-8">
                <span className="font-mono text-xs text-[#D7E2EA]/60 uppercase tracking-widest block mb-1">
                  {selectedProject.id} • {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-4">
                  {selectedProject.name}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#D7E2EA]/80 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-xs uppercase font-mono text-[#D7E2EA]/60 tracking-wider mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-mono border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 text-[#D7E2EA]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <h4 className="text-xs uppercase font-mono text-[#D7E2EA]/60 tracking-wider mb-3">
                  Key Implemented Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2 text-xs sm:text-sm text-[#D7E2EA]/90"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#B600A8] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#D7E2EA]/15">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-full border border-[#D7E2EA]/20 hover:bg-white/5 text-xs sm:text-sm uppercase tracking-wider font-medium cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-full bg-[#B600A8] hover:bg-[#B600A8]/90 text-white text-xs sm:text-sm uppercase tracking-wider font-medium cursor-pointer"
                >
                  Discuss Project
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
