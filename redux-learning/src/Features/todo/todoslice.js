import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [
      {
        id: 1,
        todo: "First todo",
        completed: false,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        todo: action.payload,
      }
      state.todo.push(todo)
    },
    deleteTodo: (state, action) => {
        state.todo  = state.todo.filter((todo)=>{
            return todo.id  !== action.payload
        })
    },

    updateTodo: (state, action) => {
        state.todo = state.todo.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, todo: action.payload.updatedTodo };
          }
          return todo;
        });
      },
      
    deleteTodo : (state , action) => {
        state.todo = state.todo.filter((todo) => {
            return todo.id !== action.payload
        })
    }
  },
});
