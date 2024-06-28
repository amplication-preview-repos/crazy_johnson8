/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Hearing as PrismaHearing } from "@prisma/client";

export class HearingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.HearingCountArgs, "select">): Promise<number> {
    return this.prisma.hearing.count(args);
  }

  async hearings(args: Prisma.HearingFindManyArgs): Promise<PrismaHearing[]> {
    return this.prisma.hearing.findMany(args);
  }
  async hearing(
    args: Prisma.HearingFindUniqueArgs
  ): Promise<PrismaHearing | null> {
    return this.prisma.hearing.findUnique(args);
  }
  async createHearing(args: Prisma.HearingCreateArgs): Promise<PrismaHearing> {
    return this.prisma.hearing.create(args);
  }
  async updateHearing(args: Prisma.HearingUpdateArgs): Promise<PrismaHearing> {
    return this.prisma.hearing.update(args);
  }
  async deleteHearing(args: Prisma.HearingDeleteArgs): Promise<PrismaHearing> {
    return this.prisma.hearing.delete(args);
  }
}