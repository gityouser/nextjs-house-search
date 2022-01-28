import { PrismaClient } from "../prisma";

export interface Context {
  uid: string | null;
  prisma: PrismaClient;
}

export interface AuthorisedClient extends Context {
  uid: string;
}
