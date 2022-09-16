import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const OrderSumOrderByAggregateInputObjectSchema = z.object({
  id: SortOrderSchema?.optional(),
  numberOfPrints: SortOrderSchema?.optional(),
});
