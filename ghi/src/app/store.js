import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../features/auth/signupSlice";
import loginReducer from "../features/auth/loginSlice"
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        signup: signupReducer,
        login: loginReducer
    },
});




setupListeners(store.dispatch);
