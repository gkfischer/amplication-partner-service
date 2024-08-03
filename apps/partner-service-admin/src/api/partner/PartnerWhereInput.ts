import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PartnerListRelationFilter } from "./PartnerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PartnerWhereUniqueInput } from "./PartnerWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PartnerWhereInput = {
  address?: StringNullableFilter;
  children?: PartnerListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  name?: StringNullableFilter;
  parent?: PartnerWhereUniqueInput;
  phone?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  website?: StringNullableFilter;
};
