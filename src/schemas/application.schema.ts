import { TypeOf, z } from "zod";

export const applicationSchema = z.object({
   id: z.number().positive().int(),
   name: z.string().min(1).max(100),
   email: z.string().min(1).max(100).email(),
   linkedin: z.string().min(1).max(150),
   opportunityId: z.number().positive().int()
})
export const applicationCreateSchema = applicationSchema.omit({id: true, opportunityId: true})

export type TApplication = z.infer<typeof applicationSchema>
export type TApplicationCreate = z.infer<typeof applicationCreateSchema>