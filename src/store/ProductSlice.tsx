import { createSlice } from "@reduxjs/toolkit";

const productList = [
  {
    id: 1,
    name: "Cashews Jumbo",
    weight: "1kg",
    price: "600",
    description:
      "Cashews are rich in nutrients and may offer several health benefits. Selecting the right varieties and cooking or preparing them properly can help maximize their potential effects on health",
    image: "./cashew1.jpeg",
    categories: [0],
    subCategories: [2],
  },
  {
    id: 2,
    name: "Cashews Jumbo",
    weight: "500gm",
    price: "300",
    description:
      "Cashews are rich in nutrients and may offer several health benefits. Selecting the right varieties and cooking or preparing them properly can help maximize their potential effects on health",
    image: "./cashew2.jpeg",
    categories: [0],
    subCategories: [2],
  },
  {
    id: 3,
    name: "Cashews Split",
    weight: "1kg",
    price: "550",
    description:
      "Cashews are rich in nutrients and may offer several health benefits. Selecting the right varieties and cooking or preparing them properly can help maximize their potential effects on health",
    image: "./cashew3.jpeg",
    categories: [0],
    subCategories: [1],
  },
  {
    id: 4,
    name: "Cashews Split",
    weight: "500gm",
    price: "250",
    description:
      "Cashews are rich in nutrients and may offer several health benefits. Selecting the right varieties and cooking or preparing them properly can help maximize their potential effects on health",
    image: "./cashew4.jpeg",
    categories: [0],
    subCategories: [1],
  },
  {
    id: 5,
    name: "Cashews Split",
    weight: "10kg",
    price: "5000",
    description:
      "Cashews are rich in nutrients and may offer several health benefits. Selecting the right varieties and cooking or preparing them properly can help maximize their potential effects on health",
    image: "./cashew1.jpeg",
    categories: [0, 1],
    subCategories: [1],
  },

  {
    id: 6,
    name: "Cashews Split",
    weight: "10kg",
    price: "5000",
    description:
      "Cashews are rich in nutrients and may offer several health benefits. Selecting the right varieties and cooking or preparing them properly can help maximize their potential effects on health",
    image: "./cashew2.jpeg",
    categories: [0, 1],
    subCategories: [1],
  },

  {
    id: 7,
    name: "Cashews Split",
    weight: "10kg",
    price: "5000",
    description:
      "Cashews are rich in nutrients and may offer several health benefits. Selecting the right varieties and cooking or preparing them properly can help maximize their potential effects on health",
    image: "./cashew3.jpeg",
    categories: [0],
    subCategories: [1],
  },

  {
    id: 8,
    name: "Cashews Split",
    weight: "10kg",
    price: "5000",
    description:
      "Cashews are rich in nutrients and may offer several health benefits. Selecting the right varieties and cooking or preparing them properly can help maximize their potential effects on health",
    image: "./cashew4.jpeg",
    categories: [0],
    subCategories: [1],
  },
];

var productSlice = createSlice({
  name: "products",
  initialState: { list: productList },
  reducers: {},
});

export default productSlice;
export const ProductActions = productSlice.actions;
