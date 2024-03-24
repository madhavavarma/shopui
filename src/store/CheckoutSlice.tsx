import { createSlice } from "@reduxjs/toolkit";
import { IStoreCheckout } from "../models/IStoreCheckout";
import { IProduct } from "../models/IProduct";
import { IShipping } from "../models/IShipping";

function isValidShipping(shipping: IShipping) {
  return (
    shipping.userName.length > 0 &&
    shipping.phone.length > 0 &&
    shipping.address1.length > 0 &&
    shipping.state.length > 0 &&
    shipping.country.length > 0 &&
    shipping.zip.length > 0 &&
    shipping.city.length > 0
  );
}

const loadFromLocalStorage = () => {
  try {
    return JSON.parse(window.localStorage.getItem("checkout") || "");
  } catch {
    return {
      cartList: [],
      shipping: {
        userName: "",
        address1: "",
        address2: "",
        city: "Pithapuram",
        country: "India",
        phone: "",
        state: "Andhra Pradesh",
        zip: "533450",
      },
    };
  }
};

const initialState: IStoreCheckout = loadFromLocalStorage();

var checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    // cart functions
    setCartList(state, action) {
      state = action.payload;
    },
    addToCart(state, action) {
      var product = action.payload.product as IProduct;
      var cartProduct = state.cartList?.find(
        (cartItem) => cartItem.product.id == product.id
      );

      if (cartProduct) {
        cartProduct.quantity = cartProduct.quantity + 1;
      } else {
        state.cartList.push({
          product: product,
          quantity: 1,
        });
      }
    },
    reduceProductQuantity(state, action) {
      var product = action.payload.product as IProduct;
      var cartProduct = state.cartList?.find(
        (cartItem) => cartItem.product.id == product.id
      );

      if (!cartProduct) return;

      if (cartProduct?.quantity == 1) {
        state.cartList = state.cartList.filter(
          (cart) => cart.product.id != action.payload.product.id
        );
      } else {
        cartProduct.quantity = cartProduct.quantity - 1;
      }
    },
    removeFromCart(state, action) {
      state.cartList = state.cartList.filter(
        (cart) => cart.product.id != action.payload.product.id
      );
    },

    // Shipping
    setShipping(state, action) {
      console.log(action.payload);
      state.shipping = action.payload;
    },

    // reset
    reset(state) {
      state.cartList = [];
      state.shipping = {
        userName: "",
        address1: "",
        address2: "",
        city: "",
        country: "India",
        phone: "",
        state: "Andhra Pradesh",
        zip: "",
      };
    },
  },
});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice;
