import AddUser from "./components/AddUser";
import DeleteUser from "./components/DeleteUser";
import UpdateUser from "./components/UpdateUser";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <UserList />
      <AddUser />
      <UpdateUser />
      <DeleteUser />
    </div>
  );
}

export default App;
