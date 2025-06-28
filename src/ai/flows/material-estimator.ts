// MaterialEstimator.ts
'use server';

/**
 * @fileOverview Estimates material requirements and cost for a project space based on dimensions.
 *
 * - estimateMaterial - A function that estimates material requirements and cost.
 * - MaterialEstimatorInput - The input type for the estimateMaterial function.
 * - MaterialEstimatorOutput - The return type for the estimateMaterial function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MaterialEstimatorInputSchema = z.object({
  spaceType: z
    .string()
    .describe(
      'The type of space (e.g., playground, jogging track, mini soccer field)'
    ),
  length: z.number().describe('The length of the project space in meters.'),
  width: z.number().describe('The width of the project space in meters.'),
  depth: z
    .number()
    .describe(
      'The desired depth of the granule material in centimeters. Typical depth for playground is 5-10cm, jogging track is 2-5cm, and mini soccer field is 2-4cm.'
    ),
  granuleColor: z
    .string()
    .describe('The color of the granule material (e.g., green, red, black)'),
  granuleType: z
    .string()
    .describe('The type of granule material (e.g., EPDM, recycled rubber)'),
  costPerCubicMeter: z
    .number()
    .describe('The cost per cubic meter of the granule material in USD'),
});
export type MaterialEstimatorInput = z.infer<typeof MaterialEstimatorInputSchema>;

const MaterialEstimatorOutputSchema = z.object({
  estimatedVolumeCubicMeters: z
    .number()
    .describe('The estimated volume of granule material needed in cubic meters.'),
  estimatedCostUSD: z
    .number()
    .describe('The estimated cost of the granule material in USD.'),
  notes: z
    .string()
    .describe(
      'Any notes or recommendations for optimizing material usage or design.'
    ),
});
export type MaterialEstimatorOutput = z.infer<typeof MaterialEstimatorOutputSchema>;

export async function estimateMaterial(input: MaterialEstimatorInput): Promise<MaterialEstimatorOutput> {
  return materialEstimatorFlow(input);
}

const materialEstimatorPrompt = ai.definePrompt({
  name: 'materialEstimatorPrompt',
  input: {schema: MaterialEstimatorInputSchema},
  output: {schema: MaterialEstimatorOutputSchema},
  prompt: `You are an expert in material estimation for recreational spaces.

  Based on the provided dimensions and material specifications, calculate the estimated volume of granule material needed and the total cost.
  Also, provide notes or recommendations for optimizing material usage or design.

  Space Type: {{spaceType}}
  Length (meters): {{length}}
  Width (meters): {{width}}
  Depth (centimeters): {{depth}}
  Granule Color: {{granuleColor}}
  Granule Type: {{granuleType}}
  Cost per cubic meter (USD): {{costPerCubicMeter}}

  Ensure that the depth provided is in centimeters and convert it to meters before calculating the volume in cubic meters.
  The formula for volume is: Volume (cubic meters) = Length (meters) * Width (meters) * Depth (meters).
  The formula for cost is: Cost (USD) = Volume (cubic meters) * Cost per cubic meter (USD).

  Provide the results in the requested JSON format, including estimatedVolumeCubicMeters, estimatedCostUSD, and notes.
  `,
});

const materialEstimatorFlow = ai.defineFlow(
  {
    name: 'materialEstimatorFlow',
    inputSchema: MaterialEstimatorInputSchema,
    outputSchema: MaterialEstimatorOutputSchema,
  },
  async input => {
    // Convert depth from centimeters to meters
    const depthInMeters = input.depth / 100;

    // Calculate the estimated volume in cubic meters
    const estimatedVolumeCubicMeters = input.length * input.width * depthInMeters;

    // Calculate the estimated cost in USD
    const estimatedCostUSD = estimatedVolumeCubicMeters * input.costPerCubicMeter;

    const {output} = await materialEstimatorPrompt({
      ...input,
      estimatedVolumeCubicMeters,
      estimatedCostUSD,
    });

    // Enrich the output with the calculated values.
    return {
      estimatedVolumeCubicMeters: Number(estimatedVolumeCubicMeters.toFixed(2)),
      estimatedCostUSD: Number(estimatedCostUSD.toFixed(2)),
      notes: output?.notes || 'No specific notes provided.',
    };
  }
);
