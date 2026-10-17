import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenCalendar?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCalendar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'details', 'dresscode', 'guidelines', 'gallery'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Event Details', href: '#details', id: 'details' },
    { label: 'Dress Code', href: '#dresscode', id: 'dresscode' },
    { label: 'Guidelines', href: '#guidelines', id: 'guidelines' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#160923]/90 backdrop-blur-md border-b border-[#D9AD58]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Official Brand Lockup */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group whitespace-nowrap shrink-0 text-decoration-none"
            >
              <div className="relative p-1 rounded-lg bg-[#371451]/50 border border-[#D9AD58]/30 group-hover:border-[#D9AD58] transition-colors">
                <img
                  src="/brand/srgi-logo-clean.png"
                  alt="SRGI Official Emblem"
                  className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-sm sm:text-base font-bold tracking-wider text-[#FFF6E8] group-hover:text-[#D9AD58] transition-colors leading-tight">
                  SRGI JHANSI
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#D9AD58] font-medium leading-none mt-0.5">
                  Garba Night 2026
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative text-xs tracking-wider uppercase font-medium transition-colors whitespace-nowrap py-1 ${
                      isActive
                        ? 'text-[#D9AD58] font-semibold'
                        : 'text-[#FFF6E8]/80 hover:text-[#FFF6E8]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D9AD58] to-[#FF9933] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action & Mobile Menu Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#details"
                onClick={(e) => handleNavClick(e, '#details')}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#D9AD58] border border-[#D9AD58]/60 rounded-full hover:bg-[#D9AD58] hover:text-[#160923] transition-all whitespace-nowrap shadow-[0_0_15px_rgba(217,173,88,0.15)] group"
              >
                <span>EXPLORE EVENT</span>
                <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#D9AD58] hover:bg-[#371451]/60 border border-[#D9AD58]/20 focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#160923]/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-8 border-b border-[#D9AD58]/20 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-[#D9AD58]/20 flex items-center gap-3">
              <img
                src="/brand/srgi-logo-clean.png"
                alt="SRGI Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <p className="font-cinzel text-base font-bold text-[#FFF6E8]">
                  SR GROUP OF INSTITUTIONS
                </p>
                <p className="text-xs text-[#D9AD58] tracking-widest uppercase">
                  Jhansi · Garba Night 2026
                </p>
              </div>
            </div>

            <nav className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#371451]/70 text-[#D9AD58] border-l-2 border-[#D9AD58]'
                      : 'text-[#FFF6E8]/80 hover:text-[#FFF6E8]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D9AD58]/20">
            <a
              href="#details"
              onClick={(e) => handleNavClick(e, '#details')}
              className="flex items-center justify-center gap-2 w-full py-3 text-center text-xs font-semibold tracking-wider uppercase text-[#160923] bg-gradient-to-r from-[#D9AD58] to-[#FF9933] rounded-full shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>EXPLORE EVENT DETAILS</span>
              <span>↗</span>
            </a>

            {onOpenCalendar && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalendar();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-center text-xs font-medium tracking-wider uppercase text-[#D9AD58] border border-[#D9AD58]/40 rounded-full hover:bg-[#371451]/50"
              >
                <Calendar className="w-4 h-4" />
                <span>Add to Calendar</span>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
