import { Partner } from "../partner/Partner";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  partners?: Array<Partner>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
