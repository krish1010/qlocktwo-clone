import React from "react";
import "./Button.css";

function Button({ onClick }) {
  return (
    <div className="button" onClick={onClick}>
      Check Time
    </div>
  );
}

export default Button;
