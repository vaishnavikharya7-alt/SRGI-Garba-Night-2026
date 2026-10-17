import React from 'react';
import { IdCard, Clock, ShieldCheck, HelpCircle, AlertCircle, Sparkles } from 'lucide-react';
import { DandiyaIcon } from './MandalaPattern.tsx';

export const GuidelinesSection: React.FC = () => {
  const guidelines = [
    {
      number: '01',
      title: 'COLLEGE ID MANDATORY',
      description:
        'Students must carry or wear their official college ID card. It is strictly required for entry and verification at the security gates.',
      icon: IdCard,
      highlight: true,
      badgeText: 'STRICT REQUIREMENT',
      accentColor: '#D9AD58',
    },
    {
      number: '02',
      title: 'ARRIVE ON TIME',
      description:
        'Entry will NOT be permitted after 6:10 PM. Gates open at 5:30 PM. Late arrivals will be strictly turned back by college security.',
      icon: Clock,
      highlight: true,
      badgeText: 'HARD DEADLINE: 6:10 PM',
      accentColor: '#EF4444',
    },
    {
      number: '03',
      title: 'BRING YOUR DANDIYA',
      description:
        'Students are encouraged to bring their own traditional wooden Dandiya sticks to participate fully in the Raas dance circles.',
      customIcon: true,
      highlight: false,
      badgeText: 'TRADITIONAL RAAS',
      accentColor: '#FF9933',
    },
    {
      number: '04',
      title: 'MAINTAIN DISCIPLINE',
      description:
        'Maintain exemplary campus decorum and mutual respect throughout the programme. Any disruptive behavior will invite immediate disciplinary action.',
      icon: ShieldCheck,
      highlight: false,
      badgeText: 'CAMPUS DECORUM',
      accentColor: '#C02D91',
    },
    {
      number: '05',
      title: 'FOLLOW EVENT INSTRUCTIONS',
      description:
        'Cooperate fully with the faculty event coordinators, volunteer marshals, and security staff. Follow designated dancing zones and safety protocols.',
      icon: HelpCircle,
      highlight: false,
      badgeText: 'COORDINATION',
      accentColor: '#D9AD58',
    },
  ];

  return (
    <section id="guidelines" className="relative py-20 sm:py-28 bg-[#160923] border-t border-[#D9AD58]/15 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#371451]/40 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#D9AD58]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D9AD58]">
              STUDENT PROTOCOLS & SECURITY
            </span>
            <span className="h-px w-6 bg-[#D9AD58]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FFF6E8]">
            BEFORE YOU JOIN THE CELEBRATION
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#FFF6E8]/70 font-light">
            To ensure a safe, joyous, and memorable festive night for every member of SRGI, all attendees must strictly adhere to the following event instructions.
          </p>
        </div>

        {/* Highlighted Warning Callout: ID & 6:10 PM */}
        <div className="max-w-4xl mx-auto mb-12 p-5 sm:p-6 rounded-2xl bg-[#371451]/60 border border-amber-500/40 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-lg">
          <div className="p-3 rounded-xl bg-amber-500/20 text-amber-300 shrink-0">
            <AlertCircle className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#FFF6E8]">
              Two Mandatory Entry Conditions
            </h3>
            <p className="text-xs sm:text-sm text-[#FFF6E8]/80 mt-1 leading-relaxed">
              1. Physical College ID Card is required at the entry scanner.{' '}
              <br className="hidden sm:inline" />
              2. Absolute cutoff at <strong className="text-amber-300 font-bold">6:10 PM sharp</strong>. Please arrive before 6:00 PM to avoid disappointment.
            </p>
          </div>
        </div>

        {/* Guidelines List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {guidelines.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className={`relative group p-6 sm:p-7 rounded-2xl festive-glass-card transition-all duration-300 hover:-translate-y-1 ${
                  item.highlight ? 'border-[#D9AD58]/50 shadow-[0_10px_30px_rgba(217,173,88,0.12)]' : ''
                } ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Header row with Number and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-cinzel text-2xl font-bold gold-text-gradient">
                    {item.number}
                  </span>
                  <div
                    className="p-3 rounded-xl bg-[#371451]/80 border transition-transform group-hover:scale-110"
                    style={{ borderColor: `${item.accentColor}40` }}
                  >
                    {item.customIcon ? (
                      <DandiyaIcon size={24} />
                    ) : (
                      Icon && <Icon className="w-6 h-6" style={{ color: item.accentColor }} />
                    )}
                  </div>
                </div>

                <div className="mb-2">
                  <span
                    className="text-[10px] tracking-wider uppercase font-bold"
                    style={{ color: item.accentColor }}
                  >
                    {item.badgeText}
                  </span>
                  <h3 className="font-cinzel text-lg font-bold text-[#FFF6E8] mt-0.5 leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#FFF6E8]/75 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Security Helpdesk Info */}
        <div className="mt-12 text-center text-xs text-[#FFF6E8]/60 flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#D9AD58]" />
          <span>Security and Help Desk available at the Main Academic Block Gates.</span>
        </div>
      </div>
    </section>
  );
};
