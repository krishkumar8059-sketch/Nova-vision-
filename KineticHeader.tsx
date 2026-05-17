"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function KineticHeader() {
  const [text, setText] = useState("");
  const fullText = "We Create Visuals That Leave an Impact.";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center text-center py-40 px-6 hero-gradient overflow-hidden">
      {/* Cinematic Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />
      
      <div className="inline-flex items-center gap-4 text-primary/90 text-[10px] font-black tracking-[0.6em] uppercase animate-fade-in mb-12 bg-white/5 px-8 py-3 rounded-full border border-white/5 backdrop-blur-xl">
        <span className="opacity-50">2026</span>
        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(229,199,107,1)]" />
        <span>ELITE PRODUCTION</span>
        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(229,199,107,1)]" />
        <span>STRATEGIC GROWTH</span>
      </div>

      <div className="relative z-10 space-y-12">
        <h1 className={cn(
          "font-headline text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.85] max-w-[1200px] mx-auto",
          "gold-gradient-text drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        )}>
          {text}<span className="typewriter-cursor" />
        </h1>
        
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl font-medium leading-relaxed animate-fade-in [animation-delay:0.8s] opacity-0">
          Transforming ordinary ideas into extraordinary visual legacies. We bridge the gap between cinematic production and exponential digital authority.
        </p>
      </div>
    </div>
  );
}
