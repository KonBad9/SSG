import React from "react";
import "./ButtonFetchUsers.css";

const ButtonFetchUsers = (props) => {
  return (
    <button className="buttonUsers" onClick={props.click}>
      Dodaj użytkownika
    </button>
  );
};

export default ButtonFetchUsers;
