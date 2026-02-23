import z from "zod";

export const UserSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
  role: z.string()
})

export type User = z.infer<typeof UserSchema>