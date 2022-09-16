import { z } from 'zod';

export const OrderUncheckedCreateInputObjectSchema = z.object({
  id: z.number()?.optional(),
  createdAt: z.date()?.optional(),
  name: z.string(),
  email: z.string(),
  group: z.string(),
  simonyi: z.boolean(),
  link: z.string(),
  numberOfPrints: z.number(),
  paperSize: z.string(),
  paperNote: z.string(),
  sticker: z.boolean(),
  laminate: z.boolean(),
  comment: z.string(),
});
