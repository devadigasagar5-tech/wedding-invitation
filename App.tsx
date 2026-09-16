import React, { useState, useEffect, useRef } from 'react';
import { weddingConfig } from './weddingConfig';
import { IntroScreen } from './components/screens/IntroScreen';
import { MainInviteCard } from './components/screens/MainInviteCard';
import { AuspiciousBlessingScreen } from './components/screens/AuspiciousBlessingScreen';
import { CoupleScreen } from './components/screens/CoupleScreen';
import { CelebrationsScreen } from './components/screens/CelebrationsScreen';
import { VenueScreen } from './components/screens/VenueScreen';
import { CountdownCeremonyScreen } from './components/screens/CountdownCeremonyScreen';
import { RsvpScreen } from './components/screens/RsvpScreen';
import { MusicPlayer } from './components/MusicPlayer';
import { NavigationDock } from './components/NavigationDock';
import { FloatingPetals } from './components/FloatingPetals';

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [musicTriggered, setMusicTriggered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const sectionIds = [
    'screen-intro',
    'screen-main-invite',
    'screen-blessing',
    'screen-couple',
    'screen-celebrations',
    'screen-venue',
    'screen-countdown-flow',
    'screen-rsvp',
  ];

  const scrollToSection = (index: number) => {
    const id = sectionIds[index];
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBegin = () => {
    setMusicTriggered(true);
    scrollToSection(1);
  };

  const handleSkip = () => {
    setMusicTriggered(true);
    scrollToSection(1);
  };

  // Scroll listener to update active section indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#F6EFE6] text-[#4A1017] font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#4A1017]"
    >
      {/* Subtle Floating Petals Layer */}
      <FloatingPetals />

      {/* Ambient Temple Shehnai Audio Player (Safe Autoplay on First User Tap) */}
      <MusicPlayer
        autoPlayTriggered={musicTriggered}
        onFirstUserAction={() => setMusicTriggered(true)}
      />

      {/* SCREEN 1: INTRO SCREEN */}
      <IntroScreen
        config={weddingConfig}
        onBegin={handleBegin}
        onSkip={handleSkip}
      />

      {/* SCREEN 2: MAIN INVITE CARD */}
      <MainInviteCard
        config={weddingConfig}
        onNext={() => scrollToSection(2)}
      />

      {/* SCREEN 3: AUSPICIOUS TEXT SCREEN */}
      <AuspiciousBlessingScreen
        config={weddingConfig}
        onNext={() => scrollToSection(3)}
      />

      {/* SCREEN 4: THE COUPLE SCREEN */}
      <CoupleScreen
        config={weddingConfig}
        onNext={() => scrollToSection(4)}
      />

      {/* SCREEN 5: SAVE THE DATE / CELEBRATIONS SCREEN */}
      <CelebrationsScreen
        config={weddingConfig}
        onNext={() => scrollToSection(5)}
      />

      {/* SCREEN 6: VENUE SCREEN */}
      <VenueScreen
        config={weddingConfig}
        onNext={() => scrollToSection(6)}
      />

      {/* SCREEN 7: COUNTDOWN + CEREMONY FLOW SCREEN */}
      <CountdownCeremonyScreen
        config={weddingConfig}
        onNext={() => scrollToSection(7)}
      />

      {/* SCREEN 8: RSVP SCREEN */}
      <RsvpScreen
        config={weddingConfig}
        onScrollToTop={() => scrollToSection(0)}
      />

      {/* Quick Navigation Dock (Visible across sections) */}
      <NavigationDock
        currentSection={activeSection}
        totalSections={sectionIds.length}
        onSelectSection={(index) => {
          setMusicTriggered(true);
          scrollToSection(index);
        }}
      />
    </div>
  );
}
