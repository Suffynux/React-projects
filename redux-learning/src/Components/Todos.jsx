import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, addTodo } from "../Features/todo/todoslice.js";

function Todos() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>

      {/* Todo List */}
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-3 bg-gray-100 rounded-md"
          >
            <span className="text-gray-800">{todo.todo}</span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="px-3 py-1 text-sm bg-pink-600  text-white rounded hover :bg-pink-800 "
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
