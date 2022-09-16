import { createProtectedRouter } from "./helpers/createRouter";
import { usersRouter } from "./User.router";
import { ordersRouter } from "./Order.router";

export const appRouter = createProtectedRouter()

  .merge('user.', usersRouter)

  .merge('order.', ordersRouter)
