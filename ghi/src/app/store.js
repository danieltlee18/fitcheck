import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../features/auth/signupSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        signup: signupReducer,
    },
});




setupListeners(store.dispatch);
