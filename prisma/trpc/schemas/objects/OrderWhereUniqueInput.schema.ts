import { z } from 'zod';

export const OrderWhereUniqueInputObjectSchema = z.object({
  id: z.number()?.optional(),
});
