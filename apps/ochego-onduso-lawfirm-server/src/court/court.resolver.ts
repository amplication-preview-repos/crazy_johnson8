import * as graphql from "@nestjs/graphql";
import { CourtResolverBase } from "./base/court.resolver.base";
import { Court } from "./base/Court";
import { CourtService } from "./court.service";

@graphql.Resolver(() => Court)
export class CourtResolver extends CourtResolverBase {
  constructor(protected readonly service: CourtService) {
    super(service);
  }
}
