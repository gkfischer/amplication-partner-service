import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PARTNER_TITLE_FIELD } from "./PartnerTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PartnerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="name" source="name" />
        <ReferenceField label="Parent" source="partner.id" reference="Partner">
          <TextField source={PARTNER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="phone" source="phone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="website" source="website" />
        <ReferenceManyField
          reference="Partner"
          target="Children"
          label="Partners"
        >
          <Datagrid rowClick="show">
            <TextField label="address" source="address" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="email" source="email" />
            <TextField label="ID" source="id" />
            <BooleanField label="isActive" source="isActive" />
            <TextField label="name" source="name" />
            <ReferenceField
              label="Parent"
              source="partner.id"
              reference="Partner"
            >
              <TextField source={PARTNER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="phone" source="phone" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="website" source="website" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
