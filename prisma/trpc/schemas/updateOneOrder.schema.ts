import { z } from 'zod';
import { OrderUpdateInputObjectSchema } from './objects/OrderUpdateInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './objects/OrderWhereUniqueInput.schema';

export const OrderUpdateOneSchema = z.object({
  data: OrderUpdateInputObjectSchema,
  where: OrderWhereUniqueInputObjectSchema,
});
