import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import { appRouter } from "../prisma/trpc/routers/index";
import { createContext } from "./context";
import cors from "cors";

const PORT = 3001;

const app = express();
app.use(cors());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);
app.get("/", (req, res) => res.send("Express + Prisma + tRPC + tRPC Shield"));

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`);
});

export type AppRouter = typeof appRouter;
