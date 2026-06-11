import { PrismaClient } from "@prisma/client";

import PrismaDefault from "./generated/prisma-js/client.js";

const prisma = new PrismaDefault({
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});

export default prisma;

