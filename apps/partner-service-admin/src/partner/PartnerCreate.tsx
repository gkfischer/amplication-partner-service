import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PartnerTitle } from "./PartnerTitle";
import { UserTitle } from "../user/UserTitle";

export const PartnerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <ReferenceArrayInput
          source="children"
          reference="Partner"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PartnerTitle} />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="parent.id" reference="Partner" label="Parent">
          <SelectInput optionText={PartnerTitle} />
        </ReferenceInput>
        <TextInput label="phone" source="phone" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="website" source="website" />
      </SimpleForm>
    </Create>
  );
};
