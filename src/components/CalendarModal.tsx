import React, { useState } from 'react';
import { Calendar, Clock, MapPin, X, Copy, Check, Download, ExternalLink, Sparkles } from 'lucide-react';
import { EVENT_DETAILS, getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar.ts';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyDetails = () => {
    const text = `🎉 *SRGI GARBA NIGHT 2026* 🎉\n📍 Venue: SRGI Campus, Jhansi\n📅 Date: Saturday, 17 October 2026\n⏰ Time: 6:00 PM – 8:00 PM IST\n⚠️ Note: Entry closes strictly at 6:10 PM! College ID mandatory.\n👗 Dress Code: Girls - Multicolour Traditional | Boys - Blue Kurta Pajama\nBring your Dandiya sticks!`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#160923]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#160923] border border-[#D9AD58]/40 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C02D91]/20 rounded-full blur-[80px] pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#D9AD58]/20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#371451] text-[#D9AD58] border border-[#D9AD58]/30">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#FFF6E8]">
                Add to Calendar
              </h3>
              <p className="text-xs text-[#D9AD58] tracking-wider uppercase">
                SRGI Garba Night 2026
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-[#FFF6E8]/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Event Quick Facts */}
        <div className="my-6 p-4 rounded-2xl bg-[#371451]/40 border border-[#D9AD58]/20 space-y-2.5 text-xs text-[#FFF6E8]/85">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#D9AD58] shrink-0" />
            <span>
              <strong>Date:</strong> Saturday, 17 October 2026
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#FF9933] shrink-0" />
            <span>
              <strong>Time:</strong> 6:00 PM – 8:00 PM IST (Entry closes at 6:10 PM)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#C02D91] shrink-0" />
            <span>
              <strong>Venue:</strong> SRGI Campus, Ambabai, Gwalior Road, Jhansi
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-between w-full p-3.5 rounded-xl bg-gradient-to-r from-[#D9AD58] to-[#FF9933] text-[#160923] font-bold text-xs tracking-wider uppercase hover:opacity-95 transition-all shadow-md group cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Google Calendar</span>
            </span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <button
            type="button"
            onClick={() => {
              downloadIcsFile();
              onClose();
            }}
            className="flex items-center justify-between w-full p-3.5 rounded-xl bg-[#371451]/60 border border-[#D9AD58]/30 text-[#FFF6E8] hover:border-[#D9AD58] font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4 text-[#D9AD58]" />
              <span>Apple Calendar / Outlook (.ics)</span>
            </span>
            <span className="text-[10px] text-[#D9AD58]">Download</span>
          </button>

          <button
            type="button"
            onClick={handleCopyDetails}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 text-xs text-[#FFF6E8]/70 hover:text-[#FFF6E8] transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 font-medium">Copied Event Message!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy WhatsApp / Invite Text</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
