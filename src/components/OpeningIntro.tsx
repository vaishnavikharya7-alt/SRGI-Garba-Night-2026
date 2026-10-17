import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MandalaPattern } from './MandalaPattern.tsx';

interface OpeningIntroProps {
  onComplete: () => void;
}

export const OpeningIntro: React.FC<OpeningIntroProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      setIsVisible(false);
      return;
    }

    // Sequence stages:
    // 0: Initial black/royal-purple with golden particles (0ms - 500ms)
    // 1: Delicate mandala outline reveals (500ms - 1200ms)
    // 2: Official SRGI logo fades in (1200ms - 2000ms)
    // 3: "SR GROUP OF INSTITUTIONS PRESENTS" (2000ms - 2700ms)
    // 4: Complete transition into main site at 2.9s
    const t1 = setTimeout(() => setStage(1), 400);
    const t2 = setTimeout(() => setStage(2), 1100);
    const t3 = setTimeout(() => setStage(3), 1900);
    const t4 = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 400);
    }, 2850);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(onComplete, 200);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#160923] text-center overflow-hidden"
          role="dialog"
          aria-label="Opening Presentation"
        >
          {/* Ambient Royal Gradients */}
          <div className="absolute inset-0 bg-radial-gradient from-[#371451]/60 via-[#160923]/90 to-[#0e0517] pointer-events-none" />

          {/* Golden ambient aura */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D9AD58]/10 blur-[120px] pointer-events-none" />
          <div className="absolute w-[360px] h-[360px] rounded-full bg-[#C02D91]/15 blur-[90px] pointer-events-none" />

          {/* Skip button for zero waiting */}
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 z-20 px-3.5 py-1.5 text-xs tracking-wider uppercase font-medium text-[#D9AD58] border border-[#D9AD58]/30 rounded-full hover:bg-[#D9AD58]/15 hover:border-[#D9AD58] transition-all cursor-pointer"
          >
            Skip Intro ✕
          </button>

          {/* Central Animated Content Container */}
          <div className="relative z-10 flex flex-col items-center max-w-lg px-6">
            {/* Step 1: Mandala Outline */}
            <motion.div
              initial={{ scale: 0.75, opacity: 0, rotate: -20 }}
              animate={stage >= 1 ? { scale: 1, opacity: 0.38, rotate: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-16 pointer-events-none"
            >
              <MandalaPattern size={360} opacity={0.35} rotate={true} />
            </motion.div>

            {/* Step 2: Official SRGI Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 15 }}
              animate={stage >= 2 ? { scale: 1, opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-5 flex items-center justify-center"
            >
              <div className="relative p-2 rounded-2xl bg-[#371451]/40 border border-[#D9AD58]/30 shadow-[0_0_35px_rgba(217,173,88,0.25)]">
                <img
                  src="/brand/srgi-logo-clean.png"
                  alt="SR Group of Institutions (SRGI) Jhansi Logo"
                  className="w-20 h-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
                />
              </div>
            </motion.div>

            {/* Step 3: Typography Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={stage >= 3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1.5"
            >
              <span className="block text-xs font-semibold tracking-[0.3em] uppercase text-[#D9AD58]">
                SR GROUP OF INSTITUTIONS · JHANSI
              </span>
              <span className="block text-xs font-light tracking-[0.25em] text-[#FFF6E8]/75 uppercase">
                PROUDLY PRESENTS
              </span>
            </motion.div>

            {/* Festive Title Sub-Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={stage >= 3 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-4 pt-3 border-t border-[#D9AD58]/20"
            >
              <h2 className="font-cinzel text-2xl font-bold tracking-widest text-[#FFF6E8]">
                GARBA NIGHT <span className="gold-text-gradient">2026</span>
              </h2>
              <p className="mt-1 font-playfair italic text-xs tracking-wider text-[#FF9933]">
                "Where Tradition Meets Celebration"
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
