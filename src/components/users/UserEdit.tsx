import { Edit, SimpleForm, TextInput, useRecordContext } from "react-admin";

const UserList = () => {
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
        <TextInput source="email" />
        <TextInput source="phone" />
        <TextInput source="address.city" />
        <TextInput source="address.street" />
        <TextInput source="address.suite" />
        <TextInput source="address.zipcode" />
        <TextInput source="company.name" />
        <TextInput source="website" />
      </SimpleForm>
    </Edit>
  );
};

export default UserList;
