import * as graphql from "@nestjs/graphql";
import { LawyerResolverBase } from "./base/lawyer.resolver.base";
import { Lawyer } from "./base/Lawyer";
import { LawyerService } from "./lawyer.service";

@graphql.Resolver(() => Lawyer)
export class LawyerResolver extends LawyerResolverBase {
  constructor(protected readonly service: LawyerService) {
    super(service);
  }
}
