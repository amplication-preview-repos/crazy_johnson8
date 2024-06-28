import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HearingService } from "./hearing.service";
import { HearingControllerBase } from "./base/hearing.controller.base";

@swagger.ApiTags("hearings")
@common.Controller("hearings")
export class HearingController extends HearingControllerBase {
  constructor(protected readonly service: HearingService) {
    super(service);
  }
}
