import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fields: {
        img_url: "",
        style: "",
        occasion: "",
    },
    errorMessage: null,
};

const createRatingSlice = createSlice({
    name: "createOutfit:",
    initialState,
    reducers: {
        error: (state, action) => {
            state.errorMessage = action.payload;
        },
        reset: () => initialState,
    },
});

export const { reset, error } = createRatingSlice.actions;

export default createRatingSlice.reducer;
