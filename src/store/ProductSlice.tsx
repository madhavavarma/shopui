import { createSlice } from "@reduxjs/toolkit";

const productList = [
  {
    id: 1,
    name: "Cashews Jumbo",
    weight: "1kg",
    price: "600",
    description: "Good source of Protein",
    image: "./cashew.jpg",
    categories: [0],
  },
  {
    id: 2,
    name: "Cashews Jumbo",
    weight: "1/2 kg",
    price: "300",
    description: "Good source of Protein",
    image: "./cashew.jpg",
    categories: [0],
  },
  {
    id: 3,
    name: "Cashews Split",
    weight: "1kg",
    price: "550",
    description: "Good source of Protein",
    image: "./cashew.jpg",
    categories: [0],
  },
  {
    id: 4,
    name: "Cashews Split",
    weight: "1/2 kg",
    price: "250",
    description: "Good source of Protein",
    image: "./cashew.jpg",
    categories: [1],
  },
  {
    id: 5,
    name: "Cashews Split",
    weight: "10kg",
    price: "5000",
    description: "Good source of Protein",
    image: "./cashew.jpg",
    categories: [1],
  },

  {
    id: 6,
    name: "Cashews Split",
    weight: "10kg",
    price: "5000",
    description: "Good source of Protein",
    image: "./cashew.jpg",
    categories: [2],
  },

  {
    id: 7,
    name: "Cashews Split",
    weight: "10kg",
    price: "5000",
    description: "Good source of Protein",
    image: "./cashew.jpg",
    categories: [2],
  },

  {
    id: 8,
    name: "Cashews Split",
    weight: "10kg",
    price: "5000",
    description: "Good source of Protein",
    image: "./cashew.jpg",
    categories: [2],
  },
];

var productSlice = createSlice({
  name: "products",
  initialState: { list: productList },
  reducers: {},
});

export default productSlice;
export const ProductActions = productSlice.actions;
