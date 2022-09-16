import { z } from 'zod';
import { OrderCreateInputObjectSchema } from './objects/OrderCreateInput.schema';

export const OrderCreateSchema = z.object({
  data: OrderCreateInputObjectSchema,
});
