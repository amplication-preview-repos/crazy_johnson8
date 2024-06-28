import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CourtService } from "./court.service";
import { CourtControllerBase } from "./base/court.controller.base";

@swagger.ApiTags("courts")
@common.Controller("courts")
export class CourtController extends CourtControllerBase {
  constructor(protected readonly service: CourtService) {
    super(service);
  }
}
