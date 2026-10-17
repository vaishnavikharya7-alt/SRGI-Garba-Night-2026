/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { OpeningIntro } from './components/OpeningIntro.tsx';
import { GoldenParticles } from './components/GoldenParticles.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { CountdownTimer } from './components/CountdownTimer.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { EventDetailsSection } from './components/EventDetailsSection.tsx';
import { DressCodeSection } from './components/DressCodeSection.tsx';
import { GuidelinesSection } from './components/GuidelinesSection.tsx';
import { GarbaExperienceSection } from './components/GarbaExperienceSection.tsx';
import { CelebrationGallery } from './components/CelebrationGallery.tsx';
import { GrandFinaleSection } from './components/GrandFinaleSection.tsx';
import { Footer } from './components/Footer.tsx';
import { AudioPlayer } from './components/AudioPlayer.tsx';
import { CalendarModal } from './components/CalendarModal.tsx';

export default function App() {
  const [introFinished, setIntroFinished] = useState<boolean>(false);
  const [calendarModalOpen, setCalendarModalOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#160923] text-[#FFF6E8] relative selection:bg-[#D9AD58]/30 selection:text-[#FFF6E8]">
      {/* Cinematic Opening Sequence */}
      {!introFinished && <OpeningIntro onComplete={() => setIntroFinished(true)} />}

      {/* Ambient Floating Golden Particles */}
      <GoldenParticles density={36} />

      {/* Floating Glassmorphic Top Navigation */}
      <Navbar onOpenCalendar={() => setCalendarModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section — The Showstopper */}
        <HeroSection
          onExploreClick={() => scrollToSection('details')}
          onGuidelinesClick={() => scrollToSection('guidelines')}
        />

        {/* Live IST Countdown Component */}
        <CountdownTimer />

        {/* The Spirit of Navratri (About) */}
        <AboutSection />

        {/* Programme Schedule & Mandatory Notice */}
        <EventDetailsSection />

        {/* Festive Dress Code (Girls & Boys) */}
        <DressCodeSection />

        {/* Important Entry Guidelines */}
        <GuidelinesSection />

        {/* Immersive Garba Experience */}
        <GarbaExperienceSection />

        {/* Visual Celebration Gallery */}
        <CelebrationGallery />

        {/* Grand Finale Section */}
        <GrandFinaleSection onViewDetails={() => scrollToSection('details')} />
      </main>

      {/* Official Institutional Footer */}
      <Footer />

      {/* Optional Ambient Festive Chimes Audio */}
      <AudioPlayer />

      {/* Add to Calendar & WhatsApp Share Modal */}
      <CalendarModal
        isOpen={calendarModalOpen}
        onClose={() => setCalendarModalOpen(false)}
      />
    </div>
  );
}
