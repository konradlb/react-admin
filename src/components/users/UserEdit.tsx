import { Edit, SimpleForm, TextInput, useRecordContext } from "react-admin";

const UserEdit = () => {
  const PageTitle = () => {
    const record = useRecordContext();
    const name = record?.name ? record.name : "";
    return <>Edit: {name}</>;
  };

  return (
    <Edit title={<PageTitle />}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" type="email" />
        <TextInput source="phone" />
        <TextInput source="address.city" />
        <TextInput source="address.street" />
        <TextInput source="address.suite" />
        <TextInput source="address.zipcode" />
        <TextInput source="address.geo.lat" label="Latitude" />
        <TextInput source="address.geo.lng" label="Longitude" />
        <TextInput source="company.name" />
        <TextInput source="website" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
