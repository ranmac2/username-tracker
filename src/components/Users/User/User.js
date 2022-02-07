import React from "react";

import "./User.css";

const User = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="user-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default User;
