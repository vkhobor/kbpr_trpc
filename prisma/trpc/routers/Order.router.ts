import { createRouter } from "./helpers/createRouter";

import { OrderFindUniqueSchema } from "../schemas/findUniqueOrder.schema";
import { OrderFindFirstSchema } from "../schemas/findFirstOrder.schema";
import { OrderFindManySchema } from "../schemas/findManyOrder.schema";
import { OrderCreateSchema } from "../schemas/createOneOrder.schema";
import { OrderDeleteOneSchema } from "../schemas/deleteOneOrder.schema";
import { OrderUpdateOneSchema } from "../schemas/updateOneOrder.schema";
import { OrderDeleteManySchema } from "../schemas/deleteManyOrder.schema";
import { OrderUpdateManySchema } from "../schemas/updateManyOrder.schema";
import { OrderUpsertSchema } from "../schemas/upsertOneOrder.schema";
import { OrderAggregateSchema } from "../schemas/aggregateOrder.schema";
import { OrderGroupBySchema } from "../schemas/groupByOrder.schema";

export const ordersRouter = createRouter()

  .query("findUniqueOrder", {
    input: OrderFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueOrder = await ctx.prisma.order.findUnique({ where: input.where });
      return findUniqueOrder;
    },
  })

  .query("findFirstOrder", {
    input: OrderFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstOrder = await ctx.prisma.order.findFirst(input);
      return findFirstOrder;
    },
  })

  .query("findManyOrder", {
    input: OrderFindManySchema,
    async resolve({ ctx, input }) {
      const findManyOrder = await ctx.prisma.order.findMany(input);
      return findManyOrder;
    },
  })

  .mutation("createOneOrder", {
    input: OrderCreateSchema,
    async resolve({ ctx, input }) {
      const createOneOrder = await ctx.prisma.order.create({ data: input.data });
      return createOneOrder;
    },
  })

  .mutation("deleteOneOrder", {
    input: OrderDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneOrder = await ctx.prisma.order.delete({ where: input.where });
      return deleteOneOrder;
    },
  })

  .mutation("updateOneOrder", {
    input: OrderUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneOrder = await ctx.prisma.order.update({ where: input.where, data: input.data });
      return updateOneOrder;
    },
  })

  .mutation("deleteManyOrder", {
    input: OrderDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyOrder = await ctx.prisma.order.deleteMany(input);
      return deleteManyOrder;
    },
  })

  .mutation("updateManyOrder", {
    input: OrderUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyOrder = await ctx.prisma.order.updateMany(input);
      return updateManyOrder;
    },
  })

  .mutation("upsertOneOrder", {
    input: OrderUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneOrder = await ctx.prisma.order.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneOrder;
    },
  })

  .query("aggregateOrder", {
    input: OrderAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateOrder = await ctx.prisma.order.aggregate(input);
      return aggregateOrder;
    },
  })

  .query("groupByOrder", {
    input: OrderGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByOrder = await ctx.prisma.order.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByOrder;
    },
  })

