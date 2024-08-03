import { User } from "../user/User";

export type Partner = {
  address: string | null;
  children?: Array<Partner>;
  createdAt: Date;
  email: string | null;
  id: string;
  isActive: boolean | null;
  name: string | null;
  parent?: Partner | null;
  phone: string | null;
  updatedAt: Date;
  user?: User | null;
  website: string | null;
};
