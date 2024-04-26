import {
  Show,
  SimpleShowLayout,
  TextField,
  useRecordContext,
} from "react-admin";

const UserShow = () => {
  const PageTitle = () => {
    const record = useRecordContext();
    const name = record?.name ? record.name : "";
    return <>User: {name}</>;
  };

  return (
    <Show title={<PageTitle />}>
      <SimpleShowLayout>
        <TextField source="name" />
        <TextField source="username" />
        <TextField source="email" />
        <TextField source="phone" />
        <TextField source="address.city" />
        <TextField source="address.street" />
        <TextField source="address.suite" />
        <TextField source="address.zipcode" />
        <TextField source="company.name" />
        <TextField source="website" />
      </SimpleShowLayout>
    </Show>
  );
};

export default UserShow;
