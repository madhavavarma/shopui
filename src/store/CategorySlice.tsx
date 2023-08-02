import { createSlice } from "@reduxjs/toolkit";
import { IStoreCategory } from "../models/IStoreCategory";

var initialState: IStoreCategory = {
  list: [
    {
      id: 0,
      name: "Cashews",
      subCategoreis: [
        { id: 1, name: "Split" },
        { id: 2, name: "Jumbo" },
      ],
    },
    { id: 1, name: "Vegetables" },
    { id: 2, name: "Fruits" },
  ],
  active: 0,
  subActive: -1,
};

const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    setList(state, action) {
      state.list = action.payload;
    },
    setActive(state, action) {
      state.active = action.payload;
      state.subActive = -1;
    },
    setSubActive(state, action) {
      state.subActive = action.payload;
    },
  },
});

export default categorySlice;
export const categoryActions = categorySlice.actions;