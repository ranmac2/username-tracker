import React from "react";
import "./ErrorModal.css";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className="backdrop">
        <Card className="modal">
          <header className="header">
            <h2>{props.title}</h2>
          </header>
          <div className="content">
            <p>{props.message}</p>
          </div>
          <footer className="actions">
            <Button>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
