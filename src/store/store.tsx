import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./CategorySlice";
import productSlice from "./ProductSlice";
import checkoutSlice from "./CheckoutSlice";
import layoutSlice from "./LayoutSlice";

const store = configureStore({
  reducer: {
    layout: layoutSlice.reducer,
    category: categorySlice.reducer,
    product: productSlice.reducer,
    checkout: checkoutSlice.reducer,
  },
});

export default store;
