import { SET_BRAND } from "../actions/actions";

const initialState = "All";

const setBrand = (state = initialState, action) => {
  switch (action.type) {
    case SET_BRAND:
      return action.payload;
    default:
      return state;
  }
};

export default setBrand;
