/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsBoolean,
} from "class-validator";
import { PartnerUpdateManyWithoutPartnersInput } from "./PartnerUpdateManyWithoutPartnersInput";
import { Type } from "class-transformer";
import { PartnerWhereUniqueInput } from "./PartnerWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class PartnerUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: () => PartnerUpdateManyWithoutPartnersInput,
  })
  @ValidateNested()
  @Type(() => PartnerUpdateManyWithoutPartnersInput)
  @IsOptional()
  @Field(() => PartnerUpdateManyWithoutPartnersInput, {
    nullable: true,
  })
  children?: PartnerUpdateManyWithoutPartnersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PartnerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PartnerWhereUniqueInput)
  @IsOptional()
  @Field(() => PartnerWhereUniqueInput, {
    nullable: true,
  })
  parent?: PartnerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  website?: string | null;
}

export { PartnerUpdateInput as PartnerUpdateInput };
