import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/todo/todoslice.js";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const AddToHandler = (e) => {
    e.preventDefault(); // ✅ Fixed typo

    if (input.trim() === "") return; // ✅ Prevent adding empty todos

    dispatch(addTodo(input));
    console.log("added");
    
    
    setInput(""); // ✅ Clear input after adding
  };

  return (
    <form onSubmit={AddToHandler} className="flex space-x-3 mt-12 items-center">
      <input
        type="text"
        placeholder="Add a todo..."
        className="border border-gray-300 rounded-l-lg px-3 outline-none duration-150 bg-white py-1.5 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)} // ✅ Fixed input handling
      />
      <button
        type="submit"
        className= "text-white px-4 py-1.5 rounded-r-lg bg-pink-600 duration-150"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
