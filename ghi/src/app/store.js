import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../features/auth/signupSlice";
import loginReducer from "../features/auth/loginSlice"
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from '../services/auth';

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    login: loginReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware]),
});




setupListeners(store.dispatch);
