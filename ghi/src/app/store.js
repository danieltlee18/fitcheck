import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../features/auth/signupSlice";
import loginReducer from "../features/auth/loginSlice"
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from '../services/auth';
import OutfitReducer from "../features/outfits/outfitsSlice";
import { outfitApi } from '../services/outfit';

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    login: loginReducer,
    outfit: OutfitReducer,
    [authApi.reducerPath]: authApi.reducer,
    [outfitApi.reducerPath]: outfitApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware]),
});




setupListeners(store.dispatch);
