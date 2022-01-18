import { createSlice } from "@reduxjs/toolkit";

interface themeState {
  mode: "light" | "dark";
}

const initialState: themeState = {
  mode: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      if (state.mode === "light") {
        state.mode = "dark";
      } else {
        state.mode = "light";
      }
    },
  },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
