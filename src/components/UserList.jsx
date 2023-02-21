import axios from "axios";
import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => setUsers(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>
            {user.first_name} {user.last_name}
          </p>
<<<<<<< HEAD
          <img src={user.avatar} alt="User Avatar 1" />
=======
          <img src={user.avatar} alt="User Avatar 2" />
>>>>>>> 7eecb72f1478421aff00c0b9f38a4b3377f65fcc
        </div>
      ))}
    </div>
  );
};

export default UserList;
