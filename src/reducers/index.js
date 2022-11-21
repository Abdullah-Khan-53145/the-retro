import { combineReducers } from "redux";
import addToCart from "./addToCartReducer";
import setBrand from "./setBrandReducer";
import setProduct from "./setProductReducer";
import setAllShoes from "./setAllShoesReducer";
const reducer = combineReducers({
  CartState: addToCart,
  ProductState: setProduct,
  BrandState: setBrand,
  ShoesState: setAllShoes,
});

export default reducer;
