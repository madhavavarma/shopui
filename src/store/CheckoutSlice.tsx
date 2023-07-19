import { createSlice } from "@reduxjs/toolkit";
import { IStoreCheckout } from "../models/IStoreCheckout";
import { IProduct } from "../models/IProduct";
import { IShipping } from "../models/IShipping";

function isValidShipping(shipping: IShipping) {
  return (
    shipping.name.length > 0 &&
    shipping.phone.length > 0 &&
    shipping.address1.length > 0 &&
    shipping.state.length > 0 &&
    shipping.country.length > 0 &&
    shipping.zip.length > 0 &&
    shipping.city.length > 0
  );
}

const initialState: IStoreCheckout = {
  activeStep: 1,
  onMovingStep: false,
  cartList: [],
  shipping: {
    name: "",
    address1: "",
    address2: "",
    city: "",
    country: "India",
    phone: "",
    state: "Andhra Pradesh",
    zip: "",
  },
};

var checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    // cart functions
    addToCart(state, action) {
      var product = action.payload.product as IProduct;
      var cartProduct = state.cartList.find(
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
    decrementFromCart(state, action) {
      var product = action.payload.product as IProduct;
      var cartProduct = state.cartList.find(
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

    // Stepper
    moveToNextStep(state) {
      state.onMovingStep = true;
      if (state.activeStep == 1 && isValidShipping(state.shipping)) {
        state.activeStep++;
        state.onMovingStep = false;
      } else if (state.activeStep == 3) {
        state.cartList = [];
        state.shipping = {} as IShipping;
      } else if (state.activeStep != 1) {
        state.activeStep++;
        state.onMovingStep = false;
      }
    },
    moveToPrevStep(state) {
      if (state.activeStep > 0) state.activeStep--;
    },

    // Shipping
    setShipping(state, action) {
      state.shipping = action.payload;
    },
  },
});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice;
