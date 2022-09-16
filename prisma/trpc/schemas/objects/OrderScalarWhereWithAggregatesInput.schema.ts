import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';

///@ts-ignore
export const OrderScalarWhereWithAggregatesInputObjectSchema = z.object({
  id: z.union([IntWithAggregatesFilterObjectSchema, z.number()])?.optional(),
  createdAt: z
    .union([DateTimeWithAggregatesFilterObjectSchema, z.date()])
    ?.optional(),
  name: z
    .union([StringWithAggregatesFilterObjectSchema, z.string()])
    ?.optional(),
  email: z
    .union([StringWithAggregatesFilterObjectSchema, z.string()])
    ?.optional(),
  group: z
    .union([StringWithAggregatesFilterObjectSchema, z.string()])
    ?.optional(),
  simonyi: z
    .union([BoolWithAggregatesFilterObjectSchema, z.boolean()])
    ?.optional(),
  link: z
    .union([StringWithAggregatesFilterObjectSchema, z.string()])
    ?.optional(),
  numberOfPrints: z
    .union([IntWithAggregatesFilterObjectSchema, z.number()])
    ?.optional(),
  paperSize: z
    .union([StringWithAggregatesFilterObjectSchema, z.string()])
    ?.optional(),
  paperNote: z
    .union([StringWithAggregatesFilterObjectSchema, z.string()])
    ?.optional(),
  sticker: z
    .union([BoolWithAggregatesFilterObjectSchema, z.boolean()])
    ?.optional(),
  laminate: z
    .union([BoolWithAggregatesFilterObjectSchema, z.boolean()])
    ?.optional(),
  comment: z
    .union([StringWithAggregatesFilterObjectSchema, z.string()])
    ?.optional(),
});
