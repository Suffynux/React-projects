import { configureStore } from "@reduxjs/toolkit";
import  todoSlice from "../Features/todo/todoslice";

export const store = configureStore({
    reducer : todoSlice,

});