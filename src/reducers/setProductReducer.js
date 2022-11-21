import { SET_PRODUCT } from "../actions/actions";

const initialState = JSON.parse(localStorage.getItem("product"));

const setProduct = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export default setProduct;
