import React from "react";
import "../../src/App.css";
function ButtonsContainer({ onButtonClick }) {
  //   const handleBtnClick = () => {
  //     console.log(`${btn} clicked`);
  //   };
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
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="buttonsContainer">
      {buttonList.map((btn) => (
        <button key={btn} className="btn" onClick={() => onButtonClick(btn)}>
          {btn}
        </button>
      ))}
    </div>
  );
}

export default ButtonsContainer;
