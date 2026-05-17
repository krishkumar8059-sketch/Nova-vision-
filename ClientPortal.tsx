"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, ExternalLink, ShieldCheck, Lock } from 'lucide-react';

export function ClientPortal() {
  const activeProjects = [
    { id: "NV-2024-001", name: "Luxe Car Cinematic", status: "Editing", deadline: "Oct 24", urgency: "High" },
    { id: "NV-2024-002", name: "Tech Product Launch", status: "Filming", deadline: "Nov 02", urgency: "Normal" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-background">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-headline font-bold">Interactive <span className="text-primary">Portal</span></h2>
                <p className="text-muted-foreground text-sm">Secure area for our exclusive clients.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-headline text-xl font-bold flex items-center gap-2">
                Active Projects <Badge variant="outline" className="text-primary border-primary/20">2 Total</Badge>
              </h3>
              <div className="grid gap-4">
                {activeProjects.map((project) => (
                  <Card key={project.id} className="glass-card border-none hover:bg-white/5 transition-colors cursor-pointer group">
                    <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="space-y-1">
                        <p className="text-[10px] text-primary font-bold tracking-widest">{project.id}</p>
                        <h4 className="font-headline font-bold text-lg group-hover:text-primary transition-colors">{project.name}</h4>
                        <p className="text-sm text-muted-foreground">Deadline: {project.deadline}</p>
                      </div>
                      <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                        <div className="text-right">
                          <p className="text-[10px] uppercase text-muted-foreground mb-1">Status</p>
                          <Badge className="bg-primary/20 text-primary border-none">{project.status}</Badge>
                        </div>
                        <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="glass-card border-none bg-gradient-to-br from-primary/10 to-transparent">
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" /> Studio Helpline
                </CardTitle>
                <CardDescription>Direct line to your producer for immediate assistance.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-xl bg-background/40 border border-primary/20 text-center">
                  <p className="text-2xl font-headline font-bold tracking-tighter text-primary">+91 91155 74558</p>
                  <p className="text-[10px] text-muted-foreground uppercase mt-1">Available 24/7 for Elite Clients</p>
                </div>
                <Button className="w-full bg-primary hover:bg-accent text-background font-bold">
                  <MessageSquare className="mr-2 h-4 w-4" /> Start Live Chat
                </Button>
              </CardContent>
            </Card>

            <div className="p-6 rounded-2xl glass-card space-y-4">
              <h4 className="font-headline font-bold flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" /> Privacy Promise
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Your footage and brand assets are stored in our encrypted vaults with military-grade security. Only authorized personnel have access to your project files.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
