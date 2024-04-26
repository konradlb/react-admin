import "./App.module.css";
import { Admin, Resource } from "react-admin";
import { dataProvider } from "./helpers/dataProvider";
import UserList from "./components/users/UserList";
import UserEdit from "./components/users/UserEdit";
import UserShow from "./components/users/UserShow";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} edit={UserEdit} show={UserShow} />
    </Admin>
  );
}

export default App;
