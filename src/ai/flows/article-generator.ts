'use server';

/**
 * @fileOverview A powerful AI flow for generating high-quality, SEO-optimized articles on any topic.
 *
 * - generateArticle - A function that creates an article based on detailed specifications.
 * - ArticleGeneratorInput - The input type for the generateArticle function.
 * - ArticleGeneratorOutput - The return type for the generateArticle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

// This defines the inputs for our "Master Prompt"
export const ArticleGeneratorInputSchema = z.object({
  topic: z.string().describe('The main subject or theme of the article.'),
  primaryKeyword: z.string().describe('The main SEO keyword to target.'),
  secondaryKeywords: z.array(z.string()).describe('A list of related LSI or cluster keywords to include naturally.'),
  targetAudience: z.string().describe('A description of the ideal reader (e.g., "small business owners", "beginner photographers").'),
  toneOfVoice: z.string().describe('The desired writing style (e.g., "Professional and authoritative", "Friendly and casual", "Witty and engaging").'),
  callToAction: z.string().optional().describe('A specific action the reader should take after reading, which will be woven into the conclusion.'),
});
export type ArticleGeneratorInput = z.infer<typeof ArticleGeneratorInputSchema>;

// This defines the structured output we want from the AI
export const ArticleGeneratorOutputSchema = z.object({
  suggestedTitle: z.string().describe('A catchy, SEO-friendly title for the article that includes the primary keyword.'),
  articleBody: z.string().describe('The full content of the article in Markdown format. It must be well-structured with headings (H2, H3), lists, and bold text for emphasis. The keywords should be integrated naturally.'),
  metaDescription: z.string().describe('A concise meta description (max 155 characters) for search engine results, including the primary keyword.'),
});
export type ArticleGeneratorOutput = z.infer<typeof ArticleGeneratorOutputSchema>;

// The exported function that will be called from the application
export async function generateArticle(input: ArticleGeneratorInput): Promise<ArticleGeneratorOutput> {
  return articleGeneratorFlow(input);
}

// The "Master Prompt" itself
const articleGeneratorPrompt = ai.definePrompt({
  name: 'articleGeneratorPrompt',
  input: {schema: ArticleGeneratorInputSchema},
  output: {schema: ArticleGeneratorOutputSchema},
  prompt: `You are an expert SEO Content Strategist and Copywriter. Your task is to write a comprehensive, engaging, and well-structured article based on the user's specifications.

**Article Specifications:**
- **Topic:** {{{topic}}}
- **Primary Keyword:** {{{primaryKeyword}}}
- **Secondary Keywords:** {{#each secondaryKeywords}}- {{{this}}}{{/each}}
- **Target Audience:** {{{targetAudience}}}
- **Tone of Voice:** {{{toneOfVoice}}}
{{#if callToAction}}- **Call to Action:** {{{callToAction}}}{{/if}}

**Instructions:**
1.  **Title:** Create a compelling, SEO-optimized title that naturally incorporates the "Primary Keyword".
2.  **Meta Description:** Write a meta description under 155 characters that summarizes the article and includes the "Primary Keyword".
3.  **Article Body:**
    - Write the article in clear, engaging language, adopting the specified "Tone of Voice".
    - Structure the content logically using Markdown. Use H2 tags for main sections and H3 tags for sub-sections.
    - Naturally weave the "Primary Keyword" into the introduction, a few headings, and the conclusion.
    - Sprinkle the "Secondary Keywords" throughout the text where they fit naturally. Do not force them.
    - Use bullet points or numbered lists to break up text and make it easy to scan.
    - Bold key phrases for emphasis.
    - Ensure the content directly addresses the needs and interests of the "Target Audience".
4.  **Conclusion:** End with a strong concluding paragraph that summarizes the key points. If a "Call to Action" is provided, integrate it seamlessly into the conclusion.

Produce the final output in the required JSON format.
`,
});

// The Genkit flow that orchestrates the process
const articleGeneratorFlow = ai.defineFlow(
  {
    name: 'articleGeneratorFlow',
    inputSchema: ArticleGeneratorInputSchema,
    outputSchema: ArticleGeneratorOutputSchema,
  },
  async (input) => {
    const {output} = await articleGeneratorPrompt(input);
    return output!;
  }
);
