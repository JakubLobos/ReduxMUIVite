import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  name: string | null;
  email: string | null;
  password: string | null;
}

export interface AuthState {
  user: User;
}

const initialState: AuthState = {
  user: {
    name: null,
    email: null,
    password: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = {
        name: null,
        email: null,
        password: null,
      };
    },
    register() {},
  },
});

export const authActions = authSlice.actions;
export default authSlice;
