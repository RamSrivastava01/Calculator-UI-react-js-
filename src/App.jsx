import { useState } from "react";
import "./App.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [displayVal, setDisplayVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText == "C") {
      setDisplayVal("");
    } else if (buttonText == "=") {
      setDisplayVal(eval(displayVal));
    } else {
      let newDisplayVal = displayVal + buttonText;
      setDisplayVal(newDisplayVal);
    }
    console.log(buttonText);
  };

  return (
    <div className="calculator">
      <Display displayValue={displayVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
