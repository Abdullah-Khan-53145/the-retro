import { ADD_TO_CART, SET_PRODUCT } from "./actions";

// Action to add item to cart
export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload: payload,
});

// Action to add product info into state to fill the product page
export const setProduct = (payload) => ({
  type: SET_PRODUCT,
  payload: payload,
});
