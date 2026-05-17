"use client";

import { Film, Palette, Zap, CheckCircle2, Truck, Phone, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Services() {
  const services = [
    {
      title: "PREMIUM DESIGN",
      description: "Visual identities that demand attention. From elite posters to complete brand overhauls.",
      icon: Palette,
      features: ["Brand Identity", "Motion Posters", "Daily Assets"]
    },
    {
      title: "AI PROMOTION",
      description: "Leveraging cutting-edge AI to create viral-ready promotional content that resonates.",
      icon: Zap,
      features: ["AI Video Gen", "Social Strategy", "Viral Optimization"]
    },
    {
      title: "CINEMATIC EDITING",
      description: "Expert storytelling through precision editing. We craft reels and videos that convert.",
      icon: Film,
      features: ["4K Precision", "Sound Design", "Color Grading"]
    }
  ];

  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-20 gap-4">
          <p className="text-primary text-xs font-black tracking-[0.3em] uppercase">OUR EXPERTISE</p>
          <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter leading-none">
            DEFYING <br /><span className="text-primary">DIGITAL BOUNDARIES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Card key={s.title} className="glass-card border-none group hover:bg-white/5 transition-all duration-500 overflow-hidden">
                <CardContent className="p-10 flex flex-col items-start text-left space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-headline font-bold text-2xl tracking-tight text-white">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                  </div>
                  <ul className="space-y-2 pt-4 border-t border-white/5 w-full">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-[10px] font-black tracking-widest text-primary/60 uppercase">
                        <ChevronRight className="w-3 h-3" /> {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: CheckCircle2, label: "AFFORDABLE", value: "ELITE QUALITY" },
            { icon: Truck, label: "DELIVERY", value: "LIGHTNING FAST" },
            { icon: Phone, label: "DIRECT LINE", value: "+91 91155 74558" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-6 p-8 rounded-[2rem] glass-card group hover:border-primary/20 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-black text-primary/50 tracking-widest mb-1">{item.label}</p>
                <p className="font-headline font-black text-lg tracking-tight">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
