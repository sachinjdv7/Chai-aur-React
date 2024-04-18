import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Feactures/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
