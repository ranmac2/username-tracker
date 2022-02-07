import React, { useState } from "react";

// import Button from "../../../UI/Button/Button";
import "./AddUser.css";

// const UserInput = (props) => {
//   const [enteredValue, setEnteredValue] = useState("");
//   const [isValid, setIsValid] = useState(true);

//   const userInputChangeHandler = (event) => {
//     if (event.target.value.trim().length > 0) {
//       setIsValid(true);
//     }
//     setEnteredValue(event.target.value);
//   };

//   const formSubmitHandler = (event) => {
//     event.preventDefault();
//     if (enteredValue.trim().length === 0) {
//       setIsValid(false);
//       return;
//     }
//     props.onAddUser(enteredValue);
//   };

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className="form-control">
//         <label style={{ color: !isValid ? "red" : "black" }}>Username</label>
//         <input
//           style={{
//             borderColor: !isValid ? "red" : "#ccc",
//             background: !isValid ? "salmon" : "transparent",
//           }}
//           type="text"
//           onChange={userInputChangeHandler}
//         />
//       </div>
//       <Button type="submit">Add User</Button>
//     </form>
//   );
// };

// export default UserInput;

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="form-control">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
