import React from 'react';
import { Calendar, Clock, MapPin, AlertTriangle, ShieldCheck, Navigation } from 'lucide-react';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar.ts';

export const EventDetailsSection: React.FC = () => {
  return (
    <section id="details" className="relative py-20 sm:py-28 bg-[#160923] border-t border-[#D9AD58]/15 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#371451]/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#D9AD58]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D9AD58]">
              OFFICIAL PROGRAMME SCHEDULE
            </span>
            <span className="h-px w-6 bg-[#D9AD58]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FFF6E8]">
            MARK YOUR CALENDAR
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#FFF6E8]/70 font-light">
            An evening crafted exclusively for SRGI students and faculty to immerse in festive devotion and celebration.
          </p>
        </div>

        {/* 3 Luxurious Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* CARD 01 - DATE */}
          <div className="relative group p-8 rounded-2xl festive-glass-card transition-all duration-300 hover:-translate-y-1.5">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold tracking-widest text-[#D9AD58] uppercase">
                CARD 01 · DATE
              </span>
              <div className="p-3 rounded-xl bg-[#371451]/60 border border-[#D9AD58]/30 text-[#D9AD58] group-hover:bg-[#D9AD58] group-hover:text-[#160923] transition-colors">
                <Calendar className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-1">
              <p className="font-playfair text-xl text-[#FFF6E8]/80 font-medium">
                Saturday
              </p>
              <h3 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#FFF6E8] gold-text-gradient">
                17 October 2026
              </h3>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D9AD58]/20 flex items-center justify-between text-xs text-[#FFF6E8]/60">
              <span>Navratri Festive Weekend</span>
              <span className="text-[#D9AD58] font-medium">Ashwin Month</span>
            </div>
          </div>

          {/* CARD 02 - TIME */}
          <div className="relative group p-8 rounded-2xl festive-glass-card transition-all duration-300 hover:-translate-y-1.5">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold tracking-widest text-[#FF9933] uppercase">
                CARD 02 · TIME
              </span>
              <div className="p-3 rounded-xl bg-[#371451]/60 border border-[#FF9933]/30 text-[#FF9933] group-hover:bg-[#FF9933] group-hover:text-[#160923] transition-colors">
                <Clock className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-1">
              <p className="font-playfair text-xl text-[#FFF6E8]/80 font-medium">
                Evening Programme
              </p>
              <h3 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#FFF6E8] gold-text-gradient tabular-nums">
                6:00 PM – 8:00 PM
              </h3>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D9AD58]/20 flex items-center justify-between text-xs text-[#FFF6E8]/60">
              <span>Indian Standard Time (IST)</span>
              <span className="text-amber-400 font-semibold">Strict Schedule</span>
            </div>
          </div>

          {/* CARD 03 - VENUE */}
          <div className="relative group p-8 rounded-2xl festive-glass-card transition-all duration-300 hover:-translate-y-1.5">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold tracking-widest text-[#C02D91] uppercase">
                CARD 03 · VENUE
              </span>
              <div className="p-3 rounded-xl bg-[#371451]/60 border border-[#C02D91]/30 text-[#C02D91] group-hover:bg-[#C02D91] group-hover:text-[#FFF6E8] transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-1">
              <p className="font-playfair text-xl text-[#FFF6E8]/80 font-medium">
                Main Campus Grounds
              </p>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#FFF6E8] gold-text-gradient">
                SRGI Campus, Jhansi
              </h3>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D9AD58]/20 flex items-center justify-between text-xs text-[#FFF6E8]/60">
              <span>Gwalior Road, Jhansi (U.P.)</span>
              <span className="text-[#D9AD58] font-medium">Open Air Arena</span>
            </div>
          </div>
        </div>

        {/* CRITICAL HIGHLIGHT NOTICE: ENTRY CLOSES STRICTLY AT 6:10 PM */}
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border-2 border-red-500/70 bg-gradient-to-r from-red-950/90 via-[#371451]/95 to-red-950/90 p-6 sm:p-8 shadow-[0_15px_40px_rgba(239,68,68,0.25)]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="p-4 rounded-2xl bg-red-600/25 border border-red-500/40 text-red-300 shrink-0 shadow-inner">
              <AlertTriangle className="w-9 h-9 sm:w-11 sm:h-11 animate-pulse" />
            </div>

            <div className="space-y-2 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 border border-red-500/50 text-red-200 text-xs font-bold tracking-widest uppercase">
                CRITICAL INSTITUTIONAL NOTICE
              </div>

              <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-[#FFF6E8]">
                ENTRY CLOSES STRICTLY AT 6:10 PM
              </h3>

              <p className="text-sm sm:text-base text-red-100 font-medium leading-relaxed">
                Students arriving after <span className="underline decoration-red-400 font-bold text-white">6:10 PM will not be permitted to enter</span> under any circumstances. Please plan your arrival between 5:30 PM and 6:00 PM to facilitate smooth entry and mandatory college ID verification.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Action Strip: Add to Calendar & Venue Directions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#160923] bg-[#D9AD58] hover:bg-[#FF9933] rounded-full transition-colors cursor-pointer shadow-md"
          >
            <Calendar className="w-4 h-4" />
            <span>Add to Google Calendar</span>
          </a>

          <button
            type="button"
            onClick={downloadIcsFile}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#FFF6E8] border border-[#D9AD58]/40 hover:bg-[#371451]/60 rounded-full transition-colors cursor-pointer"
          >
            <Clock className="w-4 h-4 text-[#D9AD58]" />
            <span>Download Apple / Outlook .ICS</span>
          </button>

          <a
            href="https://maps.google.com/?q=SR+Group+of+Institutions+Jhansi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#FFF6E8] border border-[#FFF6E8]/30 hover:bg-[#371451]/60 rounded-full transition-colors cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-[#FF9933]" />
            <span>Open in Google Maps ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};
