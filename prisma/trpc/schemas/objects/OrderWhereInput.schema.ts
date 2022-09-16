import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';

///@ts-ignore
export const OrderWhereInputObjectSchema = z.object({
  id: z.union([IntFilterObjectSchema, z.number()])?.optional(),
  createdAt: z.union([DateTimeFilterObjectSchema, z.date()])?.optional(),
  name: z.union([StringFilterObjectSchema, z.string()])?.optional(),
  email: z.union([StringFilterObjectSchema, z.string()])?.optional(),
  group: z.union([StringFilterObjectSchema, z.string()])?.optional(),
  simonyi: z.union([BoolFilterObjectSchema, z.boolean()])?.optional(),
  link: z.union([StringFilterObjectSchema, z.string()])?.optional(),
  numberOfPrints: z.union([IntFilterObjectSchema, z.number()])?.optional(),
  paperSize: z.union([StringFilterObjectSchema, z.string()])?.optional(),
  paperNote: z.union([StringFilterObjectSchema, z.string()])?.optional(),
  sticker: z.union([BoolFilterObjectSchema, z.boolean()])?.optional(),
  laminate: z.union([BoolFilterObjectSchema, z.boolean()])?.optional(),
  comment: z.union([StringFilterObjectSchema, z.string()])?.optional(),
});
