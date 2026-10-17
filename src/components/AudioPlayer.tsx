import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  const startFestiveChimes = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Pentatonic Indian Raag scale frequencies for peaceful ambient festive chimes
      // Sa, Re, Ga, Pa, Dha (C, D, E, G, A in Hz)
      const frequencies = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25];

      const playChime = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'suspended') return;
        const now = audioCtxRef.current.currentTime;
        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();

        const freq = frequencies[Math.floor(Math.random() * frequencies.length)];
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.04, now + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

        osc.connect(gain);
        gain.connect(audioCtxRef.current.destination);

        osc.start(now);
        osc.stop(now + 2.6);
      };

      // Play initial chime
      playChime();
      // Periodically trigger ambient festive notes
      intervalRef.current = window.setInterval(playChime, 2200);
      setIsPlaying(true);
    } catch {
      // AudioContext not allowed or supported
      setIsPlaying(false);
    }
  };

  const stopFestiveChimes = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopFestiveChimes();
    } else {
      startFestiveChimes();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-30">
      <button
        type="button"
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Mute ambient sound' : 'Play festive ambient sound'}
        className={`flex items-center gap-2 px-3.5 py-2 rounded-full border backdrop-blur-md text-xs font-semibold tracking-wider transition-all shadow-lg cursor-pointer ${
          isPlaying
            ? 'bg-[#371451]/90 border-[#D9AD58] text-[#D9AD58] shadow-[0_0_20px_rgba(217,173,88,0.3)]'
            : 'bg-[#160923]/80 border-[#D9AD58]/30 text-[#FFF6E8]/70 hover:text-[#FFF6E8] hover:border-[#D9AD58]/60'
        }`}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-[#D9AD58] animate-pulse" />
            <span className="hidden sm:inline uppercase text-[10px]">Ambient Chimes ON</span>
          </>
        ) : (
          <>
            <Music className="w-4 h-4 text-[#D9AD58]" />
            <span className="hidden sm:inline uppercase text-[10px]">Festive Sound</span>
          </>
        )}
      </button>
    </div>
  );
};
