import React from 'react';
import { ChevronDown, Calendar, Clock, MapPin, Sparkles, ShieldAlert } from 'lucide-react';
import { DandiyaIcon } from './MandalaPattern.tsx';

interface HeroSectionProps {
  onExploreClick: () => void;
  onGuidelinesClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onGuidelinesClick,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden"
    >
      {/* Background Image Container with Cinematic Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/src/assets/images/hero_garba_celebration_1792212739928.jpg"
          alt="SRGI Garba Night Festive Atmosphere"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />

        {/* Cinematic Scrims: Midnight purple gradient overlays for contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#160923]/90 via-[#160923]/75 to-[#160923]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#371451]/35 to-[#160923]/95" />

        {/* Ambient color splashes */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#D9AD58]/12 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 -right-24 w-[400px] h-[400px] bg-[#C02D91]/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-[450px] h-[450px] bg-[#FF9933]/15 blur-[130px] pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        {/* Institutional Kicker with SRGI Logo Accent */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#371451]/60 border border-[#D9AD58]/30 backdrop-blur-md mb-6 shadow-sm">
          <img
            src="/brand/srgi-logo-clean.png"
            alt="SRGI"
            className="w-4 h-4 object-contain"
          />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#D9AD58]">
            SR GROUP OF INSTITUTIONS, JHANSI
          </span>
          <span className="text-[#FFF6E8]/40 text-xs">·</span>
          <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#FFF6E8]/90 font-medium">
            PROUDLY PRESENTS
          </span>
        </div>

        {/* Hindi Traditional Invocation */}
        <div className="mb-3">
          <p className="font-devanagari text-lg sm:text-xl md:text-2xl text-[#FF9933] tracking-[0.2em] font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            ॥ शुभ नवरात्रि ॥
          </p>
        </div>

        {/* Showstopper Title */}
        <div className="space-y-1 mb-6">
          <h1 className="font-cinzel tracking-tight font-extrabold uppercase leading-none">
            <span className="block text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-tight text-[#FFF6E8] drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
              GARBA
            </span>
            <span className="block font-playfair font-normal italic text-3xl sm:text-5xl md:text-6xl lg:text-7xl gold-text-gradient tracking-wide -mt-2 sm:-mt-4">
              Night 2026
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#D9AD58]" />
            <p className="text-sm sm:text-base md:text-lg font-playfair italic text-[#FFF6E8]/95 tracking-wide">
              "Nine Colours. Endless Beats. One Magical Night."
            </p>
            <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#D9AD58]" />
          </div>
        </div>

        {/* Event Key Facts Bar */}
        <div className="max-w-3xl mx-auto mb-8 p-3 sm:p-4 rounded-2xl festive-glass shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#D9AD58]/20">
            <div className="flex items-center justify-center gap-2 py-1.5 sm:py-0 px-2">
              <Calendar className="w-4 h-4 text-[#D9AD58] shrink-0" />
              <div className="text-left">
                <span className="block text-[10px] tracking-wider uppercase text-[#D9AD58] font-semibold">
                  Date
                </span>
                <span className="font-cinzel text-xs sm:text-sm font-bold text-[#FFF6E8] tracking-wider">
                  SATURDAY, 17 OCT 2026
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 py-1.5 sm:py-0 px-2">
              <Clock className="w-4 h-4 text-[#FF9933] shrink-0" />
              <div className="text-left">
                <span className="block text-[10px] tracking-wider uppercase text-[#FF9933] font-semibold">
                  Timing
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#FFF6E8] tracking-wider tabular-nums">
                  6:00 PM — 8:00 PM
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 py-1.5 sm:py-0 px-2">
              <MapPin className="w-4 h-4 text-[#C02D91] shrink-0" />
              <div className="text-left">
                <span className="block text-[10px] tracking-wider uppercase text-[#C02D91] font-semibold">
                  Venue
                </span>
                <span className="font-cinzel text-xs sm:text-sm font-bold text-[#FFF6E8] tracking-wider">
                  SRGI CAMPUS, JHANSI
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#160923] bg-gradient-to-r from-[#D9AD58] via-[#FF9933] to-[#D9AD58] rounded-full hover:shadow-[0_0_30px_rgba(217,173,88,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4 text-[#160923]" />
            <span>EXPLORE THE CELEBRATION</span>
          </button>

          <button
            onClick={onGuidelinesClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#FFF6E8] border border-[#D9AD58]/50 rounded-full hover:bg-[#371451]/60 hover:border-[#D9AD58] hover:text-[#D9AD58] transition-all cursor-pointer whitespace-nowrap"
          >
            <ShieldAlert className="w-4 h-4 text-[#FF9933]" />
            <span>VIEW EVENT GUIDELINES</span>
          </button>
        </div>

        {/* Entry Notice Banner (Hero Micro-Badge) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-200 text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <span>Note: Entry Closes Strictly at 6:10 PM · College ID Mandatory</span>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-4">
        <a
          href="#countdown"
          aria-label="Scroll to countdown"
          className="group flex flex-col items-center text-[#D9AD58]/70 hover:text-[#D9AD58] transition-colors"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-medium mb-1 group-hover:tracking-[0.35em] transition-all">
            Scroll to Discover
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce text-[#D9AD58]" />
        </a>
      </div>
    </section>
  );
};
