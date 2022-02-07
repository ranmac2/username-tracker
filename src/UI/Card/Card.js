import React from "react";
import "./Card.css";
import AddUser from "../../components/Users/UserInput/AddUser";

const Card = () => {
  return (
    <div>
      <div className="card">
        <AddUser />
      </div>
      <div className="card"></div>
    </div>
  );
};

export default Card;
