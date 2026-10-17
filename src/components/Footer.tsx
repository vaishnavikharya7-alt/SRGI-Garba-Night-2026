import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, Globe, ShieldAlert } from 'lucide-react';
import { DandiyaIcon } from './MandalaPattern.tsx';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0d0415] border-t border-[#D9AD58]/25 text-[#FFF6E8] pt-16 pb-12 overflow-hidden">
      {/* Subtle top golden light line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D9AD58] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#D9AD58]/15 items-start">
          {/* Column 1: Institutional Identity with official SRGI logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-xl bg-[#371451]/60 border border-[#D9AD58]/40 shadow-sm">
                <img
                  src="/brand/srgi-logo-clean.png"
                  alt="SR Group of Institutions (SRGI) Jhansi Logo"
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#FFF6E8] leading-tight">
                  SR Group of Institutions
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#D9AD58] font-medium">
                  Jhansi, Uttar Pradesh
                </p>
                <p className="text-[11px] text-[#FF9933] font-semibold tracking-wider mt-0.5 uppercase">
                  GARBA NIGHT PROGRAMME 2026
                </p>
              </div>
            </div>

            <p className="font-playfair italic text-sm text-[#FFF6E8]/75 pt-2">
              "Celebrating Culture, Tradition & Togetherness."
            </p>

            {/* Event Coordinator Details */}
            <div className="p-3.5 rounded-xl bg-[#160923]/80 border border-[#D9AD58]/20 max-w-sm">
              <span className="block text-[10px] tracking-wider uppercase text-[#D9AD58] font-bold">
                Event Coordinator
              </span>
              <span className="font-cinzel text-sm font-semibold text-[#FFF6E8]">
                Dr. Vijaya Singh Chauhan
              </span>
              <span className="block text-xs text-[#FFF6E8]/60 mt-0.5">
                Faculty Cultural Convener · SRGI Jhansi
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs font-bold tracking-[0.2em] uppercase text-[#D9AD58]">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs text-[#FFF6E8]/70">
              <li>
                <a href="#home" className="hover:text-[#D9AD58] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D9AD58] transition-colors">
                  The Spirit of Navratri
                </a>
              </li>
              <li>
                <a href="#details" className="hover:text-[#D9AD58] transition-colors">
                  Programme Schedule
                </a>
              </li>
              <li>
                <a href="#dresscode" className="hover:text-[#D9AD58] transition-colors">
                  Traditional Dress Code
                </a>
              </li>
              <li>
                <a href="#guidelines" className="hover:text-[#D9AD58] transition-colors">
                  Entry Guidelines
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D9AD58] transition-colors">
                  Visual Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Campus & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-cinzel text-xs font-bold tracking-[0.2em] uppercase text-[#D9AD58]">
              CAMPUS VENUE
            </h4>
            <div className="space-y-2.5 text-xs text-[#FFF6E8]/70">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D9AD58] shrink-0 mt-0.5" />
                <span>
                  SR Group of Institutions Campus, Ambabai, Gwalior Road, Jhansi, Uttar Pradesh 284002
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#D9AD58] shrink-0" />
                <a
                  href="https://www.srgi.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D9AD58] transition-colors"
                >
                  www.srgi.ac.in
                </a>
              </p>
            </div>

            {/* Mandatory Entry Reminder Strip */}
            <div className="mt-4 p-3 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center gap-2.5">
              <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
              <p className="text-[11px] text-red-200 font-medium leading-tight">
                <strong>Reminder:</strong> College ID mandatory. Entry closes strictly at 6:10 PM.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF6E8]/60">
          <p className="text-center sm:text-left">
            © 2026 SR Group of Institutions, Jhansi. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#D9AD58]/80">
              Official Institutional Event Portal
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#371451]/60 border border-[#D9AD58]/30 text-[#D9AD58] hover:bg-[#D9AD58] hover:text-[#160923] transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[10px] font-semibold tracking-wider uppercase">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
