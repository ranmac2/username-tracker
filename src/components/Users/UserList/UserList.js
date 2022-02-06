import React from "react";

import User from "../User/User";
import "./UserList.css";

const UserList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <User key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          {goal.text}
        </User>
      ))}
    </ul>
  );
};

export default UserList;
