import * as graphql from "@nestjs/graphql";
import { CreatePartnerInput } from "./CreatePartnerInput";
import { CreatePartnerOutput } from "./CreatePartnerOutput";
import { Partner2Service } from "./partner2.service";

export class Partner2Resolver {
  constructor(protected readonly service: Partner2Service) {}

  @graphql.Mutation(() => CreatePartnerOutput)
  async Create(
    @graphql.Args()
    args: CreatePartnerInput
  ): Promise<CreatePartnerOutput> {
    return this.service.Create(args);
  }
}
