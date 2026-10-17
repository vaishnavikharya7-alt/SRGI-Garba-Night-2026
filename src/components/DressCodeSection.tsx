import React from 'react';
import { Sparkles, CheckCircle2, Shirt } from 'lucide-react';

export const DressCodeSection: React.FC = () => {
  return (
    <section id="dresscode" className="relative py-20 sm:py-28 bg-[#160923] border-t border-[#D9AD58]/15 overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#C02D91]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#371451]/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#D9AD58]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D9AD58]">
              FESTIVE ATTIRE PROTOCOL
            </span>
            <span className="h-px w-6 bg-[#D9AD58]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FFF6E8]">
            DRESS IN TRADITION.
            <span className="block italic font-playfair font-normal gold-text-gradient mt-1">
              Shine in Colour.
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#FFF6E8]/70 font-light">
            Embrace the royal spirit of Navratri with authentic Indian traditional elegance. Celebrate the evening in resplendent colors and festive pride.
          </p>
        </div>

        {/* 2 Premium Editorial Fashion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* CARD ONE: GIRLS */}
          <div className="group relative rounded-3xl overflow-hidden festive-glass-card transition-all duration-500 hover:-translate-y-2">
            {/* Image Header with Zoom Effect */}
            <div className="relative h-[380px] sm:h-[420px] overflow-hidden">
              <img
                src="/src/assets/images/dresscode_girls_lehenga_1792212742810.jpg"
                alt="Girls Festive Attire - Multicolour Lehenga Choli"
                className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160923] via-[#160923]/30 to-transparent" />

              {/* Top Banner Tag */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#160923]/80 backdrop-blur-md border border-[#D9AD58]/40 text-[#D9AD58] font-cinzel text-xs font-bold tracking-widest uppercase">
                  CARD 01 · GIRLS
                </span>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#C02D91] via-[#FF9933] to-[#D9AD58] text-[#160923] text-[11px] font-bold tracking-wider uppercase shadow-sm">
                  MULTICOLOUR
                </span>
              </div>

              {/* Title overlay at base of image */}
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-[#D9AD58] font-semibold">
                  Attire Category
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#FFF6E8]">
                  Indian / Traditional Wear
                </h3>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-8 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#D9AD58] font-semibold mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Suggested Attire
                </p>
                <div className="space-y-2 text-sm text-[#FFF6E8]/85">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D9AD58] shrink-0" />
                    <span className="font-medium">Lehenga Choli</span>
                    <span className="text-xs text-[#FFF6E8]/60">(Mirror-work & flared ghagra)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D9AD58] shrink-0" />
                    <span className="font-medium">Anarkali Suit</span>
                    <span className="text-xs text-[#FFF6E8]/60">(Floor-length royal silhouette)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D9AD58] shrink-0" />
                    <span className="font-medium">Festive Kurta Set</span>
                    <span className="text-xs text-[#FFF6E8]/60">(Palazzo or sharara pair)</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#371451]/40 border border-[#D9AD58]/20 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#D9AD58] font-bold">
                    Official Colour Theme
                  </span>
                  <span className="font-cinzel text-sm font-bold text-[#FFF6E8]">
                    Vibrant Multicolour
                  </span>
                </div>
                <div className="flex items-center -space-x-1">
                  <span className="w-5 h-5 rounded-full bg-[#C02D91] border border-white/30" />
                  <span className="w-5 h-5 rounded-full bg-[#FF9933] border border-white/30" />
                  <span className="w-5 h-5 rounded-full bg-[#D9AD58] border border-white/30" />
                  <span className="w-5 h-5 rounded-full bg-emerald-500 border border-white/30" />
                  <span className="w-5 h-5 rounded-full bg-sky-500 border border-white/30" />
                </div>
              </div>
            </div>
          </div>

          {/* CARD TWO: BOYS */}
          <div className="group relative rounded-3xl overflow-hidden festive-glass-card transition-all duration-500 hover:-translate-y-2">
            {/* Image Header with Zoom Effect */}
            <div className="relative h-[380px] sm:h-[420px] overflow-hidden">
              <img
                src="/src/assets/images/dresscode_boys_kurta_1792212742929.jpg"
                alt="Boys Festive Attire - Royal Blue Kurta Pajama"
                className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160923] via-[#160923]/30 to-transparent" />

              {/* Top Banner Tag */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#160923]/80 backdrop-blur-md border border-[#D9AD58]/40 text-[#D9AD58] font-cinzel text-xs font-bold tracking-widest uppercase">
                  CARD 02 · BOYS
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold tracking-wider uppercase shadow-sm">
                  THEME: BLUE
                </span>
              </div>

              {/* Title overlay at base of image */}
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-[#D9AD58] font-semibold">
                  Attire Category
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#FFF6E8]">
                  Blue Kurta Pajama
                </h3>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-8 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#D9AD58] font-semibold mb-2 flex items-center gap-1.5">
                  <Shirt className="w-3.5 h-3.5" />
                  Suggested Attire
                </p>
                <div className="space-y-2 text-sm text-[#FFF6E8]/85">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="font-medium">Royal Blue Silk Kurta</span>
                    <span className="text-xs text-[#FFF6E8]/60">(Subtle gold threadwork)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="font-medium">Ivory / White Churidar</span>
                    <span className="text-xs text-[#FFF6E8]/60">(Classic tailored pairing)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="font-medium">Traditional Mojaris / Juttis</span>
                    <span className="text-xs text-[#FFF6E8]/60">(Comfortable for Garba)</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#371451]/40 border border-[#D9AD58]/20 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#D9AD58] font-bold">
                    Official Colour Theme
                  </span>
                  <span className="font-cinzel text-sm font-bold text-[#FFF6E8]">
                    Royal / Navy / Indigo Blue
                  </span>
                </div>
                <div className="flex items-center -space-x-1">
                  <span className="w-5 h-5 rounded-full bg-blue-700 border border-white/30" />
                  <span className="w-5 h-5 rounded-full bg-indigo-600 border border-white/30" />
                  <span className="w-5 h-5 rounded-full bg-blue-900 border border-white/30" />
                  <span className="w-5 h-5 rounded-full bg-[#FFF6E8] border border-white/30" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footnote on Attire */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#FFF6E8]/70 italic font-light">
            Students are requested to adhere to decent, respectful traditional festive wear. Please wear footwear suitable for dancing the Garba on campus ground.
          </p>
        </div>
      </div>
    </section>
  );
};
