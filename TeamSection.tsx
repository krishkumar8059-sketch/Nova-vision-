
"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Clapperboard, Video, Laptop } from 'lucide-react';

export function TeamSection() {
  const teamImage = PlaceHolderImages.find(img => img.id === 'team-photo');

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary text-xs font-black tracking-[0.4em] uppercase">THE VISIONARIES</p>
          <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter">
            MEET THE <span className="text-primary">TEAM</span>
          </h2>
        </div>

        <div className="relative glass-card border-none rounded-[3rem] overflow-hidden group">
          {/* Main Team Photo Container */}
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={teamImage?.imageUrl || ''}
              alt="Jihan and Krish - Nova Vision Studio"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              data-ai-hint="creative team"
            />
            
            {/* Overlay Labels (Replicating the Flyer) */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-12 md:px-24 pointer-events-none">
              <div className="bg-primary/90 text-background font-headline font-black text-4xl md:text-7xl px-8 py-2 rotate-[-2deg] shadow-2xl">
                JIHAN
              </div>
              <div className="bg-primary/90 text-background font-headline font-black text-4xl md:text-7xl px-8 py-2 rotate-[2deg] shadow-2xl">
                KRISH
              </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center w-full">
               <div className="inline-block bg-background/40 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-2xl">
                  <p className="font-headline font-black text-xl md:text-3xl tracking-tight text-white uppercase italic">
                    NOVA VISION — <span className="text-primary/80">a team obsessed with visual stories</span>
                  </p>
               </div>
            </div>
          </div>
        </div>

        {/* Feature Icons (Replicating the Flyer Bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          <div className="flex flex-col items-center text-center space-y-4 group">
            <div className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500">
              <Clapperboard className="w-10 h-10" />
            </div>
            <div>
              <p className="text-[10px] font-black tracking-[0.3em] uppercase text-primary/60 mb-1">SERVICE</p>
              <h4 className="font-headline font-black text-xl tracking-tighter uppercase">AI PROMO VIDEOS</h4>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 group">
            <div className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500">
              <Video className="w-10 h-10" />
            </div>
            <div>
              <p className="text-[10px] font-black tracking-[0.3em] uppercase text-primary/60 mb-1">EXPERTISE</p>
              <h4 className="font-headline font-black text-xl tracking-tighter uppercase">VIDEO EDITING</h4>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 group">
            <div className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500">
              <Laptop className="w-10 h-10" />
            </div>
            <div>
              <p className="text-[10px] font-black tracking-[0.3em] uppercase text-primary/60 mb-1">CREATION</p>
              <h4 className="font-headline font-black text-xl tracking-tighter uppercase">CONTENT CREATION</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
