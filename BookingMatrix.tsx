"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, Sparkles, Video, Image as ImageIcon, Rocket, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BookingMatrix() {
  const tiers = [
    {
      name: "Starter Plan",
      price: "₹2,000",
      description: "Foundational digital presence",
      features: ["1 Posting Template Daily", "High-End Customization", "4K Resolution Output", "Basic Brand Strategy"],
      recommended: false,
      icon: ImageIcon
    },
    {
      name: "Weekly Demo",
      price: "₹400",
      description: "Quick visual impacts",
      features: ["1 Short Demo Weekly", "Motion Graphics", "Custom Sound Design", "Fast 24h Delivery"],
      recommended: false,
      icon: Video
    },
    {
      name: "Growth Plan",
      price: "₹3,000",
      description: "Aggressive social scaling",
      features: ["Professional Reel Editing", "Daily Design Templates", "Viral Engagement Strategy", "Priority Content Support"],
      recommended: true,
      icon: Rocket
    },
    {
      name: "Professional",
      price: "₹7,000",
      description: "Full-scale content machine",
      features: ["3 Premium AI Videos Weekly", "OR Daily Posting + Reels", "Dedicated Content Producer", "Unlimited Creative Revisions"],
      recommended: false,
      icon: Sparkles
    }
  ];

  const handleStartNow = () => {
    window.location.href = 'tel:+919115574558';
  };

  return (
    <section className="py-32 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <p className="text-primary text-xs font-black tracking-[0.4em] uppercase">INVESTMENT</p>
          <h2 className="text-4xl md:text-7xl font-headline font-black uppercase tracking-tighter">
            SCALING <span className="text-primary">SOLUTIONS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
            Transparent pricing for elite creators. Choose the engine for your brand's growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <Card key={tier.name} className={cn(
                "glass-card border-none transition-all duration-500 hover:translate-y-[-10px] relative flex flex-col group",
                tier.recommended && "ring-1 ring-primary/40 shadow-[0_20px_60px_-10px_rgba(212,175,55,0.15)]"
              )}>
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background text-[10px] font-black px-6 py-1.5 rounded-full tracking-[0.2em] uppercase shadow-xl z-10">
                    MOST RECOMMENDED
                  </div>
                )}
                <CardHeader className="p-10 pb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="font-headline text-2xl font-black tracking-tight">{tier.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground font-medium pt-1">{tier.description}</CardDescription>
                  <div className="mt-8 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{tier.price}</span>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">/mo</span>
                  </div>
                </CardHeader>
                <CardContent className="px-10 space-y-6 flex-grow">
                  <div className="text-[10px] uppercase font-black text-primary tracking-[0.2em]">INCLUDED:</div>
                  <ul className="space-y-4">
                    {tier.features.map(f => (
                      <li key={f} className={cn(
                        "flex items-start gap-3 text-sm font-medium",
                        f === "OR" ? "text-primary/30 font-black py-2 justify-center border-y border-white/5" : "text-muted-foreground"
                      )}>
                        {f !== "OR" && <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />} 
                        <span className={f === "OR" ? "text-xs tracking-[0.3em]" : ""}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-10 pt-6">
                  <Button 
                    onClick={handleStartNow}
                    variant={tier.recommended ? "default" : "outline"} 
                    className={cn(
                      "w-full font-black h-14 rounded-2xl tracking-widest uppercase text-xs transition-all duration-300",
                      tier.recommended ? "bg-primary hover:bg-accent text-background shadow-[0_10px_20px_rgba(212,175,55,0.2)]" : "border-white/10 hover:border-primary text-white hover:bg-primary/5"
                    )}
                  >
                    START NOW <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
