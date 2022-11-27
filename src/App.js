import "./Styles/main.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import AllProducts from "./Components/AllProducts";
import Product from "./Components/Product";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Components/Cart";
import { connect } from "react-redux";
import Checkout from "./Components/Checkout";
import { useEffect } from "react";
function App({ cartItems }) {
  useEffect(() => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.qty;
    });
    if (sum !== 0) {
      document.title = `The Retro (${sum})`;
    } else {
      document.title = `The Retro`;
    }
  }, [cartItems]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
        </>
      ),
    },
    {
      path: "all-products",
      element: (
        <>
          <Header />
          <AllProducts />
        </>
      ),
    },
    {
      path: "product",
      element: (
        <>
          <Header />
          <Product />
        </>
      ),
    },
    {
      path: "cart",
      element: (
        <>
          <Header />
          <Cart />
        </>
      ),
    },
    {
      path: "checkout",
      element: (
        <>
          <Header />
          <Checkout />
        </>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => ({
  cartItems: state.CartState,
});
export default connect(mapStateToProps)(App);
