import { z } from 'zod';
import { OrderWhereUniqueInputObjectSchema } from './objects/OrderWhereUniqueInput.schema';
import { OrderCreateInputObjectSchema } from './objects/OrderCreateInput.schema';
import { OrderUpdateInputObjectSchema } from './objects/OrderUpdateInput.schema';

export const OrderUpsertSchema = z.object({
  where: OrderWhereUniqueInputObjectSchema,
  create: OrderCreateInputObjectSchema,
  update: OrderUpdateInputObjectSchema,
});
