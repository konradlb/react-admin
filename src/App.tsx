import "./App.module.css";
import { Admin, Resource } from "react-admin";
import { dataProvider } from "./helpers/dataProvider";
import UserList from "./components/users/UserList";
import UserEdit from "./components/users/UserEdit";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} edit={UserEdit} />
    </Admin>
  );
}

export default App;
