import { ADD_TO_CART, SET_PRODUCT, SET_BRAND, SET_ALL_SHOES } from "./actions";

// Action to add item to cart
export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload: payload,
});

// Action to add product info into state to fill the product page
export const setProduct = (payload) => {
  return {
    type: SET_PRODUCT,
    payload: payload,
  };
};
// Action to set brand from landing page to product page
export const setBrand = (payload) => {
  return {
    type: SET_BRAND,
    payload: payload,
  };
};
// Action to set All shoes
export const setAllShoes = (payload) => {
  return {
    type: SET_ALL_SHOES,
    payload: payload,
  };
};

export function setProductAPI(payload) {
  localStorage.setItem("product", JSON.stringify(payload));
  return (dispatch) => {
    dispatch(setProduct(payload));
  };
}

export function setBrandAPI(payload) {
  return (dispatch) => {
    dispatch(setBrand(payload));
  };
}

export function setAllShoesAPI(payload) {
  return (dispatch) => {
    dispatch(setAllShoes(payload));
  };
}
export function addToCartAPI(payload) {
  return (dispatch) => {
    dispatch(addToCart(payload));
  };
}
