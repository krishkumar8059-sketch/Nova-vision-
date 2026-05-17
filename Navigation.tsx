
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContact = () => {
    window.location.href = 'tel:+919115574558';
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-6",
      scrolled ? "py-4" : "py-8"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between rounded-[2rem] px-8 py-3 transition-all duration-500",
        scrolled ? "bg-background/40 backdrop-blur-3xl border border-white/10 shadow-2xl" : "bg-transparent"
      )}>
        <Link href="/" className="flex flex-col items-center group relative pt-2">
          {/* Logo Arch */}
          <svg className="w-24 h-6 mb-[-10px] text-primary transition-transform duration-500 group-hover:scale-110" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 18C5 18 25 2 50 2C75 2 95 18 95 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div className="text-center">
            <span className="font-serif text-xl sm:text-2xl tracking-tight text-white block leading-tight">
              Nova Vision
            </span>
            <span className="text-[8px] font-black tracking-[0.5em] uppercase text-primary/80 block mt-[-2px]">
              STUDIO
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-12 text-[10px] font-black tracking-[0.3em] uppercase">
          <Link href="#services" className="hover:text-primary transition-all hover:translate-y-[-1px]">Expertise</Link>
          <Link href="#pricing" className="hover:text-primary transition-all hover:translate-y-[-1px]">Investment</Link>
          <Button 
            onClick={handleContact}
            className="bg-primary hover:bg-accent text-background font-black rounded-full px-10 h-11 text-[10px] tracking-[0.2em] uppercase shadow-[0_15px_30px_rgba(229,199,107,0.2)] transition-all hover:scale-105 active:scale-95"
          >
            LET'S CREATE
          </Button>
        </div>

        <button 
          className="md:hidden text-primary p-2 hover:bg-white/5 rounded-full transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-6 right-6 mt-4 p-10 glass-card rounded-[2.5rem] animate-in fade-in slide-in-from-top-6 duration-500">
          <div className="flex flex-col gap-8 text-center text-xs font-black tracking-[0.4em] uppercase">
            <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2">Expertise</Link>
            <Link href="#pricing" onClick={() => setMobileMenuOpen(false)} className="py-2">Investment</Link>
            <Button 
              onClick={() => {
                handleContact();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-primary text-background font-black rounded-full py-8 text-xs tracking-[0.3em]"
            >
              LET'S CREATE
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
