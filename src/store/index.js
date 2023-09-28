import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "../features/tasksSlice";

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export default store;
