import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    showLoader(state) {
      state.loader = true;
    },
    hideLoader(state) {
      state.loader = false;
    },
  },
});

export const layoutActions = layoutSlice.actions;

export default layoutSlice;
