import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const OrderMinOrderByAggregateInputObjectSchema = z.object({
  id: SortOrderSchema?.optional(),
  createdAt: SortOrderSchema?.optional(),
  name: SortOrderSchema?.optional(),
  email: SortOrderSchema?.optional(),
  group: SortOrderSchema?.optional(),
  simonyi: SortOrderSchema?.optional(),
  link: SortOrderSchema?.optional(),
  numberOfPrints: SortOrderSchema?.optional(),
  paperSize: SortOrderSchema?.optional(),
  paperNote: SortOrderSchema?.optional(),
  sticker: SortOrderSchema?.optional(),
  laminate: SortOrderSchema?.optional(),
  comment: SortOrderSchema?.optional(),
});
