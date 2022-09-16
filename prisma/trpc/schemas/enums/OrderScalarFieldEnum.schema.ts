import { z } from 'zod';

export const OrderScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'name',
  'email',
  'group',
  'simonyi',
  'link',
  'numberOfPrints',
  'paperSize',
  'paperNote',
  'sticker',
  'laminate',
  'comment',
]);
