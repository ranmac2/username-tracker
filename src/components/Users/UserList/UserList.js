import React from "react";

import User from "../User/User";
import "./UserList.css";

const UserList = (props) => {
  return (
    <ul className="user-list">
      {props.items.map((name) => (
        <User key={name.id} id={name.id} onDelete={props.onDeleteItem}>
          {name.text}
        </User>
      ))}
    </ul>
  );
};

export default UserList;
