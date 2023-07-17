import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
