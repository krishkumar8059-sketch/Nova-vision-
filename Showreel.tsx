
"use client";

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Play } from 'lucide-react';

export function Showreel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrolled = window.scrollY;
      const items = containerRef.current.querySelectorAll('.parallax-item');
      items.forEach((item: any, index: number) => {
        const speed = (index + 1) * 0.05;
        item.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryItems = [
    { ...PlaceHolderImages[1], category: "Commercial" },
    { ...PlaceHolderImages[2], category: "Music Video" },
    { ...PlaceHolderImages[3], category: "Motion Graphics" },
  ];

  return (
    <section className="py-24 px-6 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl font-headline font-bold">Cinematic <span className="text-primary">Showreel</span></h3>
            <p className="text-muted-foreground max-w-md">A glimpse into our visual storytelling and digital craftsmanship.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors">
            View All Projects <Play className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <div key={item.id} className="parallax-item group relative aspect-[4/5] overflow-hidden rounded-2xl glass-card">
              <Image 
                src={item.imageUrl}
                alt={item.description}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                data-ai-hint={item.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform">
                <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">{item.category}</p>
                <h4 className="text-xl font-headline font-semibold mb-4">{item.description}</h4>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm group-hover:bg-primary group-hover:text-background transition-all">
                  <Play className="w-5 h-5 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
