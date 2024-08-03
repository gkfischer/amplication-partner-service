import { Injectable } from "@nestjs/common";
import { CreatePartnerInput } from "./CreatePartnerInput";
import { CreatePartnerOutput } from "./CreatePartnerOutput";

@Injectable()
export class Partner2Service {
  constructor() {}
  async Create(args: CreatePartnerInput): Promise<CreatePartnerOutput> {
    throw new Error("Not implemented");
  }
}
