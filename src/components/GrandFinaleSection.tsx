import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';
import { MandalaPattern, DandiyaIcon } from './MandalaPattern.tsx';

interface GrandFinaleSectionProps {
  onViewDetails: () => void;
}

export const GrandFinaleSection: React.FC<GrandFinaleSectionProps> = ({ onViewDetails }) => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#160923] border-t border-[#D9AD58]/20 overflow-hidden text-center">
      {/* Deep purple radiant backdrop with golden lighting */}
      <div className="absolute inset-0 bg-radial-gradient from-[#371451]/80 via-[#160923]/95 to-[#0d0414] pointer-events-none" />

      {/* Decorative Rotating Mandala behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-25">
        <MandalaPattern size={650} opacity={0.3} rotate={true} />
      </div>

      {/* Radiant ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#D9AD58]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#C02D91]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Small Heading */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-6 bg-[#D9AD58]" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#D9AD58]">
            THE NIGHT IS CALLING
          </span>
          <span className="h-px w-6 bg-[#D9AD58]" />
        </div>

        {/* Main Heading */}
        <h2 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#FFF6E8] uppercase leading-tight mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
          "LET'S DANCE THE{' '}
          <span className="gold-text-gradient block sm:inline">NIGHT AWAY!"</span>
        </h2>

        {/* Supporting text */}
        <p className="font-playfair text-base sm:text-xl text-[#FFF6E8]/90 italic max-w-2xl mx-auto mb-10 leading-relaxed">
          Bring your Dandiya sticks, your highest energy and celebrate Navratri with joy, enthusiasm and the spirit of togetherness!
        </p>

        {/* Highlighted Event Strip */}
        <div className="max-w-xl mx-auto p-4 sm:p-5 rounded-2xl festive-glass-card mb-10 border border-[#D9AD58]/35 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-around gap-4 text-center">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#D9AD58]" />
              <span className="font-cinzel text-xs sm:text-sm font-bold text-[#FFF6E8] tracking-wider">
                17 OCTOBER 2026
              </span>
            </div>
            <div className="hidden sm:block text-[#D9AD58]/40">·</div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#FF9933]" />
              <span className="text-xs sm:text-sm font-semibold text-[#FFF6E8] tracking-wider tabular-nums">
                6:00 PM – 8:00 PM
              </span>
            </div>
            <div className="hidden sm:block text-[#D9AD58]/40">·</div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C02D91]" />
              <span className="font-cinzel text-xs sm:text-sm font-bold text-[#FFF6E8] tracking-wider">
                SRGI CAMPUS, JHANSI
              </span>
            </div>
          </div>
        </div>

        {/* Final Golden Call-to-Action Button */}
        <div>
          <button
            type="button"
            onClick={onViewDetails}
            className="inline-flex items-center gap-3 px-8 py-4 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#160923] bg-gradient-to-r from-[#D9AD58] via-[#FF9933] to-[#D9AD58] rounded-full hover:shadow-[0_0_35px_rgba(217,173,88,0.55)] hover:scale-105 active:scale-95 transition-all cursor-pointer group shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            <span>VIEW EVENT DETAILS</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
