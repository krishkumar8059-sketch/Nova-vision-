
import { Navigation } from '@/components/Navigation';
import { KineticHeader } from '@/components/KineticHeader';
import { Services } from '@/components/Services';
import { BookingMatrix } from '@/components/BookingMatrix';
import { GrowthDashboard } from '@/components/GrowthDashboard';
import { TeamSection } from '@/components/TeamSection';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* 2026 Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-primary/10 blur-[180px] rounded-full animate-pulse duration-[10s]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent/5 blur-[180px] rounded-full" />
      </div>

      <Navigation />

      <div className="relative z-10">
        <section className="pt-20">
          <KineticHeader />
        </section>

        <Services />

        <TeamSection />

        <div id="pricing">
          <BookingMatrix />
        </div>

        <GrowthDashboard />
      </div>

      <footer className="relative z-10 py-32 px-6 border-t border-white/5 bg-secondary/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="flex flex-col items-start group relative">
                  <svg className="w-24 h-6 mb-[-10px] text-primary" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 18C5 18 25 2 50 2C75 2 95 18 95 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <div>
                    <span className="font-serif text-3xl tracking-tight text-white block leading-tight">
                      Nova Vision
                    </span>
                    <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary block mt-[-2px]">
                      STUDIO
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground text-base max-w-sm leading-relaxed font-medium">
                  Defying digital boundaries through high-end production and exponential growth strategies. We build legacies, not just content.
                </p>
              </div>
              <div className="flex gap-4">
                <a href="https://instagram.com/novavisionstudio.in" target="_blank" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-background hover:border-primary transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">CONTACT</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-white transition-colors cursor-pointer">
                  <Phone className="w-4 h-4 text-primary" /> +91 91155 74558
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-white transition-colors cursor-pointer">
                  <Mail className="w-4 h-4 text-primary" /> novavisionstudio.in@gmail.com
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <p className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">STUDIO</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" /> Punjab, India
                </li>
                <li className="text-xs text-muted-foreground italic">Available for Global Commissions</li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">SYSTEMS ONLINE / 2026 EDITION</p>
            </div>
            <div className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.3em]">
              © 2026 Nova Vision Studio. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
