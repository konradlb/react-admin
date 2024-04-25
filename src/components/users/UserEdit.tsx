import { Edit, SimpleForm, TextInput } from "react-admin";

const UserList = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="address.city" />
        <TextInput source="address.street" />
        <TextInput source="address.suite" />
        <TextInput source="address.zipcode" />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="phone" />
        <TextInput source="company.name" />
        <TextInput source="website" />
      </SimpleForm>
    </Edit>
  );
};

export default UserList;
