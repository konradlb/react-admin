import "./App.module.css";
import { Admin, Resource, EditGuesser } from "react-admin";
import { dataProvider } from "./helpers/dataProvider";
import UserList from "./components/users/UserList";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} edit={EditGuesser} />
    </Admin>
  );
}

export default App;
