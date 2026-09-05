import React from 'react';
import { FadeIn } from '../common/FadeIn';

interface ServiceItem {
  id: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: '01',
    name: 'Web Development',
    description:
      'Building responsive, modern, and user-friendly websites with clean layouts, smooth interactions, and strong attention to detail.',
  },
  {
    id: '02',
    name: 'Software Development',
    description:
      'Developing practical software solutions with structured code, database integration, and user-friendly interfaces.',
  },
  {
    id: '03',
    name: 'UI/UX Design',
    description:
      'Designing clean and intuitive digital interfaces that balance visual appeal, usability, and user experience.',
  },
  {
    id: '04',
    name: 'Database Solutions',
    description:
      'Creating organized database-driven applications using technologies such as SQLite and Microsoft Access.',
  },
  {
    id: '05',
    name: 'Creative Digital Solutions',
    description:
      'Combining technology, design, content, and creative tools to transform ideas into engaging digital experiences.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 pb-32 sm:pb-36 md:pb-44 select-none z-0"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={30}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center tracking-tight leading-none mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full border-t border-[rgba(12,12,12,0.15)]">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1} y={25}>
              <div className="group flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] transition-all duration-300 hover:pl-2">
                {/* Number on left */}
                <div
                  className="font-black text-[#0C0C0C] leading-none tracking-tighter shrink-0 mb-4 sm:mb-0 w-full sm:w-[140px] md:w-[220px] transition-transform duration-300 group-hover:scale-105"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.id}
                </div>

                {/* Name + description stacked on right */}
                <div className="flex-1 flex flex-col justify-center sm:pl-6 md:pl-10">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light text-[#0C0C0C] leading-relaxed max-w-2xl opacity-60 mt-2 sm:mt-3"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
