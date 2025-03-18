import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoProvider } from "./Context";
import { data } from "autoprefixer";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItems";
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prevTodos)=>[{id: data.now() , ...todo} , ...prevTodos])
  }

  const updatedTodo = (id, todo) =>{
    setTodos((prevTodos) => {
      prevTodos.map((prevTodo)=>{
        if(prevTodo.id == id) {
          return todo
        } else {
          return prevTodo
        }
      })
    })
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo)=>{
        return todo.id !== id
      })
    })
  }

  const toggleComplete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo)=>{
        if(todo.id == id) {
          return {...todo , completed : !todo.completed}
        } else {
          return todo 
        }
      })
    })
  }

  // Local storage setup using useEffect

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0) {
      setTodos(todos)
    }

  }, [])


  useEffect(() => {
    const todos = JSON.parse(localStorage.setItem("todos" , JSON.stringify(todos)))

    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [todos])


  
  return (
    <TodoProvider value={{todos ,addTodo , updatedTodo,  deleteTodo ,toggleComplete  }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
