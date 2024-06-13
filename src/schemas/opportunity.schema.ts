import { z } from "zod";

export const opportunitySchema = z.object({
   id: z.number().int().positive(),
   title: z.string().min(1).max(255),
   description: z.string().min(1)
});

export const opportunityCreateSchema = opportunitySchema.omit({ id: true });
export const opportunityUpdateSchema = opportunityCreateSchema.partial();

export type TopportunityCreate = z.infer<typeof opportunityCreateSchema>;
export type TOpportunity = z.infer<typeof opportunitySchema>;
export type TOpportunityUpdate = z.infer<typeof opportunityUpdateSchema>;