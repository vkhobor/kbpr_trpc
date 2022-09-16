import { z } from 'zod';
import { OrderWhereInputObjectSchema } from './objects/OrderWhereInput.schema';
import { OrderOrderByWithRelationInputObjectSchema } from './objects/OrderOrderByWithRelationInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './objects/OrderWhereUniqueInput.schema';
import { OrderScalarFieldEnumSchema } from './enums/OrderScalarFieldEnum.schema';

export const OrderFindManySchema = z.object({
  where: OrderWhereInputObjectSchema.optional(),
  orderBy: OrderOrderByWithRelationInputObjectSchema.optional(),
  cursor: OrderWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(OrderScalarFieldEnumSchema).optional(),
});
