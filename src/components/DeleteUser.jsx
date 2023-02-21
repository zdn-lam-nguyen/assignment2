import React,{ useState } from "react";
import axios from "axios";
const DeleteUser = () => {
  const [userId, setUserId] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .delete(`https://reqres.in/api/users/${userId}`)
      .then((response) => console.log(response, 'Success Update'))
      .catch((error) => console.log(error));
  };

<<<<<<< HEAD
  console.log('Duong');
=======
  console.log('Update')
>>>>>>> cab40404487e6e5f357aac6f6fee9fb98cd116ac
  
  return (
    <div>
      <h2>Delete User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input
            type="text"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          />
        </label>
       
        <br />
        <button type="submit">Delete User</button>
      </form>
    </div>
  );
};

export default DeleteUser;
