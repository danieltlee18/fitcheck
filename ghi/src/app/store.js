import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../features/auth/signupSlice";
import loginReducer from "../features/auth/loginSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/auth";
import outfitReducer from "../features/outfits/outfitsSlice";
import { outfitApi } from "../services/outfit";
import ratingReducer from "../features/ratings/ratingSlice";

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    login: loginReducer,
    outfit: outfitReducer,
    rating: ratingReducer,
    [authApi.reducerPath]: authApi.reducer,
    [outfitApi.reducerPath]: outfitApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      outfitApi.middleware,
    ]),
});

setupListeners(store.dispatch);
