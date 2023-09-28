import { createSlice } from "@reduxjs/toolkit";
import tasks from "../data/tasks";

const initialState = [...tasks];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    toggleIsComplete: (state, action) => {
      return state.map(task =>
        task.id === action.payload
          ? { ...task, isComplete: !task.isComplete }
          : task,
      );
    },
  },
});

export const { addTask, deleteTask, toggleIsComplete } = tasksSlice.actions;

export default tasksSlice.reducer;
