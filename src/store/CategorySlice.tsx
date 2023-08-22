import { createSlice } from "@reduxjs/toolkit";
import { IStoreCategory } from "../models/IStoreCategory";
import { ICategory } from "../models/ICategory";

var initialState: IStoreCategory = {
  list: [],
  active: 0,
  subActive: -1,
};

const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    setList(state, action) {
      state.list = action.payload;
      state.active = (action.payload as ICategory[])
        .slice()
        .sort((a, b) => a.displayOrder - b.displayOrder)?.[0]?.id;
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
