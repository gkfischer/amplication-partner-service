import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { Partner2Service } from "./partner2.service";
import { CreatePartnerInput } from "./CreatePartnerInput";
import { CreatePartnerOutput } from "./CreatePartnerOutput";

@swagger.ApiTags("partner2s")
@common.Controller("partner2s")
export class Partner2Controller {
  constructor(protected readonly service: Partner2Service) {}

  @common.Post("/create")
  @swagger.ApiOkResponse({
    type: CreatePartnerOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Create(
    @common.Body()
    body: CreatePartnerInput
  ): Promise<CreatePartnerOutput> {
        return this.service.Create(body);
      }
}
