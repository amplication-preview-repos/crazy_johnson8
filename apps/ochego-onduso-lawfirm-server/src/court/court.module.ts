import { Module } from "@nestjs/common";
import { CourtModuleBase } from "./base/court.module.base";
import { CourtService } from "./court.service";
import { CourtController } from "./court.controller";
import { CourtResolver } from "./court.resolver";

@Module({
  imports: [CourtModuleBase],
  controllers: [CourtController],
  providers: [CourtService, CourtResolver],
  exports: [CourtService],
})
export class CourtModule {}
