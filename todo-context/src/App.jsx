import { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./Context";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItems";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = { id: Date.now(), ...todo };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    console.log(newTodo.id, newTodo); // Log after ID is assigned
  };

  const updatedTodo = (id, todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Local storage setup using useEffect
  useEffect(() => {
    try {
      const todos = JSON.parse(localStorage.getItem("todos"));
      if (todos && todos.length > 0) {
        setTodos(todos);
      }
    } catch (error) {
      console.error("Failed to parse todos from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;