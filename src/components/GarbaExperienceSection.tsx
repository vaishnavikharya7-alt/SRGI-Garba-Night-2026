import React from 'react';
import { Music2, Disc3, Flame, Sparkles } from 'lucide-react';
import { MandalaPattern, DandiyaIcon } from './MandalaPattern.tsx';

export const GarbaExperienceSection: React.FC = () => {
  const experiences = [
    {
      icon: Music2,
      title: 'The Dhol & Raas Symphony',
      subtitle: 'AUTHENTIC RHYTHMS',
      desc: 'Thunderous nagada beats, live shehnai harmonies, and traditional Gujarati folk tunes that inspire unstoppable circular dance steps.',
      accent: '#FF9933',
    },
    {
      icon: Disc3,
      title: 'Concentric Dandiya Circles',
      subtitle: 'SYNCHRONIZED MOTION',
      desc: 'Join hundreds of peers in concentric circles, creating resonant clattering of wooden sticks in perfect rhythm under the night sky.',
      accent: '#D9AD58',
    },
    {
      icon: Flame,
      title: 'Royal Festive Illumination',
      subtitle: 'PALATIAL GLOW',
      desc: 'Canopies of warm golden festoons, brass diyas, and royal purple ambient floodlights transforming the SRGI grounds into an ethereal palace courtyard.',
      accent: '#C02D91',
    },
    {
      icon: Sparkles,
      title: 'Navratri Devotion & Joy',
      subtitle: 'SACRED CELEBRATION',
      desc: 'Honouring Maa Durga with devotion, auspicious Aarti ceremonies, and the uninhibited joy of collegiate togetherness.',
      accent: '#D9AD58',
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#160923] border-t border-[#D9AD58]/15 overflow-hidden">
      {/* Background Hero Banner with Parallax Feel */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <img
          src="/src/assets/images/gallery_garba_circle_1792212743563.jpg"
          alt="Garba circular dance experience"
          className="w-full h-full object-cover object-center filter blur-[1px]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#160923] via-[#160923]/80 to-[#160923]" />
      </div>

      {/* Decorative Rotating Mandala */}
      <div className="absolute -left-32 top-1/3 pointer-events-none">
        <MandalaPattern size={500} opacity={0.15} rotate={true} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#D9AD58]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D9AD58]">
              THE GARBA EXPERIENCE
            </span>
            <span className="h-px w-6 bg-[#D9AD58]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFF6E8] uppercase">
            FEEL THE RHYTHM.
            <span className="block font-playfair font-normal italic gold-text-gradient capitalize mt-1">
              Live the Tradition.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#FFF6E8]/75 font-light max-w-2xl mx-auto">
            A sensorial festival of music, lights, and movement designed to capture the authentic grandeur of Gujarat's most revered cultural celebration at SRGI Jhansi.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.title}
                className="group relative p-6 sm:p-8 rounded-2xl festive-glass-card transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#D9AD58]">
                      PILLAR 0{index + 1}
                    </span>
                    <div
                      className="p-3 rounded-xl bg-[#371451]/60 border transition-transform group-hover:scale-110"
                      style={{ borderColor: `${exp.accent}40` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: exp.accent }} />
                    </div>
                  </div>

                  <span
                    className="block text-[10px] tracking-wider uppercase font-semibold mb-1"
                    style={{ color: exp.accent }}
                  >
                    {exp.subtitle}
                  </span>

                  <h3 className="font-cinzel text-lg font-bold text-[#FFF6E8] mb-3 leading-snug">
                    {exp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#FFF6E8]/70 leading-relaxed font-light">
                    {exp.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D9AD58]/15 flex items-center gap-2 text-[11px] text-[#D9AD58]/80 font-medium">
                  <DandiyaIcon size={16} />
                  <span>Garba Night 2026</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote Banner */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl festive-glass border border-[#D9AD58]/30">
          <p className="font-playfair italic text-base sm:text-lg text-[#FFF6E8]">
            "Navratri is not merely a dance; it is the heartbeat of devotion, celebrated through rhythm and collective harmony."
          </p>
          <span className="block mt-2 text-xs font-semibold tracking-widest text-[#D9AD58] uppercase">
            — SRGI Cultural Committee
          </span>
        </div>
      </div>
    </section>
  );
};
