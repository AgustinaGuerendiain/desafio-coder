import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "../features/tasksSlice";
import { authApi } from "../services/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authReducer } from "../features/auth/authSlice";
import { profileApi } from "../services/profileApi";
import { tasksApi } from "../services/tasksApi";

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      profileApi.middleware,
      tasksApi.middleware,
    ),
});

setupListeners(store.dispatch);

export default store;
