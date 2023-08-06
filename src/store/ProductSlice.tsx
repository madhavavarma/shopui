import { createSlice } from "@reduxjs/toolkit";

var productSlice = createSlice({
  name: "products",
  initialState: { list: [] },
  reducers: {
    setProducts(state, action) {
      state.list = action.payload;
    },
  },
});

export default productSlice;
export const ProductActions = productSlice.actions;
