import React, { useState, useEffect } from 'react';
import { Menu, X, AudioWaveform, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${scrolled ? 'bg-[#0c0a09]/80 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
            <AudioWaveform className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">traxion<span className="text-primary">ai</span></span>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
            Book a Demo
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-muted hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0c0a09] border-b border-white/5 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 shadow-2xl">
          <Button variant="primary" size="lg" className="w-full justify-center">
            Book a Demo
          </Button>
        </div>
      )}
    </nav>
  );
};