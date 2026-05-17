
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Sparkles, Loader2, Send, FileText, Layout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { aiPromoStrategistSuggestion, AiPromoStrategistSuggestionOutput } from '@/ai/flows/ai-promo-strategist-suggestion';

const formSchema = z.object({
  campaignGoal: z.string().min(10, "Tell us a bit more about your goal"),
  targetAudience: z.string().min(5, "Who is this for?"),
  keyMessage: z.string().min(5, "What's the core message?"),
  videoLength: z.string().min(1),
  tone: z.string().min(1),
});

export function AIStrategist() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiPromoStrategistSuggestionOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      campaignGoal: "",
      targetAudience: "",
      keyMessage: "",
      videoLength: "30 seconds",
      tone: "energetic",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const response = await aiPromoStrategistSuggestion(values);
      setResult(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-4">
            <Sparkles className="w-4 h-4" /> AI Powered
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">AI Promo <span className="text-primary">Strategist</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Generate studio-grade storyboards and scripts in seconds using our intelligent campaign engine.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Card className="glass-card border-none">
            <CardHeader>
              <CardTitle className="font-headline">Campaign Details</CardTitle>
              <CardDescription>Provide your objectives to let the AI build your vision.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="campaignGoal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Campaign Goal</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g. Launch a premium skincare line with focus on organic ingredients..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="targetAudience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Audience</FormLabel>
                          <FormControl>
                            <Input placeholder="Tech enthusiasts, 25-40" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="keyMessage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Key Message</FormLabel>
                          <FormControl>
                            <Input placeholder="Luxury within reach" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="videoLength"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Video Length</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select length" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="15 seconds">15 Seconds (Shorts)</SelectItem>
                              <SelectItem value="30 seconds">30 Seconds (Social)</SelectItem>
                              <SelectItem value="60 seconds">60 Seconds (Main)</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="tone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tone</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select tone" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="energetic">Energetic</SelectItem>
                              <SelectItem value="professional">Professional</SelectItem>
                              <SelectItem value="humorous">Humorous</SelectItem>
                              <SelectItem value="cinematic">Cinematic</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-accent text-background font-bold h-12" disabled={loading}>
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                    Generate Strategy
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {!result && !loading && (
              <div className="h-full flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-primary/20 rounded-2xl">
                <Send className="w-12 h-12 text-primary/40 mb-4" />
                <h3 className="text-xl font-headline font-semibold text-muted-foreground">Ready to Strategize?</h3>
                <p className="text-muted-foreground text-sm mt-2">Fill out the form to receive your custom storyboard and script.</p>
              </div>
            )}
            
            {loading && (
              <div className="space-y-6">
                <Card className="glass-card animate-pulse border-none">
                  <div className="h-64 bg-primary/5 rounded-xl" />
                </Card>
                <Card className="glass-card animate-pulse border-none">
                  <div className="h-48 bg-primary/5 rounded-xl" />
                </Card>
              </div>
            )}

            {result && (
              <div className="animate-fade-in space-y-6">
                <Card className="glass-card border-none overflow-hidden">
                  <CardHeader className="bg-primary/5 border-b border-primary/10">
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Layout className="w-5 h-5" /> Storyboard Suggestion
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
                      {result.storyboard}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-none overflow-hidden">
                  <CardHeader className="bg-primary/5 border-b border-primary/10">
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <FileText className="w-5 h-5" /> Video Script
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground italic">
                      {result.videoScript}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
