import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fields: {
        img_url: "",
        style: "",
        occasion: "",
    },
    errorMessage: null
}

const createOutfitSlice = createSlice({
  name: "createOutfit:",
  initialState,
  reducers: {
    handleImgUrlChange: (state, action) => {
      state.fields.img_url = action.payload;
    },
    handleStyleChange: (state, action) => {
      state.fields.style = action.payload;
    },
    handleOccasionChange: (state, action) => {
      state.fields.occasion = action.payload;
    },
    error: (state, action) => {
            state.errorMessage = action.payload;
    },
    reset: () => initialState,
  },
});

export const {
    handleImgUrlChange,
    handleStyleChange,
    handleOccasionChange,
    reset,
    error,
} = createOutfitSlice.actions;

export default createOutfitSlice.reducer;
