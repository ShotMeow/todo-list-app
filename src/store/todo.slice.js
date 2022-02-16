import nextId from "react-id-generator";

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
    ],
  },
  reducers: {
    addTodo(state, action) {
      if (action.payload.trim()) {
        state.todos.unshift({
          id: nextId(),
          title: action.payload,
          isCompleted: false,
        });
      }
    },
    changeTodo(state, action) {
      const current = state.todos.find(todo => todo.id === action.payload.id);
      current.isCompleted = !current.isCompleted;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
  },
});

export const { addTodo, changeTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
