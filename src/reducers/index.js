import { combineReducers } from "redux";
import addToCart from "./addToCartReducer";
import setProduct from "./setProductReducer";
const reducer = combineReducers({
  CartState: addToCart,
  ProductState: setProduct,
});

export default reducer;
