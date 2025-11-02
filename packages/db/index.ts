//console.log("Hello via Bun!");

import {PrismaClient} from "./generated/prisma/client"
//import { Prisma } from "./generated/prisma/browser"

export const prismaClient = new PrismaClient();