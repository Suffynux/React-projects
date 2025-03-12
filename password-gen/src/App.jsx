import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [character, setCharacter] = useState(false);

  //ref hook
  const passwordRef = useRef(null);

  // Hook for running a function more times and depending upon function as well as optimizing function
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "01234568";
    if (character) str += "!@#$%^";

    // run length times and add one char in the password
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, character]);

  // function for copying the passwor to clipboard
  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, setCharacter, passwordGenerator]);

  return (
    <>
      <div>
        <h1 className="text-3xl bg-gray-900 text-white shadow-lg rounded-md p-4">
          Password Generator
        </h1>
      </div>

      <div className="max-w-md text-center m-auto mt-5 text-orange-600 bg-gray-900 p-3 rounded-xl ">
        <div>
          <input
            type="text"
            value={password}
            className="w-auto text-black px-2  py-2 rounded-md outline-none shadow-lg"
            placeholder="Password"
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClip}
            className="ml-2 px-2 w-auto py-1 bg-orange-500 rounded-lg outline-none text-white text-lg"
          >
            Copy
          </button>
        </div>

        <div className="flex  gap-x-2 mt-6">
          <div className="flex items-center gap-x-1">
            <input
              min={8}
              max={15}
              value={length}
              type="range"
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length {length}</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              className="ml-1"
            />
            <label htmlFor="" className="ml-1">
              Number
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={character}
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
              className="ml-1"
            />
            <label htmlFor="" className="ml-1">
              Character
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
