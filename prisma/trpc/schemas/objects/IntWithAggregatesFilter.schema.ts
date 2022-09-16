import { z } from 'zod';
import { NestedIntWithAggregatesFilterObjectSchema } from './NestedIntWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedFloatFilterObjectSchema } from './NestedFloatFilter.schema';

///@ts-ignore
export const IntWithAggregatesFilterObjectSchema = z.object({
  equals: z.number()?.optional(),
  in: z.array(z.number()),
  notIn: z.array(z.number()),
  lt: z.number()?.optional(),
  lte: z.number()?.optional(),
  gt: z.number()?.optional(),
  gte: z.number()?.optional(),
  not: z
    .union([z.number(), NestedIntWithAggregatesFilterObjectSchema])
    ?.optional(),
  _count: NestedIntFilterObjectSchema?.optional(),
  _avg: NestedFloatFilterObjectSchema?.optional(),
  _sum: NestedIntFilterObjectSchema?.optional(),
  _min: NestedIntFilterObjectSchema?.optional(),
  _max: NestedIntFilterObjectSchema?.optional(),
});
