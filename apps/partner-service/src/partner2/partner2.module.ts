import { Module } from "@nestjs/common";
import { Partner2Service } from "./partner2.service";
import { Partner2Controller } from "./partner2.controller";
import { Partner2Resolver } from "./partner2.resolver";

@Module({
  controllers: [Partner2Controller],
  providers: [Partner2Service, Partner2Resolver],
  exports: [Partner2Service],
})
export class Partner2Module {}
