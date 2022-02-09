import React from "react";

import "./User.css";

const User = (props) => {
  return <li className="user-item">{props.children}</li>;
};

export default User;
