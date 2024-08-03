import { PartnerUpdateManyWithoutPartnersInput } from "./PartnerUpdateManyWithoutPartnersInput";
import { PartnerWhereUniqueInput } from "./PartnerWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PartnerUpdateInput = {
  address?: string | null;
  children?: PartnerUpdateManyWithoutPartnersInput;
  email?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  parent?: PartnerWhereUniqueInput | null;
  phone?: string | null;
  user?: UserWhereUniqueInput | null;
  website?: string | null;
};
