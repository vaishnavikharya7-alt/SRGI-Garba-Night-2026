import React from 'react';
import { Sparkles, Music, Users, Heart } from 'lucide-react';
import { MandalaPattern } from './MandalaPattern.tsx';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#160923] overflow-hidden">
      {/* Decorative Mandala watermark in background */}
      <div className="absolute -right-24 top-1/4 pointer-events-none opacity-20">
        <MandalaPattern size={480} opacity={0.2} rotate={true} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Festival Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Golden Glow & Border Accent */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#C02D91]/30 via-[#D9AD58]/20 to-transparent blur-md pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-[#D9AD58]/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
                <img
                  src="/src/assets/images/about_garba_spirit_1792212742524.jpg"
                  alt="Festive Dandiya sticks, glowing brass diyas and traditional Gujarati fabrics"
                  className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#160923] via-transparent to-transparent opacity-60" />

                {/* Cultural caption badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#160923]/80 backdrop-blur-md border border-[#D9AD58]/20 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#371451] text-[#D9AD58]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-wider text-[#FFF6E8] uppercase">
                      Cultural Heritage
                    </p>
                    <p className="text-[10px] text-[#D9AD58]">
                      Traditional Dandiya Raas & Festive Harmony
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Flairs */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#D9AD58]" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#D9AD58]" />
            </div>
          </div>

          {/* Right Column: Editorial Text & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-px w-6 bg-[#D9AD58]" />
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D9AD58]">
                  THE SPIRIT OF NAVRATRI
                </span>
              </div>

              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FFF6E8] leading-[1.2]">
                "An Evening Filled With Rhythm, Colours & Celebration."
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#FFF6E8]/80 leading-relaxed font-light">
              <p>
                SR Group of Institutions, Jhansi, invites students to celebrate{' '}
                <strong className="text-[#D9AD58] font-semibold">Garba Night 2026</strong>, an
                evening dedicated to the joy of Navratri, traditional dance, vibrant attire and
                togetherness.
              </p>
              <p>
                Join us as the campus comes alive with festive energy and the spirit of
                celebration. Under the illuminated open-air grounds, our entire collegiate community
                gathers to honour centuries-old folk traditions, energetic dhol rhythms, and the
                auspicious blessings of Maa Durga.
              </p>
            </div>

            {/* Curated Editorial Highlights (Clean, unboxed metadata as per design constitution) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#D9AD58]/20">
              <div className="flex items-start gap-3">
                <Music className="w-5 h-5 text-[#FF9933] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#FFF6E8]">
                    Authentic Beats
                  </h3>
                  <p className="text-xs text-[#FFF6E8]/60 mt-0.5 leading-snug">
                    Traditional folk and high-energy festive tracks
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#D9AD58] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#FFF6E8]">
                    Campus Unity
                  </h3>
                  <p className="text-xs text-[#FFF6E8]/60 mt-0.5 leading-snug">
                    Celebrating across all departments and years
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#C02D91] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#FFF6E8]">
                    Joy & Elegance
                  </h3>
                  <p className="text-xs text-[#FFF6E8]/60 mt-0.5 leading-snug">
                    Traditional attire, respectful festive discipline
                  </p>
                </div>
              </div>
            </div>

            {/* Coordinator Signature Lockup */}
            <div className="pt-2 flex items-center gap-4">
              <div className="h-10 w-0.5 bg-gradient-to-b from-[#D9AD58] to-transparent" />
              <div>
                <p className="text-xs uppercase tracking-widest text-[#D9AD58] font-medium">
                  Organized under the patronage of
                </p>
                <p className="font-cinzel text-sm sm:text-base font-bold text-[#FFF6E8]">
                  Dr. Vijaya Singh Chauhan · Event Coordinator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
