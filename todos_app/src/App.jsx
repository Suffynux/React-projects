import React, { useState } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [todos, setTodos] = useState([]); // Changed to array


  const addTodo = (todo)=>{
    todo.preventDefault();
    const value = todo.target.todoText.value;
    if(value === "") return toast.error("Todo cannot be empty");
    if(todos.includes(value)){
      toast.error("Todo already exists");
    }

    
    const newTodo = [...todos, value];
    // console.log(...todo);
    if(!todos.includes(value)){
      setTodos(newTodo);
      toast.success("Todo added successfully");
     
    }


  }

  const deleteTodo = (index)=>{

    const newTodo = [...todos];
    newTodo.splice(index,1);
    setTodos(newTodo);
  }
  const todoList = todos.map((todo , index)=>{
    
    return (
      <Todo value = {todo}  key={index} deleteTodo={deleteTodo}/>
    )
  })



  return (
    <>
      <div className="text-center mt-2 p-4">
        {/* Add Toaster component */}
        <Toaster />

        <h1 className="text-center mt-2 m-3 bg-green-200 h-auto p-4 rounded-lg">
          Todo Application
        </h1>

        <div className="p-10 m-2">
          <form onSubmit={addTodo}>
            <input
              type="text"
              name="todoText"
              className="bg-green-200 mr-2 rounded-lg"
            />
            <button
              type="submit"
              className="bg-green-400 text-white rounded-lg"
            >
              Add Todo
            </button>
          </form>
        </div>

        <div>
          <ul>
           {todoList}
  
          </ul>
        </div>
      </div>
    </>
  );
}

const Todo = (props) => {
  return (
    <div className="m-2">
      <li className="p-1 bg-amber-500 w-auto todo" id={props.index}>
        <p>
          {props.value}{" "}
          <span
            className="hover:cursor-pointer"
            onClick={() => props.deleteTodo(props.index)}
          >
            &times;
          </span>
        </p>
      </li>
    </div>
  );
};

export default App;
