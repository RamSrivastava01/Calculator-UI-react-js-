import React from "react";
import "../../src/App.css";
function ButtonsContainer() {
  const buttonList = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="buttonsContainer">
      {buttonList.map((btn) => (
        <button className="btn">{btn}</button>
      ))}
    </div>
  );
}

export default ButtonsContainer;
