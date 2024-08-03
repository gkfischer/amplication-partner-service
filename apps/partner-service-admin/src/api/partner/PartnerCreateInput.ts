import { PartnerCreateNestedManyWithoutPartnersInput } from "./PartnerCreateNestedManyWithoutPartnersInput";
import { PartnerWhereUniqueInput } from "./PartnerWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PartnerCreateInput = {
  address?: string | null;
  children?: PartnerCreateNestedManyWithoutPartnersInput;
  email?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  parent?: PartnerWhereUniqueInput | null;
  phone?: string | null;
  user?: UserWhereUniqueInput | null;
  website?: string | null;
};
