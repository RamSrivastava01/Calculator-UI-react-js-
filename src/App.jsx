import "./App.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  return (
    <div className="calculator">
      <Display />
      <ButtonsContainer />
    </div>
  );
}

export default App;
