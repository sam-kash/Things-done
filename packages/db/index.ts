//console.log("Hello via Bun!");

import {PrismaClient} from "@prisma/client"
//import { Prisma } from "./generated/prisma/browser"

export const prismaClient = new PrismaClient();