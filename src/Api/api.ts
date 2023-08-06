import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { ProductActions } from "../store/ProductSlice";
import { categoryActions } from "../store/CategorySlice";

const isMock = false;

const getProductsApi = isMock
  ? "./json/products.json"
  : "http://localhost:5098/api/Products";
const getCategoriesApi = isMock
  ? "./json/categories.json"
  : "http://localhost:5098/api/Categories";

export async function getProducts(dispatch: Dispatch<AnyAction>) {
  await fetch(getProductsApi)
    .then((response) => response.json())
    .then((json) => {
      dispatch(ProductActions.setProducts(json));
    });
}

export async function getCategories(dispatch: Dispatch<AnyAction>) {
  await fetch(getCategoriesApi)
    .then((response) => response.json())
    .then((json) => {
      dispatch(categoryActions.setList(json));
      dispatch(categoryActions.setActive(1));
    });
}
