import * as graphql from "@nestjs/graphql";
import { HearingResolverBase } from "./base/hearing.resolver.base";
import { Hearing } from "./base/Hearing";
import { HearingService } from "./hearing.service";

@graphql.Resolver(() => Hearing)
export class HearingResolver extends HearingResolverBase {
  constructor(protected readonly service: HearingService) {
    super(service);
  }
}
