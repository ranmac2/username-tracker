import React, { useState } from "react";

import Card from "./UI/Card/Card";
import "./App.css";

const App = () => {
  // const [usernames, setUsernames] = useState("");

  // const addUserHandler = (enteredText) => {
  //   setUsernames((prevUsernames) => {
  //     const updatedUsernames = [...prevUsernames];
  //     updatedUsernames.unshift({
  //       text: enteredText,
  //       id: Math.random().toString(),
  //     });
  //     return updatedUsernames;
  //   });
  // };

  // const deleteItemHandler = (userId) => {
  //   setUsernames((prevUsernames) => {
  //     const updatedUsernames = prevUsernames.filter(
  //       (user) => user.id !== userId
  //     );
  //     return updatedUsernames;
  //   });
  // };

  // let content = (
  //   <p style={{ textAlign: "center" }}>No usernames found. Maybe add one?</p>
  // );

  // if (usernames.length > 0) {
  //   content = <UserList items={usernames} onDeleteItem={deleteItemHandler} />;
  // }

  return (
    <div>
      {/* <section id="goal-form">
        <UserInput onAddUser={addUserHandler} />
      </section>
      <section id="goals">
        {content}
      </section> */}
      <Card />
    </div>
  );
};

export default App;
