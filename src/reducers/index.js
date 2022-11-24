import { combineReducers } from "redux";
import addToCart from "./addToCartReducer";
import setBrand from "./setBrandReducer";
import setProduct from "./setProductReducer";
import setAllShoes from "./setAllShoesReducer";
import setToggleModal from "./toggleModalReducer";
import setUser from "./setUserReducer";
const reducer = combineReducers({
  CartState: addToCart,
  ProductState: setProduct,
  BrandState: setBrand,
  ShoesState: setAllShoes,
  ShoesState: setAllShoes,
  toggleModalState: setToggleModal,
  userState: setUser
});

export default reducer;
