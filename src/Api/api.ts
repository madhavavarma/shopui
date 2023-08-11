import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { ProductActions } from "../store/ProductSlice";
import { categoryActions } from "../store/CategorySlice";
import { IStoreCheckout } from "../models/IStoreCheckout";

const isMock = false;

const getProductsApi = isMock
  ? "./json/products.json"
  : "https://villageahar.azurewebsites.net/api/Products";
const getCategoriesApi = isMock
  ? "./json/categories.json"
  : "https://villageahar.azurewebsites.net/api/Categories";
const postCheckoutApi = isMock
  ? "./json/checkout.json"
  : "https://villageahar.azurewebsites.net/api/Checkout";

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

export async function postCheckout(
  dispatch: Dispatch<AnyAction>,
  checkout: IStoreCheckout
) {
  await fetch(postCheckoutApi, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(checkout),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}
