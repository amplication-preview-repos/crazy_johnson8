import { Module } from "@nestjs/common";
import { LawyerModuleBase } from "./base/lawyer.module.base";
import { LawyerService } from "./lawyer.service";
import { LawyerController } from "./lawyer.controller";
import { LawyerResolver } from "./lawyer.resolver";

@Module({
  imports: [LawyerModuleBase],
  controllers: [LawyerController],
  providers: [LawyerService, LawyerResolver],
  exports: [LawyerService],
})
export class LawyerModule {}
