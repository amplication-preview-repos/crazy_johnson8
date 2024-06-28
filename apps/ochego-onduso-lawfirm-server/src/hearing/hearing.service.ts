import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HearingServiceBase } from "./base/hearing.service.base";

@Injectable()
export class HearingService extends HearingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
