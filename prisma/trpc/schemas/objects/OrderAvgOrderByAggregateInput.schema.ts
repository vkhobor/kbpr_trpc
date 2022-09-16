import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const OrderAvgOrderByAggregateInputObjectSchema = z.object({
  id: SortOrderSchema?.optional(),
  numberOfPrints: SortOrderSchema?.optional(),
});
