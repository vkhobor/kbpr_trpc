import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OrderCountOrderByAggregateInputObjectSchema } from './OrderCountOrderByAggregateInput.schema';
import { OrderAvgOrderByAggregateInputObjectSchema } from './OrderAvgOrderByAggregateInput.schema';
import { OrderMaxOrderByAggregateInputObjectSchema } from './OrderMaxOrderByAggregateInput.schema';
import { OrderMinOrderByAggregateInputObjectSchema } from './OrderMinOrderByAggregateInput.schema';
import { OrderSumOrderByAggregateInputObjectSchema } from './OrderSumOrderByAggregateInput.schema';

export const OrderOrderByWithAggregationInputObjectSchema = z.object({
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
  _count: OrderCountOrderByAggregateInputObjectSchema?.optional(),
  _avg: OrderAvgOrderByAggregateInputObjectSchema?.optional(),
  _max: OrderMaxOrderByAggregateInputObjectSchema?.optional(),
  _min: OrderMinOrderByAggregateInputObjectSchema?.optional(),
  _sum: OrderSumOrderByAggregateInputObjectSchema?.optional(),
});
