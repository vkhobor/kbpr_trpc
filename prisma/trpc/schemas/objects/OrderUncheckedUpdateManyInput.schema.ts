import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';

export const OrderUncheckedUpdateManyInputObjectSchema = z.object({
  id: z
    .union([z.number(), IntFieldUpdateOperationsInputObjectSchema])
    ?.optional(),
  createdAt: z
    .union([z.date(), DateTimeFieldUpdateOperationsInputObjectSchema])
    ?.optional(),
  name: z
    .union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
    ?.optional(),
  email: z
    .union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
    ?.optional(),
  group: z
    .union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
    ?.optional(),
  simonyi: z
    .union([z.boolean(), BoolFieldUpdateOperationsInputObjectSchema])
    ?.optional(),
  link: z
    .union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
    ?.optional(),
  numberOfPrints: z
    .union([z.number(), IntFieldUpdateOperationsInputObjectSchema])
    ?.optional(),
  paperSize: z
    .union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
    ?.optional(),
  paperNote: z
    .union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
    ?.optional(),
  sticker: z
    .union([z.boolean(), BoolFieldUpdateOperationsInputObjectSchema])
    ?.optional(),
  laminate: z
    .union([z.boolean(), BoolFieldUpdateOperationsInputObjectSchema])
    ?.optional(),
  comment: z
    .union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
    ?.optional(),
});
