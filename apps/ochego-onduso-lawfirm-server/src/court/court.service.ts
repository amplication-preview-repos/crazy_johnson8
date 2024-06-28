import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CourtServiceBase } from "./base/court.service.base";

@Injectable()
export class CourtService extends CourtServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
