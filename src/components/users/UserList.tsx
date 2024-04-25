import {
  List,
  Datagrid,
  TextField,
  EmailField,
  TopToolbar,
  CreateButton,
  ExportButton,
  SelectColumnsButton,
} from "react-admin";

const UserList = () => {
  return (
    <List
      actions={
        <TopToolbar>
          <SelectColumnsButton />
          <CreateButton />
          <ExportButton />
        </TopToolbar>
      }
    >
      <Datagrid
        rowClick="show"
        expand={
          <>
            Address: <TextField source="address.city" />,{" "}
            <TextField source="address.street" />{" "}
            <TextField source="address.suite" />, zipcode:{" "}
            <TextField source="address.zipcode" />
          </>
        }
      >
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="phone" />
        <TextField source="company.name" />
        <TextField source="website" />
      </Datagrid>
    </List>
  );
};

export default UserList;
