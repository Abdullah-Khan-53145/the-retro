import { ADD_TO_CART, SET_PRODUCT } from "./actions";

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

export function setProductAPI(payload) {
  return (dispatch) => {
    console.log(payload);
    dispatch(setProduct(payload));
  };
}
