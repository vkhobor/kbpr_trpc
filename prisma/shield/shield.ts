import { shield, rule, deny, allow, and, or } from "trpc-shield";

// Rules

const isAuthenticated = rule()(async (ctx, type, path, rawInput) => {
  return ctx.user !== null;
});

const isAdmin = rule()(async (ctx, type, path, rawInput) => {
  return ctx.user.role === "admin";
});

const isEditor = rule()(async (ctx, type, path, rawInput) => {
  return ctx.user.role === "editor";
});

export const permissions = shield({
  query: {
    aggregateOrder: and(isAuthenticated, or(isAdmin, isEditor)),
    aggregateUser: and(isAuthenticated, isAdmin),
    findFirstOrder: and(isAuthenticated, or(isAdmin, isEditor)),
    findFirstUser: and(isAuthenticated, isAdmin),
    findManyOrder: and(isAuthenticated, or(isAdmin, isEditor)),
    findManyUser: and(isAuthenticated, isAdmin),
    findUniqueOrder: and(isAuthenticated, or(isAdmin, isEditor)),
    findUniqueUser: and(isAuthenticated, isAdmin),
    groupByOrder: and(isAuthenticated, or(isAdmin, isEditor)),
    groupByUser: and(isAuthenticated, isAdmin),
  },
  mutation: {
    createOneOrder: allow,
    createOneUser: and(isAuthenticated, isAdmin),
    deleteManyOrder: deny,
    deleteManyUser: and(isAuthenticated, isAdmin),
    deleteOneOrder: deny,
    deleteOneUser: and(isAuthenticated, isAdmin),
    updateManyOrder: deny,
    updateManyUser: and(isAuthenticated, isAdmin),
    updateOneOrder: and(isAuthenticated, or(isAdmin, isEditor)),
    updateOneUser: and(isAuthenticated, isAdmin),
    upsertOneOrder: deny,
    upsertOneUser: and(isAuthenticated, isAdmin),
  },
});
