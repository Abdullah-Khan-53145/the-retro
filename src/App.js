import "./Styles/main.css";
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
const AllProducts = React.lazy(() => import("./Components/AllProducts"));
const Product = React.lazy(() => import("./Components/Product"));
const Cart = React.lazy(() => import("./Components/Cart"));
const Checkout = React.lazy(() => import("./Components/Checkout"));
const Home = React.lazy(() => import("./Components/Home"));
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
          <React.Suspense fallback={<Loader />}>
            <Home />
          </React.Suspense>
        </>
      ),
    },
    {
      path: "all-products",
      element: (
        <>
          <Header />
          <React.Suspense fallback={<Loader />}>
            <AllProducts />
          </React.Suspense>
        </>
      ),
    },
    {
      path: "product",
      element: (
        <>
          <Header />
          <React.Suspense fallback={<Loader />}>
            <Product />
          </React.Suspense>
        </>
      ),
    },
    {
      path: "cart",
      element: (
        <>
          <Header />
          <React.Suspense fallback={<Loader />}>
            <Cart />
          </React.Suspense>
        </>
      ),
    },
    {
      path: "checkout",
      element: (
        <>
          <Header />
          <React.Suspense fallback={<Loader />}>
            <Checkout />
          </React.Suspense>
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
