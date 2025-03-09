import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);
  let object = {
    username : "Sufiyan",
    age : 15
  }
  return (
    <>
      <Card  name = "chai or code" myObject = {object}/>
    </>
  );
}

export default App;
