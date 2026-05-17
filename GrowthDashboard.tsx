"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Users, Share2, Eye, Award } from 'lucide-react';

export function GrowthDashboard() {
  const packages = [
    { name: "Viral Ignite", delivery: "7 Days", progress: 85, metric: "Reach Target", icon: Eye },
    { name: "Brand Authority", delivery: "14 Days", progress: 60, metric: "Trust focus", icon: Award },
    { name: "Growth Engine", delivery: "21 Days", progress: 40, metric: "ROI Focus", icon: TrendingUp },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="space-y-6 text-center md:text-left max-w-2xl">
            <p className="text-primary text-xs font-black tracking-[0.4em] uppercase">PERFORMANCE TRACKING</p>
            <h2 className="text-4xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-none">
              METRICS THAT <br /><span className="text-primary">MATTER</span>
            </h2>
            <p className="text-muted-foreground text-lg font-medium leading-relaxed">
              Real-time monitoring of your digital evolution. We don't just create; we analyze and optimize for peaks.
            </p>
          </div>
          <div className="flex gap-6 w-full md:w-auto">
            <div className="flex-1 md:w-36 p-8 rounded-3xl glass-card flex flex-col items-center justify-center text-center">
              <Users className="text-primary w-6 h-6 mb-4" />
              <span className="text-3xl font-black tracking-tighter">12.4k</span>
              <span className="text-[10px] text-primary/50 font-black uppercase tracking-[0.2em] mt-1">Growth</span>
            </div>
            <div className="flex-1 md:w-36 p-8 rounded-3xl glass-card flex flex-col items-center justify-center text-center">
              <Share2 className="text-primary w-6 h-6 mb-4" />
              <span className="text-3xl font-black tracking-tighter">4.2%</span>
              <span className="text-[10px] text-primary/50 font-black uppercase tracking-[0.2em] mt-1">CTR</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <Card key={pkg.name} className="glass-card border-none overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                <CardHeader className="p-10 pb-6">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black text-primary border border-primary/30 px-4 py-1.5 rounded-full uppercase tracking-widest">{pkg.metric}</span>
                  </div>
                  <CardTitle className="font-headline font-black text-2xl tracking-tight">{pkg.name}</CardTitle>
                  <CardDescription className="font-medium pt-1">Estimated delivery: {pkg.delivery}</CardDescription>
                </CardHeader>
                <CardContent className="px-10 pb-10 space-y-8">
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                      <span className="text-muted-foreground">Production Stage</span>
                      <span className="text-primary">{pkg.progress}%</span>
                    </div>
                    <Progress value={pkg.progress} className="h-1.5 bg-white/5" />
                  </div>
                  <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/5">
                    <div>
                      <p className="text-[10px] uppercase font-black text-primary/40 tracking-widest mb-1">Status</p>
                      <p className="text-sm font-bold text-white uppercase tracking-tighter">Active</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase font-black text-primary/40 tracking-widest mb-1">Priority</p>
                      <p className="text-sm font-bold text-primary uppercase tracking-tighter">Elite</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
