'use server';
/**
 * @fileOverview An AI agent for generating video storyboard and script suggestions based on campaign goals.
 *
 * - aiPromoStrategistSuggestion - A function that generates storyboard and video script suggestions.
 * - AiPromoStrategistSuggestionInput - The input type for the aiPromoStrategistSuggestion function.
 * - AiPromoStrategistSuggestionOutput - The return type for the aiPromoStrategistSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiPromoStrategistSuggestionInputSchema = z.object({
  campaignGoal: z.string().describe('A detailed description of the campaign\'s objective.'),
  targetAudience: z.string().describe('Description of the target audience.'),
  keyMessage: z.string().describe('The main message to convey.'),
  videoLength: z.string().describe('Desired length of the video (e.g., "30 seconds", "1 minute").'),
  tone: z.string().describe('The desired tone of the video (e.g., "energetic", "professional", "humorous").'),
});
export type AiPromoStrategistSuggestionInput = z.infer<typeof AiPromoStrategistSuggestionInputSchema>;

const AiPromoStrategistSuggestionOutputSchema = z.object({
  storyboard: z.string().describe('A text-based description of the video\'s storyboard, scene by scene.'),
  videoScript: z.string().describe('The full video script, including dialogue, narration, and visual cues.'),
});
export type AiPromoStrategistSuggestionOutput = z.infer<typeof AiPromoStrategistSuggestionOutputSchema>;

export async function aiPromoStrategistSuggestion(
  input: AiPromoStrategistSuggestionInput
): Promise<AiPromoStrategistSuggestionOutput> {
  return aiPromoStrategistSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPromoStrategistSuggestionPrompt',
  input: {schema: AiPromoStrategistSuggestionInputSchema},
  output: {schema: AiPromoStrategistSuggestionOutputSchema},
  prompt: `You are an expert AI promotional strategist specializing in video content creation.

Generate a detailed storyboard and a comprehensive video script based on the following campaign details:

Campaign Goal: {{{campaignGoal}}}
Target Audience: {{{targetAudience}}}
Key Message: {{{keyMessage}}}
Desired Video Length: {{{videoLength}}}
Desired Tone: {{{tone}}}

The storyboard should describe each scene visually, and the video script should include dialogue/narration and specific visual cues for each scene. Ensure the output is directly usable for video production.`,
});

const aiPromoStrategistSuggestionFlow = ai.defineFlow(
  {
    name: 'aiPromoStrategistSuggestionFlow',
    inputSchema: AiPromoStrategistSuggestionInputSchema,
    outputSchema: AiPromoStrategistSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
