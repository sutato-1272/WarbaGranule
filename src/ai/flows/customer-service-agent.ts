'use server';

/**
 * @fileOverview A conversational AI agent for customer service.
 *
 * - answerQuestion - A function that answers customer questions based on business knowledge.
 * - CustomerServiceInput - The input type for the answerQuestion function.
 * - CustomerServiceOutput - The return type for the answerQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CustomerServiceInputSchema = z.object({
  question: z.string().describe('The customer\'s question.'),
});
export type CustomerServiceInput = z.infer<typeof CustomerServiceInputSchema>;

const CustomerServiceOutputSchema = z.object({
  answer: z.string().describe('The helpful and friendly answer to the customer\'s question.'),
});
export type CustomerServiceOutput = z.infer<typeof CustomerServiceOutputSchema>;

export async function answerQuestion(input: CustomerServiceInput): Promise<CustomerServiceOutput> {
  return customerServiceFlow(input);
}

const systemPrompt = `You are a friendly and helpful customer service assistant for "WarnaGranule Solutions", a leading producer and supplier of EPDM and SBR granules in Indonesia.

Your goal is to answer customer questions accurately and concisely based on the information provided below. If a question is outside of your knowledge, politely state that you don't have the information and will connect them to a human representative.

**Business Information:**
- **Company Name:** WarnaGranule Solutions
- **Main Products:**
  1.  **Granule Warna EPDM:** High-quality, weather-resistant granules for playgrounds, jogging tracks, and recreational surfaces. Available in many colors.
  2.  **Granule Hitam SBR:** Durable and cost-effective rubber granules, primarily used as infill for artificial turf in futsal and mini soccer fields.
  3.  **Mesh 20 EPDM:** Fine EPDM powder for industrial use, specifically for tubeless tire sealants.
- **Services:** We sell granule materials and also provide professional installation services for playgrounds and jogging tracks.
- **Contact:** For quotes, orders, or detailed consultation, customers should contact us via WhatsApp at **0852-8321-2205**.
- **Service Area:** We ship our products throughout Indonesia. Installation services are primarily in Jabodetabek but available nationwide for larger projects.
- **Business Hours:** Monday - Saturday, 09:00 - 17:00 WIB.

**Interaction Style:**
- Be friendly, professional, and use clear Bahasa Indonesia.
- Keep answers direct and to the point.
- Always encourage users to contact the WhatsApp number for official price quotes or to finalize an order.

**User's Question:**
{{question}}
`;


const customerServicePrompt = ai.definePrompt({
  name: 'customerServicePrompt',
  input: {schema: CustomerServiceInputSchema},
  output: {schema: CustomerServiceOutputSchema},
  prompt: systemPrompt,
});

const customerServiceFlow = ai.defineFlow(
  {
    name: 'customerServiceFlow',
    inputSchema: CustomerServiceInputSchema,
    outputSchema: CustomerServiceOutputSchema,
  },
  async (input) => {
    const {output} = await customerServicePrompt(input);
    return output!;
  }
);
