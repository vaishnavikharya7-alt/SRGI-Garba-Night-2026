import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Bell, Sparkles } from 'lucide-react';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar.ts';

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    status: 'upcoming' as 'upcoming' | 'live' | 'ended',
  });

  useEffect(() => {
    // 17 October 2026, 6:00 PM IST (UTC+05:30)
    const targetStart = new Date('2026-10-17T18:00:00+05:30').getTime();
    // 17 October 2026, 8:00 PM IST (UTC+05:30)
    const targetEnd = new Date('2026-10-17T20:00:00+05:30').getTime();

    const calculateTime = () => {
      const now = Date.now();

      if (now >= targetEnd) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, status: 'ended' });
        return;
      }

      if (now >= targetStart && now < targetEnd) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, status: 'live' });
        return;
      }

      const diff = Math.max(0, targetStart - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, status: 'upcoming' });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="relative py-16 sm:py-24 bg-[#160923] border-y border-[#D9AD58]/15 overflow-hidden">
      {/* Background Mandala & Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-gradient from-[#371451]/50 to-transparent blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#D9AD58]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D9AD58]">
              COUNTDOWN TO THE SPECTACLE
            </span>
            <span className="h-px w-6 bg-[#D9AD58]" />
          </div>

          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-[#FFF6E8]">
            {timeLeft.status === 'upcoming' && 'THE CELEBRATION BEGINS IN'}
            {timeLeft.status === 'live' && 'THE CELEBRATION HAS BEGUN!'}
            {timeLeft.status === 'ended' && 'THANK YOU FOR CELEBRATING WITH US.'}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-[#FFF6E8]/70 font-light">
            Target Time: Saturday, 17 October 2026 · 6:00 PM IST (Asia/Kolkata)
          </p>
        </div>

        {/* Counter Display */}
        {timeLeft.status === 'upcoming' && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-3xl mx-auto mb-10">
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className="relative group p-4 sm:p-6 rounded-2xl festive-glass-card transition-all duration-300 hover:scale-[1.03]"
              >
                {/* Decorative golden corner notches */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#D9AD58]" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#D9AD58]" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#D9AD58]" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#D9AD58]" />

                <div className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold gold-text-gradient tabular-nums tracking-tight">
                  {String(unit.value).padStart(2, '0')}
                </div>

                <div className="mt-2 pt-2 border-t border-[#D9AD58]/20">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#FFF6E8]/70 uppercase">
                    {unit.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {timeLeft.status === 'live' && (
          <div className="max-w-xl mx-auto p-8 rounded-2xl festive-glass-card mb-10 text-center">
            <Sparkles className="w-10 h-10 text-[#FF9933] mx-auto mb-4 animate-spin-slow" />
            <h3 className="font-cinzel text-2xl font-bold text-[#FFF6E8] mb-2">
              Dandiya Beats Are Live on Campus!
            </h3>
            <p className="text-sm text-[#D9AD58]">
              Join the main circle at SRGI Campus Grounds. Entry closes strictly at 6:10 PM.
            </p>
          </div>
        )}

        {timeLeft.status === 'ended' && (
          <div className="max-w-xl mx-auto p-8 rounded-2xl festive-glass-card mb-10 text-center">
            <h3 className="font-cinzel text-2xl font-bold text-[#FFF6E8] mb-2">
              Garba Night 2026 Concluded
            </h3>
            <p className="text-sm text-[#D9AD58]">
              Thank you students, faculty, and coordinators for making this Navratri truly unforgettable!
            </p>
          </div>
        )}

        {/* Calendar Sync Integration */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <span className="text-xs text-[#FFF6E8]/60 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#D9AD58]" />
            Set a reminder on your calendar:
          </span>

          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#160923] bg-[#D9AD58] hover:bg-[#FF9933] rounded-full transition-colors cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Google Calendar</span>
          </a>

          <button
            type="button"
            onClick={downloadIcsFile}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#D9AD58] border border-[#D9AD58]/50 hover:bg-[#371451]/50 rounded-full transition-colors cursor-pointer"
          >
            <Bell className="w-3.5 h-3.5" />
            <span>Download .ICS</span>
          </button>
        </div>
      </div>
    </section>
  );
};
