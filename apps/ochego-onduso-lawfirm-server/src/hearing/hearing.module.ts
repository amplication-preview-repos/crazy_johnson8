import { Module } from "@nestjs/common";
import { HearingModuleBase } from "./base/hearing.module.base";
import { HearingService } from "./hearing.service";
import { HearingController } from "./hearing.controller";
import { HearingResolver } from "./hearing.resolver";

@Module({
  imports: [HearingModuleBase],
  controllers: [HearingController],
  providers: [HearingService, HearingResolver],
  exports: [HearingService],
})
export class HearingModule {}
