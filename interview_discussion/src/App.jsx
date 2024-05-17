import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);

  const multiply = value * 5;

  const handlemultiply = () => {
    setValue(value + 1);
  };

  return (
    <>
      <h1>Main Value:{value} </h1>
      <button onClick={handlemultiply}>Multiply by 5</button>
      <h2>Multiplied Value : {multiply}</h2>
    </>
  );
}

export default App;
