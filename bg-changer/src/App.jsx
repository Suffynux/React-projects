import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [color, setcolor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="w-full fixed flex flex-wrap justify-center bottom-8 inset-x-0 px-2">
          <div className="flex flex-wrap gap-4 bg-white p-2 rounded-lg shadow-lg ">
            <button
              className=" px-5 py-1 rounded-full outline-none duration-200"
              style={{ backgroundColor: "red" }}
              onClick={() => {setcolor("red")}}
            >
              Red
            </button>
            <button
              className=" px-5 py-1 rounded-full outline-none"
              style={{ backgroundColor: "green" }}
              onClick={() => {setcolor("green")}}
            >
              Green
            </button>
            <button
              className=" px-5 py-1 rounded-full outline-none"
              style={{ backgroundColor: "yellow" }}
              onClick={() => {setcolor("yellow")}}
            >
              Yellow
            </button>
            <button
              className=" px-5 py-1 rounded-full outline-none  text-white"
              style={{ backgroundColor: "black" }}
              onClick={() => {setcolor("black")}}
              
            >
              Black
            </button>
            <button
              className=" px-5 py-1 rounded-full outline-none"
              style={{ backgroundColor: "purple" }}
              onClick={() => {setcolor("purple")}}
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
