import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../models/IProduct";

var productSlice = createSlice({
  name: "products",
  initialState: { list: [] as IProduct[] },
  reducers: {
    setProducts(state, action) {
      state.list = action.payload;
    },
    setProductImage(state, action) {
      var product = state.list.find(
        (product) => product.id == action.payload.id
      );

      if (product) {
        product.selectImage = action.payload.index;
      }
    },
  },
});

export default productSlice;
export const ProductActions = productSlice.actions;
