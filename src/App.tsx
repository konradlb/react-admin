import "./App.module.css";
import { Admin, Resource, ListGuesser } from "react-admin";
import { dataProvider } from "./helpers/dataProvider";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
}

export default App;
