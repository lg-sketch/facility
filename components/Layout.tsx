
import React, { useState, useEffect } from 'react';
import { TextLogo } from './Logo';
import { Button } from './ui/Button';
import { Phone, Mail, MapPin, ShieldCheck, Menu, X, ChevronRight } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'cleaning', label: 'Reinigung' },
    { id: 'moving', label: 'Umzüge' },
    { id: 'about', label: 'Über uns' },
    { id: 'contact', label: 'Kontakt' },
  ];

  return (
    <div className="min-h-screen bg-[#EEF2FF] font-sans text-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-50 bg-white/0">
          <div className="cursor-pointer" onClick={() => onNavigate('home')}>
            <TextLogo text="Deti" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1 bg-gray-100 p-1.5 rounded-full">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-6 py-2.5 rounded-full text-base font-medium transition-all ${
                  currentPage === item.id 
                    ? 'bg-white text-[#000080] shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex gap-2 items-center">
            <Button variant="primary" className="hidden md:flex" onClick={() => onNavigate('contact')}>
              Offerte anfordern
            </Button>
            
            {/* Mobile Menu Toggle */}
             <button 
              className="md:hidden p-2 rounded-full hover:bg-gray-100 text-gray-700 transition-colors relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 animate-in spin-in-90 duration-200" />
              ) : (
                <Menu className="w-6 h-6 animate-in fade-in duration-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl md:hidden animate-in slide-in-from-top-5 duration-300 z-40 h-[calc(100vh-80px)] overflow-y-auto">
            <div className="p-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center justify-between p-4 rounded-2xl text-lg font-bold transition-all ${
                    currentPage === item.id 
                      ? 'bg-blue-50 text-[#000080]' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  {currentPage === item.id && <ChevronRight className="w-5 h-5 opacity-50" />}
                </button>
              ))}
              
              <div className="h-px bg-gray-100 my-4" />
              
              <Button 
                variant="primary" 
                fullWidth 
                className="h-14 text-lg shadow-xl shadow-blue-900/10"
                onClick={() => onNavigate('contact')}
              >
                Offerte anfordern
              </Button>

              <div className="mt-8 p-6 bg-gray-50 rounded-3xl space-y-4">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Kontakt</h4>
                <a href="tel:+41791511216" className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#000080] shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  +41 79 151 12 16
                </a>
                <a href="mailto:info@deti-reinigung.ch" className="flex items-center gap-3 text-gray-700 font-medium">
                   <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#000080] shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  info@deti-reinigung.ch
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#000080] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <TextLogo color="white" text="Deti Facility Management" />
              <p className="mt-6 text-blue-200 leading-relaxed max-w-sm">
                Ihr Partner für Sauberkeit und Umzüge in Bern. Wir setzen auf Qualität, Handschlagqualität und Schweizer Präzision.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Kontakt</h4>
              <ul className="space-y-4 text-blue-200">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+41791511216" className="hover:text-white transition-colors">+41 79 151 12 16</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:info@deti-reinigung.ch" className="hover:text-white transition-colors">info@deti-reinigung.ch</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>Bern, Schweiz</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Links</h4>
              <ul className="space-y-2 text-blue-200">
                {navItems.map(item => (
                  <li key={item.id}>
                    <button onClick={() => onNavigate(item.id)} className="hover:text-white transition-colors">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-300">
            <p>© 2025 Deti Facility Management GmbH. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-6 flex-wrap justify-center">
              
              {/* Badges - Implemented with Tailwind/SVG to prevent broken images */}
              <div className="flex items-center gap-3 opacity-90">
                 {/* AIOS Badge Mockup */}
                 <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-md border border-white/10 hover:bg-white/10 transition-colors cursor-pointer" title="AIOS Secured">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-[10px] font-bold tracking-wider text-white">AIOS SECURED</span>
                 </div>

                 {/* Swiss Hosting Badge Mockup */}
                 <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/10 hover:bg-white/10 transition-colors cursor-pointer" title="Swiss Hosting">
                     <div className="w-4 h-4 bg-red-600 rounded-[2px] relative flex items-center justify-center shadow-sm">
                         <div className="w-2.5 h-0.5 bg-white absolute" />
                         <div className="w-0.5 h-2.5 bg-white absolute" />
                     </div>
                     <span className="text-[10px] font-bold tracking-wider text-white">SWISS HOSTING</span>
                 </div>
              </div>
              
              <div className="h-4 w-px bg-white/20 hidden md:block"></div>

              <a href="#" className="hover:text-white">Impressum</a>
              <a href="#" className="hover:text-white">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
