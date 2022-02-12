import React, { useState } from "react";

import "./App.css";
import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UserList/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUsernames) => {
      return [
        ...prevUsernames,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };

  // const deleteItemHandler = (userId) => {
  //   setUsernames((prevUsernames) => {
  //     const updatedUsernames = prevUsernames.filter(
  //       (user) => user.id !== userId
  //     );
  //     return updatedUsernames;
  //   });
  // };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
