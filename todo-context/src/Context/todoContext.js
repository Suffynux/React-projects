import {createContext , useContext} from "react";

export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todo : "First todo",
            completed : false
        }
    ],
    addTodo : () => {},
    updatedTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}

})

export const useTodo = () => useContext(TodoContext)

export const TodoProvider = TodoContext.Provider