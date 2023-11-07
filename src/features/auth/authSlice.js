import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  localId: null,
  imageCamera: null,
  name: null,
  lastName: null,
  email: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        user: action.payload.email,
        token: action.payload.idToken,
        localId: action.payload.localId,
        name: action.payload.name,
        lastName: action.payload.lastName,
        email: action.payload.email,
      };
    },
    clearUser: () => {
      return {
        user: null,
        token: null,
        localId: null,
        name: null,
        lastName: null,
        email: null,
      };
    },
    setCameraImage: (state, action) => {
      return {
        ...state,
        imageCamera: action.payload,
      };
    },
  },
});

export const { setUser, clearUser, setCameraImage } = authSlice.actions;

export const authReducer = authSlice.reducer;
